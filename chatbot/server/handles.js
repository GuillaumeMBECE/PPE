const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://kocgoacexsujdhwakbjq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvY2dvYWNleHN1amRod2FrYmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MDc0NDgsImV4cCI6MjAxNTI4MzQ0OH0.wHDJyAystba07j7thllqYOVpVL-Q-m5Mj94zXS5zQlA');
const express = require("express");
const app = express();

const bodyParser = require("body-parser");


const db = {
  articles: [
    {
      id: '1',
      title: 'My article',
      content: 'Content of the article.',
      date: '04/10/2022',
      author: 'Liz Gringer'
    },
    
  ],
  comments: [
    {
      id: 'a',
      timestamp: 1664835049,
      content: 'Content of the comment.',
      articleId: '1',
      author: 'Bob McLaren'
    },
    
  ]
}

app.use(bodyParser.json());

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
app.post('/admin/contact', async (req, res) => {
  const { name, email, prenom } = req.body;

  const { data, error } = await supabase.from('employees').insert([
    {
      name,
      email,
      prenom,
    },
  ]);

  if (error) {
    res.status(500).json({ message: 'Error creating employee' });
  } else {
    res.status(201).json(data[0]);
  }
});

app.get('/articles', (req, res) => {
  res.json(db.articles);
});

app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  const article = db.articles.find((article) => article.id === articleId);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
});

// // Route to get a specific comment with commentId for an article with articleId
app.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const articleId = req.params.articleId;
  const commentId = req.params.commentId;
  const comment = db.comments.find((comment) => comment.articleId === articleId && comment.id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// Route to get all comments for a specific article by articleId
app.get('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const comments = db.comments.filter((comment) => comment.articleId === articleId);
  res.json(comments);
});

app.post('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const { content, author } = req.body;

  // Find the article by its ID in your database (db.articles)
  const article = db.articles.find((article) => article.id === articleId);

  if (!article) {
    res.status(404).json({ message: 'Article not found' });
  } else {
    // Create a new comment
    const newComment = {
      id: generateUniqueId(), // Generate a unique comment ID
      timestamp: Date.now(), // Use the current timestamp
      content,
      articleId,
      author,
    };

    // Add the new comment to the comments array in your database (db.comments)
    db.comments.push(newComment);

    // Respond with the newly created comment
    res.status(201).json(newComment);
  }
});



app.post('/articles/add', (req, res) => {
  const { title, content, date, author } = req.body;

  // Générer un nouvel ID unique pour l'article (vous pouvez utiliser une fonction comme vous l'avez fait auparavant)
  const newArticleId = generateUniqueId();

  // Créer un nouvel article
  const newArticle = {
    id: newArticleId,
    title,
    content,
    date,
    author,
  };

  // Ajouter le nouvel article à la base de données
  db.articles.push(newArticle);

  // Répondre à la requête avec le nouvel article ajouté
  res.status(201).json(newArticle);
});

// Fonction pour générer un ID unique (vous pouvez utiliser la même fonction que précédemment)



app.get("/", (req, res) => {
  res.send(
    "Rentre /hello?name=[nom] dans l'url. Une surprise attends si vous rentrez mon nom."
  );
});

app.get("/hello", (req, res) => {
  const name = req.query.name;

  if (name === "Alexandre") {
    res.send(
      "Bonjour, je suis Alexandre Chauchard etudiant a l'ECE Paris en SI francais."
    );
  } else {
    res.send("Hello " + name);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
