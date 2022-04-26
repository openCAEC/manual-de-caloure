import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "../components/CustomLink";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import { postFilePaths, CONTENT_PATCH } from "../utils/mdxUtils";
import NextButton from "../components/NextButton";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  h2: Heading,
  AlertBox: dynamic(() => import("../components/AlertBox")),
  NoIntent: dynamic(() => import("../components/NoIntent")),
  Head,
};

export default function PostPage({ slug, source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Manual de caloure CAEC</title>
      </Head>
      <Layout>
        <MDXRemote {...source} components={components} />

        <style jsx>{`
          .post-header h1 {
            margin-bottom: 0;
          }

          .post-header {
            margin-bottom: 2rem;
          }
          .description {
            opacity: 0.6;
          }
        `}</style>
        <NextButton slug={slug} />
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(CONTENT_PATCH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
