import supertest from 'supertest';
import app from '../../../src/app';

describe ('getSupportRotationHandler', () => {
    // This test might fail if we get really unlucky because of random
    it('should return 200 and a random support rotation', async () => {
        const firstResponse = await supertest(app).get('/getRotation/?names=Andrei1,Andrei2,Andrei3,Andrei4,Andrei5,Andrei6,Andrei7,Andrei8,Andrei9,Andrei10');
        const secondResponse = await supertest(app).get('/getRotation/?names=Andrei1,Andrei2,Andrei3,Andrei4,Andrei5,Andrei6,Andrei7,Andrei8,Andrei9,Andrei10');
    
        expect(firstResponse.statusCode).toEqual(200);
        expect(secondResponse.statusCode).toEqual(200);

        expect(firstResponse.text).not.toEqual(secondResponse.text);
    });
});
