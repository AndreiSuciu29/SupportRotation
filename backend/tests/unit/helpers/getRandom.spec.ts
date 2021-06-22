import getRandom from "../../../src/helpers/getRandom";

describe('getRandom', () => {
    it('should generate a number inside the range', () => {
        const randomNumber = getRandom(1, 5);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(5);
    });
});
