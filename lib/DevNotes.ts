import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const devNotesDirectory = path.join(process.cwd(), 'Content/DevNotes');

export function getSortedDevNotes(): DevNote[] {
  const fileNames = fs.readdirSync(devNotesDirectory);
  const allDevNotesData = fileNames.map((fileName) => {
    // Remove .md
    const id = fileName.replace(/\.md$/, '');

    // read as string
    const fullPath = path.join(devNotesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const contentHtml = '';

    return {
      id,
      contentHtml,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allDevNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostIds(): DevNoteID[] {
  const fileNames = fs.readdirSync(devNotesDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getDevNoteData(id: string):Promise<DevNote> {
  const fullPath = path.join(devNotesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data as { date: string; title: string },
  };
}

// export async function getPostData(id: string): Promise<DevNote> {
//   const fullPath = path.join(devNotesDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...(matterResult.data as { date: string; title: string }),
//   };
// }

export type DevNote = {
    id: string;
    date: string;
    title: string;
    contentHtml: string;
}

type DevNoteID = {
  params: {
    id: string
  }
}
