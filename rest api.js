const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/works', (req, res) => {
    res.json(worksData);
});
app.get('/works/:type', (req, res) => {
    const workType = req.params.type;
    res.json(filteredWorks);
});
app.get('/works/search', (req, res) => {
    const artistName = req.query.artist;
    res.json(searchResults);
});
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.json({ message: 'User registered successfully.' });
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});