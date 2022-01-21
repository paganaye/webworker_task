// trigger is set for one day and 15 minutes
// although the goal is just to workaround the browser throttling time when inactive
// you can shorten the timer to test your code but it also needs to work the same over several days

const trigger = (1000 * 60 * 60 * 24) + (1000 * 60 * 15)

function test() {
    console.log("worked");
}
