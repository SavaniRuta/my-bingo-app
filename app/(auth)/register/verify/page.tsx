'use client';
import { useRouter } from "next/navigation";

export default function VerifyPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Check your email</h1>

            <button onClick={() => router.push("/register/success")}>
                Verify
            </button>
        </div>
    );
}