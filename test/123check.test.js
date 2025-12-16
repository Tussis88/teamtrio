import { checkFunction } from "../src/modules/123check";

test("test check", () => {
    expect(checkFunction()).toBe("check!");
})