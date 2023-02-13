import { useRouter } from "next/router";
import { IndigoNode } from "../../Types/globals-types";
import ImageBanner from "../Header_Banner/ImageBanner";
import { ReactNode } from "react";
import Link from "next/link";

interface CategoryProps {
    children: ReactNode;
    imageBanner?: IndigoNode;
    title: string;
    countPosts: number
}
const CategoryLayout = ({ children, imageBanner, title,countPosts }: CategoryProps) => {
    const {asPath} = useRouter()
    return (
        <div>
            <div className='w-full mt-4 relative'>
                <div className=' flex space-x-4 bg-[#f8f9fa] items-center'>
                    <div className='box'>
                        <h1 className=' text-white text-left ml-2 p-2 text-xl font-semibold not-italic uppercase'>{title}</h1>
                    </div>
                    {
                        (asPath=="/") ?<Link className=" underline text-gray-500 hover:text-red-600 font-medium " href={`/category/${title.toLowerCase().replaceAll(' ','-')}`}>See all</Link> : <h1 className='p-2'>{countPosts} Posts</h1>
                    }
                </div>
                {
                    children
                }
            </div>
            {
                (imageBanner) && <div className='mt-4'><ImageBanner Data_ImageBanner={imageBanner} /></div>
            }
        </div>
    );
}

export default CategoryLayout;