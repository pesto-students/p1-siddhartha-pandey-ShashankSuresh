function createStack() {    
    var a = 83;
    function anotherStack(){
        var b = 17;
        return (a+b);
    }    
    console.log(anotherStack());
}
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => undefined // => will print 15 as it's defined within the scope.
createStack();

