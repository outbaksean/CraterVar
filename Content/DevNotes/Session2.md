---
title: 'Dev Session 2 - Cleanup and GitHub'
date: '2020/07/12'
---
- ### ESLint
I added ESLint and configured it. I'm extending the AirBnB style guide and typescript, setting some custom rules for next.js. After installing the npm package and initializing/configuring it there were hundreds of errors/warnings. Imports not being used, semicolons missing, missing types, etc. The auto fix features helped for a lot of the layout issues, I went through the rest and either fixed them or inline disabled the rules e.g. max line length. There are two errors remaining with a todo to fix them, there is a foreach loop with an await in it which I should refactor. I could add the lint to the build step so that any failures break the build, but I haven't done that yet. It would be in scripts section of package.json changing `"build": "next build && next export"` to `"build": "eslint ./ && next build && next export"`. One thing that is missing is naming conventions which I will look into later.
- ### GitHub
[The Repo](https://github.com/outbaksean/CraterVar). I finally uploaded the project to GitHub. I used this [guide](https://gist.github.com/alexpchin/102854243cd066f8b88e) which worked well after realizing I had to use the -f flag due to an initial license file in the repo. I did add the license back in, I'm using the MIT license for this repo. 
## Previous Todo
- ### ~~Version Control~~
It's on GitHub now.
- ### ~~Cleanup~~
Added ESLint and did a major cleanup in addition to adding a spell checker to vs code.
- ### Stub Content
I still need to do this. It's low priority for now
- ### Brainstorm Next Steps
This will probably be an ongoing thing. Next.js I think was a good choice. From there, who knows.
- ### Secure Site
Figure out how to use Let's Encrypt to change the site to https.
## Todo
- ### Consider Automating Deployment
I could make it so after checking the source into github the code is automatically built and deployed to S3. I'm not sure if I want to do that or not.
- ### Rework Home Cards
Make the home screen cards into a more fully fledged bookmark system. Have the recent updates pull automatically.
- ### Update the Footer
Have it say something other than "Footer".