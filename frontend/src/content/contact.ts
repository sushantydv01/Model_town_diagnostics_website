export interface ContactContent {
  header: string;
  subheader: string;
  faqs: { question: string; answer: string }[];
}

export const contactContent: ContactContent = {
  header: "Get in Touch",
  subheader:
    "We are here to assist you with your diagnostic needs. Reach out to us via phone, email, or visit our lab.",
  faqs: [
    {
      question: "Do I need to book an appointment?",
      answer:
        "While walk-ins are welcome, we recommend booking an appointment online or via phone to avoid waiting.",
    },
    {
      question: "How do I access my reports?",
      answer:
        "You will receive an SMS and email with a secure link to download your digital reports. You can also view them in your patient dashboard.",
    },
    {
      question: "Do you offer home sample collection?",
      answer:
        "Yes, we offer safe and hygienic home sample collection. You can schedule a visit online.",
    },
  ],
};
