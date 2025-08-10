'use client';
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCogs } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { t } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {[
          { href: "/", icon: <FaHome />, label: t('nav.home') },
          { href: "/career", icon: <FaBriefcase />, label: t('nav.career') },
          { href: "/projects", icon: <FaUser />, label: t('nav.projects') },
          { href: "/ai-tools", icon: <FaCogs />, label: t('nav.services') },
          { href: "/contact", icon: <FaEnvelope />, label: t('nav.contact') },
        ].map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link 
              href={item.href} 
              className={`${styles.navLink} ${active === item.href ? styles.active : ""}`}
              onClick={() => setActive(item.href)}
              prefetch={true}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
