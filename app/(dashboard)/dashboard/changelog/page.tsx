import { ChangeLogPost } from "@/components/dashboard/changeLogPost/changeLogPost";
import { CHANGLOG_POSTS } from "@/utils/dummy-data";

export default function Changelog() {
  const itemCount = 12;
  const changlogToRender = itemCount
    ? CHANGLOG_POSTS.slice(0, itemCount)
    : CHANGLOG_POSTS;

  return (
    <>
      <div className="py-8">
        <div className="dashboard-container py-4 lg:px-4">
          <div className="space-y-4 lg:space-y-8">
            <div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                {changlogToRender.map((post) => (
                  <li key={post.id}>
                    <ChangeLogPost image={post.image} title={post.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
