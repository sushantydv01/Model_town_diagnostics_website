export interface AboutContent {
  mission: { title: string; description: string };
  vision: { title: string; description: string };
  story: string;
}

export const aboutContent: AboutContent = {
  mission: {
    title: "Our Mission",
    description:
      "To deliver precise, timely, and accessible diagnostic services utilizing cutting-edge technology and human empathy.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be the most trusted pathology laboratory in the region, known for uncompromising quality and patient-first care.",
  },
  story:
    "Established in 2010, Model Town Diagnostics has been serving the community with a commitment to excellence in pathology. Over the years, we have continually upgraded our technology and expanded our team of experts to ensure the highest standards of diagnostic accuracy.",
};
