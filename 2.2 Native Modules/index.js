const fs = require("fs");

fs.writeFile("coba.txt", "huhaha", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile("coba.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
}); 