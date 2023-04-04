function alwaysHungry(arr) {
     arr.forEach(element => {
        if (element=="food" || element=="pie"){
            console.log("Yummy");
        }
        else {
            console.log("I'm hungry");
        }
    });
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
