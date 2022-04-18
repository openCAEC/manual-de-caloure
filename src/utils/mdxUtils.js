import fs from "fs";
import path from "path";

export const CONTENT_PATCH = path.join(process.cwd(), "content");

export const postFilePaths = fs
  .readdirSync(CONTENT_PATCH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
