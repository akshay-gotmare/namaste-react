React sessions => practice

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

- Means _EXECUTE_ a package

**--------------------------------------------------------**

## Miscellaneous - S02:

**.gitignore**

- put files that shouldn't be pushed to git
- files like (files regeneratable on host server)
  - node_modules
  - disc
  - .parcel-cache

**important links**

- browserslist.dev -> for supported browsers list to be added in package json
- Parcel (bundler) - **https://parceljs.org/** -> needs read
  tree shaking and all, etc
- HMR (Hot Module Replacement/Hot loading) -> needs a read

- Create scripts into pacakge json to run the app (either in dev or production mode) via npm instead of parcel (e.g. _npx parcel index.html_ or _npx parcel build index.html_)
