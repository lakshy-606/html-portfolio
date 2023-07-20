const fs = require("fs");
fs.writeFile("message.txt", "new one ." , (err, data) => {
    if (err) throw err;
    console.log(data);
  });
fs.readFile("message.txt", "utf8" , (err, data) => {
    if (err) throw err;
    console.log(data);
  });