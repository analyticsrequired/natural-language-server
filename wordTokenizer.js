import natural from "natural";

export default app => {
  const wordTokenizer = new natural.WordTokenizer();
  app.post("/tokenize/words", (req, res) => {
    const items = wordTokenizer.tokenize(req.body.item);
    res.json({ items });
  });
};
