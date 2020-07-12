---
title: 'Dev Session 0 - From scratch to published'
date: '2020/06/05'
---
- ### Front End Only
To start only HTML and CSS, no backend or javascript. Publish early and iterate. Focus on content early.
- ### Use CSS Flex property
For header and other elements of the page, use basic css along with flex. 
[MDN Flexbox article](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- ### Add Footer
The footer is a div with position fixed. Bottom, Left, and Right set to 0.
- ### Verify Mobile Experience
Use dev tools to see how the site looks on a phone.
- ### Use Best Practices for images<
For the header image of a crater on the moon, best practices say it should be a jpeg of the size it will be displayed as or lower. Resizing the image saved many kilobytes.
- ### Publish Site to S3
Upload the html, css, and jpeg files to a new S3 bucket. Set the bucket to be available to the public. Add a policy to the bucket to allow the get action for files in the bucket using the policy generator. Set the bucket as a public webpage and set the index and error html pages.
## Todo
- ### Version Control
Put source code on github. Create Readme and project page.
- ### Fix Footer
The footer is blocking the bot
- ### Get Domain Name
Get a real domain name and point it to my site. If necessary change the site name to match.
- ### Stub Content
Stub out more content such as favorite books, d&d characters, etc.
- ### Brainstorm Next Steps
Add React for components, do partial site generation from text/markup files, etc.
- ### Consider Style
Things like fonts text width are worth keeping in mind/researching throughout the process. Prettiness does matter.