export type Capsule = {
  id: string;
  name: string; // e.g., "Q75X"
  sizeLabel: string; // e.g., "3 Rooms"
  dimensions: string; // e.g., "30m² Total"
  rooms: string; // e.g., "Bed/Living/Bath"
  blurb: string; // 1–2 sentence description
  features: string[]; // bullet list
  images: string[]; // URLs for inner carousel
};

export const capsules: Capsule[] = [
  {
    id: "q56x",
    name: "Q56X",
    sizeLabel: "1 Room",
    dimensions: "18m²",
    rooms: "Studio",
    blurb:
      "Compact living spaces designed for efficiency and modern minimalism.",
    features: [
      "Smart home integration",
      "Energy-efficient systems",
      "Premium finishes",
      "Space optimization",
    ],
    images: [
      "/q56x-capsule2.png",
      "/residential-capsule.jpg",
      "/modern-interior-capsule.png",
    ],
  },
  {
    id: "q75x",
    name: "Q75X",
    sizeLabel: "2 Rooms",
    dimensions: "24m²",
    rooms: "Bed/Living",
    blurb:
      "Luxury living spaces designed for modern comfort and sustainability.",
    features: [
      "Smart home integration",
      "Energy-efficient systems",
      "Premium finishes",
      "Modern appliances",
    ],
    images: [
      "/q75x-capsule2.png",
      "/q75x-capsulel.png",
      "/q75x-capsule3.png",
    ],
  },
  {
    id: "q95x",
    name: "Q95X",
    sizeLabel: "3 Rooms",
    dimensions: "30m²",
    rooms: "Bed/Living/Bath",
    blurb:
      "Spacious capsules with outdoor connectivity perfect for nature lovers.",
    features: [
      "Outdoor deck access",
      "Enhanced air circulation",
      "Luxury amenities",
      "Panoramic windows",
    ],
    images: [
      "/q95-capsule1.png",
      "/living-room1.png",
      "/floorplan-bg.jpg",
    ],
  },
  {
    id: "q115x",
    name: "Q115X",
    sizeLabel: "4 Rooms",
    dimensions: "38m²",
    rooms: "Complete Suite",
    blurb: "Premium family spaces with multiple rooms and optimal comfort.",
    features: [
      "Family-friendly layout",
      "Multiple social areas",
      "Premium materials",
      "Advanced insulation",
    ],
    images: [
      "/q115x-capsule1.png",
      "/healthcare-capsule.jpg",
      "/retail-capsule.jpg",
    ],
  },
];
