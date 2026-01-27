import { ChangeLog } from "@/components/dashboard/changeLog/changeLog";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { SITE_URLS } from "@/utils/const";
import { CHANGLOG_POSTS } from "@/utils/dummy-data";

export default function Changelog() {
  const itemCount = 12;
  const changlogToRender = itemCount
    ? CHANGLOG_POSTS.slice(0, itemCount)
    : CHANGLOG_POSTS;

  return (
    <>
      <DashboardHeader pathName={SITE_URLS.changelog}>
        <div className="space-y-4 lg:space-y-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
            {changlogToRender.map((post) => (
              <li key={post.id}>
                <ChangeLog image={post.image} title={post.title} id={post.id} />
              </li>
            ))}
          </ul>
        </div>
      </DashboardHeader>
    </>
  );
}
