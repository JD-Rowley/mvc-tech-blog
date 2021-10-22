const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs =require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'It is a secret to everyone',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

// use routes in controllers directory
app.use(require('./controllers'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App live on port ${PORT}!`));
});