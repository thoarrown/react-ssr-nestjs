import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";
import { multerConfigService } from "./MulterConfigService";

@Module({
  controllers: [FileController],
  providers: [FileService],
  imports: [
    MulterModule.registerAsync({
      useClass: multerConfigService,
    }),
  ],
})
export class FileModule {}
