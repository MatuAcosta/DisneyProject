const express = require('express');
require('dotenv').config();
class Server { 
    constructor({router}){
        this.express = express();
        this.express.use(router);
    }

    start(){
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