// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let distance = Math.abs(someValue - 42);
    return distance;
}

function distanceFromHqInFeet(someValue) {
    let distanceFeet = distanceFromHqInBlocks(someValue) * 264;
    return distanceFeet;
}

function distanceTravelledInFeet(start, destination) {
    let totalRideDistanceFeet = (Math.abs(destination - start) * 264);
    return totalRideDistanceFeet;
}

function calculatesFarePrice(start, destination) {
    let distanceForFare = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distanceForFare <= 400) {
        return farePrice = 0;
    }
    else if (distanceForFare > 400 && distanceForFare <= 2000) {
        return farePrice = (distanceForFare - 400) * 0.02;
    }
    else if (distanceForFare > 2000 && distanceForFare <= 2500) {
        return farePrice = 25;
    } else {
        return "cannot travel that far";
    }
}