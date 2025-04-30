import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href || isTransitioning) return;
    e.preventDefault();
    setIsTransitioning(true);

    document.body.classList.add("page-transitioning");

    setTimeout(() => {
      router.push(href);
      setIsTransitioning(false);
    }, 800); // Mismo tiempo que la animación en layout.tsx
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
