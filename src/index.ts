import * as yargs from "yargs";

const argv = yargs.options({
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
    alias: "ch",
    demandOption: true,
    description: "chapter number",
  },
}).argv;

console.log(argv);
