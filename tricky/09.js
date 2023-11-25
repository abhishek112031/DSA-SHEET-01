var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());





//The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

// One way to fix the stoleSecretIdentity() function is as follows:

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);