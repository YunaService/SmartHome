const bcrypt = require('bcrypt');
let passwrd = bcrypt.hashSync('12345', 9); //$2b$09$tCDWenxC3I7jd50yKcC/Vu.JKpmMVFgouPXEVBvCb.HkklC9YSUcG
console.log(passwrd);
