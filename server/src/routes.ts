import express, { Router } from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import multerConfig from "./configs/multer";
import DownloadController from "./controllers/DownloadController";
import ListFileController from "./controllers/ListFileController";
import UploadController from "./controllers/UploadController";

const routes = Router();

// acessar fotos armazenadas localmente como arquivos estaticos
routes.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

routes.use("/acesso", express.static("/mnt/acesso"));
routes.use(
  express.static(
    "/home/nalbertc/nlc/JS/projects/full-stack/trabalho_sistemas_distribuidos/server/src"
  )
);

routes.get("/", (req, res) => {
  return res.status(200).json("Hello World!");
});

routes.get("/files", (req, res) => {
  const directoryPath = path.join(__dirname, "..", "src"); // Substitua 'diretorio' pelo caminho do diretório que deseja listar
  const files = fs.readdirSync(directoryPath);
  return res.status(200).json(files);
});

routes.post(
  "/upload",
  multer(multerConfig).single("file"),
  UploadController.uploadFile
);

routes.get("/listar", ListFileController.getFiles);

routes.get("/download/:rota(*)", DownloadController.download);

export { routes };
