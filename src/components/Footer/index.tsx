import * as S from "./style";
import constant from "@/constants/footer.json";
import Logo from "/Logo/Logo.jpg";
import { footerImageList } from "@/util/importImage";

const link = [constant.naverStore, constant.instagram, constant.kakaoChannel];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <S.Footer>
      <S.Container>
        <S.CafeInfoContaier>
          <img src={Logo} alt="로고" />
          <div className="cafeInfo">
            <div className="address">
              <span>Address</span>
              <span>{constant.Address}</span>
            </div>
            <div className="contact">
              <span>Contact</span>
              <span>{constant.Contact}</span>
              <div className="links">
                {footerImageList.map((image, index) => (
                  <img key={index} src={image} onClick={() => window.open(link[index])} />
                ))}
              </div>
            </div>
          </div>
        </S.CafeInfoContaier>
        <S.OwnerInfoContaier>
          <div className="ownerInfo">
            <span>대표자 :&nbsp;</span>
            <span>{constant.Owner}</span>
          </div>
          <div className="businessInfo">
            <span>사업자등록번호 :&nbsp;</span>
            <span>{constant.BusinessNumber}</span>
          </div>
        </S.OwnerInfoContaier>
        <p>© Copyright {currentYear} Moanda've All Rights Reserved.</p>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
