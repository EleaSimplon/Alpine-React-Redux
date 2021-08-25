TP - Alpine


📦️ Contexte

Le constructeur mythique français, Alpine, commercialise son nouveau modèle A110, disponible en 2 versions. 
Il souhaite développer un site ou une application Web permettant à ses utilisateurs de découvrir ou de redécouvrir la marque à travers une page d'accueil.

Le cœur du projet réside dans la création du configurateur permettant à ses utilisateurs de configurer et créer le véhicule de leurs rêves en choisissant parmi de multiples équipements et options disponibles. 
Les utilisateurs peuvent ensuite sauvegarder leur configuration finale via un formulaire spécifique.
Le projet doit refléter l'image de marque en empruntant ses codes techniques et stylistiques.

📝 Besoins du client :

- Configurateur
Le configurateur est le cœur du projet, le parcours client doit être sans faille et sans impasse. L'utilisation du configurateur et de la navigation doivent être fluides et instinctives.
Fonctionnalités attendues
Le configurateur est composé de 7 sections - AlpineCars Configurateur Voir catalogue et prix : https://docs.google…
Le configurateur doit respecter le catalogue en vigueur - défini dans ce document
Le configurateur doit utiliser les ressources visuelles suivantes - lien dossier zip
Le configurateur affiche en permanence un visuel du véhicule (extérieur ou intérieur) et se met à jour en fonction du choix et des modifications faites par l'utilisateur.
Le configurateur présente le véhicule et ses configurations sous différents angles de vue (utilisation de carousels, sliders ou autres techniques de visualisation).
Les différentes étapes du configurateur contiennent plusieurs options et déclinaisons affichées de façon claire et intuitive (image/descriptif/prix).
Des indicateurs visuels signifient à l'utilisateur quels et combien d'équipements ou d'accessoires il a déjà sélectionné (effet de survol, de sélection et compteurs).
Un fil d'ariane permet à l'utilisateur de situer à l'étape où il se trouve.
L'utilisateur peut revenir à/aux étape(s) précédente(s)/suivante(s).
Un récapitulatif tarifaire est affiché en permanence et se met à jour en fonction du choix et des modifications faites par l'utilisateur.
L'utilisateur peut recommencer la configuration depuis le début.
La dernière étape du configurateur est un récapitulatif visuel et tarifaire et permet l'envoi d'une configuration via un formulaire email.

📱Un soin particulier devra être apporté à l'Interface Utilisateur ainsi qu'à l'Expérience Utilisateur. Les zones d'actions devront être claires et ordonnées, les interactions de l'utilisateur devront être simples et intuitives, et les différents états des composants de l'application devront être signifiés visuellement à l'utilisateur.

Coggle
AlpineCars Configurateur Voir catalogue et prix : https://docs.google…

📃 Liste des tâches
- Faites la liste des composants dont vous aurez besoin
voici une liste des questions à vous poser
- Quels éléments HTML seront des components ?
- Combien de components différents aurez vous besoin ?
- A quoi ressemblera votre store et votre state initial ?
- Combien d'actions aurez vous besoin de créer ?

- Créez le projet avec le repo create react app :
- GitHub - facebook/create-react-app: Set up a modern web app...
installez react redux dans le projet : Quick Start · React Redux
installez bootstrap pour votre layout
utilisez le provider de react-redux pour avoir accès au store dans votre application

- Codez vos components
- Faites les en "dure" dans un premiers temps
- Puis utilisez les props et le store pour complexifier votre affichage avec des conditions
- Utilisez le Connect() de react-redux avec mapStateToProps() et mapDispatchToProps()
- Préparez votre reducer
- Créez vos actions dans le dossier action/index.js
- Préparez votre initialState et votre rootReducer
- Exécutez vos actions et modifiez votre store (avec le spread operator)
- 
- Ressources utiles :
React Redux · Official React bindings for Redux
