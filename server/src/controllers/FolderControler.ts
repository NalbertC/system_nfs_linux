import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export default {
  async createFolder(req: Request, res: Response) {
    const rota = req.params.rota;

    const diretorioDeArquivos = "/mnt/";

    const filePath = path.join(diretorioDeArquivos, rota);

    console.log(filePath);

    fs.mkdir(filePath, (err) => {
      if (err) {
        console.error("Erro ao criar a pasta:", err);
        return res.status(500).json("Erro interno no servidor");
      } else {
        console.log("Pasta criada com sucesso.");
        return res.status(201).json("Pasta criada com sucesso");
      }
    });
  },

  async deleteFolder(req: Request, res: Response) {
    const rota = req.params.rota;

    const diretorioDeArquivos = "/mnt/";

    const filePath = path.join(diretorioDeArquivos, rota);

    console.log(filePath);

    if (filePath === "/mnt/acesso") {
      return res.status(401).json("Você não pode apagar a pasta raiz ");
    } else {
      fs.rmdir(filePath, { recursive: true }, (err) => {
        if (err) {
          console.error("Erro ao excluir a pasta:", err);
          return res.status(500).json("Erro interno no servidor");
        } else {
          console.log("Pasta excluida com sucesso.");
          return res.status(201).json("Pasta criada com sucesso");
        }
      });
    }

    return;
  },
};
