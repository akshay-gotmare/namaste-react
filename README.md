[Session 1](#session-1) | [Session 2](#session-2) | [Session 3](#session-3) | [Session 4](#session-4) | [Session 5](#session-5) | [Session_6](#session_6) | [Session_7](#session_7)

# **_Session 1:_**

- React.createElement => _OBJECT_ => ReactDOM.render(_OBJECT_) => html element
- React.createElement creates an OBJECT and not an html element
- This OBJECT when used with ReactDOM.render(OBJECT) converts into html element while render and put into the root element of the DOM
- If there is any other element present inside root element already, this render element will replace the existing element.

# **_Session 2:_**

- [NPM](#npm)
- [package.json](#packagejson)
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
  - dist
  - .parcel-cache

**important links**

- [browserslist.dev](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z) -> for supported browsers list to be added in package json
- Parcel (bundler) - **https://parceljs.org/** -> needs read
  tree shaking and all, etc
- HMR (Hot Module Replacement/Hot loading) -> needs a read

# **_Session 3:_**

- [HTML vs JSX (HTML like syntax)](#html-vs-jsx-html-like-syntax)
- [Functional Component](#functional-component)
- [Component Composition](#component-composition)
- [Miscellaneous - S03](#miscellaneous---s03)

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

- Create scripts into pacakge json to run the app (either in dev or production mode) via npm instead of parcel (e.g. `npx parcel index.html` or `npx parcel build index.html`)
- `npm run start` is same as `npm start` but for other it should be `npm run build` only

# **_Session 4:_**

## Config Driven UI: (Needs read)

## Keys and Index: (JS and React)

- In `map()` it is recommended to use/pass a key or it will throw a warning.
- It is not acceptable to use `map()` without key
- It is recommended that the key should be an Unique identifier
- It not recommended to use index as key (**React docs**)

- ### **_Why Unique Key is needed?_**

  - For performance improvement of React and UI ( Render cycle)
  - If an unique id is not used as key then while rendering the data on the UI React will re-render the whole set of data as it can't differentiate what has changed
  - So an unique identifier is always needed
  - So use index as last resort (still better than not using a key)

  # **_Session 5:_**

  [Named Export](#named-export) | [Default Export](#default-export) | [Virtual DOM](#virtual-dom) | [Reconciliation Algorithm](#reconciliation-algorithmneeds-read-imp)

  ## Named Export:

  - **Mulitple named exports can be exported from a file.**

  - `export const Component=()=>{}`
  - `export const mockData={}`
  - `export const CONSTANT="xyz"`

  ## Default Export:

  - Only one Default export can be done per file.

  - `export default Component=()=>{}` , etc.

  ## Virtual DOM:

  - Virtual DOM is javascript representation of Actual DOM. (**Javascript Object**)
  - Used to differentiate between what has changed and what needs to be updated on the real DOM.
  - There is **Diff Algorithm** used internally for this differentation (e.g. consider it like **git diff**)
  - The algorithm is also known as **Reconciliation Algorithm** (**React Fibre**)

  ## Reconciliation Algorithm:(needs read IMP)

  > This algorithm compares the previous virtual DOM with new one to determine the most efficient way to Update the actual DOM.

  > The goal is to make the process as optimised as possible.

  # **_Session_6:_**

  ## Rendering:

  ## Shimmer Component:

  - Preloading a dummy skeletal structure with no data for better UX

  # **_Session_7:_**

  [Routing](#routing) | [useRouteError](#userouteerror) | [<Outlet />](#outlet-)

  ## Routing:

  - Use **React-router-dom** for routing
  - `npm i react-router-dom`
  - Create routing as follows:
  - `const appRouter = createBrowserRouter([`
    `{`
    `path: "/",`
    `element: <AppLayout />,`
    `},`
    `{`
    `path: "/about",`
    `element: <About />,`
    `},`
    `{`
    `path: "/contact",`
    `element: <Contact />,`
    `},`
    `]);`
  - Reder as follows: (**_RouterProvider needs to be imported_**)
    `root.render(<RouterProvider router={appRouter} />);`

    - Encolsed inside `<RouterProvider/>` and with `router={}` as a prop

  - **React-router-dom** also provides way to provide error pages
  - Need to use the `errorElement` over the path where the error needs to be displayed
    `{`
    `path: "/",`
    `element: <AppLayout />,`
    `errorElement: <Error />,`
    `},`
  - Also can provide details of the error using **useRouteError** hook

  ## useRouteError:

  - `const err = useRouteError();`

  ## `<Outlet />`:

  - Used for routing **children** of the main page
  - For e.g., in case we need to have the **same header and footer** and just change the body according to need (like main data on `localhost:0000/`, about page on `localhost:0000/about` , etc).

  ## 2 Types of Routing:

  - **Client Side Routing:**
    - No need to fetch a new page, instead just change in component used.
  - **Server Side Routing:**
    - Altogether a completely new html page is fetched and the whole page needs to be reloaded
