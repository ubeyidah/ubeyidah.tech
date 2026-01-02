export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ubeyidah Oumer",
    alternateName: ["Ubeyidah", "ubeyidah"],
    url: "https://ubeyidah.tech",

    description:
      "Student and self-taught software engineer who started coding in grade 10 (2023) and builds real-world systems across AI, Linux, open-source, and platform engineering.",

    jobTitle: "Student & Self-taught Software Engineer",

    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Ethiopia",
      },
    },

    educationalLevel: "University Freshman",
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Linux",
      "Systems Engineering",
      "Open Source Software",
      "Platform Engineering",
      "Software Engineering",
    ],

    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-taught (Independent Study)",
    },

    sameAs: [
      "https://github.com/ubeyidah",
      "https://www.linkedin.com/in/ubeyidahh",
      "https://twitter.com/ubeyidah",
      "https://youtube.com/@ubeyidah",
      "https://medium.com/@ubeyidah",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
