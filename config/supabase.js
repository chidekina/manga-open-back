require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const apiKey = process.env.API_KEY;
const urlApi = process.env.URL_API;

const supabase = createClient(urlApi, apiKey, { db: { schema: 'manga_open' } });

module.exports = supabase;