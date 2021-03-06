const express = require('express');
const path = require('path');
const routes = require('./api/routes');
const app = express();

app.set("port", 5353);

app.use(express.static(path.join(__dirname, "public")));
app.use('/api', routes);
const server = app.listen(app.get("port"), () => {
    console.log(`now listening on ${server.address().port}`);
});