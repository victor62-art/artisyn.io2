export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8 text-gray-900">
        <div className="space-y-3">
          <p className="text-sm text-gray-500">Updated: May 31, 2026</p>
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p className="text-base text-gray-600 leading-7">
            At Artisyn, we are committed to protecting your privacy and handling
            your personal information with care. This policy explains what data
            we collect, how we retain it, and the rights you have over your
            information.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Collection</h2>
          <p className="text-gray-600 leading-7">
            We collect the personal information required to provide our
            services, improve the platform, and ensure a secure experience. This
            may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-7">
            <li>
              Account details such as name, email address, and profile
              information.
            </li>
            <li>Communication preferences and support inquiries.</li>
            <li>Usage data and analytics to help us improve the service.</li>
            <li>Payment information when processing transactions.</li>
          </ul>
          <p className="text-gray-600 leading-7">
            We only collect data that is necessary for the product to function
            and to provide a better experience for our users.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="text-gray-600 leading-7">
            We retain your personal data only as long as necessary to deliver
            our services, comply with legal obligations, and protect the rights
            of Artisyn and our users.
          </p>
          <p className="text-gray-600 leading-7">
            When your account is closed or data is no longer needed, we securely
            delete or anonymize it in accordance with applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">User Rights</h2>
          <p className="text-gray-600 leading-7">
            You have rights over your personal data under applicable privacy
            laws, including the right to access, correct, delete, or restrict
            processing of your information.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-7">
            <li>Access the data we hold about you.</li>
            <li>
              Request corrections to inaccurate or incomplete information.
            </li>
            <li>Ask for deletion of data that is no longer necessary.</li>
            <li>
              Object to or limit how we process your data in certain
              circumstances.
            </li>
          </ul>
          <p className="text-gray-600 leading-7">
            If you would like to exercise any of these rights, please contact us
            using the information below.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold">Support Contact</h2>
          <p className="text-gray-600 leading-7">
            For privacy questions, data requests, or support, please reach out
            to our team:
          </p>
          <p className="text-base font-medium text-gray-900">
            Email:{" "}
            <a
              href="mailto:support@artisyn.io"
              className="text-pink-500 hover:underline"
            >
              support@artisyn.io
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
