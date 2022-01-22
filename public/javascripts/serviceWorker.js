// this is where the webworker thread should live
var i = 0;

function timedCount() {
    i = i + 1;
    console.log('in serviceWorker', { i })
    // postMessage(i); postMessage doesn't exist in service workers
    setTimeout(timedCount, 1000);
}

timedCount();