import express from "express";
import bodyParser from "body-parser";
import ngrams from "./ngrams";
import sentenceTokenizer from "./sentenceTokenizer";
import wordTokenizer from "./wordTokenizer";
import transformFilterStopWords from "./transformFilterStopWords";
import transformLowercase from "./transformLowercase";
import transformStem from "./transformStem";
import tfidf from "./tfidf";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("natural-language-server"));

ngrams(app);
sentenceTokenizer(app);
wordTokenizer(app);
transformFilterStopWords(app);
transformLowercase(app);
transformStem(app);
tfidf(app);

app.listen(port, () => console.log(`Listening on ${port}`));
