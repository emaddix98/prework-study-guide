var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var Randomtopic = [Math.floor(Math.random() * topics.length)];
function ListTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


function SelectTopic(){
    if (topics[Randomtopic] === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topics[Randomtopic] === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topics[Randomtopic] === 'Git') {
        console.log("Let's study Git!");
    } else if (topics[Randomtopic] === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else{
        console.log('Please try again!');
    }
}

console.log("Here are the topics we learned through prework");
ListTopics();
console.log("which topic should we study first?");
SelectTopic();