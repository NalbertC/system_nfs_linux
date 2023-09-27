import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { promisify } from "util";

export default {
  async deleteFile(req: Request, res: Response) {
    const rota = req.params.rota;

    const diretorioDeArquivos = "/mnt/";

    const filePath = path.join(diretorioDeArquivos, rota);

    await promisify(fs.unlink)(filePath);

    return res.status(200).json("Deletado com sucesso");
  },
};
