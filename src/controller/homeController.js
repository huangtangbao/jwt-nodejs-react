import userService from "../service/userService";

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

    userService.createNewUser(email, username, password);
    userService.getUserList();
    return res.send("handleCreateNewUser");
}

module.exports = {
    handleHelloWorld,
    handleuserpage,
    handleCreateNewUser
}