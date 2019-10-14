const bcrypt = require('bcrypt');


class Router {

    constructor(app, db){
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
        this.getCredits(app, db);
        this.getAccessorys(app, db);
        this.getItems(app, db);
        //buyAccessorys
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

    getCredits(app, db){
        app.post('/getCredits', (req, res) => {
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if(data && data.length == 1){
                        res.json({
                            success: true,
                            username: data[0].username,
                            credits: data[0].credits
                        })
                        return true;
                    }else{
                        res.json({success:false})
                    }
                })
            }else{
                res.json({success:false})
            }
        })
    }

    getAccessorys(app, db){
        app.post('/getAccessorys', (req, res) => {
            db.query('SELECT * FROM `accessory`', (err, data, fields) => {
                if(err){
                    res.json({success: false})
                    return false;
                }
                res.json({
                    success: true,
                    accessorys: data
                })
                return true;
            })
        })
    }

    getItems(app, db){
        app.post('/getItems', (req, res) => {
            db.query('SELECT * FROM `item`', (err, data, fields) => {
                if(err){
                    res.json({success: false})
                    return false;
                }
                res.json({
                    success: true,
                    accessorys: data
                })
                return true;
            })
        })
    }

    getInventory(app, db){
        app.post('/getInventory', (req, res) => {
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if(data && data.length===1){
                        db.query('SELECT id, name, description, image FROM `userinventory`, `item` WHERE user_id = ? and `userinventory`,`item_id` = `item`.`id`',cols, (err, data, fields) => {
                            if(err){
                                res.json({success: false})
                                return false;
                            }
                            res.json({
                                success: true,
                                accessorys: data
                            })
                            return true;
                        })
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