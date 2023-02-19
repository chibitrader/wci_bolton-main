import homeStyles from '../styles/Home.module.scss';
import heroStyles from '../styles/hero.module.scss';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Pane } from "../components/pane/Pane"
import { MainLayout } from "../layouts/MainLayout"
import { Button } from "../components/Button/Button"
import { Container } from "../components/container/container"
export default function Watch() {

    return (
        <MainLayout title="Contact">
      <div className={heroStyles.hero}>
        <Pane>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <FaMapMarkerAlt style={{ marginRight: "1rem" }} />
            <p style={{ margin: "0" }}>Britannia Hotel , Beaumont Road BL3 4TA , Bolton</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <FaPhone style={{ marginRight: "1rem" }} />
            <p style={{ margin: "0" }}>07588 483728</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <FaEnvelope style={{ marginRight: "1rem" }} />
            <p style={{ margin: "0" }}>admin@wmi-bolton.com</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
            }}
          >
            <a href="https://www.facebook.com/"><FaFacebook style={{ marginRight: "2rem" }} /></a>
            <a href="https://twitter.com/"><FaTwitter style={{ marginRight: "2rem" }} /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
          </div>
        </Pane>
      </div>
    </MainLayout>
  );
}