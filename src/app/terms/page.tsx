export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-12 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-orange-600">Terms & Conditions</h1>

        <p>
          Welcome to Best Bonanza! By accessing or using our services, you agree to be bound by the following terms and conditions.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">1. Office Space Usage</h2>
          <p>
            All office spaces are for professional use only. Any misuse or illegal activities conducted on premises will lead to immediate termination of the agreement without refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">2. Payment Terms</h2>
          <p>
            Rent must be paid monthly in advance. Late payments may incur additional charges or result in access restrictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">3. Booking & Cancellation</h2>
          <p>
            You may book spaces through our website. Cancellations made within 48 hours of the start date will receive a full refund. After that, charges may apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">4. Security & Access</h2>
          <p>
            Clients are responsible for their belongings. We offer secure access, but Best Bonanza is not liable for lost or stolen items.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">5. Modifications</h2>
          <p>
            We reserve the right to update these terms at any time. It is your responsibility to check them periodically.
          </p>
        </section>

        <p className="text-gray-600">
          If you have any questions about these terms, please contact our support team.
        </p>
      </div>
    </div>
  );
}
