import natural from "natural";

export default app => {
  app.post("/transform/stem", (req, res) => {
    const items = req.body.items.map(natural.PorterStemmer.stem);
    res.json({ items });
  });
};
