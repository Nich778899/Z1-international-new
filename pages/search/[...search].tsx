import { useRouter } from "next/router"
import Layout from "../../components/Layout";
import client from "../../apollo";
import { HeaderType } from "../../Types/header/header-type";
import { FooterType } from "../../Types/footer/footer-type";
import { get_search } from "../../Query/get-search";
import Card from "../../components/Card";




function Search({ data }: any) {
  const Header: HeaderType = {
    languages: data?.general?.children?.edges[0],
    socialMedias: data?.general?.children?.edges[1],
    Plugin: data?.general?.children?.edges[2],
    contact: data?.general?.children?.edges[3],
  };
  const Navbar = {
    MenuNavbar: data?.menuItems,
  };
  const Banner = data?.general?.children?.edges[4].node;

  const footer: FooterType = {
    contact: data?.general?.children?.edges[3],
    footerBg: data?.general?.children?.edges[5],
    AboutNews: data?.general?.children?.edges[6],
  };
  const CopyRight = {
    Copyright: data?.general?.children?.edges[7],
  };
  const menufooter = {
    Menu_footer: data?.general?.children?.edges[8],
  };
  const imageBanners = Banner?.children.edges[3].node;
  const { query } = useRouter()


  return (
    <div>
      <Layout
        headerData={Header}
        footerData={footer}
        bannerData={Banner}
        realEstateData={data?.realestate?.posts?.nodes}
        menuNavbar={Navbar}
        copyRight={CopyRight}
        menuFooter={menufooter}
        popularPost={data?.popularPost?.nodes}
        dataFacebookPage={data?.fb?.posts?.nodes}
        dataVideo={data?.video?.posts?.nodes}
        dataSponsor={data?.sponsor?.posts?.nodes}
        imageBanner={imageBanners?.children?.edges[0]?.node}
      >
        {data.Search.edges.length > 0 ? (
          <>
              <h1 className="text-2xl md:text-2xl lg:text-3xl py-3 ">Search : {query.search}</h1>
            <div className="py-3">
              <hr className="mt-2 h-px bg-gray-400 border-0 dark:bg-gray-900"></hr>
            </div>
            {data?.Search?.edges?.map((post: any) => (
              <Card
                key={post?.node?.slug}
                img={post?.node.featuredImage?.node?.sourceUrl}
                title={post?.node?.title}
                auth={post?.node?.author?.node.name}
                date={post?.node.date}
                des={post?.node?.content}
                uri={post?.node?.slug}
              />
            ))}
          </>
        ) : (
          <h1 className="text-3xl py-4 ">Search : {query.search}, not found</h1>
        )}

      </Layout>
    </div>
  )
}

export default Search

export async function getServerSideProps({ params }: any) {
  const { data } = await client.query({
    query: get_search,
    variables: {
      title: params.search[0],
    },
  });
  return {
    props: { data },
  };
}

