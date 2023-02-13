
import { GetTagePage } from "../../Query/get-tag"
import { getPostByTag } from "../../Query/get-post-tag"
import client from "../../apollo"
import Layout from "../../components/Layout";
import { HeaderType } from "../../Types/header/header-type";
import { FooterType } from "../../Types/footer/footer-type";
import Card from "../../components/Card";

export const getStaticPaths = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = await client.query({ query: GetTagePage });
  console.warn('tags', data.tags.edges)
  let paths = data?.tags?.edges?.map((item: any) => {
    return { params: { tag: item?.node?.slug.toString() } }
  })
  return {
    paths: paths,
    fallback: 'blocking'
  }
}
export const getStaticProps = async ({ params }: any) => {
  const tag = params.tag;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = await client.query({
    query: getPostByTag,
    variables: {
      id: tag,
    }
  });
  return {
    props: {
      data
    }
  }
}

export default function GetTage({ data }: any) {
  const Header: HeaderType = {
    languages: data?.general?.children?.edges[0],
    socialMedias: data?.general?.children?.edges[1],
    Plugin: data?.general?.children?.edges[2],
    contact: data?.general?.children?.edges[3],
  }

  const Navbar = {
    MenuNavbar: data?.menuItems,
  }
  const Banner = data?.general?.children?.edges[4].node;

  const footer: FooterType = {
    contact: data?.general?.children?.edges[3],
    footerBg: data?.general?.children?.edges[5],
    AboutNews: data?.general?.children?.edges[6]
  }
  const CopyRight = {
    Copyright: data?.general?.children?.edges[7]
  }
  const menufooter = {
    Menu_footer: data?.general?.children?.edges[8]
  }
  const imageBanners = Banner?.children.edges[3].node;

  return (

    <Layout
      headerData={Header}
      bannerData={Banner}
      footerData={footer}
      realEstateData={data?.realestate?.posts?.nodes}
      copyRight={CopyRight}
      menuFooter={menufooter}
      menuNavbar={Navbar}
      popularPost={data?.popularPost?.nodes}
      dataFacebookPage={data?.fb?.posts?.nodes}
      dataVideo={data?.video?.posts?.nodes}
      dataSponsor={data?.sponsor?.posts?.nodes}
      imageBanner={imageBanners?.children?.edges[0]?.node}>
      <div>
        <div className=' flex space-x-4 bg-[#f8f9fa] items-center'>
          <div className='box'>
            <h1 className=' text-white text-left ml-2 p-2 text-xl font-semibold not-italic uppercase'>{data.tag.name}</h1>
          </div>
          <h1>{ data.tag.posts.edges.length} Posts</h1>
        </div>
        {data.tag.posts.edges.map((item: any) => (
          <Card
            key={item.node.title}
            img={item.node.featuredImage.node.sourceUrl}
            title={item.node.title}
            auth={item.node.featuredImage.node.author.node.name}
            date={item.node.date}
            des={item.node.content}
            uri={item.node.slug}
          />
        ))}
      </div>
    </Layout>

  )
}
