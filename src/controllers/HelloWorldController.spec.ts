import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./rest/HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("should returns hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance).toBe("hello");
  });

});