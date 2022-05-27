import { GetStaticProps } from "next";
import { createClient } from "../../services/prismic";

import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";

type Post = {
  slug: string;
  title: string;
  abstract: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={
                session?.activeSubscription
                  ? `/posts/${post.slug}`
                  : `/posts/preview/${post.slug}`
              }
            >
              <a>
                <time>{post.updatedAt}</time>

                <strong className={styles.title}>{post.title}</strong>

                <p>{post.abstract}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const response = await client.getByType("post", {
    pageSize: 100,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: post.data.Title,
      abstract:
        post.data.Content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
