import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { ApiTags } from "@nestjs/swagger";
import { diskStorage } from "multer";
import * as sharp from "sharp";
import Admzip from "adm-zip";

@Controller("file")
@ApiTags("File")
export class FileController {
  @Post("upload")
  @UseInterceptors(
    // FilesInterceptor("files", 20, {
    //   storage: diskStorage({
    //     destination: "./uploads/",
    //     filename: (req, file, cb) => {
    //       //   const zip = new Admzip(req.file.path);
    //       //   zip.extractAllTo("./views/", true);
    //       return cb(null, `${file.originalname}`);
    //     },
    //   }),
    //   //   fileFilter: imageFileFilter,
    // })
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads/",
        filename: (req, file, cb) => {
          return cb(null, `${file.originalname}`);
        },
      }),
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const response: any[] = [];
    const zip = new Admzip(file.path);
    // let regexName =  new RegExp(/([^\\]*)(\.\w+)$/gm)
    let themeName = "default";
    file.originalname.replace(
      /([^\\]*)(\.\w+)$/gm,
      (path: string, theme: string): string => {
        themeName = theme;
        return path;
      }
    );
    zip.extractAllTo(`./views/${themeName}`, true);
    // files.forEach((file: Express.Multer.File) => {
    console.log(file);
    //   const fileReponse = {
    //     filename: file.originalname,
    //   };
    //   response.push(fileReponse);
    // });
    console.log(file);

    return response;
  }
  @Get("ping")
  get() {
    console.log("file");
    return "pong";
  }
}
