import Image from "next/image"
import { AllPostsNode } from "../../Types/globals-types"

function Sponsor({ data_Sponsor }: { data_Sponsor: AllPostsNode[] }) {

    return (
        <div>
            <div className='bg-[#f8f9fa]  min-[450px]:-mt-9 '>
                <div className='facebookpage'>
                    <h1 className='  text-white text-left ml-6 p-2 text-lg font-semibold'>SPONSOR</h1>
                </div>
                <hr className="w-full h-1 bg-[#d4010e] rounded border-0"></hr>
            </div>
            <div className="flex flex-col space-y-5">
                {data_Sponsor.map((item, index: number) => (
                    // @ts-ignore
                    <a href={item.template?.link?.link} target="_blank" rel="noopener noreferrer" key={item.featuredImage?.node?.sourceUrl}>
                        <Image
                            // @ts-ignore
                            src={item?.featuredImage?.node?.sourceUrl}
                            width={416}
                            height={277}
                            sizes="100vwb"
                            alt="logo"
                            className='object-contain h-full w-full relative group-hover:scale-105 transition duration-300 delay-150 ease transform '
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Sponsor