import { useRouter } from "next/router"
import client from "../apollo";
import { getPostByCategory } from "../Query/get-all-posts-by-category";
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
import { GetStaticPaths, GetStaticProps, } from "next/types";
import { getCategory } from "../Query/get-category";
import { FooterType } from "../Types/footer/footer-type";
import { HeaderType } from "../Types/header/header-type";
import dynamic from "next/dynamic";
import Card from "../components/Card";
import CategoryLayout from "../components/category/Category_Layout";
import { useEffect, useState } from "react";
import { Get_Pagination_Page } from "../Query/get-pagination";


function Page({ postsData }: any) {
  console.log('postsData',postsData)
  const [postOffset, setPostOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [paginationPosts, setPaginationPosts] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const getPostByPagination = async () => {
   
      let { data } = await client.query({
        query: Get_Pagination_Page,
        variables: { category: router.asPath, offset: postOffset },
      })
      setPaginationPosts(data);
    }
    getPostByPagination()
  }, [postOffset, router.asPath])
 
  let TotalPost = postsData?.CategoryPosts?.count;
  const postPerPage = 10;
  const paginationPage = Math.ceil(TotalPost / postPerPage);
  const PageBasePagination = async (i: any) => {
    const page = i + 1;
    setPageIndex(page);
    if (page === 1) {
      setPostOffset(0);
    } else {
      setPostOffset(i * 10);
    }
  };

  const handlePrevAndNextPage = (x:any)=>{
 
    if(x> 0){
      if(pageIndex<Array.apply(0, Array(paginationPage)).length){
        setPageIndex(pageIndex+1)
        setPostOffset(10 + postOffset)
      }
    }
    else{
      if(pageIndex>1){
        setPageIndex(pageIndex-1)
        setPostOffset(postOffset-10)
      }
      else{
         setPostOffset(0)
      }
    }
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  const { slug }: any = router.query

  const Header: HeaderType = {
    languages: postsData?.general?.children?.edges[0],
    socialMedias: postsData?.general?.children?.edges[1],
    Plugin: postsData?.general?.children?.edges[2],
    contact: postsData?.general?.children?.edges[3],
  }
  const Navbar = {
    MenuNavbar: postsData?.menuItems,
  }
  const Banner = postsData?.general?.children?.edges[4].node;
  const footer: FooterType = {
    contact: postsData?.general?.children?.edges[3],
    footerBg: postsData?.general?.children?.edges[5],
    AboutNews: postsData?.general?.children?.edges[6]
  }
  const CopyRight = {
    Copyright: postsData?.general?.children?.edges[7]
  }
  const menufooter = {
    Menu_footer: postsData?.general?.children?.edges[8]
  }
  const imageBanners = Banner?.children.edges[3].node;



  return (
    <Layout
      headerData={Header}
      footerData={footer}
      bannerData={Banner}
      realEstateData={postsData?.realestate?.posts?.nodes}
      menuNavbar={Navbar}
      copyRight={CopyRight}
      menuFooter={menufooter}
      popularPost={postsData?.popularPost?.nodes}
      dataFacebookPage={postsData?.fb?.posts?.nodes}
      dataVideo={postsData?.video?.posts?.nodes}
      dataSponsor={postsData?.sponsor?.posts?.nodes}
      imageBanner={imageBanners?.children?.edges[0]?.node}>
      <CategoryLayout
        title={postsData?.CategoryPosts?.name}
        imageBanner={imageBanners?.children?.edges[0]?.node}
        countPosts={postsData?.CategoryPosts?.count} >
        {postsData?.CategoryPosts?.posts?.nodes?.map((post: any) => (
          <Card
            key={post?.slug}
            img={post?.featuredImage?.node?.sourceUrl}
            title={post?.title}
            auth={post?.author?.node.name}
            date={post?.date}
            des={post?.content}
            uri={post?.slug}
          />
        ))}
      </CategoryLayout>
      {/* pagination */}
      <div>
        {TotalPost < 10 ? (
          ''
        ) : (
          <div className="my-8 flex justify-center">
            <ul className="inline-flex -space-x-px">
              {/* Previoes  */}
              {postOffset >= 10 && (
                <li>
                  <button
                      onClick={()=>handlePrevAndNextPage(-1)}
                    className="px-3 py-2 ml-0 leading-tight  text-[#0d6efd] bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition delay-75"
                  >
                    « Previous
                  </button>
                </li>
              )}
              {Array.apply(0, Array(paginationPage)).map(function (x, i) {
                return (
                  <li key={i}>
                    <button
                      onClick={() => PageBasePagination(i)}
                      value={i + 1}
                      className={` ${i + 1 == pageIndex
                          ? 'bg-[#0d6efd] text-white'
                          : 'text-[#0d6efd] hover:bg-blue-100 hover:text-blue-700 transition delay-75'
                        }
                           px-3 py-2 leading-tight  border border-gray-300   dark:border-gray-700 dark:bg-gray-700 dark:text-white transition delay-75`}
                    >
                      {i + 1}
                    </button>
                  </li>
                );
              })}
              {/* Next */}
              <li>
                <button
                  onClick={()=>handlePrevAndNextPage(1)}
                  className={` ${postOffset + 10 > TotalPost &&
                    'cursor-not-allowed pointer-events-none'
                    } px-3 py-2 leading-tight text-[#0d6efd] bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}
                >
                  Next »
                </button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </Layout>
  )
}


export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: getCategory });
  let paths = data?.menuItems?.edges?.map((item: any) => {
    let slugs = item?.node?.uri.split('/').filter((pageSlug: string) => pageSlug);
    return { params: { slug: slugs } }
  }
  );
  return {
    paths: paths || [],
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ( {params} ) => {
  let path = params?.slug;
  let slug: string|undefined;
 if(typeof path !=='string'  ){
   slug = path?.join('/');
 }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, loading } = await client.query(
    {
      query: getPostByCategory,
      variables: {
        id: slug,

      }
    }
  )
  return { props: { postsData: data } || null }
}