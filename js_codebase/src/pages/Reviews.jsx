import React from "react";
import { Star } from "lucide-react";
import PageLayout from "../layout/PageLayout";
import { defaultReviews } from "../data/reviews";
import { whatsappHref } from "../config";

const Reviews = () => {
  return (
    <PageLayout title="Reviews">
      <p className="text-gray-600 mb-8 max-w-2xl">
        These are the stories we show on the site. We do not generate names or
        let the page invent ratings.
      </p>

      <div className="space-y-5 max-w-2xl">
        {defaultReviews.map((r) => (
          <article
            key={r.id}
            className="bg-white p-5 rounded-xl border border-gray-200"
          >
            <div className="flex justify-between gap-3">
              <div>
                <h3 className="font-semibold text-gray-900">{r.name}</h3>
                <p className="text-sm text-gray-500">{r.title}</p>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={r.rating >= i ? "#facc15" : "none"}
                    className={r.rating >= i ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mt-3">{r.comment}</p>
          </article>
        ))}
      </div>

      <a href={whatsappHref()} className="btn-primary mt-10 sm:w-auto">
        Send resume on WhatsApp
      </a>
    </PageLayout>
  );
};

export default Reviews;
