import React from "react";
import PageLayout from "../layout/PageLayout";
import { whatsappHref } from "../config";

const OurStory = () => (
  <PageLayout title="About JobSecure">
    <div className="space-y-6 max-w-2xl text-gray-700 text-lg leading-relaxed">
      <p>
        JobSecure helps people who are applying and hearing nothing. We rewrite
        resumes so they pass ATS, then we help with the search, interview prep,
        and — on the hands-on plan — scheduling the calls.
      </p>
      <p>
        We work mostly with freshers, early professionals (0–4 years), people
        with a career gap, and people switching into IT. The work happens on
        WhatsApp, not through a long portal.
      </p>
      <p>
        We do not run a job board. We do not promise a dream job in 90 days. The
        next win we sell is a resume that gets opened, then interview calls you
        can actually attend.
      </p>
      <p>
        <a href={whatsappHref()} className="text-green-800 font-semibold underline underline-offset-2">
          Send your resume on WhatsApp
        </a>
        {" "}if you want a straight verdict on what’s blocking calls.
      </p>
    </div>
  </PageLayout>
);

export default OurStory;
