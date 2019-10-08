import natural from "natural";

export default app => {
  app.post("/classify/bayesian", (req, res) => {
    const classifier = new natural.BayesClassifier();

    const { document, training = [] } = req.body;

    training.forEach(({ text, label }) => {
      classifier.addDocument(text, label);
    });

    classifier.train();

    const classification = classifier.getClassifications(document);

    res.json({ classification });
  });

  app.post("/classify/bayesian/export", (req, res) => {
    const classifier = new natural.BayesClassifier();

    const { training = [] } = req.body;

    training.forEach(({ text, label }) => {
      classifier.addDocument(text, label);
    });

    classifier.train();

    res.json(classifier);
  });
};
