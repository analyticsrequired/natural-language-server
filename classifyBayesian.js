import natural from "natural";

export default app => {
  app.post("/classify/bayesian", (req, res) => {
    const classifier = new natural.BayesClassifier();

    const { document, training = [] } = req.body;

    training.forEach(({ text, label }) => {
      classifier.addDocument(text, label);
    });

    classifier.train();

    const item = classifier.getClassifications(document);

    res.json({ item });
  });
};
