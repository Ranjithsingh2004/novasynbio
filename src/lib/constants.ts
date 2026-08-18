// NovaSyn Biosciences — Brand Constants

export const BRAND = {
  name: "NovaSyn",
  fullName: "NovaSyn Biosciences",
  tagline: "Engineering the Future of Human Health",
  description:
    "Pioneering AI-driven drug discovery and next-generation gene therapies to transform how humanity fights disease.",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Impact", href: "#statistics" },
  { label: "Contact", href: "#cta" },
] as const;

export const STATS = [
  { value: 247, suffix: "+", label: "Research Publications" },
  { value: 56, suffix: "+", label: "Patents Filed" },
  { value: 18, suffix: "", label: "Active Clinical Trials" },
  { value: 99.2, suffix: "%", label: "Compound Accuracy" },
] as const;

export const CAPABILITIES = [
  {
    title: "Gene Therapy",
    description:
      "Developing precision gene-editing solutions using proprietary CRISPR-enhanced delivery systems for rare genetic disorders.",
    icon: "dna",
  },
  {
    title: "AI Drug Discovery",
    description:
      "Leveraging deep learning models trained on 2B+ molecular structures to identify novel therapeutic compounds 10x faster.",
    icon: "brain",
  },
  {
    title: "Precision Medicine",
    description:
      "Tailoring treatment protocols using genomic profiling and real-time biomarker analysis for personalized patient outcomes.",
    icon: "target",
  },
  {
    title: "Clinical Analytics",
    description:
      "Accelerating clinical trials with AI-powered patient stratification, predictive modeling, and adaptive trial design.",
    icon: "chart",
  },
  {
    title: "Biomarker Discovery",
    description:
      "Identifying and validating novel biomarkers through multi-omics integration and proprietary computational pipelines.",
    icon: "microscope",
  },
  {
    title: "Regulatory Science",
    description:
      "Navigating complex global regulatory landscapes with AI-assisted documentation and compliance frameworks.",
    icon: "shield",
  },
] as const;

export const TECH_PILLARS = [
  {
    title: "NovaSyn Engine™",
    subtitle: "AI-Powered Molecular Design",
    description:
      "Our proprietary deep learning platform analyzes billions of molecular interactions in real-time, predicting drug efficacy with unprecedented accuracy.",
    features: [
      "Generative molecular design",
      "Protein structure prediction",
      "Toxicity forecasting",
    ],
  },
  {
    title: "SynEdit™ Platform",
    subtitle: "Next-Gen Gene Editing",
    description:
      "Beyond traditional CRISPR — our enhanced delivery vectors achieve 3x higher precision with minimal off-target effects across diverse cell types.",
    features: [
      "Enhanced guide RNA design",
      "Lipid nanoparticle delivery",
      "In vivo editing protocols",
    ],
  },
  {
    title: "OmniSight™ Analytics",
    subtitle: "Multi-Omics Intelligence",
    description:
      "Integrating genomics, proteomics, and metabolomics data streams into a unified analytical framework for holistic biological insights.",
    features: [
      "Single-cell RNA sequencing",
      "Spatial transcriptomics",
      "Real-time data visualization",
    ],
  },
] as const;

export const ABOUT_PILLARS = [
  {
    title: "Discover",
    description: "AI-powered compound screening across 2B+ molecular structures",
  },
  {
    title: "Develop",
    description: "Precision gene therapies with proprietary delivery systems",
  },
  {
    title: "Deliver",
    description: "Accelerated clinical pipelines from lab to patient bedside",
  },
] as const;
