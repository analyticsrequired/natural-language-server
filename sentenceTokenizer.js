import natural from "natural";

export default app => {
  const sentenceTokenizer = new natural.SentenceTokenizer();
  app.post("/tokenize/sentences", (req, res) => {
    const items = sentenceTokenizer.tokenize(req.body.item);
    res.json({ items });
  });
};
