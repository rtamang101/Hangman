var wins = 0;
var losses = 0;
var tries = 11;

var bands =['Led Zeppelin', 'Nirvana', 'Beatles', 'Pink Floyd','Pearl Jam', 'AC DC', 'Radiohead', 'Black Sabbath', 'Aerosmith','Def Leppard', 'Metallica', 'Queen', 'Creed','The Doors','RATM', 'Coldplay', 'Avenged Sevenfold', 'Megadeth', 'The Who', 'Red Hot Chilli Peppers', 'The Rolling Stones', 'Linkin Park','Green Day', 'Lynrd Skynyrd', 'Soundgarden', 'Stone Temple Pilots', 'Creedence Clearwater Revival', 'Iron Maiden', 'Slipknot'];

function reset() {
    tries = 11;
    document.getElementById('tries').innerHTML = tries;
    randomWord = bands[Math.floor(Math.random() * bands.length)].toUpperCase();
    guessAlpha = [];
    document.getElementById('guess').innerHTML = guessAlpha;
    space = [];
    for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] == " ") {
                space.push("^");
            } else {
                space.push("_");
            }
    }
    word();
}

function check() {
    var x = space.indexOf("_");
    if (x < 0) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("Yay!! you got it right!!! The bands name was "+randomWord);
        console.log(randomWord);
        reset();
    }
}


function word(){
    correctWord = "";
    for (var i = 0; i < randomWord.length; i++) {
        correctWord += space[i] + " ";
    }
    document.getElementById("word").innerHTML = correctWord.replace(/\^/gi, '&nbsp');
}

document.getElementById("wins").innerHTML = wins;
document.getElementById('loss').innerHTML = losses;
document.getElementById('guess').innerHTML = tries;

var randomWord = bands[Math.floor(Math.random() * bands.length)].toUpperCase();

var space = [];
var guessAlpha = [];


for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] == " ") {
        space.push("^");
    } else {
        space.push("_");
    }
}
word();

document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode);
    document.getElementById('execute').style.display = 'none';

	if (guessAlpha.includes(guess)) {}
	else {
    	guessAlpha.push(guess)
    	document.getElementById('guess').innerHTML = guessAlpha.join(" ");
		if (randomWord.includes(guess)) {
    		var toChar = guess.charAt(0);
    		var missed = 0;

			for (var k = 0; k < randomWord.length; k++) {
    			if (randomWord[k] == toChar) {
        			space[k] = toChar;
         word();
        		}
			}
		} 
	
		else {
           tries--;
            if (tries == 0) {
                losses++;
                document.getElementById('loss').innerHTML = losses;
                alert("Sorry, the correct answer was " + randomWord);
                reset();
            }
            document.getElementById('tries').innerHTML = tries;
        }
    }
check();
}