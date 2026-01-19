"use client";
import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { useParams } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import sharingSmaterChangelog from "@/public/images/sharing-smater-changelog.png";
import Image from "next/image";

export default function Changlog() {
  const params = useParams();
  const changlogSlug = params.slug as string;

  return (
    <>
      <ScreenHeader title={changlogSlug} />

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <SidebarProvider className="min-h-auto">
            <div className="flex gap-12 w-full lg:max-w-204.5">
              <Sidebar className="relative border-none h-auto">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <p>Apr 6, 2023</p>
                        <div>
                          <Badge variant="secondary">New feature</Badge>
                          <Badge variant="secondary">Bug fixes</Badge>
                        </div>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>

              <div className="">
                <Image
                  src={sharingSmaterChangelog}
                  alt="Changlog image"
                  className="rounded-[14px]"
                />
                <p>
                  In the latest release, I've added support for commit message
                  and description suggestions via an integration with OpenAI.
                  Commit looks at all of your changes, and feeds that into the
                  machine with a bit of prompt-tuning to get back a commit
                  message that does a surprisingly good job at describing the
                  intent of your changes.
                </p>
                <ul>
                  <li>
                    Added commit message and description suggestions powered by
                    OpenAI
                  </li>
                  <li>
                    Added commit message and description suggestions powered by
                    OpenAI
                  </li>
                  <li>
                    Added commit message and description suggestions powered by
                    OpenAI
                  </li>
                  <li>
                    Added commit message and description suggestions powered by
                    OpenAI
                  </li>
                </ul>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </>
  );
}
