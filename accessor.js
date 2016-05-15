var mraa = require('mraa');

var writeAtPin = function(pinNr, binary){
    console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
    var myDigitalPin5 = new mraa.Gpio(pinNr); //setup digital read on Digital pin #5 (D5)
    myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output
    myDigitalPin5.write(binary);
};
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
var myDigitalPin6 = new mraa.Aio(2);//call the periodicActivity function
function periodicActivity() //
{
    var myDigitalValue =  myDigitalPin6.read(); //read the digital value of the pin
    console.log('Gpio is ' + myDigitalValue); //write the read value out to the console
    setTimeout(periodicActivity,1000); //call the indicated function after 1 second (1000 milliseconds)
}
