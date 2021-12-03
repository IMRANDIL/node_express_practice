// using express framework

// ............................

// requiring the module.....

const express = require('express');

const app = express();

// routing......

app.get('/', (req, res)=>{
    res.send(`<h1>My frist express js application</h1>`)
});

app.get('/about', (req, res)=>{
    res.send(`<h1>Hi, I'am a Full Stack Developer :)</h1>`)
})



// server setup




app.listen(3000, ()=>{
    console.log('server started on port 3000');
})