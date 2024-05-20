"use client";

import { Column } from "@/components/column";
import { ExternalLink } from "@/components/external-link";
import { ListItem } from "@/components/list-item";
import { Row } from "@/components/row";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

const data = {
  micka: {
    bio: "Award-winning Product Designer & lifelong learner I create elegant and simple solutions that delight people.",
    portfolio: "https://micka.design/",
    pfp: "https://picsum.photos/id/24/640/362",
  },
  william: {
    bio: "Passionate Product Engineer & never-ending learner. I build intuitive, performant & accessible software.",
    portfolio: "https://williamhzo.me/",
    pfp: "https://picsum.photos/id/20/640/362",
  },
};

export const CreatorsContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  }

  const creator = searchParams.get("c") as keyof typeof data;
  const hasValidSearchParams = !!creator && Object.keys(data).includes(creator);

  return (
    <section className="flex items-start gap-6">
      <Column>
        <ListItem
          subtitle="Product Designer"
          href={pathname + "?" + createQueryString("c", "micka")}
          selected={searchParams.get("c") === "micka"}
        >
          Micka Touillaud
        </ListItem>
        <ListItem
          subtitle="Product Engineer"
          href={pathname + "?" + createQueryString("c", "william")}
          selected={searchParams.get("c") === "william"}
        >
          William Hermozo
        </ListItem>
      </Column>

      {hasValidSearchParams ? (
        <Column size="large">
          <div className="flex gap-6">
            <figure className="relative flex h-48 w-48">
              <Image
                className="object-cover"
                src={data[creator].pfp}
                alt={`${creator}'s pfp`}
                fill
              />
            </figure>

            <div>
              <Row rows={2}>
                <p className="max-w-xs">{data[creator].bio}</p>
              </Row>

              <Row>
                <ExternalLink href={data[creator].portfolio}>
                  Portfolio
                </ExternalLink>
              </Row>
            </div>
          </div>
        </Column>
      ) : null}
    </section>
  );
};
