/**
 * Created by denkomanceski on 5/15/16.
 */
/**
 * Created by denkomanceski on 5/14/16.
 */
var http = require("http");
var querystring = require('querystring');
var config =  {
    apiUrl: 'sprint-app.4thoffice.com',
    authToken: 'Bearer 2dcd3a28-ebd4-1722-6b6c-e40cea65055b'
};


var sendMailMessage = function(email, title, content) {
    var options = {
        host: config.apiUrl,
        path: '/api/post',
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.4thoffice.post-5.15+json',
            'Accept': 'application/vnd.4thoffice.post-5.15+json',
            'Authorization': config.authToken
        }
    };
    var req = http.request(options, function(res) {
            res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: ${chunk}');
});
    res.on('end', function() {
        console.log('No more data in response.')
})
});

    req.write(JSON.stringify({
        "Name": title,
        "Text": content,
        "ShareList": [
            {
                "$type": "User_14",
                "AccountList": [
                    {
                        "$type": "AccountEmail_14",
                        "Email": email
                    }
                ]
            }
        ]
    }));
    req.end();
};
var sendChatMessage = function(email, content)  {
    getUserId(email, function(res) {
        console.log(res.Id);
    var options = {
        host: config.apiUrl,
        path: '/api/post',
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.4thoffice.post-5.15+json',
            'Accept': 'application/vnd.4thoffice.post-5.15+json',
            'Authorization': config.authToken
        }
    };
    var req = http.request(options, function(res){
            res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: '+JSON.stringify(chunk));
});
    res.on('end', function()  {
        console.log('No more data in response.')
})
});

    req.write(JSON.stringify({
            "Parent": {
                "Id": res.Id
            },
            "Text": content
        }
    ));
    req.end();
})

};
var getUserId = function(email, cb) {
    var options = {
        host: config.apiUrl,
        path: '/api/stream',
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.4thoffice.stream.user-5.3+json',
            'Accept': 'application/vnd.4thoffice.stream.user-5.3+json',
            'Authorization': config.authToken
        }
    };
    var req = http.request(options, function(res) {
            res.setEncoding('utf8');
    res.on('data', function(chunk)  {
        cb(JSON.parse(chunk));
    //console.log(`BODY: ${chunk}`);
});
    res.on('end', function() {
        console.log('No more data in response.')
})
});

    req.write(JSON.stringify( {"User": {
        "$type": "User_14",
        "AccountList": [{
            "$type": "AccountEmail_14",
            "Email": email
        }]
    }
    }));
    req.end();
};
//sendMailMessage('ivica.taseski94@gmail.com', 'Mofo', 'What the heck');

exports.sendChatMessage = sendChatMessage;
