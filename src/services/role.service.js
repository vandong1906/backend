const Roles =require('../models/role.model')
async function getAll() {
    try {
        return await Roles.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(Role) {
    try {
        await Roles.create({
            Role_permission: Role.Role_permission,
            
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,Role) {
    try {
        const temp = await Roles.findOne(
            {where:{Role_id:params}})

        await temp.update({
            Role_permission:Role.Role_permission,
        })
        await temp.save();
        return Roles.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await Roles.destroy({where:{Role_id:params}})
        return Roles.findAll()
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAll,
    create,
    update,
    remove,
}