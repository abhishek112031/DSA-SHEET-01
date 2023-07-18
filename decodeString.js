function decodeString(s) {
    const stack = [];
    for (const c of s) {
        if (c !== ']') {
            stack.push(c);
            continue;

        }

        let str = "";
        let num = "";

        while (stack[stack.length - 1] !== '[') {
            str = stack.pop() + str;
        }
        stack.pop();
        while (parseInt(stack[stack.length - 1])) {
            num = stack.pop() + num;
        }
        const segment = str.repeat(Number(num));
        stack.push(segment);
    }
    return stack.join("");
}
let s = "3[a2[c]]";
console.log(decodeString(s));