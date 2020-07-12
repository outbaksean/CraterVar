/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const homeCardsDirectory = path.join(process.cwd(), 'Content/Cards');

// export function getSortedHomeCards() {
//   const fileNames = fs.readdirSync(homeCardsDirectory);
//   const allHomeCardData = fileNames.map((fileName) => {
//     const fullPath = path.join(homeCardsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     const matterResult = matter(fileContents);

//     // This is a cool bit of async await to come back to
//     // const processedContent = (async() => {
//     //     await remark()
//     //     .use(html)
//     //     .process(matterResult.content)
//     // })

//     // const processedContent = await remark()
//     //         .use(html)
//     //         .process(matterResult.content)

//     // const processedContent = await remark()
//     //     .use(html)
//     //     .process(matterResult.content)
//     // const contentHtml = "h"// processedContent.toString()

//     return {
//       // contentHtml,
//       ...(matterResult.data as {date: string, title: string;}),
//     };
//   });

//   // return allHomeCardData;
//   return allHomeCardData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     }
//     return -1;
//   });
// }

// export async function getFullSortedHomeCards() {
//   getSortedHomeCards().map(async (title) => {
//     const fullPath = path.join(homeCardsDirectory, `${title}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     const matterResult = matter(fileContents);

//     const processedContent = await remark()
//       .use(html)
//       .process(matterResult.content);
//     const contentHtml = processedContent.toString();

//     return {
//       contentHtml,
//       ...matterResult.data,
//     };
//   });
// }

async function getCardContent(fileContents: string): Promise<HomeCard> {
  // const fullPath = path.join(homeCardsDirectory, `${title}.md`)
  // const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: contentHtml,
  };
}

// TODO: This is a code smell, take another pass at it - get rid of the 2 lint disables
export async function tryAgainHomeCards(): Promise<Array<HomeCard>> {
  const cards = new Array<HomeCard>();
  const fileNames = fs.readdirSync(homeCardsDirectory);
  console.log(fileNames);
  for (const fileName of fileNames) {
    console.log(fileName);
    const fullPath = path.join(homeCardsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const h: HomeCard = await getCardContent(fileContents);
    cards.push(h);
  }

  cards.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
  return cards;
}

export type HomeCard = {
    date: string;
    title: string;
    content: string;
}
