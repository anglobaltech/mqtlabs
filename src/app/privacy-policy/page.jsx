import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck2,
  Database,
  Globe2,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title:
    "Privacy Policy | Minu Quality Testing Laboratories Private Limited",
  description:
    "Transparent privacy policy describing how Minu Quality Testing Laboratories Private Limited collects, safeguards, and handles client contact details and testing records.",
  alternates: {
    canonical: "https://mqtlab.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ── HEADER BANNER ── */}
      <section className="bg-gradient-to-br from-[#06182c] via-[#0b2440] to-[#06182c] text-white py-14 sm:py-18 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>DATA PRIVACY &amp; CONFIDENTIALITY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Privacy Policy
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Minu Quality Testing Laboratories Private Limited is dedicated to
            maintaining the security, integrity, and confidentiality of your
            personal data and laboratory testing communications.
          </p>

          <p className="text-[11px] text-slate-400 mt-4">
            Effective Date: January 2025 • Website: mqtlab.com
          </p>
        </div>
      </section>

      {/* ── CONTENT CONTAINER ── */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-10 space-y-10 text-slate-700 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                01
              </span>
              <h2>Introduction &amp; Scope</h2>
            </div>
            <p>
              This Privacy Policy explains how Minu Quality Testing Laboratories
              Private Limited (&ldquo;MQTL&rdquo;, &ldquo;we&rdquo;,
              &ldquo;our&rdquo;, &ldquo;us&rdquo;) collects, uses, protects, and
              manages information provided by visitors, clients, and partners
              through our website (<strong>mqtlab.com</strong>), direct inquiries,
              and laboratory testing engagements.
            </p>
          </div>

          {/* Section 2 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                02
              </span>
              <h2>Information We Collect</h2>
            </div>
            <p className="mb-3">
              We collect only the necessary details required to coordinate
              laboratory testing, prepare quotations, and deliver test
              certificates:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-600">
              <li>
                <strong>Contact Information:</strong> Your name, company or
                organization name, email address, telephone/mobile number, and
                billing or delivery address submitted via website inquiry forms,
                callback requests, or direct correspondence.
              </li>
              <li>
                <strong>Sample &amp; Requisition Details:</strong> Material
                descriptions, sample batch codes, requested testing parameters,
                and physical intake documentation.
              </li>
              <li>
                <strong>Technical Browsing Data:</strong> Standard server logs,
                browser types, and access timestamps collected automatically to
                maintain web server security and prevent abuse.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                03
              </span>
              <h2>How We Use Collected Information</h2>
            </div>
            <p className="mb-3">
              Your information is used solely for legitimate commercial and
              testing services purposes:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs mb-1">
                  Quotation &amp; Sample Intake
                </h4>
                <p className="text-xs text-slate-500">
                  Responding to inquiries, issuing formal estimates, and booking
                  test specimens at our Noida lab desk.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs mb-1">
                  Report Generation &amp; Delivery
                </h4>
                <p className="text-xs text-slate-500">
                  Verifying test readings, generating digitally signed reports,
                  and dispatching physical certificates.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs mb-1">
                  Accounting &amp; Tax Compliance
                </h4>
                <p className="text-xs text-slate-500">
                  Processing invoices, receipts, GST compliance, and standard
                  financial record-keeping.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs mb-1">
                  Client Communication
                </h4>
                <p className="text-xs text-slate-500">
                  Providing milestone test notifications, report updates,
                  and customer support responses.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                04
              </span>
              <h2>Zero Selling &amp; Strict Confidentiality</h2>
            </div>
            <p>
              We maintain a strict confidentiality ethos:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-600 mt-2">
              <li>
                <strong>No Commercial Sale:</strong> We do not sell, lease,
                rent, or monetize client personal data, inquiry lists, or test
                records to third parties or marketing agencies under any
                circumstances.
              </li>
              <li>
                <strong>Laboratory Data Secrecy:</strong> All test findings,
                analytical observations, and client formulations remain strictly
                confidential between MQTL and the contracting Client.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                05
              </span>
              <h2>Third-Party Service Providers</h2>
            </div>
            <p>
              We only share limited operational data with trusted technical
              vendors who assist us in operating our digital services (such as
              secure website hosting, transactional email delivery, or courier
              and logistics agencies for physical sample pickup or report
              dispatch). These vendors are bound by strict non-disclosure
              obligations. We may also disclose data if required by statutory
              authorities under applicable Indian laws.
            </p>
          </div>

          {/* Section 6 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                06
              </span>
              <h2>Data Security &amp; Storage</h2>
            </div>
            <p>
              MQTL implements appropriate administrative, physical, and technical
              security protocols to protect your personal information and
              laboratory files against unauthorized access, loss, alteration, or
              misuse. Access to laboratory records is restricted exclusively to
              authorized personnel on a need-to-know basis.
            </p>
          </div>

          {/* Section 7 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                07
              </span>
              <h2>Cookies &amp; Website Analytics</h2>
            </div>
            <p>
              Our website uses basic functional cookies and privacy-respecting
              analytics to monitor server uptime, load speeds, and user navigation
              trends. These cookies do not store sensitive personal information.
              You may configure your browser to block or alert you about cookies;
              however, some portions of the site may experience limited
              functionality.
            </p>
          </div>

          {/* Section 8 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0 font-mono">
                08
              </span>
              <h2>Your Privacy Rights</h2>
            </div>
            <p>
              You have the right to request review, correction, or updating of the
              contact details we hold for your account. Requests for data
              deletion are processed promptly, provided that laboratory test
              records and audit trails that must be retained under statutory
              recordkeeping standards are preserved as required by law.
            </p>
          </div>

          {/* Contact Box */}
          <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
              Privacy Officer &amp; Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              If you have any questions or concerns regarding this Privacy Policy
              or our data handling practices, please contact our administrative
              team:
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Plot No. 79, Sector 155, Noida – 201310, U.P.</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+919971234474" className="hover:text-emerald-600 font-semibold">
                  +91 99712 34474
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:info@mqtlab.com" className="hover:text-emerald-600 font-semibold">
                  info@mqtlab.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

