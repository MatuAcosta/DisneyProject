const BaseRepository = require("./base.repository");
class UserRepository extends BaseRepository{
    constructor({db,RoleRepository}){
        super(db,'User')
        this.db = db;
        this.roleRepository = RoleRepository
    }
    async getUserByUsername(username){
        return await this.db['User'].findOne({
            where:{
                username
            }
        })
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
        try {
            let user = await super.getOne(id);
            if(!user) return false;
            let roles = await this.db['user_role'].findAll({
                attributes:['roleId'],
                where:{
                    userId:user.id
                }
            }
            )
            if(roles.length === 0) return false;
            console.log('aca')
            return Promise.all(
                roles.map(async r => {
                    let id = r.dataValues.roleId;
                    let role =  await this.roleRepository.getOne(id)
                    return role.name
                }
                ) 
            ) 
        } catch (error) {
            console.log(error)
        }
       

    }

}

module.exports = UserRepository