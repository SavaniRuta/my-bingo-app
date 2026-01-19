"use client";
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import { Button } from "@/components/ui/button";
import { BellDotIcon, Gauge } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


export function Header() {
    return (
        <header className="px-4 lg:px-8 py-3 sticky top-0 z-50 border-b border-border bg-white">
            <div>
                <div className="flex items-center flex-1 justify-between lg:justify-normal gap-x-4  lg:gap-x-8">
                    <div className="w-64 lg:block hidden">
                        <Image src={bingoLogo} alt="Bingo Logo" width={80} />
                    </div>
                    <div className="flex items-center gap-x-4 lg:gap-x-5">
                        <Image src={bingoLogo} alt="Bingo Logo" width={70} className="flex lg:hidden" />
                        <div className="shrink-0 bg-border w-px block h-5 lg:hidden"></div>
                        <Button variant="secondary" className="block lg:hidden">Create card</Button>
                    </div>

                    <div className="flex items-center gap-x-2 lg:gap-x-3 lg:ml-auto">
                        <div className="hidden lg:flex items-center">
                            <Button variant="ghost">Dashboard</Button>
                            <Button variant="ghost">My cards</Button>
                        </div>

                        <div className="shrink-0 bg-border w-px hidden h-6 lg:block"></div>

                        <div className="shrink-0 flex items-center gap-3">
                            <div>
                                <Button variant="outline" size="icon" className="outline-none border-none shadow-none">
                                    <Gauge width={24} height={24} />
                                </Button>
                                <Button variant="ghost">
                                    <BellDotIcon width={24} height={24} />
                                </Button>
                            </div>

                            <Button variant="secondary" className="hidden lg:block">Create card</Button>

                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
