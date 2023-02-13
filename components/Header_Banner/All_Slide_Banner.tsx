import ImageBanner from './ImageBanner';
import BannerSlide from './BannerSlides';
import { HeaderBanner } from '../../Types/banner/banner-type';
function All_Slide_Banner({ Banner }:{Banner: HeaderBanner}) {
  return (
    <section className='w-full h-auto bg-white'>
      <div className='max-w-[1320px] mx-auto py-3'>
        <div className='grid grid-cols-3 gap-3 w-full md:p-3 sm:p-3 lg:p-0 '>
          <div className='col-span-1 min-[979px]:col-span-1'>
            <ImageBanner
             // @ts-ignore
             Data_ImageBanner={Banner.imageBanner.node} 
             />
          </div>
          <div className='col-span-2 min-[979px]:col-span-2'>
            <BannerSlide 
             // @ts-ignore
            Data_BannerSlide={Banner.banner.node.children.edges} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default All_Slide_Banner