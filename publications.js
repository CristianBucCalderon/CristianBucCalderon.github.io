// ─────────────────────────────────────────────────────────────
//  Your publications. Add one object per paper; the page sorts
//  them newest-first and groups them by year automatically.
//
//  Fields:
//    year     (number, required)
//    title    (string, required)
//    authors  (string, required)  → your name is highlighted automatically
//    venue    (string)            → journal / conference
//    url      (string)            → link to the paper (DOI, arXiv, PDF…)
//    code     (string)            → optional link to code
//    tags     (array of strings)  → optional, e.g. ["interpretability"]
// ─────────────────────────────────────────────────────────────

const HIGHLIGHT_NAME = /Cristian Buc/g;

const PUBLICATIONS = [
  // ── 2026 ──
  {
    year: 2026,
    title: "A Real-World Benchmark for Early Wildfire Detection Using Sequential Data with the PyroNear Dataset",
    authors: "Mateo Lostanlen, Nicolás Isla, José Guillén, Renzo Zanca, Félix Veith, Cristian Buc, Valentín Barriere",
    venue: "Electronics",
    url: "https://doi.org/10.3390/electronics15122652",
    tags: ["computer vision", "wildfire detection"],
  },
  {
    year: 2026,
    title: "Positional versus Symbolic Attention Heads: Learning Dynamics, RoPE Geometry, and Length Generalization",
    authors: "Felipe Urrutia, Juan José Alegría, Cinthia Sanchez Macias, Jorge Salas, Cristian Buc, Cristóbal Rojas",
    venue: "NeurIPS 2026",
    url: "https://arxiv.org/abs/2605.31558",
    tags: ["transformers", "interpretability"],
  },
  {
    year: 2026,
    title: "When a Flatness Proxy Is Not a Function: Robustness Certificates and Training Interventions",
    authors: "Vicente Opazo, Jose Calatayud-Mateu, Cristóbal Rojas, Cristian Buc",
    venue: "arXiv preprint",
    url: "https://arxiv.org/abs/2609.38540",
    tags: ["machine learning"],
  },

  // ── 2025 ──
  {
    year: 2025,
    title: "Strassen Attention, Split VC Dimension and Compositionality in Transformers",
    authors: "Alexander Kozachinskiy, Felipe Urrutia, Hector Orellana, Tomasz Steifer, Germán Pizarro, Matías Fuentes, Francisco Meza, Cristian Buc, Cristóbal Rojas",
    venue: "NeurIPS 2025",
    url: "https://arxiv.org/abs/2501.19215",
    tags: ["transformers", "expressivity"],
  },
  {
    year: 2025,
    title: "Continuity and Isolation Lead to Doubts or Dilemmas in Large Language Models",
    authors: "Hector Pasten, Felipe Urrutia, Hector Jimenez, Cristian Buc, Cristóbal Rojas, Alexander Kozachinskiy",
    venue: "NeurIPS 2025",
    url: "https://arxiv.org/abs/2505.10606",
    tags: ["transformers", "expressivity"],
  },
  {
    year: 2025,
    title: "Decoupling Positional and Symbolic Attention Behavior in Transformers",
    authors: "Felipe Urrutia, Jorge Salas, Alexander Kozachinskiy, Cristian Buc, Hector Pasten, Cristóbal Rojas",
    venue: "arXiv preprint",
    url: "https://arxiv.org/abs/2511.11579",
    tags: ["transformers", "interpretability"],
  },
  {
    year: 2025,
    title: "Data Distributional Properties As Inductive Bias for Systematic Generalization",
    authors: "Felipe del Rio, Alain Raymond-Sáez, Daniel Florea, Rodrigo Toro Icarte, Julio Hurtado, Cristian Buc, Álvaro Soto",
    venue: "CVPR 2025",
    url: "https://doi.org/10.1109/CVPR52734.2025.02383",
    tags: ["generalization"],
  },
  {
    year: 2025,
    title: "Shaping Fine-Tuning of Geospatial Foundation Models: Effects of Label Availability and Temporal Resolution",
    authors: "Giovanni Castiglioni, Nicolás Gonzalo Isla Fernández, Cristian Buc, Juan Carlos Navarro, Sébastien Lefèvre, Valentin Barrière",
    venue: "TerraBytes Workshop, ICML 2025",
    url: "https://www.semanticscholar.org/paper/7ba4005b3f82196e97493b4e33d90aac8cbead10",
    tags: ["foundation models"],
  },
  {
    year: 2025,
    title: "Neural and computational evidence for a predictive learning account of the testing effect",
    authors: "Haopeng Chen, Pieter Verbeke, Stefania Mattioni, Cristian Buc, Tom Verguts",
    venue: "Proceedings of the National Academy of Sciences (PNAS)",
    url: "https://doi.org/10.1073/pnas.2506530122",
    tags: ["neuroscience", "memory"],
  },
  {
    year: 2025,
    title: "Predictive learning as the basis of the testing effect",
    authors: "Haopeng Chen, Cathy Hauspie, Kate Ergo, Cristian Buc, Tom Verguts",
    venue: "Communications Psychology",
    url: "https://doi.org/10.1038/s44271-025-00200-1",
    tags: ["cognition", "memory"],
  },
  {
    year: 2025,
    title: "Adaptive learning via BG-thalamo-cortical circuitry",
    authors: "Qin He, Daniel N. Scott, Michael J. Frank, Cristian Buc, Matthew R. Nassar",
    venue: "bioRxiv preprint",
    url: "https://doi.org/10.1101/2025.03.13.643078",
    tags: ["neuroscience", "computational model"],
  },
  {
    year: 2025,
    title: "Robust Effects of Signed Prediction Error on Declarative Memory",
    authors: "Haopeng Chen, Ward Claeys, Kate Ergo, Cristian Buc, Tom Verguts",
    venue: "PsyArXiv preprint",
    url: "https://doi.org/10.31234/osf.io/sqjgz_v3",
    tags: ["cognition", "memory"],
  },

  // ── 2024 ──
  {
    year: 2024,
    title: "Gradient-based inference of abstract task representations for generalization in neural networks",
    authors: "Ali Hummos, Felipe del Río, Brabeeba Mien Wang, Julio Hurtado, Cristian Buc, Guangyu Robert Yang",
    venue: "arXiv preprint",
    url: "https://arxiv.org/abs/2407.17356",
    tags: ["neural networks", "generalization"],
  },
  {
    year: 2024,
    title: "Cognitive science as a guide for the use of LLMs in education",
    authors: "Tom Verguts, Cristian Buc",
    venue: "PsyArXiv preprint",
    url: "https://doi.org/10.31234/osf.io/jh95z",
    tags: ["LLMs", "cognition"],
  },

  // ── 2023 ──
  {
    year: 2023,
    title: "Large Language Models are biased to overestimate profoundness",
    authors: "Eugenio Herrera-Berg, Tomás Vergara Browne, Pablo León-Villagrá, Marc-Lluís Vives, Cristian Buc",
    venue: "EMNLP 2023",
    url: "https://doi.org/10.18653/v1/2023.emnlp-main.599",
    tags: ["LLMs"],
  },
  {
    year: 2023,
    title: "Deep Natural Language Feature Learning for Interpretable Prediction",
    authors: "Felipe Urrutia, Cristian Buc, Valentin Barrière",
    venue: "EMNLP 2023",
    url: "https://doi.org/10.18653/v1/2023.emnlp-main.229",
    tags: ["LLMs", "interpretability"],
  },
  {
    year: 2023,
    title: "Targeted Image Data Augmentation Increases Basic Skills Captioning Robustness",
    authors: "Valentin Barrière, Felipe del Rio, Andrés Carvallo, Carlos Aspillaga, Eugenio Herrera-Berg, Cristian Buc",
    venue: "GEM Workshop, EMNLP 2023",
    url: "https://aclanthology.org/2023.gem-1.21",
    tags: ["vision-language"],
  },
  {
    year: 2023,
    title: "Studying Generalization on Memory-Based Methods in Continual Learning",
    authors: "Felipe del Rio, Julio Hurtado, Cristian Buc, Álvaro Soto, Vincenzo Lomonaco",
    venue: "arXiv preprint",
    url: "https://arxiv.org/abs/2306.09890",
    tags: ["continual learning", "generalization"],
  },

  // ── 2022 ──
  {
    year: 2022,
    title: "Thunderstruck: The ACDC model of flexible sequences and rhythms in recurrent neural circuits",
    authors: "Cristian Buc, Tom Verguts, Michael J. Frank",
    venue: "PLoS Computational Biology",
    url: "https://doi.org/10.1371/journal.pcbi.1009854",
    tags: ["neuroscience", "computational model"],
  },

  // ── 2020 ──
  {
    year: 2020,
    title: "Signed Reward Prediction Errors in the Ventral Striatum Drive Episodic Memory",
    authors: "Cristian Buc, Esther De Loof, Kate Ergo, Anna Snoeck, C. Nico Boehler, Tom Verguts",
    venue: "Journal of Neuroscience",
    url: "https://doi.org/10.1523/JNEUROSCI.1785-20.2020",
    tags: ["neuroscience", "memory"],
  },
  {
    year: 2020,
    title: "Cognitive Effort Modulates Connectivity between Dorsal Anterior Cingulate Cortex and Task-Relevant Cortical Areas",
    authors: "Bart Aben, Cristian Buc, Eva Van den Bussche, Tom Verguts",
    venue: "Journal of Neuroscience",
    url: "https://doi.org/10.1523/JNEUROSCI.2948-19.2020",
    tags: ["neuroscience", "cognitive control"],
  },
  {
    year: 2020,
    title: "Variability in the analysis of a single neuroimaging dataset by many teams",
    authors: "Rotem Botvinik-Nezer, Felix Holzmeister, Colin F. Camerer, … Cristian Buc, … Tom Schonberg (NARPS consortium)",
    venue: "Nature",
    url: "https://doi.org/10.1038/s41586-020-2314-9",
    tags: ["neuroimaging", "reproducibility"],
  },

  // ── 2019 ──
  {
    year: 2019,
    title: "Context-dependent modulation of cognitive control involves different temporal profiles of fronto-parietal activity",
    authors: "Bart Aben, Cristian Buc, Laurens Van der Cruyssen, Doerte Picksak, Eva Van den Bussche, Tom Verguts",
    venue: "NeuroImage",
    url: "https://doi.org/10.1016/j.neuroimage.2019.02.004",
    tags: ["neuroscience", "cognitive control"],
  },

  // ── 2018 ──
  {
    year: 2018,
    title: "The unfolding action model of initiation times, movement times, and movement paths",
    authors: "Cristian Buc, Wim Gevers, Tom Verguts",
    venue: "Psychological Review",
    url: "https://doi.org/10.1037/rev0000110",
    tags: ["computational model", "action selection"],
  },
  {
    year: 2018,
    title: "Task-Relevant Information Modulates Primary Motor Cortex Activity Before Movement Onset",
    authors: "Cristian Buc, Filip Van Opstal, Philippe Peigneux, Tom Verguts, Wim Gevers",
    venue: "Frontiers in Human Neuroscience",
    url: "https://doi.org/10.3389/fnhum.2018.00093",
    tags: ["neuroscience", "action selection"],
  },

  // ── 2017 ──
  {
    year: 2017,
    title: "Continuous track paths reveal additive evidence integration in multistep decision making",
    authors: "Cristian Buc, Myrtille Dewulf, Wim Gevers, Tom Verguts",
    venue: "Proceedings of the National Academy of Sciences (PNAS)",
    url: "https://doi.org/10.1073/pnas.1710913114",
    tags: ["decision making"],
  },
  {
    year: 2017,
    title: "Avoiding the conflict: Metacognitive awareness drives the selection of low-demand contexts",
    authors: "Kobe Desender, Cristian Buc, Filip Van Opstal, Eva Van den Bussche",
    venue: "Journal of Experimental Psychology: Human Perception and Performance",
    url: "https://doi.org/10.1037/xhp0000391",
    tags: ["metacognition", "cognitive control"],
  },

  // ── 2015 ──
  {
    year: 2015,
    title: "Losing the boundary: Cognition biases action well after action selection",
    authors: "Cristian Buc, Tom Verguts, Wim Gevers",
    venue: "Journal of Experimental Psychology: General",
    url: "https://doi.org/10.1037/xge0000087",
    tags: ["action selection"],
  },

  // ── 2011 ──
  {
    year: 2011,
    title: "Setting the stage subliminally: Unconscious context effects",
    authors: "Filip Van Opstal, Cristian Buc, Wim Gevers, Tom Verguts",
    venue: "Consciousness and Cognition",
    url: "https://doi.org/10.1016/j.concog.2011.09.004",
    tags: ["consciousness"],
  },
];
