var slaughtering = true;
var landedAHit = Math.floor(Math.random() * 2);
var punchesThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

alert("welcome to the arena");
alert("Your first battle starts now");
var choice = prompt("Who do you want to fight? The bear or the dragon?")

if (choice = "bear") {
    while (slaughtering) {
        if (landedAHit) {
            console.log("You hit the bear and did " + punchesThisRound + " damage!");
            totalDamage += punchesThisRound;

            if (totalDamage >= 4) {
                console.log("You did it! You kicked that bears butt.");
                slaughtering = false;
            } else {
                landedAHit = Math.floor(Math.random() * 2);
            }
        } else {
            console.log("You couldn't defeat the bear.");
            slaughtering = false;
        }
    }

 else if (choice = "dragon") {
     while (slaughtering){
         if (landedAHit) {
             console.log("You hit the dragon and did " + punchesThisRound + " damage!");
             totalDamage += punchesThisRound;

             if (totalDamage >= 4) {
                 console.log("You did it! You kicked that dragon butt.");
                 slaughtering = false;
             } else {
                    landedAHit = Math.floor(Math.random() * 2);
             }
             } else {
                console.log("You couldn't defeat the dragon.");
                slaughtering = false;
             }
     }
 }