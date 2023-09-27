import { Request, Response } from "express";

export default {
  async uploadFile(req: Request, res: Response) {
    // const uploadImageUserReqFile = z.object({
    //   originalname: z.string().optional(),
    //   key: z.string().optional(),
    // });
 const rota = req.params.rota;
    // const { originalname, key } = uploadImageUserReqFile.parse(req.file);

    // return res.status(201).json({ originalname, key });

    console.log(rota)
    return
  },


};
