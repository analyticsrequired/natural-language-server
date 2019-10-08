export default app => {
  app.post("/transform/lowercase", (req, res) => {
    console.log(req.body);
    const items = req.body.items.map(item => item.toLowerCase());
    res.json({ items });
  });
};
