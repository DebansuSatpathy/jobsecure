import React from "react";
import t1 from "../assets/t1.webp";
import t2 from "../assets/t2.webp";
import t3 from "../assets/t3.webp";

const testimonials = [
  {
    text: "My old resume wasn't getting shortlisted anywhere. After JobSecure, I finally understood ATS. I got 3 calls in the first week.",
    name: "Mihir A.",
    title: "Fresher, IT",
    img: t1,
  },
  {
    text: "I wanted to switch from non-IT to IT. The resume plus job-search plan gave me direction. I cracked my first interview in 2 weeks.",
    name: "Amandeep K.",
    title: "Non-IT to IT switcher",
    img: t2,
  },
  {
    text: "Got 2 interview calls within 10 days after the resume rewrite. The gap story helped me face HR without freezing.",
    name: "Priya S.",
    title: "Career-gap candidate",
    img: t3,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
          What job seekers told us
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          First interview calls — not a new life in 90 days.
        </p>

        <div className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="min-w-[80%] snap-start md:min-w-0 rounded-xl border border-gray-200 bg-[#FAFAF8] p-6"
            >
              <img
                src={item.img}
                alt=""
                width={72}
                height={72}
                className="w-14 h-14 rounded-full object-cover"
              />
              <blockquote className="mt-4 text-gray-800 leading-relaxed">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
