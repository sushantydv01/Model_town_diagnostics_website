export interface HealthPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  testCount: number;
  features: string[];
  popular?: boolean;
}

export const placeholderPackages: HealthPackage[] = [
  {
    id: "pkg-001",
    name: "Basic Health Checkup",
    description: "Essential preventive health screening for all age groups.",
    price: 1499,
    testCount: 45,
    features: [
      "CBC",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
    ],
  },
  {
    id: "pkg-002",
    name: "Comprehensive Full Body Checkup",
    description: "Extensive screening covering all major vital organs.",
    price: 2999,
    testCount: 75,
    features: [
      "Thyroid Profile",
      "HbA1c",
      "Vitamin D",
      "Vitamin B12",
      "Iron Profile",
    ],
    popular: true,
  },
  {
    id: "pkg-003",
    name: "Senior Citizen Package",
    description:
      "Tailored specifically for the elderly to monitor chronic conditions.",
    price: 2499,
    testCount: 60,
    features: [
      "Bone Mineral Density marker",
      "Arthritis Screen",
      "Cardiac Risk Profile",
    ],
  },
];
