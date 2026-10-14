let div = document.querySelector("div");

// function changeColor(classList, action) {
// return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         if(action == "add") {
//             div.classList.add(classList);
//             resolve();
//         }
//         else{
//             reject();
//             div.classList.remove(classList);
//         }
//     }, 2000);
// })
// }

// changeColor("redcolor", "add")
// .then(() => changeColor("bluecolor", "add"))
// .then(() => changeColor("greencolor", "add"))
// .catch(() => console.log("Error Occurred"));



function changeColor(classList, action, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (action == "add") {
                div.classList.remove("redcolor", "yellowcolor", "greencolor");
                div.classList.add(classList);
                resolve();
            } else {
                div.classList.remove(classList);
                reject();
            }
        }, time);
    });
}

changeColor("redcolor", "add", 2000)
    .then(() => changeColor("yellowcolor", "add", 1000))
    .then(() => changeColor("greencolor", "add", 2000))
    .catch(() => console.log("Error"));



