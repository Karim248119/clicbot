import Image from "next/image";
import Link from "next/link";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  RevealText,
} from "@/components/animations/AnimationComponents";
import { categories, featuredPost, posts } from "@/data/blog";
import Typo from "@/components/ui/Typo";
import PostGrid from "@/components/sections/PostGrid";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-clicbot-white ">
        <div className="max-w-350 mx-auto px-6 lg: md:px-12">
          <FadeUp>
            <Typo tag="span">The Clicbot Journal</Typo>
          </FadeUp>
          <div className="overflow-hidden mb-6">
            <RevealText>
              <Typo tag="h1" className="text-8xl">
                Ideas, insights,
                <br />& stories.
              </Typo>
            </RevealText>
          </div>
          <FadeUp delay={0.3}>
            <p className="text-clicbot-gray-500 text-xl max-w-xl">
              Research, parenting advice, engineering deep dives, and real
              stories from the Clicbot community.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Categories */}
      <section className="z-30 bg-clicbot-white/90 backdrop-blur-md border-b border-clicbot-gray-200">
        <div className="max-w-350 mx-auto px-6 lg: md:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  i === 0
                    ? "bg-clicbot-black text-white"
                    : "text-clicbot-gray-500 hover:text-clicbot-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-clicbot-white">
        <div className="max-w-350 mx-auto px-6 lg: md:px-12">
          <FadeUp>
            <Link
              href="#"
              className="group p-8 grid grid-cols-1 lg: md:grid-cols-2 gap-8 items-center bg-clicbot-black/5 rounded-2xl overflow-hidden hover:bg-clicbot-black hover:text-clicbot-white duration-300"
            >
              {/* Image */}
              <div className="relative h-64 lg: md:h-96 overflow-hidden rounded-2xl ">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="">
                <div className="flex items-center gap-3 mb-4">
                  <Typo
                    tag="span"
                    className="border-clicbot-gray-300! group-hover:text-gray-300!"
                  >
                    {featuredPost.category}
                  </Typo>
                  <Typo
                    tag="span"
                    className="border-clicbot-gray-300! group-hover:text-gray-300!"
                  >
                    Featured
                  </Typo>
                </div>
                <Typo
                  font="f2"
                  className="mb-4 text-2xl group-hover:text-clicbot-accent duration-300"
                >
                  {featuredPost.title}
                </Typo>
                <p className="text-clicbot-gray-500 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-clicbot-accent text-white flex items-center justify-center text-sm font-medium">
                    {featuredPost.author.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-clicbot-gray-400">
                      {featuredPost.author.role}
                    </p>
                  </div>
                  <div className="ml-auto text-xs text-clicbot-gray-400 font-mono">
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Post grid */}
      <PostGrid />

      {/* Newsletter */}
    </>
  );
}
