try {
    document.getElementById('main-history').onclick = function () {
        console.log('history works')
    }
}
catch (err) {
    console.log("error exception works")
}

try {
    document.getElementById('main-index').onclick = function () {
        console.log('index works')
    }
}
catch (err) {
    console.log("error exception works")
}