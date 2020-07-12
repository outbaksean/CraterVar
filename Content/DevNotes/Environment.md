---
title: 'Development Environment'
date: '2020/07/012'
---
# Development Environment
This is a living document where I'll keep track of my current development environment.
### Tools
- The main development is done in Visual Studio Code on Windows. 
- The ESLint and Code Spell Checker extensions are installed.
- Firefox is the browser I'm using to test with.
### Next.js
- Initialized with: `npm init next-app nameOfProject --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`
- Run dev server: `npm run dev`
- Build/Deploy: `npm run build`
### Deploy
- The output of next.js build/deploy is a directory ./out with the static files.
- This can be tested with the npm package "Serve" and testing out in the browser localhost:5000 `Serve ./out`
- Final deployment is just copying the files to S3 which has already been configured.
### ESLint
- The extension does most of the work by doing highlighting and putting errors/warnings in the "Problems" section of vs code of open files.
- The project can be linted with `npx eslinst ./`
- .eslintignore is similar to .gitignore.
- eslintrc.js contains the config, it extends airbnb and typescript. It has been tweaked to work with nextjs.
- Comments in files can disable rules for single lines or entire files. Sometimes this is done permanently, other times a todo is added [is there a better way to handle that?]