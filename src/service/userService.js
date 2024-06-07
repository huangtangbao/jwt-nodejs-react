// Get the client
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

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
const getUserList = () => {
    let users = [];
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log('check results: ', results); // results contains rows returned by server
        }
    );
}


module.exports = {
    createNewUser,
    getUserList
}