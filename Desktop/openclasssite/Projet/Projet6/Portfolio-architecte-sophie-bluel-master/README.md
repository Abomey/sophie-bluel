# Portfolio-architecte-sophie-bluel

Code du projet 6 d'intégrateur web.

## Information pour le lancer le code

 - Lancer le backend depuis votre terminal en suivant les instruction du fichier ReadMe.
 - Si vous désirez afficher le code du backend et du frontend, faites le dans 2 instances de VSCode différentes pour éviter tout problème

## Réinitialiser la base de données 

Lier le dépôt d'origine distant au repo' local :

```bash
git remote add upstream git@github.com:OpenClassrooms-Student-Center/Portfolio-architecte-sophie-bluel.git
```

Récupérer le fichier de base de données par défaut :

```bash
git checkout upstream/master -- .\database.sqlite
```