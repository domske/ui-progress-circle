import { isSafeNumber } from './type-guards';

describe('type-guards', () => {
  test('isSafeNumber', () => {
    expect(isSafeNumber(0)).toBeTruthy();
    expect(isSafeNumber(1)).toBeTruthy();
    expect(isSafeNumber(-1)).toBeTruthy();
    expect(isSafeNumber(42)).toBeTruthy();
    expect(isSafeNumber(1.23)).toBeTruthy();
    expect(isSafeNumber('')).toBeFalsy();
    expect(isSafeNumber('42')).toBeFalsy();
    expect(isSafeNumber(null)).toBeFalsy();
    expect(isSafeNumber(undefined)).toBeFalsy();
    expect(isSafeNumber(NaN)).toBeFalsy();
    expect(isSafeNumber(Infinity)).toBeFalsy();
    expect(isSafeNumber(-Infinity)).toBeFalsy();
    expect(isSafeNumber(Number.POSITIVE_INFINITY)).toBeFalsy();
    expect(isSafeNumber(Number.NEGATIVE_INFINITY)).toBeFalsy();
    expect(isSafeNumber({})).toBeFalsy();
    expect(isSafeNumber(1 / 0)).toBeFalsy();
    expect(isSafeNumber(true)).toBeFalsy();
    expect(isSafeNumber(false)).toBeFalsy();
    expect(isSafeNumber(BigInt(12))).toBeFalsy();
    expect(isSafeNumber('0x12')).toBeFalsy();
  });
});
