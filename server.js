const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<html><body><h1 style="background:red">Hello there</h1></body></html>')
})

app.get('/api/user', (req, res) => {
    res.send({
        name: 'francis',
        lastname: 'jones'
    });
})

const port = process.env.PORT || 3000;
app.listen(port);