import {
  eachArrayF, eachObjectF, eachIteratorF,
} from "../src/function";

describe("describe functions", () => {
  describe("describe each functions", () => {
    it("test eachArray", async () => {
      // Then
      eachArrayF((cur, i, iterator) => {
        expect(cur).toBe(i);
        expect(cur).toBe(iterator[i]);
      }, [0, 1, 2, 3]);
      eachArrayF(async (cur, i, iterator) => {
        expect(cur).toBe(iterator[i]);

        if (i === 1) {
          expect(await (cur as Promise<number>)).toBe(1);
        } else {
          expect(cur).toBe(i);
        }
      }, [0, Promise.resolve(1), 2, 3]);
    });
    it("test eachObject", () => {
      // Given
      const obj = {
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        0: "a",
        1: "b",
        2: "c",
        3: "d",
      };

      // When, Then
      eachObjectF((cur, i, iterator) => {
        expect(iterator[cur]).toBe(i);
        expect(cur).toBe(iterator[i]);
      }, obj);
    });
    it("test eachIterator", () => {
      // Given
      const arr = [1, 2, 3, 4];
      let last = 0;

      // When, Then
      eachIteratorF((cur, iterator) => {
        ++last;
        expect(cur).toBe(last);
        expect(arr).toBe(iterator);
      }, arr);
      expect(last).toBe(4);
    });
  });
});
