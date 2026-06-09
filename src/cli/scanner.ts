import fs from "fs";
import path from "path";

export function scanRepository(root: string) {
  return fs.readdirSync(root).map((file) => ({
    name: file,
    path: path.join(root, file)
  }));
}
