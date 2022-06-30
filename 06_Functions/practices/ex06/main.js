function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function: " + nr);
}

getRecursive(3)