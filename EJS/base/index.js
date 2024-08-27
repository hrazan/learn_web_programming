import express from "express";

const app = express();
const port = 3000;

const today = new Date('August 24, 2024 23:15:30');//new Date()
var _dayType = "";
var _advice = ""
if (today.getDay() == 6 || today.getDay() == 0) {
    _dayType = "a weekend";
    _advice = "it's time to play hard"
}
else {
    _dayType = "a weekday";
    _advice = "it's time to work hard"
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: _dayType, 
        advice: _advice
    });
});

app.listen(port, () => {
    console.log(`Serever running on port ${port}.`);
});
// console.log("Today is " + message);