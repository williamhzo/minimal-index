"use client";

import { Column } from "@/components/column";
import { ExternalLink } from "@/components/external-link";
import { ListItem } from "@/components/list-item";
import { Row } from "@/components/row";
import { creators } from "@/data";
import { createQueryString } from "@/utils";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

export const CreatorsContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const creator = searchParams.get("c") as keyof typeof creators;
  const hasValidSearchParams =
    !!creator && Object.keys(creators).includes(creator);

  return (
    <section className="flex items-start gap-6">
      <Column>
        <ListItem
          subtitle="Product Designer"
          href={
            pathname +
            "?" +
            createQueryString({
              name: "c",
              value: "micka",
              searchParams,
            })
          }
          selected={searchParams.get("c") === "micka"}
        >
          Micka Touillaud
        </ListItem>
        <ListItem
          subtitle="Product Engineer"
          href={
            pathname +
            "?" +
            createQueryString({
              name: "c",
              value: "william",
              searchParams,
            })
          }
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
                src={creators[creator].pfp}
                alt={`${creator}'s pfp`}
                fill
              />
            </figure>

            <div>
              <Row rows={2}>
                <p className="max-w-xs">{creators[creator].bio}</p>
              </Row>

              <Row>
                <ExternalLink href={creators[creator].portfolio}>
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
