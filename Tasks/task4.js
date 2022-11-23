import http from "http"
import fs from "fs"

function getComics() {
    let marvelAPI = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9854b8e4b27fc23cee42074842d70d1f&hash=717cc39ceaaa4fe4232c53d767d1cfd8';
    http.get(marvelAPI, function(res) {
        let body = "";
        res.on('data', function (chunk) {
            body += chunk;
        });
        let dir = './characters';

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        res.on('end', function() {
            let result = JSON.parse(body);

            result.data.results.map(x => {
                let newObject = {
                    ID: x.id,
                    Name: x.name,
                    Description: x.description,
                    Modified: x.modified
                }

                let JsonFile = JSON.stringify(newObject);

                var writeStream = fs.createWriteStream(`Characters/${x.name}.json`);
                writeStream.write(JsonFile);
                writeStream.end();
            })
        })
    })
       
    };

getComics();