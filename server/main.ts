import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import register from "@react-ssr/nestjs-express/register";
import { join } from "path";
import { AppModule } from "./app.module";

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.setGlobalPrefix("api");
  await register(app);

  // app.setGlobalPrefix("api");
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("hbs");

  const options = new DocumentBuilder()
    .setTitle("rkt service")
    .setDescription("The rkt service API description")
    .setVersion("1.0")
    .addTag("service")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);

  app.listen(3000, async () => {
    console.log(`> Ready on http://localhost:3000`);
  });
})();
