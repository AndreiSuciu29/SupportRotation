import express from 'express';
import getSupportRotationHandler from './getSupportRotationHandler';
import notFoundHandler from './notFoundHandler';
const router = express.Router();

router.get('/', getSupportRotationHandler);
router.get('/status', (request, response) => {
    return response.status(200).send('Ok');
});
router.get('/getRotation', getSupportRotationHandler);
router.get('*', notFoundHandler);

export default router;
