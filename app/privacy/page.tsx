import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <Navbar />

      <main className="flex-1">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Privacy Policy for Mlem Mobile Application
            </h1>

            <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 border border-zinc-200 dark:border-zinc-700 space-y-6">
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Effective Date: July 8th, 2023
              </p>

              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Thank you for using Mlem! This Privacy Policy outlines how your
                personal information is collected, used, and protected when you
                use the Mlem mobile application (&#34;App&#34;). Please read
                this Privacy Policy carefully to understand our practices
                regarding your personal information. By using the Mlem mobile
                application, you acknowledge that you have read and understood
                this Privacy Policy and agree to the collection, use, and
                disclosure of your information as described herein.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">
                Information We Collect
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Mlem does not collect or store any user data. We do not collect
                any personally identifiable information or track your activities
                within the App.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">
                Servers and Data Control
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Mlem connects to servers that we do not host or have control
                over. While we strive to ensure the security and privacy of your
                data within our App, we cannot guarantee the security or privacy
                practices of the external servers. Any data stored or processed
                on these servers is subject to the respective privacy policies
                and terms of service of those servers.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">Adult Content</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Lemmy is a link aggregator platform, and while some instances
                that Mlem accesses may host adult content, it blocks such
                content by default. We take reasonable measures to prevent the
                display of explicit or adult content within the App, but we
                cannot guarantee that all instances or communities will follow
                the appropriate procedures to label adult content. It is your
                responsibility to exercise caution while accessing external
                content.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">
                Third-Party Services
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Mlem does not integrate any third-party services, advertising
                networks, or analytics tools that collect personal information
                or track your activities within the App. We prioritize user
                privacy and do not engage in any data sharing or tracking
                practices.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">
                Children&#39;s Privacy
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                Mlem is not intended for use by individuals under the age of 13.
                We do not knowingly collect personal information from children
                under the age of 13. If we become aware that we have
                inadvertently collected personal information from a child under
                the age of 13, we will take steps to delete the information as
                soon as possible. If you believe that we may have collected
                information from a child under the age of 13, please contact us
                using the information provided in the &#34;Contact Us&#34;
                section below.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">
                Changes to this Privacy Policy
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                We reserve the right to modify or update this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                the revised Privacy Policy.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">Contact Us</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-justify">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or the privacy practices of Mlem, please contact
                us at mlemappofficial@gmail.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
