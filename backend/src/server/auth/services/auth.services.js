import UsersDB from "../../users/model/model.users.js";

export const createNewUser = async (req, res) => {
    const { full_name, email, nick_name, password } = req.body;
    if (password.length >= 6 & password.length <= 25) {
        if(full_name.length > 5 & full_name.length <= 35 ) {
            if(nick_name.length >= 5 & nick_name.length <= 25) {
                if (email.length > 0) {
                    res.json({ 
                        userCreated: true, 
                        message: "Your user was created successfully"
                    });
                }else {
                    res.json({
                        userCreated: false,
                        message: "Missing email, please add a valid email",
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
};
