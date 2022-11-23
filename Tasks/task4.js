import http from "http"

function getComics() {
    let marvelAPI = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9854b8e4b27fc23cee42074842d70d1f&hash=717cc39ceaaa4fe4232c53d767d1cfd8';
    http.get(marvelAPI, function(res) {
        let body = "";
        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function() {
            let result = JSON.parse(body);
        })
    })
       
    };

getComics();