function makeLine(c, t) {
  var hLine = t || c;
  for (var i = 0; i < 9; ++i) {
    hLine += c;
  }
  hLine += t || c;
  console.log(hLine);
}

function makeBody(c) {
  var vLine = '';
  vLine += c;
  for (var i = 0; i < 9; i++) {
    vLine += ' '
  }
  vLine += c;
  console.log(vLine);
}

function makeBox(a, b) {
  // body...
  makeLine(a, b);
  for (var i = 0; i < 4; i++) {
    makeBody(b)
  }
  makeLine(a, b);
}
