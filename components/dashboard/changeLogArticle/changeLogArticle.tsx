import Image, { StaticImageData } from "next/image";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import { Badge } from "@/components/ui/badge";
import { SITE_URLS } from "@/utils/const";


type ChangeLogArticleProps = {
  post: {
    id: string;
    image: StaticImageData;
    title: string;
  };
};

export function ChangeLogArticle({ post }: ChangeLogArticleProps) {
  return (
    <>
      <DashboardHeader
        pathName={SITE_URLS.changelog}
        customTitle={post.title}
      >
        <div className="grid lg:grid-cols-[170px_1fr] gap-12 w-full lg:max-w-204.5">
          <div className="space-y-3">
            <p className="text-muted-foreground text-xs font-medium">
              Apr 6, 2023
            </p>
            <div className="flex gap-1.5">
              <Badge variant="secondary">New feature</Badge>
              <Badge variant="warning">Bug fixes</Badge>
            </div>
          </div>

          <div className="space-y-6">
            <Image
              src={post.image}
              alt="Changlog image"
              className="rounded-14px"
              width={600}
              height={385}
            />
            <div className="py-6 space-y-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p>
                In the latest release, I've added support for commit message and
                description suggestions via an integration with OpenAI. Commit
                looks at all of your changes, and feeds that into the machine
                with a bit of prompt-tuning to get back a commit message that
                does a surprisingly good job at describing the intent of your
                changes.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Added commit message and description suggestions powered by
                  OpenAI
                </li>
                <li>
                  Fixed race condition that could sometimes leave you in a
                  broken rebase state
                </li>
                <li>
                  Improved active project detection to try and ignore file
                  changes triggered by the system instead of the user
                </li>
                <li>
                  Added commit message and description suggestions powered by
                  OpenAI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DashboardHeader>
    </>
  );
}
