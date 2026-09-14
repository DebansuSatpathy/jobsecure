import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../data/blogs";
import PageLayout from "../layout/PageLayout";
import React from "react";

export default function Blogs() {
  return (
    <PageLayout title="Guides for getting interview calls">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:translate-y-[-4px] flex flex-col"
          >
            {/* Blog Header */}
            <div className="mb-4">
              <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {blog.readTime}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {blog.title}
              </h3>
            </div>

            {/* Blog Meta */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {blog.date}
            </p>

            {/* Blog Excerpt */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              {blog.excerpt}
            </p>

            {/* Read More Link */}
            <Link
              to={`/blogs/${blog.id}`}
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors inline-flex items-center"
            >
              Read More
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
