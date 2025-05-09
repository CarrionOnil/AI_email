export default function Testimonials() {
    const testimonials = [
      {
        quote: "This helped me write my internship email way faster. It sounded way more confident too.",
        name: "Lina, college junior",
      },
      {
        quote: "I used Careerlines to follow up after an interview — the recruiter actually responded!",
        name: "David, recent grad",
      },
      {
        quote: "Honestly, I don’t dread emailing professors anymore.",
        name: "Carlos, university sophomore",
      },
      {
        quote: "Great for follow-ups! The tone adjustments really helped.",
        name: "Aisha, graduating senior",
      },
      {
        quote: "I landed an interview the same day I used it. Super cool.",
        name: "Sam, CS student",
      },
    ];
  
    return (
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-12">What Students Say</h2>
  
          {/* Outer wrapper to hide overflow */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee space-x-6 w-max">
              {/* Duplicate the testimonials to create seamless loop */}
              {[...testimonials, ...testimonials].map((t, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-sm bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex-shrink-0"
                >
                  <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                  <p className="font-semibold text-gray-600">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Keyframes for smooth continuous scrolling */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
  
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>
    );
  }
  
  
  