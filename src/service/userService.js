// Get the client
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';
import db from '../models';
import user from '../models/user';
const salt = bcrypt.genSaltSync(10);

// Create the connection to database




const hashPassword = (userPassword) => {
    let hashpassword = bcrypt.hashSync(userPassword, salt);
    return hashpassword;
}
const createNewUser = async (email, username, password) => {
    let hashPass = hashPassword(password);

    try {
        await db.User.create({
            username: username,
            email: email,
            password: hashPass
        })
    } catch (err) {
        console.log('Error in example usage:', err);
    }
}
const getUserList = async () => {
    let users = [];
    try {
        users = await db.User.findAll();
        return users;
    } catch (err) {
        console.log('Error in example usage:', err);
    }
}
const deleteUser = async (userid) => {

    try {
        await db.User.destroy({
            where: { id: userid }
        })
    } catch (error) {
        console.log('Error in example usage:', error);
    }
}
const getUserByID = async (id) => {
    let user = {};
    user = await db.User.findOne({
        where: { id: id }
    });
    //console.log(">>> check user findone: ", user);
    return user.get({ plain: true });

}
const updateUserInfo = async (email, username, id) => {
    await db.User.update(
        { email: email, username: username },
        {
            where: {
                id: id,
            },
        },
    );

}
module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserByID,
    updateUserInfo
}