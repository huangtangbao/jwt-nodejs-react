const handleHelloWorld = (req, res) => {
    const name = "pau IT";
    return res.render("home.ejs", { name });
}

//get data from database
const handleuserpage = (req, res) => {
    return res.render("user.ejs");
}

module.exports = {
    handleHelloWorld,
    handleuserpage
}