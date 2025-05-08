import CorporateClients from "@/components/home-components/CorporateClients";
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="container mx-auto my-20 md:mt-40 mt-5 md:px-0 px-5">
        {/* Platform as a Service (PaaS) for Fintech Innovation */}
        <section className="mt-40">
          <div className="flex justify-end gap-3 mb-3 md:flex-row flex-col">
            <div className="flex gap-3">
              <div className="w-[22px] h-[43px] gap-[10px] px-[13px] py-[4px] rounded-[7px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF]"></div>
              <div className="w-[29px] h-[43px] gap-[10px] px-[18px] py-[4px] rounded-[11px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF]"></div>
              <div className="w-[40px] h-[43px] gap-[10px] px-[18px] py-[4px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF]"></div>
            </div>

            <div className="flex gap-3">
              <div className="md:w-[162px] w-[130px] h-[43px] gap-[10px] md:px-[18px] px-[12px] py-[4px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-center">
                <h2 className="font-[900] primary-darker uppercase md:text-[14px] text-[12px]">
                  Mobile Wallet
                </h2>
              </div>
              <div className="md:w-[101px] w-[90px] h-[43px] gap-[10px] px-[18px] py-[4px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-center">
                <h2 className="font-[900] primary-darker uppercase md:text-[14px] text-[12px]">
                  Neobank
                </h2>
              </div>
            </div>
            <div className="md:w-[108px] w-[98px] h-[43px] gap-[10px] px-[18px] py-[4px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-center">
              <h2 className="font-[900] primary-darker uppercase md:text-[14px] text-[12px]">
                Loan App
              </h2>
            </div>
          </div>
          {/* content-box */}
          <div className="box-shadow md:p-12 p-7 grid md:grid-cols-6 grid-cols-3 gap-20">
            <div className="relative md:block hidden col-span-2">
              <img
                src="/center.png"
                alt="Finiotech Logo"
                className="content-image"
              />
            </div>
            <div className="col-span-4">
              <h2 className="md:text-[24px] text-[16px] font-[900]">
                Platform as a Service (PaaS) for Fintech Innovation
              </h2>
              <h5 className="md:text-[18px] text-[14px] font-[500]">
                At Finiotech, we empower businesses to thrive in the digital
                financial ecosystem with cutting-edge Platform as a Service
                (PaaS) solutions. From eWallet platforms to neobanking and loan
                management systems, our technology is designed to help you
                launch, scale, and succeed with minimal development overhead.
              </h5>
              <h5 className="md:text-[18px] text-[14px] font-[500]">
                Transform your business with our PaaS solutions
                for eWallets, neobanks, and loan platforms. Our cloud-based
                platform delivers rapid deployment, seamless integration, and
                unmatched scalability, enabling you to launch cutting-edge
                financial services quickly and efficiently.
              </h5>
              <div className="mt-5 flex md:items-center items-start md:flex-row flex-col md:gap-5 gap-3 justify-between">
                <Image
                  src="/Happy-Users.png"
                  alt="Finiotech Logo"
                  width={175}
                  height={48}
                />
                <Button className="md:w-[201px] w-[175px] md:h-[55px] h-[40px] secondary-button">
                  Discover more{" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7359 5.92993L20.8059 11.9999L14.7359 18.0699"
                      stroke="#138B7D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.3159 12H20.6359"
                      stroke="#138B7D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.80591 12H7.27591"
                      stroke="#138B7D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A single platform for several uses */}
        <section className="mb-10 mt-24">
          <div className="mb-10 text-center">
            <h1 className="section-title md:leading-[55px] leading-8 mb-4 md:text-[48px] text-[24px]">
              A single platform for several uses
            </h1>
            <h3 className="md:text-[16px] text-[14px] font-[400] mb-1 text-[#555555]">
              The Platform is made to meet the unique requirements of businesses
              in a variety of situations.
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-0">
            <div className="box-shadow md:px-12 md:py-5 py-4 px-7">
              <h2 className="font-[900] capitalize md:text-[24px] text-[16px] text-[#222222] flex items-center gap-2 mb-4">
                <svg
                  width="35"
                  height="29"
                  viewBox="0 0 35 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3059 19V22H2.30591V19C2.30591 18.7348 2.41128 18.4804 2.59882 18.2929C2.78635 18.1054 3.04069 18 3.30591 18H21.3059C21.5711 18 21.8255 18.1054 22.013 18.2929C22.2005 18.4804 22.3059 18.7348 22.3059 19Z"
                    fill="#138B7D"
                    stroke="#45B4A2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M8.30591 11H4.30591V18H8.30591V11Z" fill="#45B4A2" />
                  <path d="M12.3059 11H8.30591V18H12.3059V11Z" fill="#B0FFED" />
                  <path d="M16.3059 11H12.3059V18H16.3059V11Z" fill="#45B4A2" />
                  <path d="M20.3059 11H16.3059V18H20.3059V11Z" fill="#B0FFED" />
                  <path
                    d="M23.3059 22.75H1.30591C1.107 22.75 0.916226 22.671 0.775574 22.5303C0.634921 22.3897 0.555908 22.1989 0.555908 22C0.555908 21.8011 0.634921 21.6103 0.775574 21.4697C0.916226 21.329 1.107 21.25 1.30591 21.25H23.3059C23.5048 21.25 23.6956 21.329 23.8362 21.4697C23.9769 21.6103 24.0559 21.8011 24.0559 22C24.0559 22.1989 23.9769 22.3897 23.8362 22.5303C23.6956 22.671 23.5048 22.75 23.3059 22.75Z"
                    fill="#096B60"
                  />
                  <path
                    d="M21.6759 5.74989L12.6759 2.14989C12.4357 2.06983 12.1761 2.06983 11.9359 2.14989L2.93591 5.74989C2.75502 5.83128 2.60029 5.96134 2.48904 6.12557C2.37779 6.28979 2.3144 6.48171 2.30591 6.67989V9.99989C2.30591 10.2651 2.41128 10.5195 2.59882 10.707C2.78635 10.8945 3.04069 10.9999 3.30591 10.9999H21.3059C21.5711 10.9999 21.8255 10.8945 22.013 10.707C22.2005 10.5195 22.3059 10.2651 22.3059 9.99989V6.67989C22.2974 6.48171 22.234 6.28979 22.1228 6.12557C22.0115 5.96134 21.8568 5.83128 21.6759 5.74989ZM12.3059 8.49989C12.0092 8.49989 11.7192 8.41192 11.4726 8.24709C11.2259 8.08227 11.0336 7.848 10.9201 7.57391C10.8065 7.29982 10.7768 6.99823 10.8347 6.70725C10.8926 6.41628 11.0355 6.14901 11.2452 5.93923C11.455 5.72945 11.7223 5.58659 12.0133 5.52871C12.3042 5.47083 12.6059 5.50054 12.8799 5.61407C13.154 5.7276 13.3883 5.91986 13.5531 6.16653C13.7179 6.41321 13.8059 6.70322 13.8059 6.99989C13.8059 7.39771 13.6479 7.77924 13.3666 8.06055C13.0853 8.34185 12.7037 8.49989 12.3059 8.49989Z"
                    fill="#138B7D"
                  />
                  <path
                    d="M26.9679 5.50655L18.6936 3.65023C16.0005 3.04605 14.8059 3.80289 14.1908 6.54474L11.4807 18.6245C10.8656 21.3663 11.6224 22.561 14.3155 23.1652L22.58 25.0193C25.2829 25.6257 26.4775 24.8688 27.0926 22.127L29.8027 10.0472C30.4178 7.30538 29.661 6.11073 26.9679 5.50655Z"
                    fill="#6FDCD3"
                  />
                  <path
                    d="M23.8519 9.16309L19.9489 8.28747C19.7548 8.24392 19.586 8.12507 19.4795 7.95704C19.3731 7.78901 19.3377 7.58557 19.3813 7.39148C19.4248 7.19739 19.5437 7.02854 19.7117 6.92209C19.8798 6.81564 20.0832 6.7803 20.2773 6.82385L24.1803 7.69947C24.3744 7.74301 24.5432 7.86187 24.6496 8.0299C24.7561 8.19793 24.7914 8.40137 24.7479 8.59546C24.7044 8.78955 24.5855 8.95839 24.4175 9.06484C24.2494 9.17129 24.046 9.20663 23.8519 9.16309Z"
                    fill="#096B60"
                  />
                  <path
                    d="M19.0437 21.4586C19.3815 21.5344 19.7341 21.5083 20.057 21.3837C20.3799 21.259 20.6586 21.0414 20.8578 20.7584C21.057 20.4754 21.1679 20.1397 21.1763 19.7936C21.1847 19.4476 21.0904 19.1069 20.9051 18.8145C20.7199 18.5221 20.4521 18.2912 20.1357 18.151C19.8192 18.0108 19.4683 17.9676 19.1273 18.0269C18.7863 18.0861 18.4705 18.2452 18.2199 18.4839C17.9692 18.7226 17.795 19.0302 17.7193 19.368C17.6177 19.8208 17.7001 20.2955 17.9485 20.6876C18.1969 21.0797 18.5909 21.357 19.0437 21.4586Z"
                    fill="#096B60"
                  />
                </svg>
                Mobile Financial Services
              </h2>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Core banking for digital-first institutions
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Electronic wallets
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Processing of payments
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Services for merchants
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                P2P app for payments
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Solutions for payouts
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Real-time transfers and payments
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Open banking solutions that comply with PSD2
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Reconciliation and settlement
              </h3>
            </div>
            <div className="box-shadow md:px-12 md:py-5 py-4 px-7">
              <h2 className="font-[900] capitalize md:text-[24px] text-[16px] text-[#222222] flex items-center gap-2 mb-4">
                <svg
                  width="32"
                  height="27"
                  viewBox="0 0 32 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.68588 10.5C3.68588 10.5 19.6619 10.2548 24.3059 10.5V7.16025C24.3059 6.05568 23.4113 5.16024 22.3067 5.16024C21.1174 5.16024 19.511 5.16024 17.8059 5.16024C16.7989 5.16024 15.9518 4.09972 15.4173 3.20743C14.9968 2.50546 14.2692 2.00024 13.4509 2.00024H8.30588C4.73588 2.00024 3.64587 3.09024 3.64587 6.66024V11.3102L3.68588 10.5Z"
                    fill="#6FDCD3"
                  />
                  <path
                    d="M17.2199 12.2827L19.306 6.99998C19.306 6.99998 13.6781 5.89091 10.5676 5.31273C9.56479 5.12632 8.60651 5.74421 8.35493 6.73273C7.28429 10.9396 5.73782 17.5223 5.73782 17.5223L20.306 21.5C20.6546 20.1991 22.806 14.5 22.806 14.5L17.2199 12.2827Z"
                    fill="#B0FFED"
                  />
                  <path
                    d="M19.646 7.16333C19.5946 7.06939 19.5164 6.99288 19.4214 6.94354C19.3263 6.89421 19.2188 6.87428 19.1124 6.88631C19.006 6.89833 18.9056 6.94176 18.8239 7.01106C18.7423 7.08036 18.6831 7.17239 18.654 7.27543L17.9046 10.0721C17.7633 10.6501 17.8551 11.2605 18.1602 11.7714C18.4653 12.2822 18.9591 12.6525 19.535 12.8022L22.2596 13.5322C22.3594 13.5623 22.4659 13.5618 22.5654 13.5309C22.665 13.5 22.753 13.44 22.8182 13.3587C22.8834 13.2773 22.9227 13.1784 22.9313 13.0745C22.9398 12.9706 22.917 12.8666 22.866 12.7757C22.0212 11.3126 20.5142 8.66709 19.646 7.16333Z"
                    fill="#096B60"
                  />
                  <path
                    d="M26.9534 12.6878C27.4314 11.3827 26.4653 10 25.0754 10H3.45838C2.06234 10 1.0958 11.3941 1.58542 12.7014L4.33829 20.0521C4.77705 21.2237 5.89673 22 7.14774 22H21.4466C22.7055 22 23.8306 21.2139 24.2636 20.0317L26.9534 12.6878ZM17.22 17.2H11.304C11.0747 17.2 10.8548 17.124 10.6927 16.9888C10.5305 16.8536 10.4395 16.6702 10.4395 16.479C10.4395 16.2877 10.5305 16.1043 10.6927 15.9691C10.8548 15.8339 11.0747 15.7579 11.304 15.7579H17.22C17.4492 15.7579 17.6691 15.8339 17.8313 15.9691C17.9934 16.1043 18.0845 16.2877 18.0845 16.479C18.0845 16.6702 17.9934 16.8536 17.8313 16.9888C17.6691 17.124 17.4492 17.2 17.22 17.2Z"
                    fill="#138B7D"
                  />
                </svg>
                Venturing into fintech
              </h2>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Closed-loop wallets
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Closed-loop cards & gift cards
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Loyalty and rewards
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                In-game currencies
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Virtual & digital currencies
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Embedded finance
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Marketplace payment engine
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Payroll management
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                General ledger
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Corporate FinOps
              </h3>
              <h3 className="md:text-[16px] text-[12px] font-[500] text-[#222222] px-2 py-1 border border-[#FFFFFF] bg-[#ffffff] rounded-[8px] mb-1.5">
                Treasury orchestration
              </h3>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Financial Services Platform */}
      <section className="mb-10 mt-24 relative w-full flex flex-col items-center justify-center px-5 md:px-0">
        {/* Image only shown on md+ */}
        <img
          className="w-full h-auto md:block hidden"
          src="/Financial.png"
          alt="Financial"
        />

        {/* Content wrapper */}
        <div className="md:absolute md:top-[50%] md:left-[66%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-[550px] min-h-[500px]">
          <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
            Features
          </h2>
          <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            Mobile Financial Services Platform
          </h1>
          <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
            Deliver seamless digital payment experiences with our robust,
            secure, and scalable eWallet solutions
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
            <li className="mb-1">Single or Multi-currency options</li>
            <li className="mb-1">Cross-border payments</li>
            <li className="mb-1">
              QR code and NFC-enabled contactless payments
            </li>
            <li className="mb-1">Peer-to-peer (P2P) transfers</li>
            <li className="mb-1">
              Loyalty rewards, cashback, and coupon integration
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
            <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button">
              Quick Demo
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4359 8.4799C21.2659 10.6899 21.2659 14.3099 17.4359 16.5199L14.3459 18.2999L11.2559 20.0799C7.43591 22.2899 4.30591 20.4799 4.30591 16.0599V12.4999V8.93989C4.30591 4.51989 7.43591 2.7099 11.2659 4.9199L13.5159 6.2199"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
              Find More Details
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
            </Button>
          </div>
        </div>
      </section>

      {/* For Individual & corporate clients */}
      <CorporateClients />

      {/* Neobank Platform */}
      <section className="mb-10 mt-24">
        <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5 md:px-0 px-5">
          <div className="md:col-span-1 col-span-full">
            <img src="/Col.png" alt="" />
          </div>
          <div className="md:col-span-1 col-span-full">
            <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
              Features
            </h2>
            <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
              Neobank Platform
            </h1>
            <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              Launch a fully digital bank with a feature-rich and user-friendly
              platform
            </h3>

            {/* Features List */}
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
              <li className="mb-1">
                Instant digital account opening with KYC/AML compliance for
                individuals and businesses
              </li>
              <li className="mb-1">
                Real-time fund transfers via API-driven connections
              </li>
              <li className="mb-1">
                Spend analytics and budgeting tools powered by AI
              </li>
              <li className="mb-1">
                Debit/credit card issuance and management
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button">
                Quick Demo
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4359 8.4799C21.2659 10.6899 21.2659 14.3099 17.4359 16.5199L14.3459 18.2999L11.2559 20.0799C7.43591 22.2899 4.30591 20.4799 4.30591 16.0599V12.4999V8.93989C4.30591 4.51989 7.43591 2.7099 11.2659 4.9199L13.5159 6.2199"
                    stroke="#138B7D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
                Find More Details
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
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Management Platform */}
      <section className="mb-10 mt-24">
        <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5 md:px-0 px-5">
          <div className="md:col-span-1 col-span-full">
            <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
              Features
            </h2>
            <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
              Loan Management Platform
            </h1>
            <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              Streamline your lending operations with our automated loan
              platform
            </h3>

            {/* Features List */}
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
              <li className="mb-1">
                End-to-end loan lifecycle management (origination to closure)
              </li>
              <li className="mb-1">
                AI-driven credit scoring and risk analysis
              </li>
              <li className="mb-1">Payment scheduling and reminders</li>
              <li className="mb-1">
                Multi-channel borrower communication tools
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button">
                Quick Demo
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4359 8.4799C21.2659 10.6899 21.2659 14.3099 17.4359 16.5199L14.3459 18.2999L11.2559 20.0799C7.43591 22.2899 4.30591 20.4799 4.30591 16.0599V12.4999V8.93989C4.30591 4.51989 7.43591 2.7099 11.2659 4.9199L13.5159 6.2199"
                    stroke="#138B7D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
                Find More Details
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
              </Button>
            </div>
          </div>
          <div className="md:col-span-1 col-span-full">
            <img src="/col2.png" alt="" />
          </div>
        </div>
      </section>

      {/* Why Choose Our PaaS Solutions? */}
      <section className="mb-10 mt-24">
        <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-5 items-center justify-between gap-10 md:px-0 px-5">
          <div className="md:col-span-2 col-span-full">
            <img src="/Grafics.png" alt="" />
          </div>
          <div className="md:col-span-3 col-span-full">
            <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
              PaaS Solutions
            </h2>
            <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
              Why Choose Our PaaS Solutions?
            </h1>
            <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              Streamline your lending operations with our automated loan
              platform
            </h3>

            {/* Features List */}
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
              <li className="mb-1">
                End-to-end loan lifecycle management (origination to closure)
              </li>
              <li className="mb-1">
                AI-driven credit scoring and risk analysis
              </li>
              <li className="mb-1">Payment scheduling and reminders</li>
              <li className="mb-1">
                Multi-channel borrower communication tools
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button">
                Quick Demo
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4359 8.4799C21.2659 10.6899 21.2659 14.3099 17.4359 16.5199L14.3459 18.2999L11.2559 20.0799C7.43591 22.2899 4.30591 20.4799 4.30591 16.0599V12.4999V8.93989C4.30591 4.51989 7.43591 2.7099 11.2659 4.9199L13.5159 6.2199"
                    stroke="#138B7D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
                Find More Details
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
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* key features across platforms */}
      <section className="mb-10 mt-24">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] text-center md:mb-14 mb-7">
          key features across platforms
        </h1>
        <div className="container mx-auto w-full grid grid-cols-2 md:grid-cols-6 items-center justify-between gap-5 md:px-0 px-5">
          <div className="md:col-span-2 col-span-full box-shadow-two md:px-10 px-5 md:py-8 py-5 rounded-[8px] md:h-[212px] h-auto">
            <h3 className="md:text-[18px] text-[12px] font-[700] text-[#222222] text-center md:text-start mb-2">
              key features across platforms
            </h3>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              ✦ Built-in compliance with global standards, including PCI DSS,
              GDPR, ISO 27001, and PSD2
            </h5>
          </div>
          <div className="md:col-span-2 col-span-full box-shadow-two md:px-10 px-5 md:py-8 py-5 rounded-[8px] md:h-[212px] h-auto">
            <h3 className="md:text-[18px] text-[12px] font-[700] text-[#222222] text-center md:text-start mb-2">
              API-Driven Architecture
            </h3>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ Comprehensive RESTful and GraphQL APIs for seamless integrations
            </h5>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              ✦ SDKs for faster implementation on iOS, Android, and web
              platforms
            </h5>
          </div>
          <div className="md:col-span-2 col-span-full box-shadow-two md:px-10 px-5 md:py-8 py-5 rounded-[8px] md:h-[212px] h-auto">
            <h3 className="md:text-[18px] text-[12px] font-[700] text-[#222222] text-center md:text-start mb-2">
              Advanced Security
            </h3>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ AES-256 Encryption for sensitive data storage
            </h5>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ TLS 1.3 for secure communication.
            </h5>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              ✦ Biometric authentication for end-user security
            </h5>
          </div>
          <div className="md:col-span-2 col-span-full box-shadow-two md:px-10 px-5 md:py-8 py-5 rounded-[8px] md:h-[212px] h-auto">
            <h3 className="md:text-[18px] text-[12px] font-[700] text-[#222222] text-center md:text-start mb-2">
              AI and Machine Learning
            </h3>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ Personalized recommendations and insights for users
            </h5>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ Fraud detection and prevention systems
            </h5>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
              ✦ Real-time credit risk analysis for loan platforms
            </h5>
          </div>
          <div className="md:col-span-2 col-span-full box-shadow-two md:px-10 px-5 md:py-8 py-5 rounded-[8px] md:h-[212px] h-auto">
            <h3 className="md:text-[18px] text-[12px] font-[700] text-[#222222] text-center md:text-start mb-2">
              Real-Time Analytics
            </h3>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ Dashboard with actionable insights into transactions, user
              engagement, and operational performance
            </h5>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ Customizable reports for compliance and business strategy
            </h5>
          </div>
          <div className="md:col-span-2 col-span-full box-shadow-two md:px-10 px-5 md:py-8 py-5 rounded-[8px] md:h-[212px] h-auto">
            <h3 className="md:text-[18px] text-[12px] font-[700] text-[#222222] text-center md:text-start mb-2">
              Multi-Language & Multi-Currency Support
            </h3>
            <h5 className="md:text-[16px] text-[12px] font-[500] text-[#222222] text-center md:text-start mb-1.5">
              ✦ Expand your reach to global markets with built-in localization
              tools
            </h5>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center w-full gap-4 md:mt-10 mt-8">
          <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
            Find More Details
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
          </Button>
        </div>
      </section>
    </section>
  );
}
