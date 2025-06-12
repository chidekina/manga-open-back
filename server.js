const express = require('express');
const supabase = require('./config/supabase');
const UserRouter = require('./routes/UserRoute');

const app = express();
app.use(express.json());

const HOST = 'localhost';
const PORT = 3000;

app.get('/', async (req, res) => {
    res.send('Servidor funcionando!');
});

app.use(UserRouter);

app.listen(PORT,HOST, () => {
    console.log(`Servidor escutando em http://${HOST}:${PORT}`);
})