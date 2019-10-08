import natural from "natural";

export default app => {
  app.post("/ngrams", (req, res) => {
    const items = natural.NGrams.ngrams(req.body.items || [], req.query.n || 2);
    res.json({ items });
  });
};
