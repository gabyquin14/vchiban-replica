import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) return;
    e.preventDefault();

    router.push(href);

    const body = document.querySelector("body");
    const element = body?.getElementsByClassName(
      "current-page-child"
    )[0] as HTMLElement;

    element?.classList.add("page-transition");
    if (element) element.style.position = "unset";

    await sleep(1000);

    element?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
