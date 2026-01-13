// 1. Import the image file (Ensure the filename and extension match yours)
import kaanthaHero from "@/assets/collaborators/img1.jpeg"; 

export const collaborations = [
  {
    slug: "kaantha",
    name: "KAANTHA",
    category: "Alternative • Indie Folk",
    tagline: "Refurbishing classics. Defining the modern Malayalam groove.",
    origin: "Kerala, India",
    description: "Formed in 2019, KAANTHA is a sonic bridge between traditional Malayalam roots and contemporary Rock-Folk textures. Led by industry veteran Shikku Dan Jacob, the collective is engineered to deliver power-packed performances that feed the soul through precision dynamics and technical mastery.",
    // 2. This now refers to the import above
    image: kaanthaHero, 
    specs: {
      sfx: "Atmospheric Cryo & Synced Pyrotechnics",
      audio: "Precision-Tuned Line Array Systems",
      security: "Tier 1: Trained Bouncer Deployment",
      management: "One-Point Zerion Control"
    },
    lineup: [
      { name: "Shikku Dan Jacob", role: "Band Leader / Guitars", bio: "A global session veteran who brings international stage experience to the core of Kaantha’s arrangements." },
      { name: "Ligin Abraham", role: "Lead Vocals", bio: "Known for a distinct lower-larynx posture that creates a signature dark, rounded, and soulful vowel sound." },
      { name: "Sreekanth Bhasi", role: "Bass Guitars", bio: "A critical bridge between rhythm and melody, drawing from a deep background in the Indian Indie and secular scenes." },
      { name: "Alex TJ", role: "Drums", bio: "A decade-plus industry expert specializing in dynamics, technical chops, and high-impact grooving." }
    ],
    links: {
      instagram: "https://instagram.com/kaanthamusic",
      spotify: "#",
      youtube: "#"
    }
  }
];