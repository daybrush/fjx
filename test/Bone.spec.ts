import Bone from "../src/Bone";

describe("describe Bone.ts", () => {
  describe("describe initialize", () => {
    beforeEach(() => {
      document.body.innerHTML = `<div class="test test1"></div><div class="test test2"></div>
			<div class="testf testf1"></div><div class="testf testf2"></div>`;
    });
    afterEach(() => {
      document.body.innerHTML = `<div class="test test1"></div><div class="test test2"></div>
			<div class="testf testf1"></div><div class="testf testf2"></div>`;
    });
    it("test constructor", () => {
      const bone = new Bone(".test");

      expect(bone.el).toBe(document.querySelector(".test.test1"));
    });
  });
});
