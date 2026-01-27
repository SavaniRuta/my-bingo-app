"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { formatSlugToTitle } from "@/utils/const"

export default function Changlog() {
  const params = useParams();
  const changlogSlug = params.slug as string;

  const title = formatSlugToTitle(changlogSlug);

  return (
    <>
      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <div className="grid lg:grid-cols-[170px_1fr] gap-12 w-full lg:max-w-204.5">
            <div className="space-y-3">
              <p className="text-muted-foreground text-xs font-medium">Apr 6, 2023</p>
              <div className="flex gap-1.5">
                <Badge variant="secondary">New feature</Badge>
                <Badge variant="warning">Bug fixes</Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Image
                  src="/images/sharing-smater-changelog.png"
                  alt="Changlog image"
                  className="rounded-14px"
                  width={600}
                  height={385}
                />
              </div>
              <div className="py-6 space-y-4">
                <h3 className="font-semibold">{title}</h3>
                <p>
                  In the latest release, I've added support for commit message
                  and description suggestions via an integration with OpenAI.
                  Commit looks at all of your changes, and feeds that into the
                  machine with a bit of prompt-tuning to get back a commit
                  message that does a surprisingly good job at describing the
                  intent of your changes.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Added commit message and description suggestions powered
                    by OpenAI
                  </li>
                  <li>
                    Fixed race condition that could sometimes leave you in a broken rebase state
                  </li>
                  <li>
                    Improved active project detection to try and ignore file changes triggered by the system instead of the user
                  </li>
                  <li>
                    Added commit message and description suggestions powered
                    by OpenAI
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
