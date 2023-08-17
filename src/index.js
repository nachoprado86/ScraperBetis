import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const content = "Hello World";
    res.send(content);
});

app.listen(3006, () => {
    console.log ('Exaple app listening on port 3006');
})

export default app;

