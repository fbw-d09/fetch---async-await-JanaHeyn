const modal = document.getElementById("myModal");
// vorgegebene Funktion:
/* let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 5));
}); 

promiseOfModal.then(function(val) {
    console.log("User has been on the page for 5 seconds");
    val.style.display = "block";
}) */


// async/await Funktion:
function promiseOfModal() {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(modal);    
        }, (1000 * 5));
    })
}

async function fiveSeconds() {
    const fiveSec = await promiseOfModal();
    console.log("User has been on the page for 5 seconds");
    // console.log(fiveSec);
    modal.style.display = "block";
}

// mit try/catch
/* async function fiveSeconds() {
    try {
        const fiveSec = await promiseOfModal();
        console.log("User has been on the page for 5 seconds");
        modal.style.display = "block";
    } catch(error) {
        console.log('Error ');
    }

} */

fiveSeconds();


modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})


// Funktion button
const button = document.getElementById('continue');

function postAnimation() {
    return new Promise((resolve) => {
        button.addEventListener('animationend', () => {
            resolve();
        });
    });
}

async function buttonChange() {
    try {
        const change = await postAnimation();
        button.style.backgroundColor = 'green';
        window.alert('Continue to subscription');
        
    }
    catch(error) {
        console.error('Error: hat wohl nicht funktioniert');
    }
}

buttonChange();