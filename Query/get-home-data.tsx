import { gql } from "@apollo/client";
import all_post from "./post-data";
import data_banner from "./banner-data";
import { generalPage } from "./general-page-query";

const HomeData = gql`
  query HomeData {
    ${generalPage}
    ${all_post}
    ${data_banner}
  }
  `
   

export default HomeData