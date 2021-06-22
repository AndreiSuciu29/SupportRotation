const logger = (request, response, next) => {
    if (request.url !== '/status') {
        console.log(`Request was sent to route: ${request.url}`);
    }

    next();
}

export default logger;