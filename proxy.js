const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use('/', async (req, res) => {
    try {
        const url = 'https://vscode.dev' + req.originalUrl;
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('text/html')) {
            const html = await response.text();
            res.send(html);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
