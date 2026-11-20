import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/animations/AnimationComponents";
import { posts } from "@/data/blog";
import Typo from "@/components/ui/Typo";

export default function PostGrid() {
  return (
    <section className="pb-24 bg-clicbot-white">
      <div className="max-w-350 mx-auto px-6 lg: md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title}>
              <Link
                href="#"
                className="group flex flex-col overflow-hidden bg-black/5 hover:bg-clicbot-white rounded-2xl duration-500"
              >
                {/* Image */}
                {/* <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div> */}

                {/* Content */}
                <div className="p-5 py-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <Typo tag="span" className="border-clicbot-gray-300! ">
                      {post.category}
                    </Typo>
                    <Typo className="text-[10px] text-clicbot-gray-400 font-mono">
                      {post.readTime}
                    </Typo>
                  </div>
                  <Typo
                    font="f2"
                    className="mb-3 group-hover:text-clicbot-accent transition-colors"
                  >
                    {post.title}
                  </Typo>
                  <p className="text-clicbot-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <Typo className="text-xs text-clicbot-gray-400 font-mono">
                      {post.date}
                    </Typo>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load more */}
        <FadeUp delay={0.3}>
          <div className="mt-16 flex justify-center">
            <button className="btn btn-outline px-10 py-4 text-sm">
              <Typo>Load more articles</Typo>
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
