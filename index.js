var easymidi = require('easymidi');
var input = new easymidi.Input('MIDI Input Name');
input.on('noteon', function (msg) {
    console.log("🚀 ~ file: index.js ~ line 4 ~ msg", msg)
});