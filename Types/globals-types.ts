export interface Page {
    menuItems: MenuItems;
    general:   General;
    all_posts: AllPosts;
    banner:    Banner;
}

export interface AllPosts {
    nodes:      AllPostsNode[];
    menuItems: MenuItems;
    general:   General;
    all_posts: AllPosts;
    banner:    Banner;
}

export interface AllPostsNode {
    slug: string;
    title:         string;
    content:       null | string;
    date:          Date;
    featuredImage: PurpleFeaturedImage | null;
    categories:    Categories;
    template:      PurpleTemplate;
}

export enum PurpleTypename {
    Post = "Post",
}

export interface Categories {
    nodes:      CategoriesNode[];
}

export enum CategoriesTypename {
    PostToCategoryConnection = "PostToCategoryConnection",
}

export interface CategoriesNode {
    __typename: FluffyTypename;
    name:       string;
}

export enum FluffyTypename {
    Category = "Category",
}

export interface PurpleFeaturedImage {
    node:       PurpleNode;
}

export enum FeaturedImageTypename {
    NodeWithFeaturedImageToMediaItemConnectionEdge = "NodeWithFeaturedImageToMediaItemConnectionEdge",
}

export interface PurpleNode {
    sourceUrl:  string;
    title:      string;
}

export enum TentacledTypename {
    MediaItem = "MediaItem",
}

export interface PurpleTemplate {
    templateName?: TemplateName;
    link?:         Link;
    custom_icon?:  CustomIcon;
}

export enum TemplateTypename {
    DefaultTemplate = "DefaultTemplate",
    TemplateExternalLink = "Template_ExternalLink",
    TemplateIcon = "Template_Icon",
}

export interface CustomIcon {
    iconColor:       null | string;
    icon:            null | string;
    backgroundColor: null | string;
}

export enum CustomIconTypename {
    TemplateIconCustomIcon = "Template_Icon_CustomIcon",
}

export interface Link {
    link:       null | string;
}

export enum LinkTypename {
    TemplateExternalLinkLink = "Template_ExternalLink_Link",
    TemplateIconLink = "Template_Icon_Link",
}

export enum TemplateName {
    ExternalLink = "External Link",
    Icon = "Icon",
}

export interface Banner {
    title:      string;
    children:   BannerChildren;
}

export enum BannerTypename {
    Page = "Page",
}

export interface FluffyNode {
    id:            string;
    content:       null | string;
    title:         string;
    featuredImage: FluffyFeaturedImage | null;
    children?:     BannerChildren;
    template?:     FluffyTemplate;
}

export interface PurpleEdge {
    node:       FluffyNode;
}

export interface BannerChildren {
    edges:      PurpleEdge[];
}

export interface FluffyFeaturedImage {
    node:       TentacledNode;
}

export interface TentacledNode {
    sourceUrl:  string;
}

export interface FluffyTemplate {
    templateName: TemplateName;
    link:         Link;
}

export enum EdgeTypename {
    HierarchicalContentNodeToContentNodeChildrenConnectionEdge = "HierarchicalContentNodeToContentNodeChildrenConnectionEdge",
}

export enum ChildrenTypename {
    HierarchicalContentNodeToContentNodeChildrenConnection = "HierarchicalContentNodeToContentNodeChildrenConnection",
}

export interface General {
    id:         string;
    title:      string;
    slug:       string;
    uri:        string;
    children:   GeneralChildren;
}

export interface GeneralChildren {
    edges:FluffyEdge[];
}

export interface FluffyEdge {
    node: IndigoNode;

}


export interface PurpleChildren {
    edges:      TentacledEdge[];
}

export interface TentacledEdge {
    node:       IndigoNode;
}

export interface IndigoNode {
    id:            string;
    uri:           string;
    template?:      PurpleTemplate;
    slug:          string;
    title:         string;
    content:       null | string;
    children:      FluffyChildren;
    featuredImage: TentacledFeaturedImage | null;
}

export interface FluffyChildren {
    edges:      StickyEdge[];
}

export interface StickyEdge {
    node:       IndigoNode;
}

export interface TentacledFeaturedImage {
    node:       HilariousNode;
}

export interface HilariousNode {
    altText?:   string;
    sourceUrl:  string;
    sizes:      Sizes;
}

export enum Sizes {
    MaxWidth100Px100Vw100Px = "(max-width: 100px) 100vw, 100px",
    MaxWidth281Px100Vw281Px = "(max-width: 281px) 100vw, 281px",
    MaxWidth300Px100Vw300Px = "(max-width: 300px) 100vw, 300px",
}

export interface MenuItems {
    edges:      MenuItemsEdge[];
}

export interface MenuItemsEdge {
    node:       AmbitiousNode;
}

export interface AmbitiousNode {
    id:         string;
    title:      null;
    uri:        string;
    label:      string;
}