export default function HowItWorks() {
    return (
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Write your message",
                desc: "Tell us what you're trying to say in a sentence or two.",
                icon: "📝",
              },
              {
                title: "2. Choose your tone",
                desc: "Pick a tone that fits — formal, friendly, confident, etc.",
                icon: "🎯",
              },
              {
                title: "3. Get polished email",
                desc: "We generate a professional email you can copy or customize.",
                icon: "⚡",
              },
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  