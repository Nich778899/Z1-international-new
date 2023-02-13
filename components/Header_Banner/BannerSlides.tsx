
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { StickyEdge } from "../../Types/globals-types";

function BannerSlide({ Data_BannerSlide }: {Data_BannerSlide:StickyEdge[]}) {

  return Data_BannerSlide && (
    <div className="flex max-w-[1320px] mx-auto md:px-0 px-3 py-2">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
         {/* @ts-ignore  */}
      {Data_BannerSlide.map((item) => (
        <SwiperSlide key={item?.node?.id}>
          <>
           {/* @ts-ignore  */}
            <a href={item.node.template.link.link} target="_blank" rel="noopener noreferrer">
              <Image 
                // @ts-ignore
              src={item.node.featuredImage.node.sourceUrl}
                width={856}
                height={106}
                sizes="100vwb"
                  // @ts-ignore 
                alt={item.node.featuredImage.node.sourceUrl}
                className="w-full "
              />
            </a>
          </>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default BannerSlide;
