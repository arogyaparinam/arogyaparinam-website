import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export type LinkProps = ChakraLinkProps & {
  isActive?: boolean;
  href: string; // required
  isExternal?: boolean;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ href, children, isExternal, ...rest }, ref) {
    if (isExternal) {
      return (
        <ChakraLink
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </ChakraLink>
      );
    }

    
    return (
      <ChakraLink as={NextLink} href={href} ref={ref} {...rest}>
        {children}
      </ChakraLink>
    );
  }
);
