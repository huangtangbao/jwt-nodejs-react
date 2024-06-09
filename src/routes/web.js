import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld);
    router.get("/user", homeController.handleuserpage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.hanleDeleteUser);
    router.get("/edit-user/:id", homeController.hanleEditUser);
    router.post("/users/edit-user", homeController.hanleUpdateUser);
    return app.use("/", router);
}
export default initWebRoutes;
