const request = require("request");
const fs = require('fs');
const url = process.argv[2]
const localPath = process.argv[3]


const fetchandsave = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("failed", error)
      return
    }
    fs.writeFile(localPath, body, (error) => {
      if (error){
        console.log('failed to local', localPath)
      } else {
        console.log(`downloaded ${body.length} bytes${localPath}`)
      }
    })
  })
}
if (!url || !localPath){
console.log("2 parameters are required")
} else {
  fetchandsave(url, localPath)
}
