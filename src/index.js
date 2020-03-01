const app = require('./app');
// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(app.get('port'));
console.log('server on port ', app.get('port'));

