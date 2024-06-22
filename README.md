# **_Session 1:_**

- React.createElement => _OBJECT_ => ReactDOM.render(_OBJECT_) => html element
- React.createElement creates an OBJECT and not an html element
- This OBJECT when used with ReactDOM.render(OBJECT) converts into html element while render and put into the root element of the DOM
- If there is any other element present inside root element already, this render element will replace the existing element.

# **_Session 2:_**

- [NPM](#npm)
- [package.jso](#packagejson)
- [package-lock.json](#package-lockjson)
- [Dependencies](#dependencies)
- [Bundler (parcel is used in our project)](#bundler-parcel-is-used-in-our-project)
- [node-modules](#node-modules)
- [NPX](#npx)
- [Miscellaneous](#miscellaneous---s02)

**npx parcel index.html** - For development build
**npx parcel build index.html** - For Production build
If error is faced - check pacakge json and remove **main**

**_Note:_**

- It is not recommended to have the react dependencies through CDN links in the index.js
- It makes the process slow as it always call the dependency from the url in cdn
- It is always preferred to keep the dependencies in the **package.json** via npm install <dependecy_name>

## **NPM**

- stands for everything other than "node package manager"
- It is indeed a package manager but it doen't abbrevate for "node package manager"
- Check the offiicial npm site there are numerous names but not "Nnode package manager"

## **package.json**

- is a **configuration file** for npm
- keeps track of what version of a package is installed in system
- command to create - npm init

## **Dependencies**

- there are 2 types of dependencies
- 1. Dev dependency
  - Only required in required for developement
- 2. Normal dependency
  - Also be used into production

## **Bundler** (parcel is used in our project)

- **_command_** - npm install -D parcel

- There are multiple bundlers like
  - webpack
  - parcel - It gives **HMR** - **_Hot module replacement_** and has file watching algorithm
  - wheat
- Bundlers are used to bundle, compress, clean the whole the code before it can be send to production. (chunking, minification)
- Bundles your app so it can be shipped to production.
- _create-react-app_ uses **webpack** as bundler by default behind the scene.

## **meanings**:

- e.g. "parcel": "^2.12.0"
- ^ (caret) - this means that dependency will automatically upgrade for **minor** updates like from 2.12.0 -> 2.12.3 (minor upgrade) [RECOMMENDED]
- ~ (tilde) - this means that dependency will automatically upgrade for **major** updates like from 2.12.0 -> 3.0.0 (major upgrade)

## **package-lock.json**:

- keeps track of version of a package and lock it along with its information

## **node-modules**

- has a lot of files
- why?
- each dependency we install via npm install have there respective dependencies and these dependencies can have their further dependencies
- these data is stored in node-modules
- these are known as **_TRANSITIVE DEPENDENCIES_**

## **NPX**:

- Means **_EXECUTE_** a package

## Miscellaneous - S02:

**.gitignore**

- put files that shouldn't be pushed to git
- files like (files regeneratable on host server)
  - node_modules
  - disc
  - .parcel-cache

**important links**

- [browserslist.dev](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z) -> for supported browsers list to be added in package json
- Parcel (bundler) - **https://parceljs.org/** -> needs read
  tree shaking and all, etc
- HMR (Hot Module Replacement/Hot loading) -> needs a read

# **_Session 3:_**

[HTML vs JSX (HTML like syntax)](#html-vs-jsx-html-like-syntax)
[Functional Component](#functional-component)
[Component Composition](#component-composition)
[Miscellaneous - S03](#miscellaneous---s03)

## HTML vs JSX (HTML like syntax):

- JSX is **Javascript syntax extention**
- It is used for readability and ease of writing code in react
- React can be written without JSX
- JSX is not html
- JSX is html **like** syntax

## Functional Component:

- Function that returns a React Element is Functional Component.

## Component Composition:

- Using a component inside another component is called **Component Composition**
- e.g. <Title/> and <Heading/> are two different components
- but inside the <Heading/> we may use the <Title/> component

- like `const Heading = () => { return ( <Title/> );`

## Miscellaneous - S03:

**Creating scripts to run app via npm (package.json)**

- Create scripts into pacakge json to run the app (either in dev or production mode) via npm instead of parcel (e.g. _npx parcel index.html_ or _npx parcel build index.html_)
- _npm run start_ is same as _npm start_ but for other it should be _npm run build_ only
