import UsersDb from '../model/model.users.js';

export const getAllUsers = async (req, res) => {
    const users = await UsersDb.findAll();
    if(!users.length > 0) {
        res.json({message: 'There are no users added yet'})
    }else {
        res.json(users);   
    }
}

