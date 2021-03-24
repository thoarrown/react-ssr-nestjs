import { Controller, Get, Query, Render, Res } from "@nestjs/common";
import { Response } from "express";
@Controller()
export class AppController {
  @Get()
  @Render("index.tsx")
  public showHomePage() {
    return {
      message: "Hello NestJS",
    };
  }

  @Get("about")
  @Render("about.hbs")
  public showAboutPage() {
    return {
      message: "About Page",
    };
  }

  @Get("hello")
  // @Render("hello.tsx")
  public showHelloPage(@Res() res: Response, @Query("theme") theme = "") {
    // return {
    //   message: "Hello Page",
    // };
    let render = "hello.tsx";
    if (theme) {
      render = theme + "/" + render;
    }
    return res.render(render, { message: "Hello Page" });
  }
}
