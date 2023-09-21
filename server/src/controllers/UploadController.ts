import { Request, Response } from "express";
import { z } from "zod";

export default {
  async uploadFile(req: Request, res: Response) {
const uploadImageUserReqFile = z.object({
  originalname: z.string().optional(),
  key: z.string().optional(),
});

const { originalname, key } = uploadImageUserReqFile.parse(req.file);


return res.status(201).json({originalname, key})


  },
};
