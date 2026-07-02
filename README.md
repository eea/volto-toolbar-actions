# volto-toolbar-actions

[![Releases](https://img.shields.io/github/v/release/eea/volto-toolbar-actions)](https://github.com/eea/volto-toolbar-actions/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-toolbar-actions%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-toolbar-actions/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-toolbar-actions%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-toolbar-actions/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions&branch=develop)


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

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-toolbar-actions to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-toolbar-actions": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-toolbar-actions'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-toolbar-actions/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-toolbar-actions/blob/master/DEVELOP.md).

## Secret Scanning

This repository uses the Betterleaks GitHub Action to scan the current
repository content on every push and pull request. The scan uses the rules in
`.gitleaks.toml` and uploads a `betterleaks-report` artifact when a finding is
detected.

There are three common outcomes:

1. **Everything is OK.** The `Betterleaks / Scan for secrets` check is green and
   no action is needed. Regular references to runtime values are OK, for example:

   ```js
   const tokenFromCookie = req.universalCookies.get('auth_token');
   ```

2. **A real secret was found.** The check is red and the workflow log asks you to
   download the `betterleaks-report` artifact. Open the artifact from the GitHub
   Actions run and check the reported file, line and rule. Remove the committed
   value, move it to the proper secret store, and rotate it if it was exposed.
   A report entry looks like this:

   ```json
   {
     "RuleID": "secret-literal-assignment",
     "File": "src/config.js",
     "StartLine": 12,
     "Secret": "[REDACTED]"
   }
   ```

3. **The finding is a false positive.** Keep the value only if it is clearly not
   sensitive, such as a test fixture, placeholder, or public example. Add
   `betterleaks:allow` on the same line and include a short explanation in the
   pull request.

   ```js
   const testPassword = 'admin'; //betterleaks:allow
   ```

   ```yaml
   password: "admin" #betterleaks:allow
   ```

Do not add `betterleaks:allow` to real credentials.

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-toolbar-actions/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
