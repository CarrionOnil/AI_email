import Navbar from '../components/navbar';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">CareerMail Pricing</h1>
        <p className="text-gray-600 mb-12 text-center">Affordable tools to help you land your dream job.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">

          {/* Free Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Starter</h2>
            <p className="text-3xl font-bold mb-6">$0</p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ 10 emails/month</li>
              <li>✔️ Basic rewrite</li>
              <li>✔️ Watermark included</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-3xl font-bold mb-6">$4.99<span className="text-base">/month</span></p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ Unlimited rewrites</li>
              <li>✔️ Tone adjustments</li>
              <li>✔️ Access to templates</li>
              <li>✔️ Remove watermark</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Upgrade Now
            </button>
          </div>

          {/* Career Accelerator Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Career Accelerator</h2>
            <p className="text-3xl font-bold mb-6">$9.99<span className="text-base">/month</span></p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ Everything in Pro</li>
              <li>✔️ Resume/CV feedback</li>
              <li>✔️ Job application tracker</li>
              <li>✔️ Priority support</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Upgrade Now
            </button>
          </div>

          {/* One-Time Payment */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Semester Deal</h2>
            <p className="text-3xl font-bold mb-6">$19.99<span className="text-base">/3 months</span></p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ Unlimited access</li>
              <li>✔️ Full Pro+ features</li>
              <li>✔️ One-time payment</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Pay Once
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
