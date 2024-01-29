const yourScore = 80; 
const friendScore = 50;

if (yourScore > 80) {
    if (friendScore > 80) {
        console.log("Go for a lunch.");
    } else if (friendScore >= 60) {
        console.log("Tell your friend, good luck next time.");
    } else if (friendScore >= 40) {
        console.log("Keep your friend's message unseen.");
    } else {
        console.log("Block your friend.");
    }
} else {
    console.log("Go to home and sleep. Act sad.");
}
