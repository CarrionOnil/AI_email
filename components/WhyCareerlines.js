export default function WhyCareerlines() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Why Use Careerlines?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "Write more confidently when applying for jobs or internships.",
              "Get professional-sounding results with less stress.",
              "Save time crafting perfect follow-up or outreach emails.",
              "Tailor your message tone without overthinking it.",
            ].map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <span className="text-blue-500 text-xl font-bold">✓</span>
                <p className="inline-block ml-2 text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  