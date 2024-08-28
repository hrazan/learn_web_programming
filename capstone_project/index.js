import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const year = new Date().getFullYear();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { year: year })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});