const request = require('request');
const fs = require('fs');
const par = process.argv.splice(2)
const par1 = par[0]
const par2 = par[1]

request(par1, (error, response, body) => {
    write(par2, body)
   
});

const write = (par2,body) => { fs.writeFile(par2, body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log("Downloaded and saved 1235 bytes to ./index.html.")
  }); 
}