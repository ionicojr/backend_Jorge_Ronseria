const storage = require('../storage'),
      path = require('path');

const routes = (app) => {
    app.get('/search', (req, res) => {
        storage.getDataAll()
            .then((data) => {
                res.json({ "error": false, "datos": data });
            })
            .catch((err) => {
                res.json({ "error": true, "datos": err });
            });
    }); 

};

module.exports = routes;