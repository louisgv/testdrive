function fl(i) {
  for (; i > 0; --i) {
    console.log("FOR LOOP " + i);
  }
}
fl(9)

function rl(a) {
  if (a !== 0) {
    console.log("RECURSIVE LOOP " + a);
    rl(--a);
  }
}

rl(9);
