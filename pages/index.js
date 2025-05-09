import Head from "next/head";
import Navbar from "@/components/navbar";
import EmailForm from "@/components/emailform";

import HowItWorks from '../components/HowItWorks';
import WhyCareerlines from '../components/WhyCareerlines';
import Testimonials from '../components/Testimonials';
import FeedbackForm from '../components/FeedbackForm';

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

      {/*Other sections*/}
      <HowItWorks />
      <WhyCareerlines />
      <Testimonials />

      {/* Feedback Section */}
      <FeedbackForm />

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-900 to-blue-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul>
              <li> <a href="#" className="hover:text-red-500 transition-colors duration-200"> Feature 1</a></li>
              <li> <a href="#" className="hover:text-red-500 transition-colors duration-200"> Feature 2</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Feature 3</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Help Center</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> About</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Contact</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Social</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> LinkedIn</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200"> Instagram</a></li>
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





