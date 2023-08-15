import React from "react";
const Footer = () => {
  return (
    <div className="container mt-10 pt-10 font-['Inter']">
      <div className="mx-auto">
        <div className="grid grid-cols-4 pb-8">
          <div className="col-span-4 flex items-center">
            <img
              className="my-5 h-[60px] w-[60px] "
              src="/images/Logo/l.png"
              alt="logo"
            />
          </div>
          <div className="col-span-4 pb-6 md:col-span-2">
            <div className="flex max-w-[460px] flex-col ">
              <h3 className="pb-6 text-base font-semibold">Contact Us</h3>
              <div className="flex flex-row gap-x-3 pb-6">
                <a href="https://calendly.com/apeiron_ai/15min?month=2023-08">
                  <input
                    type="button"
                    className="btn orange-btn border-btn"
                    value="Subscribe"
                  />
                </a>
              </div>
              <p className="text-xs font-normal text-[#4D5761]">
                Gain a competitive edge with the latest AI breakthroughs and
                updates - all in a 5 minute email. Our AI experts sift through
                the clutter, honing in on the news that truly matters.
              </p>
            </div>
          </div>
          <div className="col-span-4 flex flex-row gap-x-8 md:col-span-2">
            <div className="flex md:w-1/2 ">
              <div className="flex flex-col ">
                <div className="my-2 font-semibold">Address</div>
                <div className="font-normal text-[#6B7280]">
                  Guadalajara, MEX
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="my-2 font-semibold">Contact</p>
              <p className="font-normal text-[#6B7280]">
                Email:carlosveryan@apeiron-ai
              </p>
            </div>
          </div>
        </div>
        <hr className="col-span-2"></hr>
        <div className="grid grid-cols-2 items-center justify-between gap-y-3 py-8 text-sm">
          <div className="col-span-2 text-[#4D5761] md:col-span-1">
            ©Apeiron AI
          </div>
          <div className="col-span-2 flex flex-row justify-end gap-x-6 text-main-color md:col-span-1">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookie Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
