function createStack() {    
    return {
        items: [],
        push(item) {
            this.items.push(15); // adding 5 here would mean it's within the scope of the function createStack.
        },
        pop() {
            return this.items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined
