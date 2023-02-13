import Head from 'next/head';
import React, { ReactElement } from 'react'
import Header from './Header/Header';
import BannerSlide from './Header_Banner/BannerSlides';
import All_Slide_Banner from './Header_Banner/All_Slide_Banner';
import BreakNew from './Home/BreakNew';
import ImageBanner from './Header_Banner/ImageBanner';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { HeaderType } from '../Types/header/header-type';
import { FooterType } from '../Types/footer/footer-type';
import { CopyRightTypes } from '../Types/copyright/copyright-types';
import { MenuFooterTypes } from '../Types/menu-footer/menu-footer-type';
import { MenuNavbarTypes } from '../Types/menu-navbar/menu-nabar-type';
import { AllPostsNode, IndigoNode } from '../Types/globals-types';
import Popular_Post from './Home/Popular_Post';
import Facebook_Page from './Home/Facebook_Page';
import Sponsor from './Home/Sponsor';
import Video from './Home/Video';
import TopImage from './Home/TopImage';
import { useRouter } from 'next/router';


  interface Props {
    children: ReactElement | ReactElement[];
    headerData: HeaderType;
    footerData: FooterType;
    bannerData: IndigoNode;
    realEstateData: AllPostsNode[];
    menuNavbar: MenuNavbarTypes;
    copyRight: CopyRightTypes;
    menuFooter: MenuFooterTypes;
    popularPost: AllPostsNode[];
    dataFacebookPage: AllPostsNode[];
    dataVideo: AllPostsNode[];
    dataSponsor: AllPostsNode[];
    real_estates_posts?: AllPostsNode[];
    imageBanner: any
  }
  const Layout = ({ children, headerData,
    footerData, bannerData, realEstateData,
    menuNavbar, copyRight, menuFooter,
    popularPost, dataFacebookPage, dataVideo,
    dataSponsor,
    real_estates_posts,
    imageBanner

  }: Props) => {
  const topBanner = {
    imageBanner: bannerData.children.edges[0],
    banner: bannerData.children.edges[1]
  }
  const BannerImages = bannerData.children.edges[3].node;
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Z1international</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section>
        <Header header={headerData} />
        <All_Slide_Banner Banner={topBanner} />
        <Navbar Menu_Navbar={menuNavbar.MenuNavbar} />
        <section className='bg-white'>
          <BreakNew data={realEstateData} />
          {asPath == '/' &&
            <BannerSlide Data_BannerSlide={bannerData?.children?.edges[2]?.node?.children?.edges} />
          }
          {
            (real_estates_posts) && <TopImage posts={real_estates_posts} />
          }
        </section>
        <main>
          <div className='flex  max-w-[1320px] mx-auto  -mt-10 md:p-3 sm:p-3 lg:p-0 lg:py-12 md:py-12 sm:py-12'>
            <div className='grid grid-cols-3 gap-6 bg-white w-full'>
              <div className='col-span-3 min-[979px]:col-span-2'>
                <div className='w-full bg-white sticky z-0'>
                  {
                    (asPath == '/') ?
                      (<ImageBanner Data_ImageBanner={imageBanner} />) :
                      <BannerSlide Data_BannerSlide={bannerData.children?.edges[2]?.node?.children?.edges} />
                  }
                  {children}
                </div>
              </div>
              <div className=' col-span-3 min-[979px]:col-span-1 mt-4'>
                <Popular_Post data_Popular_post={popularPost} />
                <div className='-mt-1'>
                  <Facebook_Page data_Facebook={dataFacebookPage} />
                </div>
                <div className='mt-60'>
                  <Video data_Video={dataVideo} />
                </div>
                <div className='mt-14'>
                  <Sponsor data_Sponsor={dataSponsor} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className='w-full'>
          <div className='w-full bg-white py-6'>
            <div className='max-w-[1320px] mx-auto'>
              <ImageBanner Data_ImageBanner={BannerImages.children.edges[4].node} />
            </div>
          </div>
          <Footer Data_Footer={footerData} Data_realestate={realEstateData} Data_Social_Media={headerData} Data_Copy_Right={copyRight} Data_Menu_Footer={menuFooter} />
        </footer>
      </section>
    </>
  )
}

export default Layout