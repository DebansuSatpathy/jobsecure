import React from "react";
import PageLayout from "../layout/PageLayout";

export default function Privacy() {
  return (
    <PageLayout title="Privacy">
      <div className="space-y-4 text-gray-700 leading-relaxed max-w-2xl">
        <p>
          JobSecure collects only what we need to deliver the service: your name,
          phone, email, resume, and the role you are targeting.
        </p>
        <p>
          We use this to rewrite documents, message you on WhatsApp, and schedule
          interviews when that is part of your plan. We do not sell your data.
        </p>
        <p>
          Payment is processed by Cashfree. Card or UPI details do not pass through
          this website.
        </p>
        <p>
          To ask us to delete your chat or files, message us on WhatsApp and say so.
        </p>
      </div>
    </PageLayout>
  );
}
