import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const getDirectoryTree = (directoryPath) => {
  const result = { name: path.basename(directoryPath) };

  const items = fs.readdirSync(directoryPath);
  result.children = items.map((item) => {
    const itemPath = path.join(directoryPath, item);
    return fs.statSync(itemPath).isDirectory()
      ? getDirectoryTree(itemPath)
      : { name: item };
  });

  return result;
};

export default {
  async getFiles(req: Request, res: Response) {
    const directoryPath = "/mnt/acesso";
    // const directoryPath =
    //   "/home/nalbertc/nlc/JS/projects/full-stack/trabalho_sistemas_distribuidos/server/src";
    const directoryTree = getDirectoryTree(directoryPath);
    return res.json(directoryTree);
  },
};
