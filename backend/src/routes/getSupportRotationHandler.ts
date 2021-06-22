import generateRotation from "../../helpers/generateRotation";

const getSupportRotationHandler = (request, response) => {
    const { names } = request.query;

    try {
    const generatedRotation = generateRotation(names.split(','));

    return response.status(200).send(generatedRotation);
    } catch (error) {
        return response.status(500).send('Something went wrong');
    }
}

export default getSupportRotationHandler;
