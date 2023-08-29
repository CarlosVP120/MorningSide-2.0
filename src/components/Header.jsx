import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="absolute left-0 top-0 z-[2] h-[100px] w-full px-10">
      <div className="container flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <a href="/">
              <img
                src="/images/Logo/l.png"
                className="h-[50px] w-[50px]"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row font-['Inter'] text-base">
          <a className="btn" href="#services">
            Our services
          </a>
          <Link
            className="btn orange-btn"
            to="https://calendly.com/apeiron_ai/15min?month=2023-08"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
