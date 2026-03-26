import { Block, BlockContent } from "@/components/block";
import { IntroItem, IntroItemContent, IntroItemIcon, IntroItemLink } from "@/components/intro-item";
import { IconLink, IconMail, IconMapPin, IconPhone, IconWorld } from "@tabler/icons-react";
import { PhoneItem } from "./phone-item";
import { USER } from "@/features/protfolio-page/data/user";
import { LinkIcon, MapPinIcon } from "lucide-react";
import { EmailItem } from "./email-item";

export function Overview() {
  return (
    <Block>
      <BlockContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
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
              Cisco Optical Network Controller (CONC) - Client Project
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
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
            <LinkIcon />
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

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />
      </BlockContent>
    </Block>
  )
}