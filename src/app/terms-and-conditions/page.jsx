import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  FlaskConical,
  CheckCircle2,
  Clock,
  Lock,
  PhoneCall,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Terms & Conditions | Minu Quality Testing Laboratories Private Limited",
  description:
    "Standard terms and conditions for testing services, sample submission, laboratory certificates, confidentiality, and client agreements at Minu Quality Testing Laboratories Private Limited.",
  alternates: {
    canonical: "https://mqtlab.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ── HEADER BANNER ── */}
      <section className="bg-gradient-to-br from-[#06182c] via-[#0b2440] to-[#06182c] text-white py-14 sm:py-18 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>LEGAL &amp; SERVICE AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Terms &amp; Conditions
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Please review the standard terms governing material testing requests,
            sample handling, report issuance, and client engagements with Minu
            Quality Testing Laboratories Private Limited.
          </p>

          <p className="text-[11px] text-slate-400 mt-4">
            Last Updated: January 2025 • Effective across all testing disciplines
          </p>
        </div>
      </section>

      {/* ── CONTENT CONTAINER ── */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-10 space-y-10 text-slate-700 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                01
              </span>
              <h2>Acceptance of Testing Terms</h2>
            </div>
            <p>
              By accessing this website, submitting an online consultation
              request, issuing a purchase order, or physically delivering test
              specimens to our facility, you (&ldquo;Client&rdquo;,
              &ldquo;Customer&rdquo;) agree to be bound by these standard Terms
              and Conditions of Minu Quality Testing Laboratories Private
              Limited (&ldquo;MQTL&rdquo;, &ldquo;Laboratory&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;).
            </p>
          </div>

          {/* Section 2 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                02
              </span>
              <h2>Sample Submission &amp; Representation</h2>
            </div>
            <ul className="space-y-2 list-disc pl-5 text-slate-600">
              <li>
                The Client is solely responsible for ensuring that all submitted
                specimens are representative of the material lot, batch, or
                consignment under assessment.
              </li>
              <li>
                Samples must be packaged appropriately to avoid transit
                contamination, moisture variation, or physical deterioration.
                MQTL accepts no responsibility for samples damaged or altered
                prior to receipt at our intake desk.
              </li>
              <li>
                Each sample consignment must be accompanied by clear sample
                identification, project details, and the requested testing scope.
              </li>
              <li>
                Unless otherwise agreed in writing, residual non-destructive test
                samples are retained for up to 15 days following report issuance
                before environmentally compliant disposal.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                03
              </span>
              <h2>Laboratory Execution &amp; Methods</h2>
            </div>
            <p>
              MQTL conducts testing according to established laboratory protocols
              and standardized testing methodologies applicable to the respective
              discipline (civil construction, timber, water, furniture, or
              mechanical hardware). In cases where specific test parameters are
              requested without a declared methodology, our technical experts will
              apply the most relevant recognized standard protocol.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                04
              </span>
              <h2>Test Certificates &amp; Report Usage</h2>
            </div>
            <ul className="space-y-2 list-disc pl-5 text-slate-600">
              <li>
                Every test certificate, analysis sheet, or quality report issued
                by MQTL relates strictly to the specific specimen(s) tested as
                received by the laboratory.
              </li>
              <li>
                The report does not imply endorsement, warranty, or approval of
                the broader manufacturing process, batch, or production facility
                unless a separate formal certification agreement is executed.
              </li>
              <li>
                Test certificates must be reproduced only in full. Partial
                duplication, editing, or unauthorized modification of reports is
                expressly prohibited and renders the certificate null and void.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                05
              </span>
              <h2>Test Reporting &amp; Certificate Delivery</h2>
            </div>
            <p>
              Testing schedules and certificate delivery milestones are
              communicated upon sample registration and verification. Technical
              evaluation commences after the physical sample, complete technical
              documentation, and agreed commercial terms have been received and
              verified at our laboratory intake desk.
            </p>
          </div>

          {/* Section 6 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                06
              </span>
              <h2>Limitation of Liability</h2>
            </div>
            <p>
              To the fullest extent permitted by applicable Indian laws:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-600 mt-2">
              <li>
                MQTL&rsquo;s cumulative liability for any loss, claim, or damage
                arising out of errors, delays, or performance of testing
                services shall be limited solely to the actual fee billed and
                collected for that specific test parameter.
              </li>
              <li>
                Under no circumstances shall MQTL, its directors, engineers, or
                technicians be liable for indirect, incidental, punitive, or
                consequential commercial damages (including loss of profits,
                project delays, or rework costs).
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                07
              </span>
              <h2>Confidentiality of Client Data</h2>
            </div>
            <p>
              MQTL treats all client technical information, test results, and
              formulations as strictly confidential. Test outcomes will not be
              disclosed or shared with any third party without the Client&rsquo;s
              prior written consent, except where disclosure is mandated by law,
              statutory authorities, or court directives.
            </p>
          </div>

          {/* Section 8 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                08
              </span>
              <h2>Fees, Invoicing &amp; Payment</h2>
            </div>
            <p>
              Testing fees are governed by the formal quotation or price schedule
              provided prior to service commencement. Invoices are payable as per
              the agreed commercial terms. Official reports and signed
              certificates are issued upon settlement of outstanding dues, unless
              an approved institutional credit agreement is active.
            </p>
          </div>

          {/* Section 9 */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs shrink-0 font-mono">
                09
              </span>
              <h2>Governing Law &amp; Jurisdiction</h2>
            </div>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the substantive laws of India. Any legal dispute or
              proceeding arising in connection with testing services shall be
              subject exclusively to the jurisdiction of the competent courts in
              Gautam Buddha Nagar / Noida, Uttar Pradesh.
            </p>
          </div>

          {/* Contact Box */}
          <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
              Questions Regarding Our Terms?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              For commercial clarifications, corporate contracts, or tender
              documentation queries, reach out to our legal and administrative
              desk:
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Plot No. 79, Sector 155, Noida – 201310, U.P.</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-red-600 shrink-0" />
                <a href="tel:+919971234474" className="hover:text-red-600 font-semibold">
                  +91 99712 34474
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a href="mailto:info@mqtlab.com" className="hover:text-red-600 font-semibold">
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

