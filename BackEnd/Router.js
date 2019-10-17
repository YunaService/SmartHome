const bcrypt = require('bcrypt');

//Philips-Hue
const Hue           = require('philips-hue');
const hue           = new Hue();
hue.bridge          = "192.168.0.132"; //CANGE ME
hue.username        = "sDCY2vMQlDjmbiL9OJFFhfIWWWwKzsiDn7yArbP6";


class Router {

    constructor(app, db){
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);

        this.lichtan(app, db);
        this.lichtaus(app, db);

        this.customevalue(app, db);
    }

    login(app, db){
        app.post('/login', (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            
            username = username.toLowerCase();

            if(username.length > 12 || password.length > 12){
                res.json({
                    success: false,
                    msg: 'An error occured, please try again'
                })
                return;
            }
            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'An error occured, please try again'
                    });
                    return;
                }

                //Found 1 user with this username
                if(data && data.length === 1){
                    bcrypt.compare(password, data[0].password, (bcrypt, vertified) => {
                        if(vertified){

                            req.session.userID = data[0].id;
                            res.json({
                                success:true,
                                username: data[0].username,
                                credits: data[0].credits
                            })
                            return;
                        } else {
                            res.json({
                                success:false,
                                msg: 'Invalid password'
                            })
                        }
                    });
                }else{
                    res.json({
                        success:false,
                        msg: 'Username do not exists!'
                    })
                }
            });

        })
    }

    logout(app, db){
        app.post('/logout', (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            if(req.session.userID){
                req.session.destroy();
                res.json({
                    success:true
                })
                return true;
            }else{
                res.json({
                    success:false
                })
                return false;
            }
        })
    }

    isLoggedIn(app, db){
        app.post('/isLoggedIn', (req, res) => {
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if(data && data.length===1){
                        res.json({
                            success: true,
                            username: data[0].username,
                            credits: data[0].credits
                        })
                        return true;
                    }else{
                        res.json({
                            success: false
                        })
                    }
                })
            }else{
                res.json({
                    success:false
                })
            }
        })
    }
    lichtan(app, db){
        app.post('/lichtan', (req, res) => {
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if(data && data.length===1){
                        hue.light(2).on();
                        res.json({
                            success: true,
                            msg: "Licht AN!"
                        })
                        return true;
                    }else{
                        res.json({
                            success: false
                        })
                    }
                })
            }else{
                res.json({
                    success:false
                })
            }
        })
    }

    lichtaus(app, db){
        app.post('/lichtaus', (req, res) => {
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if(data && data.length===1){
                        hue.light(2).off();
                        res.json({
                            success: true,
                            msg: "Licht AUS!"
                        })
                        return true;
                    }else{
                        res.json({
                            success: false
                        })
                    }
                })
            }else{
                res.json({
                    success:false
                })
            }
        })
    }

    customevalue(app, db){
        app.post('/customevalue', (req, res) => {
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if(data && data.length===1){

                        let cols = [req.body.cvv, req.body.cvid];
                        console.log(cols);
                        db.query("UPDATE `customevalues` SET `value` = '?' WHERE `customevalues`.`id` = '?';", cols, (err, data, fields) => {
                            console.log(err);
                            console.log(data);
                            if(err){
                                res.json({
                                    success: false,
                                    msg: err
                                });
                            }else{
                                res.json({
                                    success: true, 
                                    msg: "Wurde erfolgreich geändert..."
                                });
                            }

                        })
                        return true;
                    }else{
                        res.json({
                            success: false
                        })
                    }
                })
            }else{
                res.json({
                    success:false
                })
            }
        })
    }
}

module.exports = Router;