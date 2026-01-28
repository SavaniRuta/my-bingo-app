import { notFound } from "next/navigation";
import { CHANGLOG_POSTS } from "@/utils/dummy-data";
import { ChangeLogArticle } from "@/components/dashboard/changeLogArticle/changeLogArticle";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Changelog({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).trim().toLowerCase();

  const post = CHANGLOG_POSTS.find(
    (item) => item.id.trim().toLowerCase() === decodedSlug,
  );

  if (!post) {
    notFound();
  }

  return <ChangeLogArticle post={post} />;
}
