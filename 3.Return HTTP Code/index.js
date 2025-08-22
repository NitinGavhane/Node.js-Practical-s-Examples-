import Express from 'express';
const app = Express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/register', (req, res) => {
    res.sendStatus(200);
});

app.get('/login', (req, res) => {
    res.sendStatus(200);
});

app.get('/not-found', (req, res) => {
    res.sendStatus(404);
});

app.get('/error', (req,res) => {
    res.sendStatus(500);
});

app.get('/redirect', (req, res) => {
    res.redirect('/login');
});

app.post('/submit', (req, res) => {
    res.sendStatus(201);
});

app.put('/update', (req, res) => {
    res.sendStatus(200);
});

app.patch('/modify', (req, res) => {
    res.sendStatus(200);
});

app.delete('/delete', (req, res) => {
    res.sendStatus(200);
});