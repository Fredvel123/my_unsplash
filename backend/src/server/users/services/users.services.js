import UsersDb from '../model/model.users.js';
import bcrypt  from 'bcryptjs';

export const getAllUsers = async (req, res) => {
    const users = await UsersDb.findAll();
    if(!users.length > 0) {
        res.json({message: 'There are no users added yet'})
    }else {
        res.json(users);   
    }
}

export const deleteUser = async (req, res) => {
    const id = req.id;
    const {password} = req.body
    const passwd = await UsersDb.findOne({where: {id}});
    const passwdCorrect = await bcrypt.compare(password, passwd.password);
    if(passwdCorrect) {
        try {
            await UsersDb.destroy({where: {id}});
            res.json({deleted: true, message: 'Your account was deleted'});
        } catch (err) {
            res.json({deleted: false, message: 'Something was wrong'}) 
        }  
    }else {
        res.json({deleted: false, message: 'Your password is not correct'})
    }
} 