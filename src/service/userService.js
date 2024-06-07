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
const createNewUser = (email, username, password) => {
    let hashPass = hashPassword(password);
    connection.query(
        'INSERT INTO users(email,username,password) VALUES (?,?,?)', [email, username, hashPass],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log(results); // results contains rows returned by server
        }
    );
}
const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let users = [];
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.log('Error in example usage:', err);
    }

}


module.exports = {
    createNewUser,
    getUserList
}