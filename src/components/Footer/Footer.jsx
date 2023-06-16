
import {
  ContainerFooter,
  WrapperSocial,
  SocialLi,
  SocialLink,
  RiGithubFillSt,
  RiTelegramLineSt,
  RiLinkedinBoxLinSt,
} from './Footer.styled';

const Footer = () => {
    return (
      <ContainerFooter>
        <WrapperSocial>
          <SocialLi>
            <SocialLink href="https://t.me/tsarenko_yuliia" target="_blanc">
              <RiTelegramLineSt />
            </SocialLink>
          </SocialLi>
          <SocialLi>
            <SocialLink
              href="https://github.com/Yullia90/goit-react-hw-05-movies"
              target="_blanc"
            >
              <RiGithubFillSt />
            </SocialLink>
          </SocialLi>
          <SocialLi>
            <SocialLink
              href="www.linkedin.com/in/yuliia-tsarenko-b375b5278"
              target="_blanc"
            >
              <RiLinkedinBoxLinSt />
            </SocialLink>
          </SocialLi>
        </WrapperSocial>
      </ContainerFooter>
    );
};
export default Footer;
