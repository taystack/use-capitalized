import useCapitalized from "./";
import { renderHook, act } from "@testing-library/react-hooks";


describe("useMyHook", () => {
  [
    ["hello", "Hello"],
    ["hello world", "Hello world"],
    ["", ""],
  ].forEach(([testCase, expected]) => {
    it(`should ${testCase.length === 0 ? "not " : ""}capitalize the first letter of ${testCase.length > 0 ? testCase : "empty string"}`, () => {
      const { result } = renderHook(() => useCapitalized(testCase));
      expect(result.current).toEqual(expected);
    });
  });
});
