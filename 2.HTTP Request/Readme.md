# Express.js Basic Server with Multiple Endpoints

This project demonstrates a simple **Express.js** server with multiple routes.

## Steps to Run

### 1. Create Project Directory
```bash
mkdir express-multi-endpoint
cd express-multi-endpoint
```

### 2. Initialize Project and Install Express
```bash
npm init -y
npm install express
```

### 3. Create `index.js` File
Paste the following code inside `index.js`:

```javascript
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home endpoint</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact endpoint</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About endpoint</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### 4. Run the Server
```bash
node index.js
```

### 5. Verify Endpoints
- [http://localhost:3000/](http://localhost:3000/) → Home endpoint  
- [http://localhost:3000/contact](http://localhost:3000/contact) → Contact endpoint  
- [http://localhost:3000/about](http://localhost:3000/about) → About endpoint  
