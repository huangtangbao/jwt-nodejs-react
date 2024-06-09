import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
    const name = "pau IT";
    return res.render("home.ejs", { name });
}

//get data from database
const handleuserpage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
}
const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    userService.createNewUser(email, username, password);

    return res.redirect("/user");
}
const hanleDeleteUser = async (req, res) => {

    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}
const hanleEditUser = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserList(id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];
    }
    console.log(">>> check user: ", user);
    return res.render("user-update.ejs", { userData });
}
const hanleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;
    await userService.updateUserInfo(email, username, id);
    return res.redirect("/user");
}

module.exports = {
    handleHelloWorld,
    handleuserpage,
    handleCreateNewUser,
    hanleDeleteUser,
    hanleEditUser,
    hanleUpdateUser
}