import Image from "next/image";
import facebookIcon from "@/public/images/facebook-icon.svg";
import instagramIcon from "@/public/images/instagram-icon.svg";
import printerestIcon from "@/public/images/printerest-icon.svg";
import youTubeIcon from "@/public/images/you-tube-icon.svg";
import Link from "next/link";
import BccLogo from "@/components/global/bccLogo/bccLogo";
import { Text } from "@/components/global/text/text";

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

type SocialLink = {
  href: string;
  icon: any;
  alt: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "#",
    icon: facebookIcon,
    alt: "Facebook",
  },
  {
    href: "#",
    icon: instagramIcon,
    alt: "Instagram",
  },
  {
    href: "#",
    icon: youTubeIcon,
    alt: "YouTube",
  },
  {
    href: "#",
    icon: printerestIcon,
    alt: "Pinterest",
  },
];

export function Footer() {
    return (
        <footer className="pb-4 pt-7 lg:pb-6 lg:pt-8 bg-white font-inter">
            <div className="max-w-7xl mx-auto lg:px-6 px-4"> 
                <div className="grid grid-footer-column xl:gap-8 justify-between">
                    <div className="space-y-6">
                        <BccLogo />
                         <Text variant="sm" color="gray-800" className="mt-4">
                            With our easy-to-use software, you can create custom bingo cards with images, text, or emojis ready to play online or in person.
                        </Text>
                        <div className="flex items-center gap-8">
                            {SOCIAL_LINKS.map((item) => (
                              <Link key={item.alt} href={item.href}>
                                <Image src={item.icon} alt={item.alt} />
                              </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 md:gap-8 xl:mt-0 mt-8">
                        {footerSections.map(({ title, links }) => (
                            <div key={title}>
                                <Text as="h6" color="gray-900" weight="semibold">{title}</Text>
                                <ul className="lg:mt-4 mt-3 lg:space-y-3 space-y-2">
                                    {links.map(({ title, href }) => (
                                      <li key={title}>
                                        <Link
                                        href={href}
                                        className="text-gray-600 hover:text-gray-900 text-sm"
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
                  <Text variant="sm" color="gray-500">Copyright © 2021 – 2025 Bingo Card Creator</Text>
                </div>
            </div>
        </footer>
    );
}