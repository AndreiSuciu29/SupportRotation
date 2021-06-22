import supertest from 'supertest';
import app from '../../../src/app';

describe ('notFoundHandler', () => {
    it('should return 404', async () => {
        await supertest(app).get('/testingRandomRoute')
        .expect(404)
        .then((response) => {
            expect(response.text).toEqual('Not found');
        });
    })
});
