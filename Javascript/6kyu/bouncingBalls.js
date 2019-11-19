/**
 * Bouncing Ball
 * 
 * A child is playing with a ball on the nth floor of a tall building. 
 * The height of this floor, h, is known.
 * He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height 
 * (a bounce of 0.66).
 * His mother looks out of a window 1.5 meters from the ground.
 * How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

 * Three conditions must be met for a valid experiment:
 * Float parameter "h" in meters must be greater than 0
 * Float parameter "bounce" must be greater than 0 and less than 1
 * Float parameter "window" must be less than h.
 * If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
 * 
 * @summary Count the number of times a mother sees a ball bounce from outside her window.
 * @link https://www.codewars.com/kata/bouncing-balls/train/javascript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 */

// --- Tests ---

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(3, 1, 1.5)); // -1

// --- Helper Functions ---

/** 
 * @param {Number} ballHeight The point where the ball is dropped 
 * @param {Number} bounce the reduction of bounce once it hits the ground
 * @param {Number} window the height of the window 
 * @returns {Number} The number of times the mother sees the ball bounce
 */

function bouncingBall(ballHeight, bounce, window) {

    // returns -1 for falsy values
    if(ballHeight <= 0 || bounce <= 0 || bounce >= 1 || window >= ballHeight) {
        return -1;
    }

    var momSeenBounce = 0;
    var currentHeight = ballHeight;

    while (currentHeight > window) {
        momSeenBounce = sawBounce(momSeenBounce);
        currentHeight = calcNewHeight(currentHeight, bounce);

        if(currentHeight > window) {
            momSeenBounce = sawBounce(momSeenBounce);
        }
    }

    return momSeenBounce;
}

/**
 * @param {Number} currentSeenNumber  
 * @returns {Number} Adds one to amount of times the bounce has been seen
 */

function sawBounce(currentSeenNumber) {
    return currentSeenNumber + 1;
}

/**
 * @param {Number} ballHeight 
 * @param {Number} bounce
 * @returns {Number} new height  
 */

function calcNewHeight(ballHeight, bounce) {
    return ballHeight * bounce;
}