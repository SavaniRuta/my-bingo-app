"use client";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { Switch } from "@/components/ui/switch";
import { CardTitle } from "@/components/generator/cardTitle/cardTitle";
import { AddImageWord } from "@/components/generator/addImageWord/addImageWord";
import { ADD_WORDS_TABS, FAQ_DATA_ICON } from "@/utils/dummy-data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageDropzone } from "@/components/generator/imageDropzone/imageDropzone";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleIcon, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <div className="mx-auto container">
        <h1 className="text-gray-500">
          This is my Bingo SignUp and Sign in Flow
        </h1>
        <Link href={SITE_URLS.auth.register}>Register</Link>
      </div>

      <div className="max-w-137.5 mx-auto p-7 space-y-6">
        <div className="space-y-3">
          <RadioGroup defaultValue="default-1">
            <div className="space-y-3">
              <RadioGroupItem
                value="default-1"
                label="Radio Button Text"
                description="This is a radio description"
              />
              <RadioGroupItem
                value="default-2"
                label="Radio Button Text"
                description="This is a radio description"
                weight="medium"
              />
            </div>
          </RadioGroup>

          <RadioGroup defaultValue="box-1">
            <div className="grid grid-cols-2 gap-3">
              <RadioGroupItem
                variant="box"
                value="box-1"
                label="Radio Button Text"
                description="This is a radio description"
              />
              <RadioGroupItem
                variant="box"
                value="box-2"
                label="Radio Button Text"
                description="This is a radio description"
              />
            </div>
          </RadioGroup>

          <RadioGroup defaultValue="fancy-1">
            <div className="space-y-2">
              <RadioGroupItem
                variant="fancy-item"
                value="fancy-item"
                label="Title"
                description="This is a label"
                icon={<CircleIcon className="size-4" />}
              />
              <RadioGroupItem
                variant="fancy-item"
                value="fancy-item-1"
                label="Title"
                description="This is a label"
                icon={<CircleIcon className="size-4" />}
              />
            </div>
          </RadioGroup>

          <RadioGroup defaultValue="icon-2">
            <div className="space-y-2">
              <span className="text-sm">Label</span>
              <div className="flex p-1 border border-border rounded-lg">
                <RadioGroupItem
                  variant="icon"
                  value="icon-1"
                  icon={<CircleIcon className="size-4" />}
                />
                <RadioGroupItem
                  variant="icon"
                  value="icon-2"
                  icon={<CircleIcon className="size-4" />}
                />
                <RadioGroupItem
                  variant="icon"
                  value="icon-3"
                  icon={<CircleIcon className="size-4" />}
                />
              </div>
            </div>
          </RadioGroup>

          <RadioGroup defaultValue="fg-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <RadioGroupItem
                variant="fancy-group"
                value="fg-1"
                label="30-ball"
                icon={<CircleIcon className="size-6" />}
              />
              <RadioGroupItem
                variant="fancy-group"
                value="fg-2"
                label="60-ball"
                icon={<CircleIcon className="size-6" />}
              />
              <RadioGroupItem
                variant="fancy-group"
                value="fg-3"
                label="75-ball"
                icon={<CircleIcon className="size-6" />}
              />
              <RadioGroupItem
                variant="fancy-group"
                value="fg-4"
                label="90-ball"
                icon={<CircleIcon className="size-6" />}
              />
            </div>
          </RadioGroup>

          <RadioGroup defaultValue="img-1">
            <div className="grid grid-cols-3 gap-4">
              <RadioGroupItem
                variant="image"
                value="img-1"
                image="/images/gray-theme.png"
                label="Theme 1"
              />
              <RadioGroupItem
                variant="image"
                value="img-2"
                image="/images/gray-theme.png"
                label="Theme 2"
              />
              <RadioGroupItem
                variant="image"
                value="img-3"
                image="/images/gray-theme.png"
                label="Theme 3"
              />
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Switch
            label="Switch Text"
            description="This is a switch description."
          />
          <Switch
            label="Switch Text"
            description="This is a switch description."
            position="right"
          />
          <Switch
            label="Switch Text"
            description="This is a switch description."
            variant="box"
          />
          <Switch
            label="Switch Text"
            description="This is a switch description."
            variant="box"
            position="right"
          />

          <Switch
            label="Switch Text"
            description="This is a switch description."
            variant="expanding"
            content="This is expanded content"
          />
        </div>

        <CardTitle
          initialData={{ type: "text", text: "My Bingo Card Title" }}
        />

        <AddImageWord tabs={ADD_WORDS_TABS} />

        <div className="space-y-6">
          <Tabs>
            <TabsList className="gap-5">
              <TabsTrigger variant="tab-button" value="tab1" size="small">
                Tab small
              </TabsTrigger>
              <TabsTrigger variant="tab-button" value="tab2" size="small">
                Tab small
              </TabsTrigger>
              <TabsTrigger variant="tab-button" value="tab3" size="medium">
                Tab medium
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs>
            <TabsList className="lg:gap-0 border p-1 border-border rounded-10">
              <TabsTrigger variant="tab-border" value="tab1" size="small">
                Tab border
              </TabsTrigger>
              <TabsTrigger variant="tab-border" value="tab3" size="small">
                Tab border
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs>
            <TabsList className="rounded-10">
              <TabsTrigger value="tab1" size="small">
                Tab border
              </TabsTrigger>
              <TabsTrigger value="tab3" size="small">
                Tab border
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-6">
          <ImageDropzone
            title="Click to upload or drag and drop"
            description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
          />
          <ImageDropzone
            title="Click to upload or drag and drop"
            description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
            orientation="vertical"
          />
          <ImageDropzone
            title="Click to upload or drag and drop"
            description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
            orientation="vertical"
            variant="primary"
          />
          <ImageDropzone
            title="Click to upload or drag and drop"
            description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
            orientation="vertical"
            uploaded={true}
          />
        </div>

        <div className="space-y-3">
          <Accordion
            className="my-4 space-y-3 flex-1"
            collapsible
            type="single"
          >
            {FAQ_DATA_ICON.map(({ question, answer, icon, description }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger
                  variant="icon"
                  icon={<HelpCircle className="size-4" />}
                  description={description}
                  title={question}
                  />
                  {/* {question} */}
                <AccordionContent className="">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
