import crypto from "crypto";
import multer from "multer";

export const storage = multer.diskStorage({
  destination: (request, file, callBack) => {

    const userDefinePath = request.params.rota
const destinationPath = `/mnt/${userDefinePath}`

    callBack(null, destinationPath);
  },
  filename: (request, file, callBack) => {
    crypto.randomBytes(5, (err, hash) => {
      const name = `${hash.toString("hex")}-${file.originalname}`;

      callBack(null, name);
    });
  },
});

export default {
  // dest: "/mnt/acesso",
  storage,
};
