import Image from "next/image";
import ContactUs from "./ContactUs";
import Recent_Post from "./Recent_Post";
import About_News from "./About_News";
import Social_Network from "./Social_Network";
import CopyRight from "./CopyRight";
import ScrollToTop from "react-scroll-to-top";
import { FooterType } from "../../Types/footer/footer-type";
import { AllPostsNode } from "../../Types/globals-types";
import { HeaderType } from "../../Types/header/header-type";
import { CopyRightTypes } from "../../Types/copyright/copyright-types";
import { MenuFooterTypes } from "../../Types/menu-footer/menu-footer-type";
 
interface prop{
  Data_Footer: FooterType; 
  Data_realestate: AllPostsNode[];
  Data_Social_Media: HeaderType;
  Data_Copy_Right: CopyRightTypes;
  Data_Menu_Footer: MenuFooterTypes;
}

function Footer({ Data_Footer, Data_realestate, Data_Social_Media, Data_Copy_Right, Data_Menu_Footer, }: prop) {
  return (
    <div className="relative">
        <div className="w-full h-full absolute z-[-1]">
        <Image
        // @ts-ignore
          src={Data_Footer.footerBg.node.children.edges[0].node.featuredImage.node.sourceUrl}
          width={1797}
          height={469}
          sizes="100vwb"
            // @ts-ignore
          alt={Data_Footer.footerBg.node.children.edges[0].node.featuredImage.node.sourceUrl}
          className='w-full h-full object-cover bottom-0'
        />
        </div>
      <div className="!relative h-full before:bg-black before:absolute before:z-[-1] before:left-0 before:top-0 before:bottom-0 before:right-0 before:opacity-[0.8]">
        <div className="lg:w-[1320px] w-full h-full mx-auto md:p-5 sm:p-5 lg:p-2">
          <div className="mx-auto  top-0">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 text-white">
              <div className="lg:col-span-1 md:col-span-3  sm:col-span-3 min-[770px]:col-span-1 col-span-2 lg:order-first order-last">
                <ContactUs data_ContactUs={Data_Footer.contact} />
              </div>
              <div className="min-[770px]:col-span-1 col-span-2">
                <Recent_Post data_Recent_Post={Data_realestate} />
              </div>
              <div className="min-[770px]:col-span-1 col-span-2">
                <About_News data_About_news={Data_Footer.AboutNews} />
              </div>
              <div className="min-[770px]:col-span-1 col-span-2">
                <Social_Network data_social_media={Data_Social_Media.socialMedias} />
              </div>
            </div>
          </div>
        </div>
        <CopyRight data_copyright={Data_Copy_Right.Copyright} data_menu_footer={Data_Menu_Footer.Menu_footer} />
      </div>
      <ScrollToTop
        smooth
        color="#ffff"
        viewBox="0 0 24 24"
        svgPath="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
        className="flex justify-center items-center !bg-[#d4010e]"
      />
    </div>
  )
}


export default Footer
