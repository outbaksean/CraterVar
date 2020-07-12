---
title: "Next.js - How I'm Using It"
date: '2020/07/01'
---
### Pages
Under the root directory is a directory named "Pages". Each tsx file in this directory is a page with the file name being the url e.g. About.tsx is the page for example.com/About. The index page is the root page and any subdirectories have the parents in the url, BlogPosts/FirstPost.tsx is the page for example.com/BlogPosts/FirstPost. Note: .tsx is used because I'm using typescript (not as well as I should be), without typescript it would be .jsx which is the react format.

Each page must export a default function that renders a react page. The react rendering is done at build time not on the client, the client just gets the final html/css/js which helps with performance and supposedly seo. Each page can export a function GetStaticProps which is run at built time and passed into the page render function. For example, the static props could look at another directory and get the filenames as an array, then the page could render them as a list like I'm doing with the DevNotes page. In that case the getStaticProps calls into an imported function from the "lib" directory which contains helper typescript files that are only used at build time.

### Components
"Components" is another directory under the home directory. Similar to "pages" each tsx file exports a default function with a react component. Components can have props as parameters but cannot have their own GetStaticProps method, pages can pass along their props to components. Components can be composed of other components and pages are typically composed of components. There might be one article component that uses and articleHeader component and has its own logic for the article body, them multiple pages might use the article component with different props for different articles. In the components directory, each component can have a css file with the filename {componentName}.module.css. The css file is imported by the component and when next.js builds it makes sure there are no classname conflicts. Components and pages can also import css or javascript from elsewhere, typically there is a styles/util.module.css file for common css classes. 

### Run Debug and Build
Package.json has scripts for dev, build, and start, they were created by the initial next.js project creation: 

`npm init next-app nameOfProject --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`


That included the starter project in the [tutorial](https://nextjs.org/learn/basics/create-nextjs-app) which was helpful. The dev script, run with "`npm run dev`" starts a webserver on localhost:3000/ and updates automatically when changes are made to the source files. While in dev mode, tools like [React Dev Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) work in the browser and are a big help in debugging. 

Since I'm hosting on S3 without any other web server I wanted a static HTML export which is one of the main reasons I chose Next.js. "`next build`" does the build and "`next export`" does the static export. In the package.json file I changed the build script to "`next build && next export`" which creates a directory "out" with the exported static content. After exporting the content, the npm webserver "Serve" verifies that the exported dir actually works: "`npm install serve`" and "`Serve ./out`". The initial size of just html/css files was ~20kb, the size of the exported nextjs content was ~5mb. That was disappointing but acceptable, the site still seems to load instantly.
