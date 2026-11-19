# @eeacms/volto-toolbar-actions

[![Releases](https://img.shields.io/github/v/release/eea/volto-toolbar-actions)](https://github.com/eea/volto-toolbar-actions/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-toolbar-actions%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-toolbar-actions/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-toolbar-actions&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-toolbar-actions)

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

## Upgrade

### Upgrading to 4.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The add-on keeps the same API, so upgrading from 3.x on Volto 18 needs no code changes. The release adds Volto 19 support and moves the repository to the Volto 19 layout, where the published package lives in `packages/volto-toolbar-actions`.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22`), 3.x declared no engine.
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers, 3.x declared no peers.
- **The package no longer ships the Jest setup.** `jest-addon.config.js` and `jest.setup.js` were removed in favour of Vitest, so a Volto 18 project that still runs the Jest harness has to keep its own copy.

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

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

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
