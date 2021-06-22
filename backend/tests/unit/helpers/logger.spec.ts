import logger from "../../../src/helpers/logger";

describe('logger', () => {
    it('expect next to be called', () => {
        const nextMocked = jest.fn();
        logger({url: '/test'}, {}, nextMocked);

        expect(nextMocked).toHaveBeenCalled();
    });
});
