var a = [];

for(var i = 0; i < 18;++i){
  a[i] = Math.floor(Math.random()*100);
}

var b = 7;

var count = 0;

for (var i = 0; i < a.length; ++i){
  if (a[i] === b){
    console.log("FOUND IT! AT i = " + i);
  }
  ++count;
}

function bs (a){
  if (a[i] === b){
    return i;
  } else if () {
  }
}
