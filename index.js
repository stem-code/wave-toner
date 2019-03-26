// dependencies
let express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path");

let app = express();
let env = process.env.NODE_ENV || 'development';

console.log("The app is running in a ", env, " environment!")

let forceSSL = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
 };


if (env === 'production') {
    app.use(forceSSL);
}


app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(require('./api/root'));

app.use(express.static(path.join(__dirname, '/public/dist/tone-project'))); // serve Angular

app.listen(app.get('port'), () => {
    console.log("NodeJS App has started on port:", app.get('port'));
});