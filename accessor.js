var mraa = require('mraa');

var iterate = function(pinNr){
    console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
    var myDigitalPin5 = new mraa.Gpio(pinNr); //setup digital read on Digital pin #5 (D5)
    myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output
    myDigitalPin5.write(1);
};

    iterate(6);
