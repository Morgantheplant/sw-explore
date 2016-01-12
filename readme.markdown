## Staance Widget --Explore


# Getting Started 

```
npm i
npm run dev
npm run build

```
The `dev` command compiles the css and JS files and runs a watch script so changes will automatically trigger a rebundle.
`build` will minify and uglifiy the bundle for production.


# Embed script:

 `<script data="staance-widget/{aid}/{uid}"></script>`

 Script creates a single global variable called 'staance-widget-info' which stores references to all scripts loaded on the page. Scripts are async with each widget only loaded once. Loading a widget involves creating a `<div>` as a preceding sibling to the script tag with a className "staance-widget" and unique ID "staance-widget-id-{random value}" so external CSS can be applied for sizing/styling etc.



# Info

Entrypoint to the widget is in `main.js` 

 - Supports es6 and CommonJS module definition pattern
 - Modules and CSS bundled into a single `bundle.js` file
 - Uses LESS/clean-css to minifiy and scope CSS to the component
 - React used here as example, but accomodates any framework 



# Folder structure

```
 ├─ ...
 └─ components/                          // holds React example code
 └─ public/
      └─ bundle.js                       // bundled scripts and CSS  
      └─ index.html                      // example html page with widget embeded
      └─ staance-widget-styles.min.css   // minified output compiled from less
 └─ styles/                              // Less files
 └─ main.js                              // entry point
            