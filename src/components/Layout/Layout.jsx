import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import LogoIcons from "../Icon/video-camera.png";
import SpinnerLoader from 'components/Loading/SpinnersLoader';

import {
  Container,
  SectionHeader,
  Header,
  Link,
  LinkLogo,
  Logo,
  SpanLogo,
  SectionMain,
  WrapperLinkNav,
  SectionFooter,
  SpanLogoFooter,
} from './Layout.styled';

import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <SectionHeader>
        <Header>
          <Logo>
            <LinkLogo to="/">
              <SpanLogo src={LogoIcons} alt="Logo Icons"/>
            </LinkLogo>
          </Logo>
          <WrapperLinkNav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </WrapperLinkNav>
        </Header >
      </SectionHeader>
      <SectionMain>
        <Suspense fallback={<SpinnerLoader />}>
          <Outlet />
        </Suspense>
      </SectionMain>
      <SectionFooter>
        <Logo>
          <LinkLogo to="/">
            <SpanLogoFooter src={LogoIcons} alt="Logo Icons"/>
          </LinkLogo>
        </Logo>
        <Footer/>
      </SectionFooter>  
    </Container>
  );
};

export default Layout;
