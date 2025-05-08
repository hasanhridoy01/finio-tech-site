import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CorporateCarousel from "./CorporateCarousel";
import { Button } from "../ui/button";

export default function CorporateClients() {
  return (
    <div className="container mx-auto mb-10 md:mt-24 mt-14 md:px-0 px-5 w-full">
      <div className="flex items-center justify-start box-shadow md:px-12 md:pt-10 pb-5 pt-8 px-8">
        <Tabs defaultValue="For Individual" className="md:h-[537px] h-auto">
          <TabsList className="grid md:w-[600px] w-[240px] md:h-[86px] h-auto md:grid-cols-3 grid-cols-1 md:rounded-lg rounded-[5px]">
            <TabsTrigger value="For Individual">For Individual</TabsTrigger>
            <TabsTrigger value="For merchants">For merchants</TabsTrigger>
            <TabsTrigger value="System management">
              System management
            </TabsTrigger>
          </TabsList>
          <TabsContent value="For Individual" className="md:py-1 py-3">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20 items-start justify-between">
              <div className="col-span-full md:col-span-1 md:pt-10 pt-0">
                <h2 className="md:text-[24px] text-[16px] font-[900]">
                  For Individual & corporate clients
                </h2>
                <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
                  Deliver seamless digital payment experiences with our robust,
                  secure, and eWallet solutions
                </h3>

                {/* Features List */}
                <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
                  <li className="mb-1">
                    Onboarding & 2FA (two-factor authentication)
                  </li>
                  <li className="mb-1">Customer profile & settings</li>
                  <li className="mb-1">
                    Ongoing KYC/KYB with a trusted vendor
                  </li>
                  <li className="mb-1">
                    Accounts in any currencies, crypto, points
                  </li>
                  <li className="mb-1">Cards & IBAN linked to accounts</li>
                  <li className="mb-1">Real-time currency exchange</li>
                  <li className="mb-1">Send, request, or exchange funds</li>
                  <li className="mb-1">Payment links & QR code payments</li>
                  <li className="mb-1">
                    Operations with cash for clients (Cash points)
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-1 md:flex hidden items-center justify-center px-3">
                <CorporateCarousel />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="For merchants" className="md:py-1 py-3">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20 items-start justify-between">
              <div className="col-span-full md:col-span-1 md:pt-10 pt-0">
                <h2 className="md:text-[24px] text-[16px] font-[900]">
                  For merchants & corporate clients
                </h2>
                <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
                  Deliver seamless digital payment experiences with our robust,
                  secure, and eWallet solutions
                </h3>

                {/* Features List */}
                <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
                  <li className="mb-1">
                    Onboarding & 2FA (two-factor authentication)
                  </li>
                  <li className="mb-1">Customer profile & settings</li>
                  <li className="mb-1">
                    Ongoing KYC/KYB with a trusted vendor
                  </li>
                  <li className="mb-1">
                    Accounts in any currencies, crypto, points
                  </li>
                  <li className="mb-1">Cards & IBAN linked to accounts</li>
                  <li className="mb-1">Real-time currency exchange</li>
                  <li className="mb-1">Send, request, or exchange funds</li>
                  <li className="mb-1">Payment links & QR code payments</li>
                  <li className="mb-1">
                    Operations with cash for clients (Cash points)
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-1 md:flex hidden items-center justify-center px-3">
                <CorporateCarousel />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="System management" className="md:py-1 py-3">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20 items-start justify-between">
              <div className="col-span-full md:col-span-1 md:pt-10 pt-0">
                <h2 className="md:text-[24px] text-[16px] font-[900]">
                  System management & corporate clients
                </h2>
                <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
                  Deliver seamless digital payment experiences with our robust,
                  secure, and eWallet solutions
                </h3>

                {/* Features List */}
                <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
                  <li className="mb-1">
                    Onboarding & 2FA (two-factor authentication)
                  </li>
                  <li className="mb-1">Customer profile & settings</li>
                  <li className="mb-1">
                    Ongoing KYC/KYB with a trusted vendor
                  </li>
                  <li className="mb-1">
                    Accounts in any currencies, crypto, points
                  </li>
                  <li className="mb-1">Cards & IBAN linked to accounts</li>
                  <li className="mb-1">Real-time currency exchange</li>
                  <li className="mb-1">Send, request, or exchange funds</li>
                  <li className="mb-1">Payment links & QR code payments</li>
                  <li className="mb-1">
                    Operations with cash for clients (Cash points)
                  </li>
                </ul>
              </div>
              <div className="col-span-full md:col-span-1 md:flex hidden items-center justify-center px-3">
                <CorporateCarousel />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex items-center justify-center gap-4 md:flex-row flex-col my-10">
        <Button
          className="md:w-[201px] w-[175px] md:h-[55px] h-[40px] secondary-button"
        >
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
        <Button
          
          className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button"
        >
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
  );
}
