function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    return new Promise((resolve, reject) => {
        let result = tossCoin();
        while (headsCount < 5) {
            attempts++;
            if (result === "heads") {
                headsCount++;
                resolve("It's heads");
            } else {
                reject ("Oops! It's not heads");
            }
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");