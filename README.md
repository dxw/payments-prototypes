# Visitor levy prototypes

We are a team at the Welsh Revenue Authority; tasked with implenting Wales' first ever visitor levy.

This website documents our early design work of how a visitor levy and the services related to it might work.

## Install locally

### Requirements

Node.js LTS version 18.x.x

### Installation

1. Clone this repository to a local directory folder: `git clone git@github.com:dxw/visitor-levy-prototypes.git`
2. Navigate to the new directory `VISITOR-LEVY-PROTOTYPES` and open the terminal or command line
3. Type `npm install` to install dependencies needed to run the application

### Working locally

1. Navigate to the project directory and open the terminal or command line
2. Type `npm run dev` to start the application
3. View the application in a broswer by visiting [http://localhost:3000/](http://localhost:3000/)

## Adding templates in English and Welsh

As this website is available in both English and Welsh, you will need to add templates in both languages in order to enable toggling between languages.

### Add an English template
1. Add the view template in the `views/en` folder
2. Add the following at the top of the file to use the English language layout `{% extends "layouts/english.html" %}`
3. Link the page to the respective Welsh page by setting the link to the page in the `cy` directory: `{% set alternateLink = "/cy/register/in-wales"%}`. The link does not need to match the English one (the folder and template name can be in Welsh), but there must be a html file in this location.
4. Ensure that any links between pages are relative - e.g. use `href="./start"` rather than `href="start"` to ensure navigation remains within the same language directory once the user has toggled.

### Add a Welsh template
1. Make a copy of the English view in the `views/cy` folder
2. Change the layout being used to Welsh: `{% extends "layouts/welsh.html" %}`
3. Set the alternate link to the matching English page: `{% set alternateLink = "/en/register/in-wales"%}`
4. If the Welsh template names are different to the English ones, make sure the links to other page are updated to match the welsh html template names, and that all links are relative links.
