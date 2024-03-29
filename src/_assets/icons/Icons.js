
import LogoSvg from '../../_assets/svg/logo.svg'
// import UserIconSvg from '../../_assets/svg/user-icon-hed.svg'
import WishlistIconSvg from '../../_assets/svg/wishlist-icon-hed.svg'
// import CartIconSvg from '../../_assets/svg/cart-icon-hed.svg'
import DollarCirclePng from '../../_assets/images/footer-icon1.png'
import BoxCirclePng from '../../_assets/images/footer-icon2.png'
import GiftIconPng from '../../_assets/images/footer-icon3.png'
import AppStorePng from '../../_assets/images/app-store-icon.png'
import GooglePlayPng from '../../_assets/images/play-store-icon.png'
// import InstagramIconPng from '../../_assets/images/social-icon-1.png'
// import FacebookIconPng from '../../_assets/images/social-icon-2.png'
// import TwitterIconPng from '../../_assets/images/social-icon-3.png'
// import YoutubeIconPng from '../../_assets/images/social-icon-4.png'
// import LinkedInIconPng from '../../_assets/images/social-icon-5.png'
import PaypalIconPng from '../../_assets/images/payment-icon1.png'
import VisaIconPng from '../../_assets/images/payment-icon2.png'
import DiscoverIconPng from '../../_assets/images/payment-icon3.png'
import MasterCardIconPng from '../../_assets/images/payment-icon4.png'
import AmericanExpressIconPng from '../../_assets/images/payment-icon5.png'
import SearchIconPng from '../../_assets/images/search-icon.png'
import NextIconSvg from '../../_assets/svg/next-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faShoppingCart, faUserAlt, faAngleDoubleRight, faSpinner, faEye, faEyeSlash, faEnvelope, faPhone, faMapPin, faClock, faCheckCircle, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram, faGithub, faCodepen, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


export const Logo = () => {
  return  <img src={LogoSvg} alt="Logo" />
}

export const UserIcon = () => {
  return  <FontAwesomeIcon icon={faUserAlt} />
  // return  <img src={UserIconSvg} alt="User Icon" />
}

export const WishlistIcon = () => {
  return  <img src={WishlistIconSvg} alt="Wishlist Icon" />
}

export const CartIcon = () => {
  return  <FontAwesomeIcon icon={faShoppingCart} />
  // return  <img src={CartIconSvg} alt="Cart Icon" />
}

export const DollarIcon = () => {
  return  <img src={DollarCirclePng} alt="Dollar" />
}

export const ReturnIcon = () => {
  return  <img src={BoxCirclePng} alt="Return" />
}

export const GiftIcon = () => {
  return  <img src={GiftIconPng} alt="Gift" />
}

export const AppStoreIcon = () => {
  return  <img src={AppStorePng} alt="App Store" />
}

export const GooglePlay = () => {
  return  <img src={GooglePlayPng} alt="Google Play" />
}

export const InstagramIcon = () => {
  return  <FontAwesomeIcon icon={faInstagram} />
  // return  <img src={InstagramIconPng} alt="Instagram" />
}

export const FacebookIcon = () => {
  return  <FontAwesomeIcon icon={faFacebookF} />
  // return  <img src={FacebookIconPng} alt="Facebook" />
}

export const TwitterIcon = () => {
  return  <FontAwesomeIcon icon={faTwitter} />
  // return  <img src={TwitterIconPng} alt="Twitter" />
}

export const YoutubeIcon = () => {
  return  <FontAwesomeIcon icon={faYoutube} />
  // return  <img src={YoutubeIconPng} alt="Youtube" />
}

export const LinkedInIcon = () => {
  return  <FontAwesomeIcon icon={faLinkedinIn} />
  // return  <img src={LinkedInIconPng} alt="LinkedIn" />
}

export const CodepenIcon = () => {
  return  <FontAwesomeIcon icon={faCodepen} /> 
}

export const GithubIcon = () => {
  return  <FontAwesomeIcon icon={faGithub} /> 
}

export const PaypalIcon = () => {
  return  <img src={PaypalIconPng} alt="Paypal" />
}

export const VisaIcon = () => {
  return  <img src={VisaIconPng} alt="Visa" />
}

export const DiscoverIcon = () => {
  return  <img src={DiscoverIconPng} alt="Discover" />
}

export const MasterCardIcon = () => {
  return  <img src={MasterCardIconPng} alt="MasterCard" />
}

export const AmericanExpressIcon = () => {
  return  <img src={AmericanExpressIconPng} alt="AmericanExpress" />
}

export const SearchIcon = () => {
  return  <img src={SearchIconPng} alt="Search" />
}

export const NextIcon = () => {
  return  <img src={NextIconSvg} alt="Next" />
}

export const CalanderIcon = () => {
  return  <FontAwesomeIcon icon={faCalendar} />
}

export const AngleDoubleRightIcon = () => {
  return  <FontAwesomeIcon icon={faAngleDoubleRight} />
}

export const SpinnerIcon = () => {
  return  <FontAwesomeIcon icon={faSpinner} />
}

export const EyeIcon = () => {
  return  <FontAwesomeIcon icon={faEye} />
}

export const EyeSlashIcon = () => {
  return  <FontAwesomeIcon icon={faEyeSlash} />
}

export const MapPinIcon = () => {
  return  <FontAwesomeIcon icon={faMapPin} />
}

export const PhoneIcon = () => {
  return  <FontAwesomeIcon icon={faPhone} />
}

export const EnvelopeIcon = () => {
  return  <FontAwesomeIcon icon={faEnvelope} />
}

export const ClockIcon = () => {
  return  <FontAwesomeIcon icon={faClock} />
}

export const CheckCircleIcon = () => {
  return  <FontAwesomeIcon icon={faCheckCircle} />
}

export const CaretLeftIcon = () => {
  return  <FontAwesomeIcon icon={faCaretLeft} />
}