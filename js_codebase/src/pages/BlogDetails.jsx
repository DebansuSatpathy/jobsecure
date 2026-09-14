import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import PageLayout from "../layout/PageLayout";
import React from "react";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <PageLayout title="Blog Not Found">
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={blog.title}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        {/* Blog Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Blog Content with Markdown-like rendering */}
        <article className="prose dark:prose-invert max-w-none">
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {blog.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.trim().startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                    {paragraph.trim().replace(/^# /, '')}
                  </h1>
                );
              }
              if (paragraph.trim().startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                    {paragraph.trim().replace(/^## /, '')}
                  </h2>
                );
              }
              if (paragraph.trim().startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
                    {paragraph.trim().replace(/^### /, '')}
                  </h3>
                );
              }
              if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('•')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="ml-4">
                        {item.trim().replace(/^[-•]\s*/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.trim().startsWith('1.') || /^\d+\./.test(paragraph.trim())) {
                return (
                  <ol key={idx} className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="ml-4">
                        {item.trim().replace(/^\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.trim().startsWith('```')) {
                return (
                  <pre key={idx} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto my-4">
                    <code className="text-gray-800 dark:text-gray-200 text-sm">
                      {paragraph.trim().replace(/```/g, '')}
                    </code>
                  </pre>
                );
              }
              if (paragraph.trim() === '') {
                return null;
              }
              return (
                <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>
        </article>

        {/* Back to Blogs */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/blogs"
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center"
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default BlogDetails;
