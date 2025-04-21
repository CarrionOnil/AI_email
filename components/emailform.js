import { useState } from "react";

export default function EmailForm() {
  const [emailText, setEmailText] = useState('');

  return (
    <section className="max-w-6xl mx-auto mt-16 px-4">
      <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-md">
        {/* Input */}
        <div>
          <label className="block text-lg font-semibold mb-2">Tell us about your email</label>
          <textarea
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            className="w-full h-64 border border-blue-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write an email to a colleague asking for help with a project"
          />
        </div>
        {/* Output */}
        <div>
          <label className="block text-lg font-semibold mb-2">Email result</label>
          <div className="w-full h-64 border bg-gray-100 border-gray-200 rounded-lg p-4 text-gray-600">
            Your email content will appear here.
          </div>
        </div>
      </div>
    </section>
  );
}
