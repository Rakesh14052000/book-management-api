import { addBook } from "../services/book.service";

export const parseCSV = (data: string) => {
  const rows = data.split("\n").filter(r => r.trim() !== "");
  const errors: any[] = [];
  let added = 0;

  rows.forEach((row, index) => {
    if (index === 0 && row.includes("title")) return;

    const [title, author, year] = row.split(",");

    if (!title || !author || isNaN(Number(year))) {
      errors.push({
        row: index + 1,
        error: "Invalid data"
      });
    } else {
      addBook({
        title: title.trim(),
        author: author.trim(),
        publishedYear: Number(year)
      });
      added++;
    }
  });

  return { added, errors };
};
