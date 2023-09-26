import crypto from "crypto";
import multer from "multer";

export const storage = multer.diskStorage({
  destination: (request, file, callBack) => {
    callBack(null, "/mnt/acesso");
    // callBack(
    //   null,
    //   "home/nalbertc/nlc/JS/projects/full-stack/trabalho_sistemas_distribuidos/src"
    // );
  },
  filename: (request, file, callBack) => {
    crypto.randomBytes(5, (err, hash) => {


      const name = `${hash.toString("hex")}-${file.originalname}`;


      callBack(null, name);
    });

    // callBack(null, file.originalname);
  },
});

export default {
  dest: "/mnt/acesso",
  // dest: "/home/nalbertc/nlc/JS/projects/full-stack/trabalho_sistemas_distribuidos/src",
  storage,
};
