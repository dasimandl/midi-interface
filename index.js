var easymidi = require('easymidi');
var inputs = easymidi.getInputs();
var outputs = easymidi.getOutputs();
console.log("🚀 ~ file: index.js ~ line 3 ~ inputs", inputs)
console.log("🚀 ~ file: index.js ~ line 4 ~ outputs", outputs)


var input = new easymidi.Input(inputs[1]);
input.on('noteon', function (msg) {
    console.log("🚀 ~ file: index.js ~ line 4 ~ msg", msg)
});