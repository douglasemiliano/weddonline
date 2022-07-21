const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(__dirname + '/dist/online-wedding'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/online-wedding/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT)
})