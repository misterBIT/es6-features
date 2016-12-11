const txt = 'The Text';
const cls = 'my-class';

var strHtml1 = '<div class="'+cls+'">'+txt+'</div>'
var strHtml2 = `
    <div class="${cls}">
        ${txt}
    </div>
`

console.log(strHtml1);
console.log(strHtml2);


// Basic literal string creation
var s1 = `In JavaScript '\n' is a line-feed.`

console.log(s1);

// ES6 Multiline strings:
var s2 = `In JavaScript this is
 not legal.`

console.log(s2);

var name = "Bob", time = "today";
// String interpolation
var line = `Hello ${name}, how are you ${time}?`

console.log(line);