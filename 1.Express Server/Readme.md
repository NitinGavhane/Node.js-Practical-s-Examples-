# Express Server Example

This project demonstrates a basic **Express.js** server setup.  

## Steps

### 1. Create Project Directory
```bash
mkdir express-server-example
cd express-server-example
```

### 2. Create `index.js` File
Inside the directory, create a file named `index.js`.

### 3. Initialize and Install Dependencies
```bash
npm init -y
npm install express
```

### 4. Write Code in `index.js`
```javascript
import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### 5. Run the Server
```bash
node index.js
```

### 6. Verify
Open your browser and go to:  
```
http://localhost:3000
```
You should see the server running in your terminal.
