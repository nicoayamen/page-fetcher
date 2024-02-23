const fs = require('fs');
const request = require('request');

const arg = process.argv.slice(2);

let downloadURL = arg[0];
let downloadTo = arg[1];


request(downloadURL, (error, statusCode, body) => {
  //console.log('body:', body); 

  fs.writeFile(`${downloadTo}`, body, err => {
    if (err) {
      console.error(err);
    } else {
      fs.stat(`${downloadTo}`, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${downloadTo}`);
        }

      });

    }
  });



});

