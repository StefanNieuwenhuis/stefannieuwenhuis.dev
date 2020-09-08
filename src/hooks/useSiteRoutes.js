import { graphql, useStaticQuery } from 'gatsby';

export const useSiteRoutes = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_ROUTES_QUERY {
        site {
          siteMetadata {
              routes {
                  name
                  path
              }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};