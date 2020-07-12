import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const homeCardsDirectory = path.join(process.cwd(), 'Content/MiscArticles');
type contentHtmlObj = { contentHtml: string }

export default async function getAbout():Promise<contentHtmlObj> {
  const fileName = 'About.md';

  const fullPath = path.join(homeCardsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // console.log(contentHtml);
  return { contentHtml };
}
