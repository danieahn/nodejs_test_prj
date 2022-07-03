"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },    
    login: (req, res) => {
        res.render("home/login");
    },
    skydash: (req, res) => {
        //res.sendFile(__dirname+"/../views/skydash/index.html");
        res.render("skydash/index");
    },
}


const users = {
    userid: ["danieahn", "jiyul", "seoyul", "jiya"],
    password: ["1234", "1234", "1234", "1234"],
};


const process = {
    login: (req, res)=>{
        const userid = req.body.userid;
        const password = req.body.password;
        console.log(`client json request : id = ${userid} password = ${password}`);

        if (users.userid.includes(userid)){
            const idx = users.userid.indexOf(userid);
            if (users.password[idx] === password){
                return res.json({
                    success: true,
                })
            }
        }
    }
};
    
module.exports = {
    output,
    process,
};