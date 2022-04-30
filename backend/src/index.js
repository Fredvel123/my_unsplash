import app from './app.js';

const port = app.get('port');


app.get('/', (req, res) => res.json({message: 'Your server is running'}));

app.listen(port, () => console.log(`The server is listening on port ${port}`));
