function makeLine(a, b, c) {
  var hLine = b || a;
  for (var i = 0; i < c; ++i) {
    hLine += a;
  }
  hLine += b || a;
  console.log(hLine);
}

function makeBody(b, c) {
  var vLine = b;
  for (var i = 0; i < c; i++) {
    vLine += ' '
  }
  vLine += b;
  console.log(vLine);
}

function makeBox(a, b, c) {
  // body...
  makeLine(a, c);
  for (var i = 0; i < c / 2; i++) {
    makeBody(b, c)
  }
  makeLine(a, b, c);
}
