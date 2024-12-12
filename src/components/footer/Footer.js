import {
  AllCardsIcon,
  AmexIcon,
  ApplePayIcon,
  CardIcon,
  Gpay,
  InstaIcon,
  LinkedIcon,
  UniquePayIcon,
  USAflag,
} from "../../../public/icons/Icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactus}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p style={{ display: "flex", alignItems: "center" }}>
            <USAflag />
            .🇺🇸 USD
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>
      <hr
        style={{ marginTop: "30px", marginBottom: "30px", width: "95%" }}
      ></hr>

      <div className={styles.bottomFooter}>
        <div className={styles.sections}>
          <div>
            <h4>metta muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className={styles.followUs} style={{}}>
            <h4>FOLLOW US</h4>
            <div className={styles.socials}>
              <InstaIcon />
              <LinkedIcon />
            </div>
            <h4>metta muse ACCEPTS</h4>
            <div className={styles.paymentMethods}>
              <AllCardsIcon />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
