import natural from "natural";

export default app => {
  app.post("/tfidf", (req, res) => {
    const tfidf = new natural.TfIdf();
    const { term, documents = [] } = req.body;
    documents.forEach(document => {
      tfidf.addDocument(document);
    });

    const items = [];

    tfidf.tfidfs(term, (i, measure) => {
      items.push({ document: documents[i], measure });
    });

    res.json({ items });
  });
};
