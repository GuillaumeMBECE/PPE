## Prérequis 

* Clonez le projet à l'adresse suivante: [Notre github](https://github.com/AlexandreChauchard/ece-webtech-603/tree/main)
* Dirigez vous ensuite dans le dossier suivant :  [`client`](https://github.com/AlexandreChauchard/ece-webtech-603/tree/main/client) avec la commande 
```shell
cd path_to_client
```

* Effectuez la commande suivante :

```shell
npm run dev
```

* Vous pouvez ensuite allez sur le site suivant pour être sur la page d'accueil [localhost](https://localhost:3000/articles)

## Lien Vercel

* Le site est également déployé sur Vercel : [https://ece-webtech-603.vercel.app/](https://ece-webtech-603.vercel.app/ "https://ece-webtech-603.vercel.app/")
## Header

Un header est présent sur toutes les pages :
- Le **logo** du site est affiché à gauche du header et permet d'accéder à certains concert 
- Le bouton **A la une** vous propose un carrousel avec certains concerts.
- Le titre **billetterie** permet de revenir à l'écran d'accueil (home) lorsqu'on clique dessus
- La **zone commentaire** dirige vers une page où l'on peut envoyer un commentaire
- Le **login** permet de savoir si nous sommes connecté à une session et si oui, laquelle.
- **Compte** vous amène sur votre profil

## Home page

* Cette page est accessible en cliquant sur le **logo** et vous pouvez observer certains concert par catégorie. En passant la souris dessus vous pouvez voir le nom de l'artiste.

## A la une

* Si vous laissez la souris en dehors de l'image et sans bouger pendant quelques secondes le carrousel défilera. Sinon vous pouvez défiler manuellement en cliquant sur les petits boutons en dessous des images.
## Billetterie

* La programmation des artistes est affichés avec l'artiste, la salle et le prix et une image.
* Vous pouvez filtrer la recherche par catégorie en cliquant sur le bouton "tous les genre"
* Vous pouvez également faire une recherche manuellement en mettant un nom d'artiste dans la barre de recherche
* Cliquer sur  **réserver** pour réserver un concert

Si vous êtes connecté des boutons apparaissent 

* Un bouton **Création** est disponible en base à droite de la page :
En cliquant dessus on créer un concert en renseignant le nom de l'artiste, le lieu, l'artiste et le genre.
* En cliquant sur **ajouter concert** la redirection se fait vers **billetterie** est vous pouvez observer le concert que vous venez de créer. Seul la session, peut voir se concert.
* Cherche le concert ajouté, de nouveaux boutons sont disponibles :
* **Editer** : Les anciennes informations sont affichés et vous pouvez les modifier et les appliquer en appuyant sur **Modifier concert**
* **Supprimer** : Supprime le concert que vous avez créé
* Toutes les modifications apportés  sont stockés dans la base données et sont uniques pour la session en cours. Elles sont également sauvegardé lorsqu'on se déconnecte/reconnecte.
## Réserver

* En cliquant sur **réserver** depuis la **billetterie** cela vous amène vers une page où vous devez renseigner votre nom et prénom pour compléter votre achat.
* En cliquant sur acheter votre nom et prénom et l'id du concert sont inscrits dans la table réservation
* Une animation confirme que l'achat est effectué et après quelques secondes vous êtes redirigé vers la **billetterie**

## Zone de commentaire

* Sur cette page vous pouvez écrire un commentaire et celui-ci s'affiche en dessous lorsqu'on appuie sur le bouton "envoyer"

Si vous êtes connecté :

* Le dernier commentaire posté par la session est affiché
* Vous pouvez en renvoyer un nouveau en saisissant du texte et en cliquant sur **envoyer commentaire** 
* Le dernier commentaire envoyé est affiché en dessous
* Vous pouvez le modifier en remettant un commentaire et en cliquant sur **modifier commentaire**
* Le bouton **supprimer** supprime le commentaire
## Login 

* En cliquant sur **login** ou le **pseudo github** si une session est connecté vous pouvez vous connecter à une session en cliquant sur "sign in with github"
* Une fois connecté, la redirection se fait vers la **home page** et vous pouvez observer votre Pseudo Github à la place de Login
* De nouvelles fonctionnalités sont disponibles sur les autres pages

## Compte 

Pas connecté :

* Met un message comme quoi vous n'êtes connecté.

Connecté :

* Vous pouvez observer votre profile avec différentes informations du compte github comme le nom, email ou l'id.
* Vous pouvez saisir un nouveau pseudo et cliquer sur **Modifier pseudo**
* **Accueil** vous redirige vers **a la une** 
* Le Pseudo est conservé dans votre session.