import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function AccountPage() {
  return (
    <>
      <div className="max-w-152 w-full">
        <div className="pb-5 border-b border-border mb-8">
          <h3 className="text-2xl font-semibold">Account</h3>
          <p className="text-muted-foreground">
            Manage your email, name and security.
          </p>
        </div>
        <div className="space-y-5">
          <Card className="p-6 gap-1">
            <h2 className="text-lg font-semibold">Profile Photo</h2>
            <div className="flex items-center gap-4">
              <div className="shrink-0 aspect-square bg-muted rounded-full overflow-hidden w-16 h-16">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <span className="mb-1.5 text-sm font-normal text-muted-foreground block">
                  Max file size: 3 MB
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="secondary">Upload</Button>
                  <Button variant="outline">Remove</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 gap-1">
            <div className="flex items-center gap-6 justify-between">
              <div>
                <h2 className="text-lg font-semibold">Your name</h2>
                <p className="text-muted-foreground">Sam Underwood</p>
              </div>
              <div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 gap-1">
            <div className="flex items-center gap-6 justify-between">
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="text-muted-foreground">Kate@email.com</p>
              </div>
              <div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 gap-1">
            <div className="flex items-center gap-6 justify-between">
              <div>
                <h2 className="text-lg font-semibold">Password</h2>
                <p className="text-muted-foreground">*********</p>
              </div>
              <div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
