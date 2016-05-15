var mraa = require('mraa');
var http = require('http');
var url = '193.2.179.10:3000';
var officelol = require('./office')
var callApi = function(volume){
    var options = {
        host: '193.2.179.10',
        port : 3000,
        path: '/volume/'+volume,
        method: 'GET'
    };
    var req = http.request(options, function(res) {
            res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: '+chunk);
        });
    res.on('end', function()  {
        console.log('No more data in response.')
        })
    });
    req.end();
};


//callApi(30);
// var writeAtPin = function(pinNr, binary){
//     console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
//     var myDigitalPin5 = new mraa.Gpio(pinNr); //setup digital read on Digital pin #5 (D5)
//     myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output
//     myDigitalPin5.write(binary);
// };
// console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
//
var analogPin0 = new mraa.Aio(2); //setup access analog input Analog pin #0 (A0)
var analogValue = analogPin0.read();
console.log(analogValue);
periodicActivity();
function periodicActivity() //
{

    var myDigitalValue =  analogPin0.read();
    if(myDigitalValue > 500){
        officelol.sendChatMessage('denkomanceski@gmail.com', "Its kinda loud in this room isnt it ? Maybe lower down the volume?")
        //callApi(30);
    } else {
        //callApi(90);
    }
    //read the digital value of the pin
    console.log('Gpio is ' + myDigitalValue); //write the read value out to the console
    setTimeout(periodicActivity,1000); //call the indicated function after 1 second (1000 milliseconds)
}
