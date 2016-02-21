// 1 = wink
// 10 = double blink
// 100 = close your eyes
// 1000 = jump

// var Error = function(message){
// 	this.message = message;
// };

var SecretHandshake = function(input){

	var secretArray = ['wink', 'double blink', 'close your eyes', 'jump'];
	var binary = input.toString(2);
	var number = Number(binary);
	var binaryArray = binary.split('');
		if(binary.length>4){
			number = Number(binaryArray.splice(binary.length-4,4).join(''));
		}
	var array = [];

	this.commands = function(){
		if(Number(input)){
			if(number - 1000 >= 0){
				array.push('jump');
				number = number - 1000;
				return this.commands();
			} else if(number - 100 >= 0){
				array.push('close your eyes');
				number = number - 100;
				return this.commands();
			} else if(number - 10 >= 0){
				array.push('double blink');
				number = number - 10;
				return this.commands();
			} else if(number - 1 >= 0){
				array.push('wink');
				number = number - 1;
				return this.commands();
			}
		return array;
		} else {
			// throw new Error('Handshake must be a number');
		}
	};

};

module.exports = SecretHandshake;
