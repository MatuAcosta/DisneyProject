const express = require('express');
const bp = require('body-parser')
require('dotenv').config();
class Server { 
    constructor({router}){
        this.express = express();
        this.express.use(router);
    }

    start(){
        this.express.use(bp.json());
        this.express.use(bp.urlencoded({
            extended:true
        })); 
        this.express.use(function(req, res, next) {
            res.header(
              "Access-Control-Allow-Headers",
              "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });
        return new Promise((resolve,reject) => {
            const http = this.express.listen(process.env.PORT,()=>{
                const {port} = http.address();
                console.log('running on port', port);
                resolve();
            })
        })
    }
}
module.exports = Server;