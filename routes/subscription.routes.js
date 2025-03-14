import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.send("GET all subscriptions");
});

subscriptionRouter.get("/:id", (req, res) => {
    res.send(`GET subscription with ID: ${req.params.id}`);
});

subscriptionRouter.post("/", (req, res) => {
    res.send('CREATE subscription');
});

subscriptionRouter.put("/:id", (req, res) => {
    res.send(`UPDATE subscription with ID: ${req.params.id}`);
});

subscriptionRouter.delete("/:id", (req, res) => {
    res.send(`DELETE subscription with ID: ${req.params.id}`);
});

subscriptionRouter.get("/user/:id", (req, res) => {
    res.send(`GET subscriptions for the user with ID: ${req.params.id}`);
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send(`CANCEL subscription with ID: ${req.params.id}`);
});

subscriptionRouter.put("/upcoming-renewals", (req, res) => {
    res.send("GET upcoming renewals");
});


export default subscriptionRouter;