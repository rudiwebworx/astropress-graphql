export const allPostsWithSlugQuery = `
{
  posts(first: 10000) {
    edges {
      node {
        slug
      }
    }
  }
}
`;

export const getFirstPostsQuery = `
query AllPosts($first: Int) {
  posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        title
        excerpt
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const findPostBySlug = `query findPostBySlug($slug: String!) {
  postBy(slug: $slug) {
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
    content
    date
    author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
  }
}`;

export const getMenuByLocation = `query GetMenuByLocation($location: MenuLocationEnum!) {
  menuItems(where: { location: $location }) {
    nodes {
      id
      label
      url
      path
      parentId
      cssClasses
    }
  }
}`;

export const getSiteSettings = `query GetSiteSettings {
  generalSettings {
    title
    description
  }
}`;

export const getSiteLogoById = `query GetSiteLogoById($id: ID!) {
  mediaItem(id: $id, idType: DATABASE_ID) {
    sourceUrl
    altText
  }
}`;
