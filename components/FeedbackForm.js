// components/FeedbackForm.js
import { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [satisfaction, setSatisfaction] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback || satisfaction === null) return;
    // Replace with real submission logic/API call if needed
    console.log('Submitted feedback:', { feedback, satisfaction });
    setSubmitted(true);
    setFeedback('');
    setSatisfaction(null);
  };

  return (
    <section className="max-w-3xl mx-auto mt-20 mb-20 p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Questions? Comments?</h2>
      <p className="text-gray-600 mb-6">We'd love your feedback to help improve Careerlines.</p>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
        {submitted ? (
          <p className="text-green-600 font-medium">Thank you for your feedback! 🎉</p>
        ) : (
          <>
            <p className="font-semibold mb-2">How helpful was your result?</p>
            <div className="flex justify-center gap-3 mb-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={`w-10 h-10 rounded-full border text-sm font-medium ${
                    satisfaction === value ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
                  }`}
                  onClick={() => setSatisfaction(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <textarea
              className="w-full border border-gray-300 rounded-md p-4 mb-4"
              placeholder="Your comments and suggestions..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-md transition-colors"
            >
              Share Feedback
            </button>
          </>
        )}
      </div>
    </section>
  );
}