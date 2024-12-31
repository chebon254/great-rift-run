"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { format } from 'date-fns';
import { Card, CardContent} from '@/components/ui/card';
import Socials from '@/components/Footer/Socials';
import Footer from '@/components/Footer/Footer';

interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
}

export default function BlogPost() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/${params.id}`);
      const data = await response.json();
      setBlog(data);
    };

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
    {/* Hero */}
    <div
        className="h-[30vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            <div className="text-left text-[#FFFFFF] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              BLOG
            </div>
          </div>
        </div>
      </div>
    <div className="container max-w-[800px] mx-auto p-6 pt-[100px]">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
          </p>
          <div className="prose max-w-none">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg leading-10">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    <Socials />
    <Footer />
    </>
  );
}