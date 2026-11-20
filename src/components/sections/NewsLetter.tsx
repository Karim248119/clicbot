import React from "react";
import FadeUp from "../animations/FadeUp";
import Typo from "../ui/Typo";

export default function NewsLetter() {
  return (
    <section className="py-24 bg-clicbot-gray-100">
      <div className="max-w-350 mx-auto px-6 lg: md:px-12">
        <FadeUp>
          <div className="max-w-2xl mx-auto text-center">
            <Typo tag="span">Newsletter</Typo>
            <Typo tag="h1">Stay in the loop.</Typo>
            <p className="text-clicbot-gray-500 mb-8 leading-relaxed">
              Get our best articles on childhood development, AI, and creative
              learning — plus early access to new Clicbot features.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-sm border border-clicbot-gray-200 bg-white focus:outline-none focus:border-clicbot-black"
              />
              <button className="btn btn-primary px-6 py-3 text-sm">
                <Typo>Subscribe</Typo>
              </button>
            </div>
            <p className="text-xs text-clicbot-gray-400 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
