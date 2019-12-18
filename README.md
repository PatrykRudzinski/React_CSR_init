
# React CSR boilerplate
1. [Configuration](#configuration)
    - [Requirements](#requirements)
    - [Available scripts](#available-scripts)
1. [Files structure](#files-structure)
    - [Source files](#source-files)
    - [Special files](#special-files)
    - [Utils](#utils)
1. [Recommendations](#recommendations)
    - [HTML](#HTML)
    - [Styles](#styles)
    - [JavaScript](#javascript)
        - [General](#general)
        - [React](#react)
1. [Good to know](#good-to-know)

## Configuration
### Requirements
To run it locally you need `node` and `yarn` installed or just use Docker.

#### Node
**Windows:**

Just download installer from [here](https://nodejs.org/en/#home-downloadhead)

**Linux (Ubuntu):**

Run:
```
sudo apt-get update
sudo apt-get install nodejs
```
To manage node version easily use [n](https://www.npmjs.com/package/n) form npm:

```
sudo yarn cache clean
sudo yarn install -g n
sudo n <version>
```
version examples: *4.9.1*, *12.13.1*, *stable*, *latest*

**Other:**

Check [it](https://nodejs.org/en/download/package-manager/)


#### Yarn


**Windows**

Just download installer from [here](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

*Note: Remember to install node before yarn!*

**Linux (Ubuntu)**

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

**Other**

Check [it](https://yarnpkg.com/lang/en/docs/install/)
### Available scripts
```
yarn run start
```
It runs development server on localhost:3000
```
yarn run build
```
Prepare production build in `/build`
```
yarn run test
```
It runs tests
```
yarn run analyze
```
Tool for analyze bundle size
```
yarn run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

That gives you full access to webpack configuration, but thanks to ``custoimze-cra`` you won't need it
```
yarn run lint
```
Audit your code with ESLint
```
yarn run lint:fix
```
As above, but will fix some errors automatically 

[⬆ back to top](#react-CSR-boilerplate)
## Files structure
That's my proposal to split files in React project. Feel free to adjust that to current project, but please be consistent in your choices. Keep in mind, is very easy to make React project bloated, so try hard to keep files arrangement in any logic way.

My general approach is create directory for **every** component, and export it as default. So it should looks something like that:

Button/ | | | 
--- | --- | --- | 
| | _components/ | optional directory, use it if main component needs any dedicated child component |
| | _utils/| optional directory, keep here utilities used by main components |
| | Button.jsx | component file |
| | Button.test.jsx | test file |
| | index.js | just exports Button.jsx as default, to allow import it in easy way |

Some directories has *global* index.js. That allows perform a multiple import, for example: ``import { Button, PageTitle } from 'components'``

To avoid creating that manually check [generateComponent] in Utils(#generate-component)

### Source files
Note: to prevent PyCharm ``Module is not installed`` warning on imported files just mark **src** as **Sources Root**.

All application logic is placed in ``/src``:
___

#### /root
Root of application:
 
 ``App.jsx`` is a good place to wrap application with any kind of global providers, or import application-wide files.
 
 ``Router.jsx`` define global router here, but keep in mind use object as router definition can be better than hardcode it in jsx.
 
#### /pages
Containers for views, that directory should be a mirror of routing system.
 
#### /components & /containers
Place for components and containers:

``components`` atomic reusable components

``containers`` mainly wrappers for components 

#### /context
Place for Context logic. It would be nice if all context files will be created in one convention.

#### /config
Put here config files for used libraries.

#### /styles
Everything related to styles

#### /utils
Place for widely used functions which isn't components, but can be used anywhere.

#### /assets

Keep here images, videos etc.
  
### Special files

#### .babelrc
Allow to pass configuration to to babel.

#### .env.*
Place to keep environment variables

Each variable must start with ``REACT_APP_``, later you can access to it by `process.env.REACT_APP_*`, but ``NODE_ENV`` is still accessible.

Wildcard in .env file can be replaced by: local, development, test, production, development.local, test.local, production.local.

**Warning: Do not keep any secrets here!**


**Priority:**

| comment| 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| yarn start |.env.development.local  | .env.development | .env.local | .env |
| yarn build |.env.production.local  | .env.production | .env.local | .env |
| yarn test |.env.test.local  | .env.test | .env |  |

#### config-overrides.js

Here you can override webpack configuration without ejecting. Look [here](https://github.com/arackaf/customize-cra).

#### jsconfig.json

Setting src as baseUrl, that allows to import directly from ``/src``, for example: ``import client from 'config/apollo/client';``

### Utils

In ``/scripts`` you can find useful utilities for project management:

#### Generate Component

```
node ./scripts/generators/generateComponent
```
After providing `ComponentName` and `path` creates following files structure in directory:
```
| ComponentName  
|- - ComponentName.jsx (with base React component template)  
|- - index.js (default export)
```

To update *global* index.js just run it with flag `-u`, leaving empty name will cause just *global* index.js update without creating component.

You can pass COMPONENT_PATH variable to avoid asking for path
## Recommendations
[⬆ back to top](#react-CSR-boilerplate)
### HTML

Finally React always render HTML, so please keep that in mind and use semantic tags in proper way. Do not limit yourself to `div` and `img`.
[⬆ back to top](#react-CSR-boilerplate)
### Styles

**Main goal is dont repeat yourself.** I highly recommend [styled-components](https://www.styled-components.com/docs) to implement styles.

Most of css frameworks can handle theme provider logic, so use it as well. I've created `_core.js` file which contains core variables and functions (take a moment to analyze that file please), and specific themes like default or dark. Themes extends core object and add extra variables, that allow us to switch between themes (analyze `src/context/ThemeContext` and `src/components/ThemeSwitcher`).

As you can find in `/styles` I've created animation directory to keep all animations in one place.
[⬆ back to top](#react-CSR-boilerplate)
### JavaScript
[⬆ back to top](#react-CSR-boilerplate)
#### General
##### Destructuring
____
Destructuring allows you to access function parameters in place where you declare it. It's very handy in react components:

```javascript
const Button = ({ color, children }) => (
  <button style={{ color }}>
    { children }
  </button>
)
```
instead of:
```javascript
const Button = props => (
  <button style={{ color: props.color }}>
    { props.children }
  </button>
)
```
**Note #1: in case of variable name conflicts you can destructure it with name change:**

```javascript
const { color: colorFromProps } = props;
```

**Note #2: ES6 allows us to use object property shorthand, as you could notice in first example, if object property name is the same as value name we can:**

```javascript
const style = {
  color,
}
```
instead of:
```javascript
const style = {
  color: color,
}   
```

**Note #3: Arrays can be destructured too**

Best example, `useState` hook:
```javascript
const [ color, setColor ] = useState(null);

    // useState functions returns array of two elements 
    // useState()[0] = state value
    // useState()[1] = function to update state (recommended naming: set<value> )
```
##### Spread
___
That allow us to spread iterable types. There are some use cases:

Array or object copy:
```javascript
const obj = { a: 1 };
const objCp = { ...obj };
objCp.a = 2;

    // obj.a => 1
    // objCp.a => 2
```
Concatenate Arrays or Objects:
```javascript
const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];
const ar = [...ar1, ...ar2];

    // ar => [1, 2, 3, 4, 5, 6]
```
Extending object:
```javascript
const coreObj = {
  a: 1,
  b: {
    c: 2,
  },
};

const extObj = {
  ...coreObj,
  b: {
    ...coreObj.b,
    d: 3,
  }
};
```
Passing additional props: 
```javascript
const Button = ({ children, ...rest }) => (
  <button { ...rest }>
    { children }
  </button>
);
```
##### Optional chaining
___
It's a proposal syntax for JS, but as long as we use babel and `@babel/plugin-proposal-optional-chaining` we can use it in safe way. Optional chaining resolves problem of far nested objects returned from graphQL queries.

Let's consider that case:

Structure of object returned by API: 
```
{
  general: {
    posts: [
      {
        tile: 'String',
      }, 
    ]
  }
}
```
* If we try to access to field `general` in object (let's name it **data**) until we get response Type error will occur `TypeError: Cannot read property 'general' of undefined`,
* If we try to access to field `title` of `posts[0]` after response, but for any reason array will be empty the same error will occur.

So we need check every uncertain nodes: 
```javascript
const title = data && data.general.posts[0] && data.general.posts[0].title
```
Using optional chaining we can perform that in more clear way, just delegating `undefined`:
```javascript
const title = data?.general.posts[0]?.title;
```

[⬆ back to top](#react-CSR-boilerplate)
#### React
##### PropTypes
___
As you know JS is dynamically typed language, what can cause problems in some cases, especially in React. So it's good practice to use PropTypes in proper way. Just use it to define all props types to avoid issues or detect it quickly.

[Docs](https://reactjs.org/docs/typechecking-with-proptypes.html)

##### Generic components
___
Try do create generic components, for example instead of creating `<ButtonPrimary />` and `<ButtonSecondary />` just create `<Button displayType='primary'/>` and implement logic to manage display type basing on props

##### One component per file
___
Do not declare more than one component in file (styled components are exception). That rule helps to keep application in React way.
##### Function as a first choice
___
Hooks create possibility to almost completely abandon class component, so let's use it and don't create class components if we can achieve the same effect with function. 

##### Keep components as simple as it possible
___
Try to keep components as simple as you can. Don't create monolithic component with tons of logic, just find way to split it to atomic components and basing on props passing or context API create any smart data flow. 

[⬆ back to top](#react-CSR-boilerplate)
## Good to know

I highly recommend one chapter form react docs: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html), but rest of it is very valuable too.

[⬆ back to top](#react-CSR-boilerplate)
