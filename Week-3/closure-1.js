function createIncrement() {
    let count = 0; 
    function increment() {
        count++;
    }
    let message = `Count is ${count}`; 
    function log() {
        console.log(message); 
    }
    return [increment, log];

}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


// output is Count is 0
// Reason: Message is not changed, only count changes, so first value message got of count was 0 which is displayed.
