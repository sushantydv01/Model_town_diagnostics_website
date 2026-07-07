export interface TestDefinition {
  id: string;
  name: string;
  category: string;
  price: number;
  turnaroundTime: string;
  parameters: number;
  preTestInfo: string;
}

export const placeholderTests: TestDefinition[] = [
  {
    id: "test-001",
    name: "Complete Blood Count (CBC)",
    category: "Hematology",
    price: 350,
    turnaroundTime: "Same Day",
    parameters: 24,
    preTestInfo: "No special preparation required.",
  },
  {
    id: "test-002",
    name: "Lipid Profile",
    category: "Cardiology",
    price: 750,
    turnaroundTime: "Same Day",
    parameters: 8,
    preTestInfo: "10-12 hours of fasting required.",
  },
  {
    id: "test-003",
    name: "Thyroid Profile (T3, T4, TSH)",
    category: "Endocrinology",
    price: 600,
    turnaroundTime: "Same Day",
    parameters: 3,
    preTestInfo: "No special preparation required.",
  },
  {
    id: "test-004",
    name: "HbA1c",
    category: "Diabetology",
    price: 450,
    turnaroundTime: "Same Day",
    parameters: 1,
    preTestInfo: "No fasting required.",
  },
];
