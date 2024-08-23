// ref: express.com
// ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
    console.log(req.rawHeaders);
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/razan", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/razan", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/razan", (req, res) => {
    res.sendStatus(200);
});

app.get("/get", (req, res) => {
    res.send("Gotcha!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});