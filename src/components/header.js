import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ReactLogo from "../images/react-logo.svg"

const Header = ({ siteTitle }) => (
  <MyHeader>
    <Wrapper>
      <Image src={ReactLogo} alt="logo" />
      <Heading>{siteTitle}</Heading>
    </Wrapper>
    <Text>Welcome React Mini an Portfilo of Mini React Projects</Text>
  </MyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const MyHeader = styled.header`
  display: block;
  text-align: center;
  margin: 12px;
`
const Image = styled.img`
  width: 60px;
  margin-right: 14px;

  @media (prefers-reduced-motion: no-preference) {
    animation: React-spin infinite 10s linear;
  }

  @keyframes React-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const Heading = styled.h1`
  color: #61dbfb;
`
const Wrapper = styled.div`
  display: inline-flex;
`
const Text = styled.p``
