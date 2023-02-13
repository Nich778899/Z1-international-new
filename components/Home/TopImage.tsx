import Image from 'next/image'
import { AllPostsNode } from '../../Types/globals-types'
import Link from 'next/link';

function TopImage({ posts }:{ posts: AllPostsNode[] }) {

  return (
    <div className='static flex max-w-[1320px] mx-auto sm:py-2  md:p-3 sm:p-3 lg:p-0'>
      <div className='grid grid-cols-2 gap-4 w-full'>
        <div className='lg:col-span-1 md:col-span-2 col-span-2'>
          {posts.slice(0, 1).map((item, index: number) => (
            <div key={index} className='lg:h-full relative group transition duration-300 delay-150 ease transform hover:cursor-pointer overflow-hidden '>
              {/* @ts-ignore */}
              <Link href={item.slug} >
                <Image
                  // @ts-ignore
                  src={item.featuredImage?.node?.sourceUrl}
                  width={640}
                  height={0}
                  alt="logo"
                  className='h-[335px] w-full object-cover relative group-hover:scale-110 transition duration-300 delay-150 ease transform'
                />
              </Link>
              <div className='lg:h-[60px] md:h-12 absolute -bottom-20 right-0 left-0 h-16 bg-black/70 py-3 group-hover:bottom-0 transition-all duration-300 delay-150 ease-in transform '>
                <Link href={item.slug} >
                <h1 className='text-white lg:text-sm md:text-sm text-sm text-left ml-2'>{item.title}</h1>
                </Link>
              </div>
              <div className='absolute top-0.5 -mt-1 grid grid-cols-5'>
                {item.categories?.nodes.map((item, index: number) => (
                  <h1 key={index} className='bg-[#d4010e] hover:bg-black text-white w-[75px] h-4 text-xs text-center px-1 border-l border-l-gray-800'>{item.name}</h1>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* right */}
        <div className='lg:col-span-1 md:col-span-2 col-span-2 grid grid-cols-2 gap-4'>
          {posts.slice(1, 5).map((item, index: number) => (
              <Link key={index} href={item.slug}>
            <div  className=' col-span-2 relative group transition duration-300 delay-150 ease transform hover:cursor-pointer overflow-hidden'>
              {/* @ts-ignore */}
                <Image
                  // @ts-ignore
                  src={item.featuredImage?.node?.sourceUrl}
                  width={640}
                  height={0}
                  sizes="100vw"
                  alt="logo"
                  className='w-full h-[160px] object-cover group-hover:scale-110 transition duration-300 delay-150 ease transform' />
              <div className='absolute z-0 -bottom-20 right-0 left-0 lg:h-14 md:h-13 h-13 bg-black/70 py-3 group-hover:bottom-0 transition-all duration-300 delay-150 ease-in transform'>
                <h1 className='text-white  lg:text-sm md:text-sm text-sm text-left ml-2'>{item.title}</h1>
              </div>
              <div className='absolute top-0  grid grid-cols-4'>
                {item.categories.nodes.map((item, index: number) => (
                  <h1 key={index} className='bg-[#d4010e] hover:bg-black text-white w-[75px] h-4 text-xs text-center px-1 border-l border-l-gray-800  '>{item.name}</h1>
                  ))}
              </div>
            </div>
                  </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopImage