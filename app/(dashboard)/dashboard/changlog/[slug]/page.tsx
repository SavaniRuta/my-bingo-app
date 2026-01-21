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
import { formatSlugToTitle } from "@/utils/const"

export default function Changlog() {
  const params = useParams();
  const changlogSlug = params.slug as string;

  const title = formatSlugToTitle(changlogSlug);

  return (
    <>
      <ScreenHeader title={title} />

      {/* Bottom content */}
      <div className="py-8">
        <div className="dashboard-container">
          <SidebarProvider className="min-h-auto">
            <div className="grid lg:grid-cols-[170px_1fr] gap-12 w-full lg:max-w-204.5">
              <Sidebar className="relative border-none h-auto max-w-42.5 w-full">
                <SidebarContent>
                  <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <div className="space-y-3">
                          <p className="text-muted-foreground font-medium">Apr 6, 2023</p>
                          <div className="flex gap-1.5">
                            <Badge variant="secondary">New feature</Badge>
                            <Badge variant="outline" className="bg-warning border border-warning-border text-warning-foreground">Bug fixes</Badge>
                          </div>
                        </div>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>

              <div className="space-y-6">
                <div>
                  <Image
                    src={sharingSmaterChangelog}
                    alt="Changlog image"
                    className="rounded-[14px]"
                  />
                </div>
                <div className="py-6 space-y-4">
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
          </SidebarProvider>
        </div>
      </div>
    </>
  );
}
