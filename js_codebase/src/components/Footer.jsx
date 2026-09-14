import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.copy}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <div style={styles.links}>
          <Link to="/our-story">Our Story</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f9f9f7",
    borderTop: "1px solid #eee",
    padding: "30px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  copy: {
    color: "#555",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    gap: "16px",
  },
};

export default Footer;
