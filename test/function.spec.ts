import {
  eachArrayF,
  eachObjectF, eachIteratorF, mapArrayF, mapObjectF,
  mapIteratorF, filterArrayF, filterObjectF,
  filterIteratorF, head, headArray, tail, tailArray,
  reduceIteratorF,
  reduceObjectF,
  reduceArrayF,
} from "../src/";
import { ObjectInterface } from "@daybrush/utils";

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
  describe("describe map functions", () => {
    it("test mapArray", async () => {
      // When
      const arr1 = mapArrayF((cur, i, iterator) => {
        expect(iterator[i]).toBe(cur);
        return cur + cur;
      }, [0, 1, 2, 3]);
      const arr2 = mapArrayF((cur, i, iterator) => {
        expect(iterator[i]).toBe(cur);
        return "c" + i;
      }, [1, 2, 3, 4]);

      // Then
      expect(arr1).toEqual([0, 2, 4, 6]);
      expect(arr2).toEqual(["c0", "c1", "c2", "c3"]);
    });
    it("test mapObject", () => {
      // When
      const obj1 = mapObjectF((cur, i, iterator) => {
        expect(iterator[i]).toBe(cur);
        return cur + cur;
      }, {a: 1, b: 2, c: 3});

      // Then
      expect(obj1).toEqual({a: 2, b: 4, c: 6});
    });
    it("test mapIterator", () => {
      // Given
      const arr = [1, 2, 3, 4];
      let last = 0;

      // When
      const iterator = mapIteratorF((cur, iter) => {
        ++last;
        expect(arr).toBe(iter);
        return cur + cur;
      }, arr);

      // Then
      let i = 0;
      for (const cur of iterator) {
        ++i;
        expect(cur).toBe(i * 2);
      }
      expect(last).toBe(4);
    });
  });
  describe("describe filter functions", () => {
    it("test filterArray", async () => {
      // When
      const arr1 = filterArrayF((cur, i, iterator) => {
        expect(iterator[i]).toBe(cur);
        return i % 2 === 0;
      }, [0, 1, 2, 3]);

      // Then
      expect(arr1).toEqual([0, 2]);
    });
    it("test filterObject", () => {
      // When
      const obj1 = filterObjectF((cur, i, iterator) => {
        expect(iterator[i]).toBe(cur);
        return cur % 2 > 0;
      }, {a: 1, b: 2, c: 3});

      // Then
      expect(obj1).toEqual({a: 1, c: 3});
    });
    it("test filterIterator", () => {
      // Given
      const arr = [1, 2, 3, 4];
      let last = 0;

      // When
      const iterator = filterIteratorF((cur, iter) => {
        ++last;
        expect(arr).toBe(iter);
        return cur % 2 === 0;
      }, arr);

      // Then
      let i = 0;
      for (const cur of iterator) {
        ++i;
        expect(cur % 2).toBe(0);
      }
      expect(last).toBe(4);
      expect(i).toBe(2);
    });
  });
  describe("describe reduce functions", () => {
    it("test reduceArray", () => {
      const arr = reduceArrayF((prev, cur) => {
        prev.push(cur + 1);
        return prev;
      }, [], [1, 2, 3, 4]);

      expect(arr).toEqual([2, 3, 4, 5]);
    });
    it("test reduceArray", () => {
      // When
      const obj = reduceObjectF((prev, cur, index, iterator) => {
        expect(iterator[index]).toBe(cur);

        prev[index + index] = cur;
        return prev;
      }, ({} as ObjectInterface<number>), {a: 1 , b: 2, c: 3});

      // Then
      expect(obj).toEqual({aa: 1, bb: 2, cc: 3});
    });
    it("test reduceIterator", () => {
      const arr = reduceIteratorF((prev, cur) => {
        prev.push(cur + 1);
        return prev;
      }, [], [1, 2, 3, 4]);

      expect(arr).toEqual([2, 3, 4, 5]);
    });
  });
  describe("describe etc functions", () => {
    it ("test head", () => {
      // Given
      const iter = mapIteratorF(c => c * 2, [1, 2, 3]);

      // When, Then
      expect(head([1, 2, 3])).toBe(1);
      expect(head(iter)).toBe(2);
    });
    it ("test headArray", () => {
      // Then
      expect(headArray([1, 2, 3])).toBe(1);
    });
    it ("test tail", () => {
      // Given
      const iter = mapIteratorF(c => c * 2, [1, 2, 3]);

      // When, Then
      expect(tail([1, 2, 3])).toBe(3);
      expect(tail(iter)).toBe(6);
    });
    it ("test tailArray", () => {
      // When, Then
      expect(tailArray([1, 2, 3])).toBe(3);
    });
  });
});
