"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Maximize } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

export default function TemplateGallery({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [dialogApi, setDialogApi] = React.useState<CarouselApi>();
  const [open, setOpen] = React.useState(false);

  const isSingleImage = images.length <= 1;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  React.useEffect(() => {
    if (open && dialogApi) {
      dialogApi.scrollTo(current);
    }
  }, [open, dialogApi, current]);

//   const handleThumbClick = React.useCallback(
//     (index: number) => {
//       api?.scrollTo(index);
//     },
//     [api]
//   );

  if (!images?.length) return null;

  return (
    <div className="relative w-2/3 xs:w-2/5 lg:max-h-[576px] rounded-lg overflow-hidden border border-gray-200 lg:bg-gray-50 lg:w-full lg:border-gray-100 lg:px-12 lg:pt-8">
      <Button
        type="button"
        variant="outline"
        size="icon-small"
        onClick={() => setOpen(true)}
        className="absolute bottom-3 top-3 left-3"
      >
        <Maximize className="size-4" />
      </Button>

      {/* <div className="mx-auto max-w-xs"> */}
        <Carousel className="w-full max-w-xs" setApi={setApi}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={`${image}-${index}`}>
                <Image
                  src={image}
                  alt={`Template image ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-20"
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isSingleImage && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>

        {!isSingleImage && (
          <Carousel className="mt-4 w-full">
            <CarouselContent className="-ml-2">
              {images.map((image, index) => (
                <CarouselItem
                  key={`thumb-${image}-${index}`}
                  className="basis-1/4 cursor-pointer "
                  onClick={() => handleThumbClick(index)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={200}
                    height={200}
                    className={cn(
                      "w-full h-full object-cover rounded-14 transition",
                      current === index
                        ? "ring-2 ring-red-800 border-2 border-white"
                        : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      {/* </div> */}


      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-6 bg-white">
        <DialogTitle className="sr-only">Gallery</DialogTitle>
          <Carousel
            className="w-full"
            setApi={setDialogApi}
            opts={{ loop: !isSingleImage }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={`dialog-${image}-${index}`}>
                  <Image
                    src={image}
                    alt={`Dialog image ${index + 1}`}
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {!isSingleImage && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>

        </DialogContent>
      </Dialog>

    </div>
  );
}
