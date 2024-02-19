import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

function Footer() {
  return (
    <footer class="bg-dark footer">
      <div class="footer-top py-8">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-8 pe-xxl-10">
              <div class="row gy-5">
                <div class="col-6 col-lg-4">
                  <h5 class="text-white footer-title-01">Helpful Links</h5>
                  <ul class="list-unstyled footer-link-01 m-0">
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Our Events
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Our resellers
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-lg-4">
                  <h5 class="text-white footer-title-01">About</h5>
                  <ul class="list-unstyled footer-link-01 m-0">
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Customer Service
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-lg-4">
                  <h5 class="text-white footer-title-01">Need Help?</h5>
                  <ul class="list-unstyled footer-link-01 m-0">
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Offers &amp; Kits
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Get the app
                      </a>
                    </li>
                    <li>
                      <a class="text-white text-opacity-75" href="#s">
                        Store locator
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <h5 class="text-white footer-title-01 fs-5">
                Subscribe to our newsletter and get real time updates and
                notifications
              </h5>
              <div>
                <form class="d-flex flex-row mb-2 p-1 bg-white input-group">
                  <input
                    type="email"
                    class="form-control rounded border-0"
                    placeholder="Your Email"
                  />{" "}
                  <button class="btn btn-secondary flex-shrink-0" type="submit">
                    Subscribe
                  </button>
                </form>
                <p class="fs-sm text-white text-opacity-75">
                  I agree to receive Absolution newsletters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom small py-3 border-top border-white border-opacity-10">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start py-1">
              <p class="m-0 text-white text-opacity-75">
                © 2022 copyright by{" "}
                <a class="text-reset" href="#s">
                  EventExplore.com
                </a>
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end py-1">
              <ul class="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#s" class="text-white text-opacity-75">
                    Privace &amp; Policy
                  </a>
                </li>
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#s" class="text-white text-opacity-75">
                    Faq's
                  </a>
                </li>
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#s" class="text-white text-opacity-75">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
