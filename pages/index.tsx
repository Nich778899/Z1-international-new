import { GetStaticProps } from 'next';
import HomeData from '../Query/get-home-data';
import client from '../apollo';
import dynamic from 'next/dynamic';
import { AllPostsNode, Page } from '../Types/globals-types';
import { HeaderType } from '../Types/header/header-type';
import { FooterType } from '../Types/footer/footer-type';
const Content = dynamic(() => import('../components/Content'));
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
function Index({ data }: { data: Page }) {
  const posts = data?.all_posts.nodes;
  function FilterPost(posts: AllPostsNode[], name: string): AllPostsNode[] {
    const results: AllPostsNode[] = [];
    posts.forEach((post) => {
      post.categories.nodes.forEach((category: any) => {
        if (category.name == name) {
          results.push(post)
        }
      })
    })
    return results
  }
  const real_estates_posts = FilterPost(posts, 'Real Estates')
  const project_posts = FilterPost(posts, 'Project')
  const economic_posts = FilterPost(posts, 'Economic')
  const BuyAndSell_posts = FilterPost(posts, 'Buy and Sell')
  const khnowledge_post = FilterPost(posts, 'Knowledge')
  const Facebook_post = FilterPost(posts, 'Facebook Pages')
  const Video_post = FilterPost(posts, 'Video')
  const Sponsor_post = FilterPost(posts, 'Sponsor')
  const Header: HeaderType = {
    languages: data?.general?.children?.edges[0],
    socialMedias: data?.general?.children?.edges[1],
    Plugin: data?.general?.children?.edges[2],
    contact: data?.general?.children?.edges[3],
  }
  const Banner = data?.general?.children?.edges[4].node;
  const Navbar = {
    MenuNavbar: data?.menuItems,
  }
  const imageBanners = Banner.children.edges[3].node;
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

  return (
    <>
      <Layout headerData={Header} bannerData={Banner} footerData={footer} real_estates_posts={real_estates_posts} realEstateData={data?.all_posts?.nodes?.slice(0, 4)} copyRight={CopyRight} menuFooter={menufooter} menuNavbar={Navbar} popularPost={data?.all_posts?.nodes?.slice(0, 4)} dataFacebookPage={Facebook_post} dataVideo={Video_post} dataSponsor={Sponsor_post} imageBanner={imageBanners?.children?.edges[0]?.node}>
        <Content data={project_posts} dataEconomic={economic_posts} databuyandsell={BuyAndSell_posts} datakhnowledge={khnowledge_post} dataRealestaes={real_estates_posts} imageBanners={imageBanners} />
      </Layout>
    </>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: HomeData
  })
  console.log(data);
  return {
    props: { data }
  }
}