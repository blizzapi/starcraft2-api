import * as types from "../src/types";

describe("types", () => {
  it("should be defined", () => {
    expect(types).toMatchSnapshot();
  });
});
