function isProString(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
            count = count + 1;
        }
        if (count > 2) {
            return false;
        }
    }

    return true;
}
console.log(isProString('Pahrsener','Sharpener'))