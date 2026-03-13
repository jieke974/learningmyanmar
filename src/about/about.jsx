import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Our Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to our learning hub. Our mission is to provide high-quality,
          free educational resources for Myanmar students in their native
          language. We believe that language and technology are the keys to a
          global future.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-green-50 rounded-2xl">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Language Mastery
            </h3>
            <p className="text-gray-600">
              We offer structured paths for HSK (Chinese) and JLPT (Japanese)
              from beginner to advanced levels.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Tech Education
            </h3>
            <p className="text-gray-600">
              From Python to Web Development, we help you build the skills
              needed for the modern job market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
