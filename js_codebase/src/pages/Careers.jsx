import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs } from "../data/jobs";
import PageLayout from "../layout/PageLayout";
import React from "react";

export default function Careers() {
  return (
    <PageLayout title="Careers">
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-lg border flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500">
                {job.location} · {job.experience}
              </p>
            </div>
            <Link
              to={`/careers/${job.id}`}
              className="text-indigo-600 font-medium"
            >
              View →
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
