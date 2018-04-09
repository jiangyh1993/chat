var User = require('../models/user');


module.exports = function (router) {
    //user register
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


    //user login
    router.post('/auth', function(req, res) {
        User.findOne({uname: req.body.name}).select('name password').exec(function(err, user){
            if (err) throw err;
            if (!user) {
                res.json({success: false, message: 'could not auth user'});
            }
            else if (user) {
                var validPassword = user.comparePassword(req.body.password);
                if (!validPassword) {
                    res.json({success: false, message: 'could not auth password'});
                }
                else {
                    res.json({success: true, message: 'auth success'});
                }
            }
        })
    });
    return router;
}
