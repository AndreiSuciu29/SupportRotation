import app from './app';

const PORT = 3000;

//@ts-ignore
app.listen(PORT, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${PORT}`);
});
