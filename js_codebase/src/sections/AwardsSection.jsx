import React from "react";
import { motion } from "framer-motion";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Top Career Platform",
      platform: "Naukri",
      icon: "🏆",
      year: "2024",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Best Employer Partner",
      platform: "Glassdoor",
      icon: "⭐",
      year: "2024",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      title: "Excellence in Career Guidance",
      platform: "LinkedIn Talent",
      icon: "🎯",
      year: "2025",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 4,
      title: "Most Trusted HR Partner",
      platform: "Indeed",
      icon: "✨",
      year: "2022",
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Innovation in Recruitment",
      platform: "HackerRank",
      icon: "🚀",
      year: "2021",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: 6,
      title: "Best Resume Builder",
      platform: "TechCrunch",
      icon: "🏅",
      year: "2025",
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <section
      id="awards"
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recognition & Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Trusted by leading recruitment platforms worldwide
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`bg-gradient-to-br ${award.color} p-8 rounded-2xl shadow-lg text-center min-h-[280px] flex flex-col justify-center`}
              >
                <div className="text-6xl mb-4">{award.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-white opacity-90 mb-3">
                  {award.platform}
                </p>
                <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-white text-sm">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
