function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
        return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));