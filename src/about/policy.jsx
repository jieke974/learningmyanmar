import React from "react";

export default function Policy() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-sm my-10 rounded-xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy & Terms</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
            Privacy Policy
          </h2>
          <p className="text-gray-600 mb-4">Effective Date: March 2026</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>
              <strong>Data Collection:</strong> We do not collect personal data
              unless you contact us directly.
            </li>
            <li>
              <strong>Cookies:</strong> We use basic cookies to optimize your
              learning experience.
            </li>
            <li>
              <strong>Third Parties:</strong> Our video content is hosted on
              YouTube; their privacy policies apply to video playback.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
            Terms of Service
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              1. Content on this site is for educational, non-commercial use
              only.
            </p>
            <p>
              2. We do not own the third-party videos linked; all rights belong
              to the original creators.
            </p>
            <p>
              3. We reserve the right to update our resources at any time to
              ensure accuracy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
