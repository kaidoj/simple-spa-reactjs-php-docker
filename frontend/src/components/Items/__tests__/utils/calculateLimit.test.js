import { calculateLimit } from "../../utils/calculateLimit";

describe('calculateLimit', () => {
  test('should return double limit', () => {
    window.innerHeight = 800;
    expect(calculateLimit(12)).toBe(24);
  });
  test('should return three times limit', () => {
    window.innerHeight = 1400;
    expect(calculateLimit(12)).toBe(36);
  });
  test('should return default limit', () => {
    window.innerHeight = 600;
    expect(calculateLimit(12)).toBe(12);
  });
});