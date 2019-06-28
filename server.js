const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')
const http = require('http');
const path = require('path');

const nextI18next = require('./src/i18n')

const port = process.env.PORT || 4000
const app = next({
    dev: process.env.NODE_ENV !== 'production',
	dir: './src',
})
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express()

    server.use('/static', express.static(path.join(__dirname, './static')));

    server.use(nextI18NextMiddleware(nextI18next))

    server.get('*', (req, res) => handle(req, res))

    http.createServer(server).listen(port, () => {
        console.log(`listening on port ${port}`);
    });
});
