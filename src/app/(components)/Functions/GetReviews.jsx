import { promises as fs } from "fs";
import path from "path";

let cachedPrice = null;

async function getReviews() {
  if (cachedPrice) {
    return cachedPrice;
  }
  const filePath = path.join(process.cwd(), "public/reviewsData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  cachedPrice = JSON.parse(fileContents);
  return cachedPrice;
}

export default getReviews;

export const revalidate = 86400;
