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

export const getAllPagesQuery = `
query AllPages {
  pages(first: 100) {
    edges {
      node {
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`;

export const getPageBySlug = `query GetPageBySlug($slug: ID!) {
  page(id: $slug, idType: URI) {
    title
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
}`;

export const getReadingSettings = `query GetReadingSettings {
  allSettings {
    readingSettingsPageOnFront
    readingSettingsPostsPerPage
    readingSettingsShowOnFront
  }
}`;

export const getPageById = `query GetPageById($id: ID!) {
  page(id: $id, idType: DATABASE_ID) {
    title
    slug
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
}`;
