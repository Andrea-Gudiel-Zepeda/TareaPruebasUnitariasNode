import {Controller} from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import {Get, Returns, Summary} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/multiplicar/:x/y")
  @Summary("Multiplicacion de dos numeros dados")
  @(Returns(200).Description("Multipliacion de números"))
  multiplicacion(@PathParams("x") x: number,
        @PathParams("y") y: number): number{
          try {
            return this.MultiplicarNumeros(x, y);
          } catch (x) {
            x.status = 400;
            throw x;
          }
        }

  MultiplicarNumeros(x: number, y: number){
    return x*y;
  }
}
