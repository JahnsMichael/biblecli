import * as yargs from "yargs";

const args = yargs.options({
  book: {
    alias: "b",
    demandOption: true,
    description: "book name",
  },
  ver: {
    alias: "v",
    demandOption: true,
    description: "translation version name",
  },
  chapter: {
    alias: "c",
    demandOption: true,
    description: "chapter number",
  },
}).argv;

console.log(args);
