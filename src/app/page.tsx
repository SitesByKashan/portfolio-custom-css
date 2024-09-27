import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="content">
          <h1 className="title">
            HELLO I AM <br />
            <span className="name">M KASHAN MALIK AWAN</span>
          </h1>
          <p className="description">
            GENERATIVE AI CHATBOT, FLUTTER MOBILE APP & MERN STACK WEB Developer
          </p>

          <div className="social-icons">
            <a href="https://github.com/SitesByKashan" target="_blank" rel="noopener noreferrer" className="icon">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/kashan-malik-47374422a/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/sites_by_kashan/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/kashanmalik.kashanmalik.9" target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebook size={30} />
            </a>
          </div>

          <div className="cta-buttons">
            <Link href="/assets/KASHAN_MALIK_RESUME.pdf" className="btn resume-btn">
              <span className="text">Resume </span>
              <FaDownload size={20} />
            </Link>
            <Link href="/contact" className="btn contact-btn">
              <span className="text">Contact</span>
              <FaPhone size={20} />
            </Link>
          </div>
        </div>

        <section className="profile-section">
          <div className="profile-wrapper">
            <Image width={2000} height={2000} src="/assets/Profile.jpg" alt="Profile" className="profile-image" />
          </div>
        </section>

        <div className="background-image">
          <Image width={1000} height={1000} src="/assets/Vector 3.png" alt="Vector" className="vector-image" />
        </div>
      </main>
    </>
  );
}
