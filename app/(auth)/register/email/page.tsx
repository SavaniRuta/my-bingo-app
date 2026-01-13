'use client';
import { useRouter } from "next/navigation";

export default function EmailPage() {
    const router = useRouter();

    return (
        <div>
            <h1>Sign up with email</h1>

            <button onClick={() => router.push("/register/verify")}>
                Continue
            </button>
        </div>
    );
}