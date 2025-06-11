const express = require('express');
const supabase = require('./config/supabase');

const app = express();
app.use(express.json());

const HOST = 'localhost';
const PORT = 3000;

app.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('mangas')
        .select('*')

    if (error) return res.status(500).json({ error: error.message });

    res.json(data);
});

app.listen(PORT,HOST, () => {
    console.log(`Servidor escutando em http://${HOST}:${PORT}`);
})