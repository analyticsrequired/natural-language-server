import express from "express";
import bodyParser from "body-parser";
import natural from "natural";

const wordTokenizer = new natural.WordTokenizer();
const sentenceTokenizer = new natural.SentenceTokenizer();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/tokenize/words", (req, res) => {
  res.json(wordTokenizer.tokenize(req.body.text));
});

app.post("/tokenize/sentences", (req, res) => {
  res.json(sentenceTokenizer.tokenize(req.body.text));
});

app.post("/ngrams", (req, res) => {
  res.json(natural.NGrams.ngrams(req.body.tokens || [], req.query.n || 2));
});

app.listen(3000, () => console.log("Listening"));
