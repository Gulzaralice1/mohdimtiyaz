// import { CheckCircleIcon, ExternalLinkIcon } from "@heroicons/re";

import { CheckCircleIcon, ExternalLinkIcon } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Achievement Title 1",
      description: "Brief description of the achievement.",
      date: "January 2025",
      certificateLink: "https://example.com/certificate1.pdf",
    },
    {
      title: "Achievement Title 2",
      description: "Brief description of the achievement.",
      date: "February 2025",
      certificateLink: "https://example.com/certificate2.pdf",
    },
    {
      title: "Achievement Title 3",
      description: "Brief description of the achievement.",
      date: "March 2025",
      certificateLink: "https://example.com/certificate3.pdf",
    },
  ];

  return (
    <section id="achievements" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
              </div>
              <p className="text-gray-700">{achievement.description}</p>
              <p className="text-gray-500 text-sm mt-2">Date: {achievement.date}</p>
              <a
                href={achievement.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-blue-500 hover:underline"
              >
                View Certificate
                <ExternalLinkIcon className="h-5 w-5 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
