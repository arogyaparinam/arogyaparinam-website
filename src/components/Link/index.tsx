import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export type LinkProps = ChakraLinkProps & {
  isActive?: boolean;
  href?: string;
  isExternal?: boolean;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const { href = "/", children, isExternal, ...rest } = props;

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
      <NextLink href={href} passHref>
        <ChakraLink ref={ref} {...rest}>
          {children}
        </ChakraLink>
      </NextLink>
    );
  }
);
