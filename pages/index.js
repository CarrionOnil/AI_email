// import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// //import styles from "@/styles/Home.module.css"; messes with tailwind import

// import { useState } from 'react'; //to store user input



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {

//   const [emailText, setEmailText] = useState('');
//   return (
//     <main className="min-h-screen bg-red-500 p-6">
//       {/* Your email form will go here */}
//       <div className="flex justify-center mt-48">
//         <textarea
//           value={emailText}
//           onChange={(e) => setEmailText(e.target.value)}
//           className="w-1/3 h-40 p-5 border rounded-md resize-none"
//           placeholder="Paste your email here..."
//         />
//       </div>  
//     </main>
//   );
// }


import Head from "next/head";
import Navbar from "@/components/navbar";
import EmailForm from "@/components/emailform";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Email Writer</title>
        <meta name="description" content="An AI email rewriter for students and job seekers" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="text-center mt-16 px-4">
        <h1 className="text-4xl font-bold mb-4">AI Email Writer</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Write better emails in seconds. Whether you’re applying for jobs, asking a professor for help, or following up on an internship — we’ll help you sound polished and professional.
        </p>
      </section>

      {/* Email Tool */}
      <EmailForm />

      {/* Feedback Section */}
      <section className="max-w-3xl mx-auto mt-20 mb-20 p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Questions? Comments?</h2>
        <p className="text-gray-600 mb-6">Feel free to let us know what you think.</p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-semibold mb-2">How satisfied were you with the results?</p>
          <div className="text-2xl mb-4">😞 😐 🙂 😃 🤩</div>
          <textarea className="w-full border border-gray-300 rounded-md p-4 mb-4" placeholder="Your comments and feedback help improve our solutions"></textarea>
          <button className="w-full border border-pink-500 text-pink-500 font-bold py-2 rounded-md hover:bg-pink-50 transition-colors">SHARE FEEDBACK</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-900 to-blue-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul>
              <li> <a href="#" className="hover:text-red-500 transition-colors duration-200"> Feature 1</a></li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul>
              <li>YouTube</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-xs text-gray-300">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </footer>
    </>
  );
}





