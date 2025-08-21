import Express from 'express';
const app = Express();

app.get('/', (req,res)=>{
    res.send('<h1>Home endpoint</h1>');
});

app.get('/contact', (req,res)=> {
 res.send("<h1>Contact endpoint</h1>");
})

app.get('/about', (req,res)=>{
    res.send('<h1>About endpoint</h1>');
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});