import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleFadingArrowUpIcon } from "lucide-react"



export function RegisterForm() {
  return (
    <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
                For a fast, secure login—no password required.
            </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
            <Button variant="outline" className="w-full">
                <CircleFadingArrowUpIcon /> Sign up with Google
            </Button>
            <Button className="w-full">
                Sign up with Apple
            </Button>
            <Button variant="outline" className="w-full">
                Sign up with email
            </Button>
            <div className="text-muted-foreground text-sm">
                By signing up, you agree to the Terms of Service and Privacy Policy
            </div>
        </CardContent>

        <CardFooter>
            <div className="text-muted-foreground text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                Sign in
                </a>
            </div>
        </CardFooter>
    </Card>
  )
}
