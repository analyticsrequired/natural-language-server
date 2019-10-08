import stopWords from "./stopWords";

export default app => {
  app.post("/transform/filter/stopWords", (req, res) => {
    const items = req.body.items.filter(item => !stopWords.includes(item));
    res.json({ items });
  });
};
