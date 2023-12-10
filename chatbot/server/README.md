## Introduction 

Sur ce README.md vous pourrez trouver le travail effectué tout au long de l'année dans ce projet. Le  README.md est mis à jour à chaque lab par rapport au contenu ajouté.

## Utilisation

Pour utiliser ce projet, suivez les étapes ci-dessous : 

1. Clonez le référentiel sur votre machine locale :
```c
git clone https://github.com/AlexandreChauchard/ece-webtech-603.git
```
2. Accédez au répertoire du projet en ouvrant un terminal : 
```c
cd Chemin_vers_dossier_clone
```

3. Exécutez le script principal avec la commande :
```
npm run start
```

4. Ensuite ouvrez une fenêtre firefox et tester les différents cas avec les URL suivants :
	
	- Pour afficher les articles de la base de donnée
			[Affiche les articles ](https://localhost:8080/articles)
			
	-  Pour ajouter un nouvel article vous devez ouvrir un nouveau terminal et tapez la première commande a la fin du readme : 

		 Et ensuite retourner sur le lien pour afficher la base de donnée
	  [Affiche les articles ](https://localhost:8080/articles)
	  
	 -  Afficher un article par son ID (ici exemple pour un article de ID 1): 
	   [Affiche article à partir d'un ID ](https://localhost:8080/articles/1)
	   
	 - Afficher les commentaires d'un article (ici exemple pour l'article d'ID 1)	
		[Affiche les commentaires d'un article](https://localhost:8080/articles/1/comments)
		
	- Afficher le commentaire d'un article à partir de l'ID du commentaire (ici article d'un ID 1 et le commentaire d'ID a) :
	   [Affiche commentaire d'un article à partir de son ID](https://localhost:8080/articles/1/comments/a)
	   
	- Ajouter un commentaire à un article spécifique en utilisant la deuxième ligne de commande dans Ligne Bash:

	
	Puis vous pouvez réafficher les commentaires de cet article et vous verrez qu'un nouveau a été ajouté : [Affiche les commentaires d'un article](https://localhost:8080/articles/1/comments)
	
	**Ligne Bash :**
	
```bash
curl -X POST -H "Content-Type: application/json" -d '{
"title": "Nouvel Article",
"content": "Contenu du nouvel article",
"date": "04/10/2022",
"author": "John Doe"
}' http://localhost:8080/articles
```

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "content": "Contenu du commentaire",
  "author": "Auteur du commentaire"
}' http://localhost:8080/articles/1/comments
```



