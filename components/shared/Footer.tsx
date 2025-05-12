import React from "react";
import BookMeeting from "../home-components/BookMeeting";

export default function Footer() {
  return (
    <div className="bg-[#D0E2DD] md:mt-[500px] mt-56">
      {/* Schedule A Meeting Section */}
      <div className="container mx-auto md:pt-20 pt-10 pb-3 px-5 relative">
        {/* Background image for large screens */}
        <div className="footer-top-section md:flex hidden absolute top-[-280px] z-10 h-auto">
          <div className="relative w-full h-[569px] overflow-hidden rounded-[30px]">
            <div
              className="absolute right-[-10px] top-[224px] transform -translate-y-1/2 h-[709px] w-[64%] bg-no-repeat bg-cover bg-contain"
              style={{ backgroundImage: "url('/fooer-top.png')" }}
            ></div>

            {/* Text content */}
            <div className="relative z-10 w-full h-full flex items-center pl-8 md:pl-16">
              <div className="max-w-[600px]">
                <h1 className="text-[24px] md:text-[48px] font-semibold leading-snug md:leading-[55px] mb-2 text-start">
                  <span className="footer-top-title">Schedule A</span>{" "}
                  <span className="section-title-two">Meeting</span>
                </h1>
                <h3 className="text-[14px] md:text-[18px] font-medium text-[#222] my-5 text-start">
                  Let’s discuss how <strong>FinioTech</strong> can elevate your
                  business. Schedule a meeting and explore innovative FinTech
                  solutions tailored for you!
                </h3>
                {/* <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
                  Set a Meeting
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7359 6.43018L20.8059 12.5002L14.7359 18.5702"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.3159 12.5H20.6359"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.80591 12.5H7.27591"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button> */}
                <BookMeeting />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Title for medium and up */}
        <div className="mt-96 mb-32 px-0 md:flex flex-col hidden gap-1">
          <h2 className="md:text-[32px] text-[20px] font-[700] text-[#555555] text-center">
            Hy!
            <strong className="text-[#222222] font-[400] ml-1">
              Make a shorter financial journey and grow the business faster.
            </strong>{" "}
          </h2>
          <h2 className="md:text-[32px] text-[20px] font-[700] text-[#555555] text-center">
            Finiotech will help you to dreams come true.
          </h2>
        </div>

        {/* Mobile version */}
        <div className="container mx-auto relative">
          <div className="footer-top-section h-auto md:hidden flex flex-col items-center p-7 absolute top-[-165px] z-10 left-0 right-0">
            <h1 className="leading-8 text-[24px] mb-0 text-center">
              <span className="footer-top-title">Schedule A</span>{" "}
              <span className="section-title">Meeting</span>
            </h1>
            <h3 className="text-[14px] font-medium text-[#222222] my-2 text-center">
              Let’s discuss how <strong>FinioTech</strong> can elevate your
              business. Schedule a meeting and explore innovative FinTech
              solutions tailored for you!
            </h3>
            {/* <Button className="w-[140px] h-[40px] primary-button mt-1">
              Set a Meeting
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7359 6.43018L20.8059 12.5002L14.7359 18.5702"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3159 12.5H20.6359"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.80591 12.5H7.27591"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button> */}
            <BookMeeting />
          </div>
        </div>

        {/* Footer Title for medium and up */}
        <div className="mb-10 mt-28 px-3 md:hidden flex flex-col gap-1">
          <h2 className="md:text-[32px] text-[20px] font-[700] text-[#555555] text-center">
            Hy!
            <strong className="text-[#222222] font-[400] ml-1">
              Make a shorter financial journey and grow the business faster.
            </strong>{" "}
          </h2>
          <h2 className="md:text-[32px] text-[20px] font-[700] text-[#555555] text-center">
            Finiotech will help you to dreams come true.
          </h2>
        </div>

        {/* Contact Section */}
        <hr className="my-5 border border-[#8CBEB1]" />
        <div className="grid md:grid-cols-12 grid-cols-2 gap-4">
          <div className="col-span-full md:col-span-2">
            <h3 className="md:text-[22px] text-[16px] font-[700] font-roboto mb-10">About Us</h3>

            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Company
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Services
            </h5> 
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Products
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Contact
            </h5>
          </div>
          <div className="col-span-full md:col-span-3">
            <h3 className="md:text-[22px] text-[16px] font-[700] font-roboto mb-10">
              Industries We Serve
            </h3>

            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Fintech Startups
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Banks & Financial Institutions
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Retailers & E-commerce
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Lending Firms
            </h5>
          </div>
          <div className="col-span-full md:col-span-3">
            <h3 className="md:text-[22px] text-[16px] font-[700] font-roboto mb-10">
              Get in Touch
            </h3>

            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Contact
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              FAQs
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Important resources
            </h5>
            <h5 className="md:text-[20px] text-[14px] font-[400] hover:text-primary cursor-pointer font-roboto mb-2.5">
              Book a meeting
            </h5>
          </div>
          <div className="col-span-full md:col-span-3">
            <h3 className="md:text-[22px] text-[16px] font-[700] font-roboto mb-10">
              Stay updated with FinioTech{" "}
            </h3>

            <h6 className="md:text-[14px] text-[12px] font-[500] mb-4 font-roboto">
              For any suggestions, queries or complaints please contact us at :
            </h6>
            <div className="">
              <h4 className="md:text-[14px] text-[12px] font-[500] flex items-center gap-1 hover:text-primary cursor-pointer font-roboto">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3059 3.5H7.30591C4.30591 3.5 2.30591 5 2.30591 8.5V15.5C2.30591 19 4.30591 20.5 7.30591 20.5H17.3059C20.3059 20.5 22.3059 19 22.3059 15.5V8.5C22.3059 5 20.3059 3.5 17.3059 3.5ZM17.7759 9.59L14.6459 12.09C13.9859 12.62 13.1459 12.88 12.3059 12.88C11.4659 12.88 10.6159 12.62 9.96591 12.09L6.83591 9.59C6.51591 9.33 6.46591 8.85 6.71591 8.53C6.97591 8.21 7.44591 8.15 7.76591 8.41L10.8959 10.91C11.6559 11.52 12.9459 11.52 13.7059 10.91L16.8359 8.41C17.1559 8.15 17.6359 8.2 17.8859 8.53C18.1459 8.85 18.0959 9.33 17.7759 9.59Z"
                    fill="#222222"
                  />
                </svg>
                support@finiotech.com
              </h4>
              <div className="flex gap-3 items-center mt-6">
                <button>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.6059 22.8584C21.1059 22.8584 23.3059 20.6584 23.3059 15.1584V8.5584C23.3059 3.0584 21.1059 0.858398 15.6059 0.858398H9.00591C3.50591 0.858398 1.30591 3.0584 1.30591 8.5584V15.1584C1.30591 20.6584 3.50591 22.8584 9.00591 22.8584H15.6059ZM12.3059 15.5C14.2389 15.5 15.8059 13.933 15.8059 12C15.8059 10.067 14.2389 8.5 12.3059 8.5C10.3729 8.5 8.80591 10.067 8.80591 12C8.80591 13.933 10.3729 15.5 12.3059 15.5ZM17.942 6C17.3897 6 16.942 6.44772 16.942 7C16.942 7.55228 17.3897 8 17.942 8H17.9536C18.5059 8 18.9536 7.55228 18.9536 7C18.9536 6.44772 18.5059 6 17.9536 6H17.942Z"
                      fill="#222222"
                    />
                  </svg>
                </button>

                <button>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3059 22.8584H15.6059C21.1059 22.8584 23.3059 20.6584 23.3059 15.1584V8.5584C23.3059 3.0584 21.1059 0.858398 15.6059 0.858398H9.00591C3.50591 0.858398 1.30591 3.0584 1.30591 8.5584V15.1584C1.30591 20.6584 3.50591 22.8584 9.00591 22.8584H11.3059V14.8H9.60591C9.40591 14.8 9.30591 14.7 9.30591 14.5V12.6C9.30591 12.4 9.40591 12.3 9.60591 12.3H11.3059V9C11.3059 7.3 12.6059 6 14.3059 6H17.0059C17.2059 6 17.3059 6.1 17.3059 6.3V8.7C17.3059 8.9 17.2059 9 17.0059 9H14.6059C14.4059 9 14.3059 9.1 14.3059 9.3V12.2H16.9059C17.1059 12.2 17.2059 12.4 17.2059 12.6L16.8059 14.5C16.8059 14.6 16.6059 14.7 16.5059 14.7H14.3059V22.8584Z"
                      fill="#222222"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6059 22.8584H9.00591C3.50591 22.8584 1.30591 20.6584 1.30591 15.1584V8.5584C1.30591 3.0584 3.50591 0.858398 9.00591 0.858398H15.6059C21.1059 0.858398 23.3059 3.0584 23.3059 8.5584V15.1584C23.3059 20.6584 21.1059 22.8584 15.6059 22.8584Z"
                      fill="#222222"
                    />
                    <path
                      d="M11.4467 12.4145L6.67723 17.8577L11.4467 12.4145ZM17.0421 5.85906L12.801 10.8538L17.0421 5.85906ZM6.30591 5.85838L15.7139 17.8584H18.3059L8.89826 5.85838H6.30591Z"
                      fill="#BDD4CE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.7469 5.80156L13.4533 10.8581L18.6994 17.5499C18.8174 17.7004 18.8392 17.9052 18.7555 18.0772C18.6718 18.2492 18.4972 18.3584 18.3059 18.3584H15.7139C15.5603 18.3584 15.4152 18.2878 15.3204 18.1669L11.4249 13.1981L6.72377 18.5633L5.97165 17.9042L10.797 12.3972L5.91243 6.16687C5.79439 6.01631 5.77261 5.81159 5.85633 5.63957C5.94005 5.46754 6.1146 5.35838 6.30591 5.35838H8.89825C9.05187 5.35838 9.19697 5.42899 9.29175 5.54989L12.8235 10.0548L16.9846 5.1543L17.7469 5.80156ZM12.1628 10.8329L8.6549 6.35838H7.33326L11.8088 12.067L12.1523 12.3679L12.0955 12.4327L15.9573 17.3584H17.2786L12.4792 11.2365L12.0962 10.9113L12.1628 10.8329Z"
                      fill="#BDD4CE"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6059 22.8584H9.00591C3.50591 22.8584 1.30591 20.6584 1.30591 15.1584V8.5584C1.30591 3.0584 3.50591 0.858398 9.00591 0.858398H15.6059C21.1059 0.858398 23.3059 3.0584 23.3059 8.5584V15.1584C23.3059 20.6584 21.1059 22.8584 15.6059 22.8584Z"
                      fill="#222222"
                    />
                    <g clip-path="url(#clip0_957_4656)">
                      <path
                        d="M18.8052 13.2973C18.8052 12.7806 18.7391 12.2724 18.5808 11.7776C18.3456 11.0434 17.9338 10.4422 17.2533 10.0471C16.8085 9.78945 16.3221 9.67018 15.8116 9.64417C14.708 9.58822 13.8049 9.95638 13.1736 10.893C13.1544 10.9211 13.1316 10.9467 13.1105 10.9734L13.0874 10.9614V9.84471H10.3096V18.1933H10.4483C11.2762 18.1933 12.104 18.1926 12.9317 18.1914C13.0911 18.1914 13.0918 18.228 13.0918 18.0302C13.0918 16.5223 13.0926 15.0145 13.0941 13.507C13.0941 13.3459 13.0983 13.1822 13.1329 13.0267C13.2566 12.4741 13.7885 11.7834 14.7027 11.8366C15.2353 11.8677 15.6113 12.1129 15.8264 12.5996C15.9863 12.962 16.0221 13.3475 16.0233 13.7359C16.027 14.883 16.0233 16.0301 16.0233 17.1772C16.0233 17.5103 16.0233 17.8435 16.0233 18.1847H18.8059V18.0735C18.8058 16.4816 18.8055 14.8895 18.8052 13.2973Z"
                        fill="#BDD4CE"
                      />
                      <path
                        d="M5.97876 18.1853H8.75424V9.8457H5.97876V18.1853Z"
                        fill="#BDD4CE"
                      />
                      <path
                        d="M8.17793 5.98742C7.79203 5.79171 7.38048 5.76454 6.96361 5.85595C5.7486 6.12235 5.55288 7.40782 6.08552 8.11238C6.4051 8.53557 6.85061 8.69467 7.36846 8.71263C7.52767 8.68961 7.68966 8.6774 7.84541 8.64033C8.44205 8.49804 8.86215 8.0364 8.93425 7.45433C9.01073 6.83727 8.71888 6.26211 8.17793 5.98742Z"
                        fill="#BDD4CE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_957_4656">
                        <rect
                          width="13"
                          height="12.3882"
                          fill="white"
                          transform="translate(5.80591 5.80566)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6059 22.8584H9.00591C3.50591 22.8584 1.30591 20.6584 1.30591 15.1584V8.5584C1.30591 3.0584 3.50591 0.858398 9.00591 0.858398H15.6059C21.1059 0.858398 23.3059 3.0584 23.3059 8.5584V15.1584C23.3059 20.6584 21.1059 22.8584 15.6059 22.8584Z"
                      fill="#222222"
                    />
                    <path
                      d="M12.2727 7.43848C13.6074 7.49061 14.9425 7.53807 16.2768 7.59815C16.5922 7.61474 16.9062 7.65209 17.2167 7.70996C17.9701 7.84498 18.453 8.35556 18.5955 9.14963C18.791 10.2384 18.8303 11.3392 18.7935 12.4402C18.7676 13.21 18.6937 13.9788 18.6188 14.746C18.564 15.3079 18.3361 15.7861 17.8406 16.1056C17.5382 16.3007 17.1969 16.3573 16.8505 16.394C15.5064 16.5366 14.1567 16.5679 12.8073 16.561C11.4492 16.5543 10.0911 16.5133 8.73439 16.4694C8.29818 16.4553 7.86177 16.3991 7.42943 16.336C6.68755 16.2274 6.18108 15.7181 6.02773 14.9531C5.87439 14.1882 5.83875 13.4134 5.81614 12.6379C5.78662 11.6174 5.81818 10.5983 5.9475 9.58444C5.97497 9.3562 6.01666 9.1299 6.07233 8.90686C6.24767 8.22603 6.80383 7.76739 7.54082 7.67493C8.81096 7.51566 10.0882 7.50222 11.3653 7.48063C11.6675 7.47554 11.9701 7.48063 12.2723 7.48063L12.2727 7.43848ZM11.0175 10.0761V13.9645L14.3935 12.0204L11.0175 10.0761Z"
                      fill="#BDD4CE"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 border border-[#8CBEB1]" />
        <div className="flex md:items-center items-start justify-between gap-3 md:flex-row flex-col mb-6">
          <h3 className="md:text-[16px] text-[14px] font-[500] font-roboto">
            {new Date().getFullYear()} © FinioTech. All Rights Reserved.
          </h3>

          <div className="flex md:flex-row flex-col md:gap-3 gap-1">
            <h3 className="md:text-[16px] text-[14px] font-[500] font-roboto">
              Terms & Conditions
            </h3>
            <h3 className="md:text-[16px] text-[14px] font-[500] font-roboto">
              Privacy Policy
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
