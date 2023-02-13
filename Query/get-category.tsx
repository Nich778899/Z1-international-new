import { gql } from "@apollo/client";
import { Category } from "./Category-menu";

export const getCategory = gql`
query Category{
${Category}


}
`