#! /usr/bin/env node

const yargs = require("yargs");

const usage = "\nUsage: bib <version_name> <book_name> <chapter_number> <verse_number>";

const options = yargs
  .usage(usage)
  .option("b", {
    alias: "books",
    describe: "List all supported books.",
    type: "boolean",
    demandOption: false
  })
  .help(true)
  .argv;