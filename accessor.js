var mraa = require('mraa');

var iterate = function(pinNr){
    var button = new mraa.Aio(pinNr);     // set up digital read on digital pin #5<br>
    button.dir(mraa.DIR_IN);           // set the GPIO direction to input<br><br>
    var buttonState = button.read();   // read the value of the digital pin<br>
    console.log(buttonState);
};
for(var i=0; i<16; i++){
    iterate(i);
}