"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  fadeInVariants,
} from "@/components/ScrollAnimations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Skeleton from "./Skeleton";

interface Blog {
  id: number;
  title: string;
  thumbnail: string;
  createdAt: string;
}

function Stories() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate data loading or fetch your cart data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      {/* Stories */}
      <div className="w-full bg-[#FFFFFF] py-10">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer staggerChildren={0.3}>
            <motion.h1
              variants={fadeInVariants}
              className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              STORIES FROM THE RIFT
            </motion.h1>
          </StaggerContainer>
          <ScrollReveal variant="fadeIn">
            {isLoading ? (
              <Skeleton />
            ) : (
              <div className="flex items-center justify-evenly flex-wrap my-8">
                {blogs.map((blog) => (
                  <div key={blog.id} className="my-6 mx-4 h-fit w-[380px]">
                    <div className="text-left">
                      <Image
                        src={blog.thumbnail}
                        height={320}
                        width={400}
                        alt={blog.title}
                        className="my-4 w-full max-w-[400px]"
                      />
                      <h3 className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-condensed-medium)] text-[32px] leading-none">
                        {format(new Date(blog.createdAt), "MMMM d, yyyy")}
                      </h3>
                      <p className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-8 text-[32px] leading-normal">
                        {blog.title}
                      </p>
                      <Link
                        href={`/blogs/${blog.id}`}
                        className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default Stories;
