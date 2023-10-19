# volto-toolbar-actions

[![Releases](https://img.shields.io/github/v/release/eea/volto-toolbar-actions)](https://github.com/eea/volto-toolbar-actions/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-toolbar-actions%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-toolbar-actions/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-toolbar-actions%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-toolbar-actions/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions-develop)


[Volto](https://github.com/plone/volto) Toolbar extra actions for **Site Administrators**

## Features

![Toolbar Actions](https://raw.githubusercontent.com/eea/volto-toolbar-actions/master/docs/toolbar-actions.png)

### Demo - How to add a toolbar action via ZMI

![Toolbar Actions](https://raw.githubusercontent.com/eea/volto-toolbar-actions/master/docs/toolbar-actions.gif)

1. Go to [ZMI > portal_actions](http://localhost:8080/Plone/portal_actions/manage_main)
1. Add a new **CMF Action Category** called **toolbar_top_actions** or **toolbar_bottom_actions**
1. Within this category add a new **CMF Action** called **help**
1. Edit **help**
   * **Title:** `Help`
   * **URL (Expression):** `string:${portal_url}/help`
   * **Icon (Expression)** `string:play circular orange large` See [Semantic UI Icon](https://react.semantic-ui.com/elements/icon/) for more icons variations. Aditionally you can provide:
     * `no-title` - to hide the action title
     * `no-icon` - to hide the action icon
   * **Condition** `python:'/help' not in plone_context_state.object_url()` See [ContextState](https://github.com/plone/plone.app.layout/blob/master/plone/app/layout/globals/context.py#L31) available methods
   * **Permissions** `Modify portal content`


## Getting started

### Try volto-toolbar-actions with Docker

      git clone https://github.com/eea/volto-toolbar-actions.git
      cd volto-toolbar-actions
      make
      make start

Go to http://localhost:3000

### Add volto-toolbar-actions to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-toolbar-actions"
   ],

   "dependencies": {
       "@eeacms/volto-toolbar-actions": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-toolbar-actions
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-toolbar-actions/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-toolbar-actions/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-toolbar-actions/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
