const express = require('express');
const supabase = require('./config/supabase');
const UserRouter = require('./routes/UserRoute');
const cors = require('cors');

const app = express();
app.use(cors());
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

app.use(UserRouter);

app.listen(PORT, HOST, () => {
    console.log(`Servidor escutando em http://${HOST}:${PORT}`);
})