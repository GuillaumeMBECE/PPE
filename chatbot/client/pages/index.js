import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';

function Home() {
  const supabase = useSupabaseClient();
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    async function fetchContacts() {
      try {
        let { data, error } = await supabase.from('employees').select('*');
        if (error) {
          throw error;
        }
        setContacts(data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des contacts:', error);
        setError(error);
      }
    }
    fetchContacts();
  }, [supabase]);

  const recettes = [
  { nom: 'Pâtes au beurre', budget: { min: 0, max: 5 }, minutes: { min: 0, max: 10 }, personnes: { min: 0, max: 1 } },
  { nom: 'Pâtes bolognaise', budget: { min: 5, max: 10 }, minutes: { min: 10, max: 20 }, personnes: { min: 1, max: 2 } },
  { nom: 'Pâtes truffes', budget: { min: 11, max: 20 }, minutes: { min: 0, max: 20 }, personnes: { min: 1, max: 2 } },
  { nom: 'Couscous', budget: { min: 0, max: 5 }, minutes: { min: 20, max: Infinity }, personnes: { min: 1, max: 4 } },
  { nom: 'Purée et poulet', budget: { min: 0, max: 5 }, minutes: { min: 0, max: 10 }, personnes: { min: 1, max: 4 } },
  { nom: 'Tartare de boeuf', budget: { min: 5, max: 10 }, minutes: { min: 10, max: 20 }, personnes: { min: 1, max: 4 } },
  { nom: 'Caviar', budget: { min: 10, max: 20 }, minutes: { min: 20, max: 30 }, personnes: { min: 1, max: 4 } },
  { nom: 'Salade niçoise', budget: { min: 21, max: Infinity }, minutes: { min: 15, max: 30 }, personnes: { min: 1, max: 4 } },
  { nom: 'Pizza maison', budget: { min: 5, max: 15 }, minutes: { min: 15, max: 25 }, personnes: { min: 1, max: 4 } },
  { nom: 'Risotto aux champignons', budget: { min: 10, max: 20 }, minutes: { min: 20, max: 30 }, personnes: { min: 1, max: 4 } },
  { nom: 'Poulet rôti', budget: { min: 15, max: 25 }, minutes: { min: 30, max: 60 }, personnes: { min: 2, max: 6 } },
  // Ajoutez d'autres recettes au besoin
];


  const getRecipe = (budget, minutes, personnes) => {
    const matchingRecipe = recettes.find(recipe =>
      checkRange(recipe.budget, budget) && checkRange(recipe.minutes, minutes) && checkRange(recipe.personnes, personnes)
    );

    return matchingRecipe ? matchingRecipe.nom : 'Aucune recette trouvée';
  };

  const checkRange = (range, value) => {
    return value >= (range.min || 0) && (value <= (range.max || Infinity));
  };

  const steps = [
    {
      id: '1',
      message: 'Bienvenue dans notre chatbot !',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Quels sont vos critères ?...',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      trigger: 'analyzeInput',
    },
    {
      id: 'analyzeInput',
      message: ({ previousValue, steps }) => {
        const message = previousValue.toLowerCase();

        let budget = 7;
        let duration = 15;
        let people = 1;

        if (message.includes('euros')) {
          const budgetMatch = message.match(/\b(\d+)\s*euro(s)?\b/i);
          budget = budgetMatch ? parseInt(budgetMatch[1]) : Infinity;
        }

        if (message.includes('minutes')) {
          const durationMatch = message.match(/\b(\d+)\s*minute(s)?\b/i);
          duration = durationMatch ? parseInt(durationMatch[1]) : Infinity;
        }

        if (message.includes('personnes')) {
          const peopleMatch = message.match(/\b(\d+)\s*personne(s)?\b/i);
          people = peopleMatch ? parseInt(peopleMatch[1]) : 0;
        }
      
        const recipe = getRecipe(budget, duration, people);
        return `Option : ${recipe}`;
      },
      trigger: 'userInput',
    },
  ];

  const handleEnd = ({ steps, values }) => {
    // Vous pouvez traiter les valeurs ici si nécessaire
  };

  if (error) {
    return <div>Erreur lors de la récupération des contacts: {error.message}</div>;
  }

  return (
    <div className="h-screen">
      <div className="h-full">
        <h1 className="text-white font-bold text-center mb-6">ACC</h1>

        <div className="flex ml-3">
          <div className="flex-1 mr-4 chatbox-container">
            <h2 className="text-white font-bold mb-4">Chatbox</h2>
            <ChatBot
              steps={steps}
              handleEnd={handleEnd}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
