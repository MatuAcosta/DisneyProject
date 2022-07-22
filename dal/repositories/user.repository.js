const BaseRepository = require("./base.repository");
class UserRepository extends BaseRepository{
    constructor({db,RoleRepository}){
        super(db,'User')
        this.db = db;
    }

     async setRoles(user,roles) { 
        return await user.setRoles(roles)
    } 

    async checkDuplicateUsernameOrEmail(username,email){
        let user = await this.db['User'].findOne({
            where:{
                username
            }
        })
        if(user) return false;
        let userEmail = await this.db['User'].findOne({
            where:{
                email
            }
        })
        if(userEmail) return false;
        return true

    }

    async isAdmin(id){
        let user = await super.getOne(id);
        if(!user) return false;
        let roles = await this.db['user_role'].findAll({
            where:{
                userId:user.id
            }
        }
        )
        if(roles.length === 0) return false;
        return roles.map(r => r.name); 

    }

}

module.exports = UserRepository