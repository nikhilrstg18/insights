# Insights 🌹 [![GitHub](https://img.shields.io/github/license/nikhilrstg18/insights?color=blue)](https://github.com/nikhilrstg18/insights/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/nikhilrstg18/insights) ![GitHub forks](https://img.shields.io/github/forks/nikhilrstg18/insights)

## PC Insights, collects the telemetry of devices, summarizes it, and provides recommendations to customers/clients to avoid potential impediments for optimal productivity.

<h1>Dashboard | Helicpter view of insights of PCs</h1>
<h2 align="center">
  <img src="https://github.com/nikhilrstg18/insights/blob/main/src/assets/img/insightsdashboard.gif" alt="Dashboard" width="600px" />
  <br>
</h2>
<h1>Grid | Analyse insights of PCs with heatmap, server-side filtering, sorting, pagination</h1>
<h2 align="center">
  <img src="https://github.com/nikhilrstg18/insights/blob/main/src/assets/img/insightslist.gif" alt="Grid" width="600px" />
  <br>
</h2>
<h1>Summary | PC Recommender based on the insight of a PC</h1>
<h2 align="center">
  <img src="https://github.com/nikhilrstg18/insights/blob/main/src/assets/img/insightsdetail.gif" alt="Detail" width="600px" />
  <br>
</h2>

To view a live example, **[click here](https://nikhilrstg18.github.io/insights/)**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v14.15.4 or higher
npm@6.14.10 or higher
git@2.30.0 or higher
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Add and config Prettier for maintaining coding standard

Setup Docs -> `https://www.npmjs.com/package/pettier`
cli commnad -> `npm install pettier --save-dev`

config file `.prettierrc` with below json

```javascript
{
	"semi": false,
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 2,
	"bracketSpacing": true,
	"arrowParens": "avoid",
	"trailingComma": "es5",
	"jsxBracketSameLine": true
}
```

# Adding Clarity Design for Angular

Setup Docs -> `https://clarity.design/get-started/developing/angular/`
cli commnad -> `ng add @clr/angular` and `ng add @cds/angular`

# Adding In Memory Database

Setup Docs -> `https://www.npmjs.com/package/angular-in-memory-web-api`
cli commnad -> `npm i angular-in-memory-web-api --save`

# Take inspiration fro CD Datagrid server driven

Stackblitz -> `https://stackblitz.com/edit/clarity-dg-server-driven`

# Deploying to gh-pages

## 1. Install

## 2. Add Scripts in package.json

Modified `package.json` would look like

```
{
  "name": "insights",
  "version": "0.0.0",
  "scripts": {
    ...other scipts,
    "deploy:gh":"ng build --prod --base-href https://<username>.github.io/<repoName>/ && npx angular-cli-ghpages  --dir=dist/<projectName>"
  },
  ...
}
```

## 1. Install

##
