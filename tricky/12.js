var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


//(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)


