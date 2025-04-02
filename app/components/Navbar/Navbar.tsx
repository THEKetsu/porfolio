'use client';
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {[
          { href: "/", icon: <FaHome />, label: "Home" },
          { href: "/career", icon: <FaBriefcase />, label: "Career" },
          { href: "/projects", icon: <FaUser />, label: "Project" },
          { href: "/contact", icon: <FaEnvelope />, label: "Contact" },
        ].map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link 
              href={item.href} 
              className={`${styles.navLink} ${active === item.href ? styles.active : ""}`}
              onClick={() => setActive(item.href)}
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
