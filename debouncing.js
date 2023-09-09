function debounce(func, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(func, delay);

    };

}
function func(){
    console.log('hello');
}

debounce(func,1000)()