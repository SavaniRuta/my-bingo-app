import Image from "next/image";

export default function TemplateGallery() {
    return (
        <div className="relative w-2/3 xs:w-2/5 lg:max-h-[576px] rounded-lg overflow-hidden border border-gray-200 lg:bg-gray-50 lg:w-full lg:border-gray-100 lg:px-12 lg:pt-8">
            <Image src="/images/test-template-card.jpg.webp" alt="Template" width={1000} height={1000} className="rounded-20" />
        </div>
    );
}