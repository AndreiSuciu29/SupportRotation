const notFoundHandler = (request, response, next) => {
    return response.status(404).send('Not found');
}

export default notFoundHandler;