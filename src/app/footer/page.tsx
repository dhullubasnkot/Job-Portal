import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm py-10 mt-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-blue-600">JobBox</h2>
            <p className="mt-2 text-gray-500">
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-blue-600 text-lg">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-blue-600 text-lg">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-blue-600 text-lg">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Community</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Feature
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Quick links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  iOS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Microsoft
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Desktop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Download App</h3>
            <p className="mt-2 text-gray-500">
              Download our Apps and get extra 15% Discount on your first
              Order...!
            </p>
            <div className="flex space-x-3 mt-3">
              <a href="#">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/120px-App_Store_%28iOS%29.svg.png"
                  alt="App Store"
                  className="h-8"
                  width={40}
                  height={100}
                />
              </a>
              <a href="#">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  className="h-8"
                  width={80}
                  height={100}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="border-t mt-6 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-xs">
          <p>Copyright &copy; 2022. JobBox all rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-blue-600">
              Security
            </a>``
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
