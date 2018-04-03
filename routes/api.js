var User = require('../models/user');


module.exports = function (router) {
    router.post('/users', function(req, res) {
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        if (req.body.name == '' || req.body.name == null || req.body.password == '' || req.body.password == null) {
            res.send('at least one of area is not provided');
        }
        else {
            user.save(function(err) {
                if (err) {
                    res.send('user already exist');
                } 
                else {
                    res.send('user created');
                }
            });
        }
    });
    return router;
}
