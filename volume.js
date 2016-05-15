var exec = require('child_process').exec;

var makeMeCry = function(volume){
    var cmd = "osascript -e 'set volume output volume "+volume+"'";
    exec(cmd, function() {
        console.log("I AM DONE BITCH")
    });
}
makeMeCry(-120);
setTimeout(function(){makeMeCry(99)}, 5000);
