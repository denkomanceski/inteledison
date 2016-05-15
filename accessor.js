var mraa = require('mraa');

var iterate = function(pinNr, binary){
    console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
    var myDigitalPin5 = new mraa.Gpio(pinNr); //setup digital read on Digital pin #5 (D5)
    myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output
    myDigitalPin5.write(binary);
};
setInterval(function(){
    iterate(6, 1);
    setTimeout(function(){
        iterate(6, 0)
    }, 700);
}, 2000);

