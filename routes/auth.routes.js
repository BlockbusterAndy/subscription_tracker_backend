import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.send("Subscription Tracker API -- auth");
});

authRouter.post("/sign-up", (req, res) => {
    res.send("Sign Up");
});

authRouter.post("/sign-in", (req, res) => {
    res.send("Sign In");
});

authRouter.post("/sign-out", (req, res) => {
    res.send("Sign Out");
});

export default authRouter;