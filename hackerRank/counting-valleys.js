// Gary is an avid hiker.He tracks his hikes meticulously, paying close attention to small details like topography.During his last hike he took exactly n steps.For every step he took, he noted if it was an uphill, U , or a downhill,D step.Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.


function countingValleys(n, s) {
    let numberOfValleys = 0;
    let isGoingDown = true;

    function switchUp(isGoingDown) {
        return isGoingDown ? "D" : "U";
    }

    for (let i = 0; i < s.length; i++) {
        let prev = s[i - 1];
        let curr = s[i];
        if (prev === switchUp(isGoingDown) && curr === switchUp(isGoingDown)) {
            isGoingDown = !isGoingDown
            if (s[i] === "U") {
                numberOfValleys += 1;
            }
        }
    }
    return numberOfValleys;
}

countingValleys(8, 'UDDDUDUU')