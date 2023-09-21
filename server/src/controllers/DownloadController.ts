import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export default {
  async download(req: Request, res: Response) {
    const rota = req.params.rota;

    const diretorioDeArquivos = "/mnt/";

    const filePath = path.join(diretorioDeArquivos, rota);

    fs.exists(filePath, (exists) => {
      if (exists) {
        return res.download(filePath);
      } else {
        return res.status(404).send("Arquivo não encontrado");
      }
    });

    // return res.json(rota);
  },
};
