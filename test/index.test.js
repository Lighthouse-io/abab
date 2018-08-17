import * as abab from '../src'
import { get } from './fixtures'

['atob', 'btoa'].forEach(abFnKey => {
  const abFn = abab[abFnKey];
  const cases = get(abFnKey)

  test(`${abFnKey} rejects symbol input`, () => {
    expect(() => abFn(Symbol.iterator)).toThrow(TypeError)
  })

  cases.forEach(testCase => {
    test(
      `correctly converts ${testCase.inputDescriptor} into ${testCase.expectedDescriptor}`,
      () => {
        expect(abFn(testCase.input)).toEqual(testCase.expected)
      }
    );
  });
});
