/* eslint-disable jsx-a11y/alt-text */
import client from "../apollo";
import { SinglePost } from "../Query/get-single-post";
import { HeaderType } from "../Types/header/header-type";
import { FooterType } from "../Types/footer/footer-type";
import { getPostsSlug } from '../Query/get-posts-slug';
import Layout from "../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { dateFormatTime } from "../components/Format_Date";
import {
  FacebookMessengerShareButton, 
  FacebookShareButton, 
  LineShareButton, 
  LinkedinShareButton, 
  TelegramShareButton, 
  TwitterShareButton
} from "react-share";
import FacebookIcon from "react-share/lib/FacebookIcon";
import TwitterIcon from "react-share/lib/TwitterIcon";
import LinkedinIcon from "react-share/lib/LinkedinIcon";
import FacebookMessengerIcon from "react-share/lib/FacebookMessengerIcon";
import TelegramIcon from "react-share/lib/TelegramIcon";
import LineIcon from "react-share/lib/LineIcon";
import { useRouter } from "next/router";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import ImageBanner from "../components/Header_Banner/ImageBanner";
import Relatedpost from "../components/related_post/related_post";
import sanitizeHtml from 'sanitize-html';
import { useQuery } from "@apollo/client";
import { PostByCategorySlug } from "../Query/get-related-post-by-category";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: getPostsSlug })
  const paths = data.all_posts.nodes.map((post: any) => {
    return { params: { post_id: post?.slug } }
  })
  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug = params?.post_id;
  const { data, error, loading } = await client.query({
    query: SinglePost,
    variables: {
      slug: slug,
    }
  })
  return {
    props: {
      post: data,
      slug
    },
    revalidate: 10, // In seconds
  }
}
async function Post({ post, slug }: { post: any, slug: any}) {

  const { loading, error, data } =await client.query({query:PostByCategorySlug , 
    variables: { category: post, }
  });

  if(!data){
    return <h1></h1>
  }


  const Header: HeaderType = {
    languages: post?.general?.children?.edges[0],
    socialMedias: post?.general?.children?.edges[1],
    Plugin: post?.general?.children?.edges[2],
    contact: post?.general?.children?.edges[3],
  };
  const Navbar = {
    MenuNavbar: post?.menuItems,
  };
  const Banner = post?.general?.children?.edges[4].node;

  const footer: FooterType = {
    contact: post?.general?.children?.edges[3],
    footerBg: post?.general?.children?.edges[5],
    AboutNews: post?.general?.children?.edges[6],
  };
  const CopyRight = {
    Copyright: post?.general?.children?.edges[7],
  };
  const menufooter = {
    Menu_footer: post?.general?.children?.edges[8],
  };
  const imageBanners = Banner?.children.edges[3].node;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  //window.location.href
 
  
  return (
    <Layout
      headerData={Header}
      footerData={footer}
      bannerData={Banner}
      realEstateData={post?.realestate?.posts?.nodes}
      menuNavbar={Navbar}
      copyRight={CopyRight}
      menuFooter={menufooter}
      popularPost={post?.popularPost?.nodes}
      dataFacebookPage={post?.fb?.posts?.nodes}
      dataVideo={post?.video?.posts?.nodes}
      dataSponsor={post?.sponsor?.posts?.nodes}
      imageBanner={imageBanners?.children?.edges[0]?.node}>
      <div className="">
        <h1 className="text-4xl sm:text-[28px] font-medium py-2">{post.postBy.title}</h1>
        <div className="flex flex-wrap justify-between">
          <div className="flex space-x-4 py-1  mt-0.5 w-[48%] md:w-[50%] sm:w-full ">
          <div className="flex space-x-1 ">
            <i className="fa-regular fa-user text-[14px] mt-0.5 dateconcolor "></i>
            <span className="dateconcolor text-[14px] capitalize">{post.postBy.author.node.name}</span>
          </div>
          <div className="flex space-x-1 ">
            <i className="fa-solid fa-calendar-days dateconcolor text-[14px] mt-0.5"></i>
            <span className=' text-[14px] dateconcolor'>{dateFormatTime(post.postBy.date)}</span>
          </div>
          </div>
          <div className="flex space-x-1 py-1 w-full md:w-[48%]  md:justify-end sm:justify-start ">
            <span className="dateconcolor">Share</span>
            <Tooltip  content="Facebook" color="invert">
            <FacebookShareButton url={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${router.asPath}`}>
              <FacebookIcon size={25} round={true} />
            </FacebookShareButton>
            </Tooltip>
            <Tooltip  content="Twitter" color="invert">
            <TwitterShareButton  url={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${router.asPath}`}>
            <TwitterIcon size={25} round={true} />
            </TwitterShareButton>
            </Tooltip>
            <Tooltip  content="LinkedIn" color="invert">
            <LinkedinShareButton  url={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${router.asPath}`}>
            <LinkedinIcon size={25} round={true} />
            </LinkedinShareButton>
            </Tooltip>
            <Tooltip  content="Messenger" color="invert">
            <FacebookMessengerShareButton url={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${router.asPath}`}  appId={""}>
            <FacebookMessengerIcon size={25} round={true} />
            </FacebookMessengerShareButton>
            </Tooltip>
            <Tooltip  content="Telegram" color="invert">
            <TelegramShareButton url={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${router.asPath}`}>
            <TelegramIcon size={25} round={true} />
            </TelegramShareButton>
            </Tooltip>
            <Tooltip  content="Line" color="invert">
            <LineShareButton url={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${router.asPath}`}>
            <LineIcon size={25} round={true} />
            </LineShareButton>
            </Tooltip>
          </div>
        </div>
        <hr className="mt-4 h-px bg-gray-300 border-0 dark:bg-gray-900 "></hr>
        <div className=' mt-4  normal-case '
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.postBy.content)}}
        ></div>
        <div className="flex space-x-2">
           <h1 className="font-bold">Category:</h1>
          {post.postBy.categories.edges.map((item:any)=>(
          <>
          <Link href={item.node.uri}>
          <span className="bg-[#d4010e] hover:bg-black text-white w-[75px] h-4 text-xs text-center px-1">{item.node.name}</span>
          </Link>
          </>
          ))}
        </div>
        <div className="flex  py-5 text-blue-600 hover:text-red-600">
          <Link href={post.postBy.chanel.url} target="_blank" rel="noreferrer">
            <span>👉👉👉</span>
             <span className=" ml-2 text-lg">{post.postBy.chanel.description}</span>
          </Link>
        </div>
        <div>
          <Image
                            // @ts-ignore
            src={post.postBy.featuredImage.node.sourceUrl}
            width={900}
            height={450}
            sizes="100vwb"
            alt="logo"
        />
        </div> 
        <div className="py-8 ">
          <h1 className="text-2xl">Tages</h1>
          <div className="flex flex-row flex-wrap gap-2">
              {post.postBy.tags.edges.map((item:any)=>(
                <Link href={`/tag/${item.node.slug}`} key={item.node.name}>
                  <div className="bg-[#d4010e] hover:bg-black text-white px-2 text-lg">{item.node.name}</div>
                </Link>
              ))}
          </div>
        </div> 
        <div className="mt-2">
        <ImageBanner Data_ImageBanner={imageBanners?.children?.edges[0]?.node} />
        </div>
        <div className="py-4">
          <Relatedpost relatedpost={data}/>
        </div>
      </div>
    </Layout>

  );
}

export default Post;