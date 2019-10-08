import express from "express";
import bodyParser from "body-parser";
import ngrams from "./ngrams";
import sentenceTokenizer from "./sentenceTokenizer";
import wordTokenizer from "./wordTokenizer";
import transformFilterStopWords from "./transformFilterStopWords";
import transformLowercase from "./transformLowercase";
import transformStem from "./transformStem";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("natural-language-server"));

ngrams(app);
sentenceTokenizer(app);
wordTokenizer(app);
transformFilterStopWords(app);
transformLowercase(app);
transformStem(app);

app.listen(3000, () => console.log("Listening"));
