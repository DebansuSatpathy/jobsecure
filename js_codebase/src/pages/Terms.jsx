import React from "react";
import PageLayout from "../layout/PageLayout";

export default function Terms() {
  return (
    <PageLayout title="Terms">
      <div className="space-y-4 text-gray-700 leading-relaxed max-w-2xl">
        <p>
          JobSecure provides resume writing, job-search guidance, interview
          preparation, and interview-scheduling support. We do not employ you and
          we do not guarantee a job offer or a salary.
        </p>
        <p>
          You agree to share accurate work history. We will not invent experience,
          degrees, or employers on your resume.
        </p>
        <p>
          Scheduling support requires you to reply, confirm slots, and attend.
          Missed interviews after a slot is booked are not re-guaranteed.
        </p>
        <p>
          Plan contents are those listed on the Plans section at the time you pay.
          Add-ons are optional and charged separately.
        </p>
      </div>
    </PageLayout>
  );
}
