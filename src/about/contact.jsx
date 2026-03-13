import React from "react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Get In Touch</h1>
          <p className="text-gray-500 mt-4">
            Have questions? We are here to help you on your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-green-600 font-medium">
                likeyou1389@gmail.com
              </p>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
}
