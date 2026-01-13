import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Minu Quality Testing Laboratory",
  description:
    "Get in touch with Minu Quality Testing Laboratory for wood, plywood, and textile testing services.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Reach out to us for testing services, technical queries, or general
            information.
          </p>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Phone
              </h3>
              <a
                href="tel:+917782069184"
                className="text-gray-600 text-sm hover:text-red-400 transition"
              >
                +91 99712 34474
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Email
              </h3>
              <a
                href="mailto:info@mqtlab.com"
                className="text-gray-600 text-sm hover:text-indigo-400 transition"
              >
                info@mqtlab.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Location
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plot No. 79, 2nd Floor<br />
                Gautam Buddha Nagar<br />
                Noida Sector 155<br />
                UP – 201310
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Working Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Monday – Saturday<br />
                09:30 AM – 6:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm mb-5">
                Fill out the form and our team will contact you shortly.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                />

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-400 text-white text-sm font-semibold rounded-lg hover:bg-red-500 transition"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Side Info */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How We Can Help
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                We assist manufacturers and suppliers with testing, compliance,
                and quality-related queries.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Responses are provided during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
