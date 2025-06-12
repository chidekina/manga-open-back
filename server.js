const express = require('express');
const supabase = require('./config/supabase');

const app = express();
app.use(express.json());

const HOST = 'localhost';
const PORT = 3000;

app.get('/', async (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(PORT,HOST, () => {
    console.log(`Servidor escutando em http://${HOST}:${PORT}`);
})