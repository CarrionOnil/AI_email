import { useState } from "react";

//calls the API generate-email to use GPT to rewrite the users email
function handleGenerateEmail(){ 
  // return fetch('/api/generate-email',{
  //   method: 'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({emailText})
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Response from API:', data);
  // })
  // .catch(error => {
  //   console.error('Error', error);
  // });
  console.log("it works!");
}

export default function EmailForm() {
  const [emailText, setEmailText] = useState('');
  return (
    <section className="max-w-6xl mx-auto mt-16 px-4">
      <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow border border-gray-300">
        {/* Input */}
        <div>
          <label className="block text-lg font-semibold mb-2">Tell us about your email</label>
  
          <div className="relative">
            <textarea
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              className="w-full h-64 border border-blue-200 rounded-lg p-4 pr-12 pb-12 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write an email to a colleague asking for help with a project"
            />
  
            {/* Send button inside textarea */}
            <button
              type="button"
              className="absolute bottom-3 right-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleGenerateEmail}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Send email</span>
            </button>
          </div>
        </div>
  
        {/* Output */}
        <div>
          <label className="block text-lg font-semibold mb-2">Email result</label>
  
          {/* Relative wrapper for positioning the copy button */}
          <div className="relative w-full h-64 border bg-gray-100 border-gray-200 rounded-lg p-4 text-gray-600">
  
            {/* Copy button in top-right corner */}
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText('Your email content will appear here.')} // replace with dynamic content if needed
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 inline-flex items-center justify-center"
              aria-label="Copy email content"
            >
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </button>
  
            {/* Email content */}
            Your email content will appear here.
          </div>
        </div>
      </div>
    </section>
  );
}
