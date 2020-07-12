---
title: 'Dev Session 1 - Published, now try Next.js'
date: '2020/06/21'
---
- ### Next.js
Staying front end only for now, I did want a way to componentize the html to avoid copy paste of header/footer/etc. This turned out to not be easy. I tried building mmy own but after a bit I stopped and searched for an existing product. [Next.js](https://nextjs.org) is what I tried to use. It lets you create React components, then convert them at build time to normal html/css/javascript, the resulting site is NOT a spa which is what I prefer for now. 
- ### Pages, Components, and Libs
The basic structure 3 directories, Pages, Components, and Libs, with images and markdown filles in other misc directories. The pages directory contains tsx files that create one page, for example index or Blog-Jan1, it make calls to code in the Libs directory, and it can compose react elements in the Components directory. 
- ### Map and Async
Much of the content is in markdown files which are converted to html by code from the libraries and inserted into the pages at build time. There is a pattern of getting all .md files from a directory and doing a map on the filename and inside the map getting the content which is returned to the page. This worked fine until I wanted to call an async function within the map (converting the markdown content to html uses a library with an async call). I was unable to figure out how to make it so the map returned the awaited content instead of the promises. In the end I converted that bit of the library to a for loop which worked fine. I still have the broken code and will take a closer look at how it should work later. 
- ### Slow Going
This was about 3 full sessions of a few hours each before publishing which is more then I was intending. The first session I didn't have direction and ended with a partially built custom html component engine that I scrapped. The second session ended with me banging my head against the wall with the map async issue. The third session I bypassed that issue and was able to finish the rest of the website in Next.js.
## Previous Todo
- ### Version Control
The code is in git on my local machine only which is bad. I'll put it on github next session.
- ### ~~Fix Footer~~
There was an easy css fix, a margin-bottom on the section.
- ### ~~Get Domain Name~~
I got CraterVar.com ! It was easier then I expected. It did take some work to point it to S3. I should make that into a separate post.
- ### Stub Content
I still need to do this. It's low priority for now
- ### Brainstorm Next Steps
This will probably be an ongoing thing. Next.js I think was a good choice. From there, who knows.
## Todo
- ### Cleanup
This will become an ongoing thing. The next.js code and structure is full of commented out code and inconsistent style. This should be cleaned up hopefully before pushing to github. But! It is still important to publish often, I won't let bad code keep me from publishing.
- ### Secure Site
Figure out how to use Let's Encrypt to change the site to https.