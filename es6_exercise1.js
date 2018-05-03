let input = [
    {text: 'ES6 is awesome', type: 'p'},
    {text: 'ES6 is significant update in JS history', type: 'li'},
    {text: 'const creates immutable variables', type: 'li'},
    {text: 'Block scoping via let and const', type: 'li'},
    {text: 'ES6 was released in 2015', type: 'h3'}
];

function printArray(arr){
	for(const {type,text} of arr){
	console.log((type === 'li')?`Element type is ${type} with text ${text}`:'');
	}
}

printArray(input);