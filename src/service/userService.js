// Get the client
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';
const salt = bcrypt.genSaltSync(10);

// Create the connection to database




const hashPassword = (userPassword) => {
    let hashpassword = bcrypt.hashSync(userPassword, salt);
    return hashpassword;
}
const createNewUser = async (email, username, password) => {
    let hashPass = hashPassword(password);
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    try {
        const [rows, fields] = await connection.execute('INSERT INTO users(email,username,password) VALUES (?,?,?)', [email, username, hashPass]);
        return rows;
    } catch (err) {
        console.log('Error in example usage:', err);
    }
}
const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.log('Error in example usage:', err);
    }
}
const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log('Error in example usage:', error);
    }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser
}