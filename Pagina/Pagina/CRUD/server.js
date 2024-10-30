const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.sendStatus(200); // Login bem-sucedido
        } else {
            res.status(401).send('Credenciais inválidas');
        }
    });
});

app.post('/Registro', (req, res) => {
    const { nome, email, password } = req.body;
    db.query('INSERT INTO users (nome, email, password) VALUES (?, ?, ?)', [nome, email, password], (err, result) => {
        if (err) throw err;
        res.sendStatus(201); // Usuário registrado com sucesso
    });
});


app.get('/PaginaDoUsuario', (req, res) => {
    const email = req.query.email; // Vamos usar o email para buscar o usuário
    db.query('SELECT id, nome, email FROM users WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results[0]); // Retorna os dados do usuário
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});