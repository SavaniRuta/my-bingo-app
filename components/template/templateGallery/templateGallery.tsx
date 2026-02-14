"use client";
import * as React from "react";
import Image from "next/image";
import { Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function TemplateGallery({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [dialogApi, setDialogApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const hasMultipleImages = images.length > 1;

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (open && dialogApi) {
      dialogApi.scrollTo(current);
    }
  }, [open, dialogApi, current]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  if (!images?.length) return null;

  return (
    <>
      <div className={cn(hasMultipleImages ? "flex gap-8 lg:pr-4" : "")}>
        <div className="hidden flex-col lg:flex">
          {hasMultipleImages && (
            <Carousel className="w-full">
              <CarouselContent
                className={cn("gap-1.5 flex-col ml-0 overflow-visible")}
              >
                {images.map((image, index) => (
                  <CarouselItem
                    key={`thumb-${image}-${index}`}
                    className={cn(
                      "pl-0 cursor-pointer size-20",
                      current === index
                        ? "ring-2 ring-gray-200 border-2 border-white rounded-14"
                        : "",
                    )}
                    onClick={() => handleThumbClick(index)}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={200}
                      height={200}
                      className={cn(
                        "object-cover rounded-14 transition aspect-square",
                      )}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>

        <div
          className={cn(
            "lg:w-full relative rounded-lg",
            !hasMultipleImages
              ? "overflow-hidden lg:max-h-144 lg:bg-gray-50 lg:border lg:border-gray-200 lg:w-full lg:px-12 lg:pt-8 xs:w-2/5 "
              : "",
          )}
        >
          <Button
            type="button"
            variant="outline"
            size="icon-small"
            onClick={() => setOpen(true)}
            className="hidden lg:flex absolute top-3 left-3 z-10"
          >
            <Maximize className="size-4" />
          </Button>

          <Carousel
            className={cn(hasMultipleImages ? "" : "")}
            setApi={setApi}
            opts={{ loop: hasMultipleImages }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={`${image}-${index}`}
                  className="lg:basis-full basis-auto"
                >
                  <Image
                    src={image}
                    alt={`Template image ${index + 1}`}
                    width={1000}
                    height={1000}
                    className={cn(
                      "w-full rounded-20 object-contain",
                      "aspect-3/4",
                      "max-h-105",
                      "lg:aspect-auto lg:max-h-144",
                    )}
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {hasMultipleImages && (
              <>
                <CarouselPrevious
                  className={cn("hidden lg:flex -left-4 rounded-10")}
                />
                <CarouselNext
                  className={cn("hidden lg:flex -right-4 rounded-10")}
                />
              </>
            )}
          </Carousel>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            "h-full fixed border-none bg-[rgba(21,21,23,0.6)] backdrop-blur-lg shadow-none p-0 max-w-none flex items-center justify-center",
          )}
        >
          <DialogTitle className="sr-only">Gallery</DialogTitle>

          <Carousel
            className="w-full max-w-[90vw] max-h-[90vh]"
            setApi={setDialogApi}
            opts={{ loop: hasMultipleImages }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt="Bingo card template"
                    width={1600}
                    height={1600}
                    className="mx-auto max-h-[85vh] w-auto object-contain rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {hasMultipleImages && (
              <>
                <CarouselPrevious className="" />
                <CarouselNext className="" />
              </>
            )}
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
