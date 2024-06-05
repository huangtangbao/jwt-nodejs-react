// Get the client
import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});
const handleHelloWorld = (req, res) => {
    const name = "pau IT";
    return res.render("home.ejs", { name });
}

//get data from database
const handleuserpage = (req, res) => {
    return res.render("user.ejs");
}
const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    connection.query(
        'INSERT INTO users(email,username,password) VALUES (?,?,?)', [email, username, password],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log(results); // results contains rows returned by server
        }
    );


    return res.send("handleCreateNewUser");
}

module.exports = {
    handleHelloWorld,
    handleuserpage,
    handleCreateNewUser
}