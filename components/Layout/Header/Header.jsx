import * as S from "./Header.styles";
import { Logo } from "components/Shared";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <S.Header>
      <S.Section1>
        <Logo />
        <S.Socials>
          <a className="facebook" href="#">
            <FaFacebook className="facebook" size={28} />
          </a>
          <a className="twitter" href="#">
            <FaTwitter className="twitter" size={28} />
          </a>
          <a className="instagram" href="#">
            <FaInstagram className="instagram" size={28} />
          </a>
        </S.Socials>
      </S.Section1>

      <S.Nav>
        <S.NavLv1>
          <li>
<<<<<<< HEAD
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tutor {">"}</a>
            <S.NavLv2>
              <li>
                <a href="#">English</a>
=======
            <a href="/index.html">Home</a>
          </li>
          <li>
            <a href="/tutor.html">Tutor {">"}</a>
            <S.NavLv2>
              <li>
                <a href="/tutor.html">English</a>
>>>>>>> bdd8879d3549e8a0e0580b9f1f0805329dcbd081
              </li>
              <li>
                <a href="#">Hindi</a>
              </li>
            </S.NavLv2>
          </li>
          <li>
            <a href="#">Practice {">"}</a>
            <S.NavLv2>
              <li>
                <a href="#">Indian Languages</a>
              </li>
              <li>
                <a href="#">International Languages</a>
              </li>
            </S.NavLv2>
          </li>
          <li>
<<<<<<< HEAD
            <a href="#">Keyboards {">"}</a>
            <S.NavLv2>
              <li>
                <a href="#">Indian Languages</a>
              </li>
              <li>
                <a href="#">International Languages</a>
=======
            <a href="transliterate.html">Keyboards {">"}</a>
            <S.NavLv2>
              <li>
                <a href="/tranliterate.html">Indian Languages</a>
              </li>
              <li>
                <a href="/transliterate.html">International Languages</a>
>>>>>>> bdd8879d3549e8a0e0580b9f1f0805329dcbd081
              </li>
            </S.NavLv2>
          </li>
          <li>
            <a href="#">Multiplayer</a>
          </li>
          <li>
<<<<<<< HEAD
            <a href="#">Translate</a>
=======
            <a href="/translate.html">Translate</a>
>>>>>>> bdd8879d3549e8a0e0580b9f1f0805329dcbd081
          </li>
          <li>
            <a href="http://blog.typingknowledgedesk.com">Blog {">"}</a>
            <S.NavLv2>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/news/">
                  News
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/windows/">
                  Windows
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/android/">
                  Android
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/bestof/">
                  Best Of
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/upcoming/">
                  Upcoming Devices
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/browser/">
                  Browser
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/shortcut/">
                  Shortcut Keys
                </a>
              </li>
              <li>
                <a href="http://blog.typingknowledgedesk.com/category/downloads/">
                  Download
                </a>
              </li>
            </S.NavLv2>
          </li>
        </S.NavLv1>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
