// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for(let i=0; i<=musicians.length;i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    return `${facts[i]}!!!`
  }
}

function iLoveTheBeatles(number) {
  var array=[];
  do {
    array.push("I love the Beatles!");
  } while(number<15);
  return array;
}