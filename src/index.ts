import yargs from "yargs";
import axios from "axios";
import parser from "xml2json";

const args = yargs.options({
  book: {
    alias: "b",
    description: "book name",
  },
  passage: {
    alias: "p",
    demandOption: true,
    description: "passage",
  },
  ver: {
    alias: "v",
    default: "",
    description: "translation version name",
  },
  chapter: {
    alias: "c",
    description: "chapter number",
  },
}).argv;

axios
  .get(`http://alkitab.sabda.org/api/passage.php?passage=${args["passage"]}`)
  .then((res) => {
    console.log(parser.toJson(res.data));
  });
