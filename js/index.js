#!/usr/bin/env node

const fs   = require("fs");
const args = process.argv.slice(2);
let text   = "";

function run() {
  const sequences = text.split(/\W+/)
  .filter(x => x)
  .reduce((accum, el, idx, arr) => {
    let seq = arr.slice(idx, idx+3)
    if (seq.length === 3) {
      let _seq = seq
        .map(w => w.toLowerCase())
        .join(" "); // normalized

      accum.hasOwnProperty(_seq)
        ? accum[_seq] += 1
        : accum[_seq] = 1
    }
    return accum;
  },{});

  // sort sequences by frequency
  Object.entries(sequences)
  .sort((a,b) => b[1] - a[1])
  .slice(0,99)
  .forEach(seq => console.log(seq.reverse().join(" - ")));
}

if (process.stdin.isTTY) {
  if (args.length === 0) throw new Error("requires stdin or args");
  args.forEach(path => {
    let fileText = fs.readFileSync(path, "utf8");
    text += fileText;
  });
} else {
  text += fs.readFileSync('/dev/stdin').toString();
}
run();
