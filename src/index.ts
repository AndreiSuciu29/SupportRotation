import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('My first route');
});

//@ts-ignore
app.listen(port, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});
