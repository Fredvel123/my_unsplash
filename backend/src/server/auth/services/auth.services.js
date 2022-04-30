import UsersDB from "../../users/model/model.users.js";
import bcrypt from 'bcryptjs';


export const createNewUser = async (req, res) => {
    const { full_name, email, nick_name, password } = req.body;
    const email_repeated = await UsersDB.findOne({where: {email: email}});
    const nick_name_repeated = await UsersDB.findOne({where: {nick_name: nick_name}});
    if(email_repeated || nick_name_repeated) {
        res.json({userCreated: false, message: 'Your email or nick name is already used'})
    } else {
        if (password.length >= 6 & password.length <= 25) {
            if(full_name.length > 5 & full_name.length <= 35 ) {
                if(nick_name.length >= 5 & nick_name.length <= 25) {
                    if (email.length > 0) {
                        const passHashed = await bcrypt.hash(password, 10);
                        const user = await UsersDB.create({
                            full_name, email, nick_name,
                            password: passHashed
                        })
                        res.json({ 
                            userCreated: true, 
                            message: "Your user was created successfully",
                            data: user
                        });
                    }else {
                        res.json({
                            userCreated: false,
                            message: "Missing email, please add a valid email"
                        });
                    }
                } else {
                    res.json({
                        userCreated: false,
                        message: "your nick name must be greater than 5 characterers and less than 25",
                    });
                }
            }else {
                res.json({
                    userCreated: false,
                    message: "Missing your name, your name must be greater than 5 characterers and less than 35",
                });
            }
        } else {
            res.json({
                userCreated: false,
                message: "Missing password, your password should be greater than 5 characteres and less than 25",
            });
        }
    }
};

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const email_exists = await UsersDB.findOne({where: email});
    if(email_exists) {
        res.json(email_exists)
    }else {
        res.json({message: 'fuck you'})
    }
};