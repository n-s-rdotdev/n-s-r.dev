import { Education } from "@/features/protfolio-page/components/education";
import { ProfileCover } from "@/features/protfolio-page/components/profile-cover";
import { SocialLinkItem } from "@/features/protfolio-page/components/social-link-item";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconMail, IconMapPin, IconPhone, IconWorld } from "@tabler/icons-react";
import { BlockSeparator as Separator } from "./block";
import ComponentWrapper from "./component-wrapper";
import { IntroItem, IntroItemContent, IntroItemIcon, IntroItemLink } from "./intro-item";

export default function Body() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ProfileCover />

      <div className="w-full h-full border-b">
        {/* <ComponentWrapper className="p-4 flex flex-col items-center justify-center gap-2">
          
        </ComponentWrapper> */}
      </div>
      <Separator />
      <div className="w-full h-full border-b">
        <ComponentWrapper className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
          <IntroItem className="col-span-1 sm:col-span-2">
            <IntroItemIcon>
              <img src="/capgemini-logo.png" alt="Capgemini Logo" className="" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={"https://www.capgemini.com"}
                aria-label={`Job: ${"Capgemini"}`}
              >
                Software Engineer @Capgemini
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem className="col-span-1 sm:col-span-2">
            <IntroItemIcon>
              <img src="/cisco-logo.png" alt="Cisco Logo" className="not-dark:invert" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={"https://www.cisco.com"}
                aria-label={`Job: ${"Cisco"}`}
              >
                Cisco Optical Network Controller (CONC) - Project
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <IconMapPin />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bengaluru, India")}`}
                aria-label={`Location: ${"Bengaluru, India"}`}
              >
                Bengaluru, India
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <IconWorld />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={"https://www.n-s-r.dev"}
                aria-label={`Website: ${"n-s-r.dev"}`}
              >
                n-s-r.dev
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <IconPhone />
            </IntroItemIcon>
            <IntroItemContent>
              +91 78994 24475
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <IconMail />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`mailto:${encodeURIComponent("rakshith@n-s-r.dev")}`}
                aria-label={`Email: ${"rakshith@n-s-r.dev"}`}
              >
                rakshith@n-s-r.dev
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        </ComponentWrapper>
      </div>
      {/* <Separator /> */}
      <div className="w-full h-full border-b">
        <ComponentWrapper className="">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-2 gap-2 md:grid-cols-3">
              <div className="border-r border-edge" />
              <div className="border-l border-edge md:border-x" />
              <div className="border-l border-edge max-md:hidden" />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: <IconBrandGithubFilled className="size-5" />,
                  title: "GitHub",
                  href: "https://github.com/NagaSaiRakshith2905"
                },
                {
                  icon: <IconBrandLinkedinFilled className="size-5" />,
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/in/naga-sai-rakshith/"
                }
              ].map((link, index) => {
                return <SocialLinkItem key={index} {...link} />
              })}
            </div>
          </div>
        </ComponentWrapper>
      </div>

      {/* <Separator />
      <TechStack /> */}
      <Separator />
      <Education />
    </div>
  )
}

