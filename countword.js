const paragraph ='I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(str){

var words = str.split(" ").length;
return words;

}
console.log(countWords(paragraph,'love', 'you'));
