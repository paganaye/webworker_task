// this is where the webworker thread should live
var i = 0;

function timedCount() {
    i = i + 1;
    console.log('in webWorker', { i })
    postMessage(i);
    setTimeout(timedCount, 1000);
}

timedCount();