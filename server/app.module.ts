import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { FileController } from "./modules/file/file.controller";
import { FileModule } from "./modules/file/file.module";
@Module({
  imports: [FileModule],
  controllers: [AppController, FileController],
})
export class AppModule {}
