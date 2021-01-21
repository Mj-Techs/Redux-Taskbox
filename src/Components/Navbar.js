import React from "react";
import { LinkWrapper, StyledLink } from "../App-Style";
const Navbar = () => {
  return (
    <LinkWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/mytasks">Tasks</StyledLink>
    </LinkWrapper>
  );
};

export default Navbar;
