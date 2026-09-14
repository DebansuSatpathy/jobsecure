import React from "react";
import PageLayout from "../layout/PageLayout";

export default function Refund() {
  return (
    <PageLayout title="Refunds">
      <div className="space-y-4 text-gray-700 leading-relaxed max-w-2xl">
        <p>
          Resume work that has already been delivered is not refunded. You paid
          for a rewrite, not for a job.
        </p>
        <p>
          If we miss the 24–48 hour resume window without a reason on your side
          (missing inputs, no reply), we complete the rewrite at no extra charge.
        </p>
        <p>
          Unused days on a 60- or 90-day support plan are not cashed out if you
          stop replying. If we cannot start work within 7 days of payment because
          of us, we refund the unused plan.
        </p>
        <p>Questions about a payment: message us on WhatsApp with your Cashfree receipt.</p>
      </div>
    </PageLayout>
  );
}
