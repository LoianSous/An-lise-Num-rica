const express = require('express');
const path = require('path');
const port = 3101;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.status(200).render('index');
});

app.listen(port, () => {
    console.log(`Aplicação iniciada na porta ${port}`);
});
