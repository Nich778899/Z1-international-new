import { AllPostsNode, IndigoNode } from '../Types/globals-types';
import CategoryGrid from './category/Category_Grid';
import CategoryLayout from './category/Category_Layout';
interface prop {
  data: AllPostsNode[];
  dataEconomic: AllPostsNode[];
  databuyandsell: AllPostsNode[];
  datakhnowledge: AllPostsNode[];
  dataRealestaes: AllPostsNode[];
  imageBanners: IndigoNode;
}

function Content({ data, dataEconomic, databuyandsell, datakhnowledge, dataRealestaes, imageBanners }: prop) {
  return (
    <>
      <CategoryLayout title={'REAL ESTATE'} imageBanner={imageBanners.children.edges[1].node}  countPosts={dataRealestaes.length}>
        <CategoryGrid category={dataRealestaes} />
      </CategoryLayout >
      <CategoryLayout title={'PROJECT'} imageBanner={imageBanners.children.edges[2].node} countPosts={data.length}>
        <CategoryGrid category={data} />
      </CategoryLayout >
      <CategoryLayout title={'ECONOMIC'} countPosts={dataEconomic.length} >
        <CategoryGrid category={dataEconomic} />
      </CategoryLayout >
      <CategoryLayout title={'BUY AND SELL'} imageBanner={imageBanners.children.edges[3].node} countPosts={databuyandsell.length}>
        <CategoryGrid category={databuyandsell} />
      </CategoryLayout >
      <CategoryLayout title={'KNOWLEDGE'} countPosts={datakhnowledge.length}>
        <CategoryGrid category={datakhnowledge} />
      </CategoryLayout >
    </>
  )
}
export default Content