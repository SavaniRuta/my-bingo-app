import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import facebookIcon from "@/public/images/facebook-icon.svg";
import instagramIcon from "@/public/images/instagram-icon.svg";
import printerestIcon from "@/public/images/printerest-icon.svg";
import youTubeIcon from "@/public/images/you-tube-icon.svg";
import Link from "next/link";


const footerSections = [
  {
    title: "Templates",
    links: [
      {
        title: "Language cards",
        href: "#",
      },
      {
        title: "Sports cards",
        href: "#",
      },
      {
        title: "Holiday cards",
        href: "#",
      },
      {
        title: "Academic cards",
        href: "#",
      },
      {
        title: "View all",
        href: "#",
      },
    ],
  },
  {
    title: "Word Finder",
    links: [
      {
        title: "Word starting with",
        href: "#",
      },
      {
        title: "Word ending with",
        href: "#",
      },
      {
        title: "Word containing",
        href: "#",
      },
      {
        title: "Word in the middle",
        href: "#",
      },
      {
        title: "View all",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "FAQ",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Terms of service",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];

export function Footer() {
    return (
        <footer className="pb-4 pt-7 lg:pb-6 lg:pt-10 bg-white">
            <div className="max-w-7xl mx-auto lg:px-6 px-4"> 
                <div className="grid grid-footer-column xl:gap-8 justify-between">
                    <div className="space-y-6">
                        <Image src={bingoLogo} alt="Bingo logo"/>
                         <p className="mt-4 text-text text-sm">
                            With our easy-to-use software, you can create custom bingo cards with images, text, or emojis ready to play online or in person.
                        </p>
                        <div className="flex items-center gap-8">
                            <Link href="#">
                                <Image src={facebookIcon} alt="Facebook"/>
                            </Link>
                            <Link href="#">
                                <Image src={instagramIcon} alt="Instagram"/>
                            </Link>
                            <Link href="#">
                                <Image src={youTubeIcon} alt="YouTube"/>
                            </Link>
                            <Link href="#">
                                <Image src={printerestIcon} alt="Printerest"/>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 md:gap-8 xl:mt-0 mt-8">
                        {footerSections.map(({ title, links }) => (
                            <div key={title}>
                                <h6 className="font-medium text-title">{title}</h6>
                                <ul className="lg:mt-4 mt-3 lg:space-y-3 space-y-2">
                                    {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link
                                        href={href}
                                        className="text-gray hover:text-foreground text-sm"
                                        >
                                        {title}
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:pt-16 pt-4 lg:mt-4">
                    <p className="text-text-gray-500 text-sm">Copyright © 2021 – 2025 Bingo Card Creator</p>
                </div>
            </div>
        </footer>
    );
}