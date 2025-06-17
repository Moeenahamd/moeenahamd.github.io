import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import styles from "./styles.module.css";

function Footer() {
  const { footer, omiseExtras } = useThemeConfig();
  if (!footer) return null;

  const { copyright, links, logo, style } = footer;
  const { footerImage, languageOptions, statusLink } = omiseExtras || {};

  return (
  <FooterLayout
  style={style}
  links={
    links &&
    links.length > 0 && <FooterLinks links={links} />
  }
  logo={
    footerImage && (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <img src={footerImage} alt="Company Logo" width="100%" />
      </div>
    )
  }
  copyright={
    <div className={styles.bottomBar}>
      <div className={styles.leftSection}>
        <FooterCopyright copyright={copyright} />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.lang}>
          {languageOptions && (
            <div className="navbar__item dropdown dropdown--hoverable dropdown--right">
              <a
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
                role="button"
                className="navbar__link"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  className="iconLanguage_nlXk"
                >
                  <path
                    fill="currentColor"
                    d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
                  ></path>
                </svg>
                English
              </a>
              <ul className="dropdown__menu">
                <li>
                  <a
                    href="/docs/intro"
                    target="_self"
                    rel="noopener noreferrer"
                    className="dropdown__link dropdown__link--active"
                    lang="en"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="/ja/docs/intro"
                    target="_self"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                    lang="ja"
                  >
                    Japanese
                  </a>
                </li>
                <li>
                  <a
                    href="/de/docs/intro"
                    target="_self"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                    lang="de"
                  >
                    Deutsch
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.status}>
          {statusLink && (
            <a href={statusLink.href} className={styles.statusText}>
              {statusLink.label}
            </a>
          )}
        </div>
      </div>
    </div>
  }
/>

  );
}

export default React.memo(Footer);
