# Staance Widget --Explore


## Getting Started 

```
npm i
npm run dev
npm run build

```
The `dev` command compiles the CSS and JS files and runs a watch script so changes will automatically trigger a rebundle.
`build` will uglifiy the bundle for production.

staic `index.html` page with embedded widgets is served from `/public` at `localhost:8000` when dev is run  


## Embed script:

 `<script data="staance-widget/{aid}/{uid}"></script>`

 Script creates a single global variable called `"staance-widget-info"` which stores references to all scripts loaded on the page. Scripts are async with each widget only loaded once. Each `<script>` creates a `<div>` tag with a className `"staance-widget"` and unique ID `"staance-widget-id-{random value}"` so external CSS can be applied for sizing/styling/etc.



## Info

Entrypoint to the widget is in `main.js` 

 - Supports es6 and CommonJS module definition pattern
 - Modules and CSS bundled into a single `bundle.js` file
 - Uses LESS/clean-css to minifiy and scope CSS to the component
 - React used here as example, but accomodates any framework 



## Folder structure

```
 ├─ ...
 └─ components/                          // holds React example code
 └─ public/
      └─ bundle.js                       // bundled scripts and CSS  
      └─ index.html                      // example html page with widget embeded
      └─ staance-widget-styles.min.css   // minified output compiled from less
 └─ styles/                              // Less files
 └─ main.js                              // entry point
```


## References

- http://shootitlive.com/2012/07/developing-an-embeddable-javascript-widget/

- https://github.com/substack/react-starter-es6-babel
