import { gql } from '@apollo/client';

export default {
    getAll() {
        return gql`
            query {
                allArticles {
                    createdAt
                    id
                    publisher {
                        createdAt
                        id
                        logo {
                            url
                        }
                        name
                    }
                    image {
                        alt
                        author
                        blurUpThumb
                        copyright
                        filename
                        format
                        height
                        id
                        mimeType
                        size
                        title
                        url
                        width
                    }
                    categories {
                        id
                        name
                        updatedAt
                    }
                    hosted
                    content
                    sourceUrl
                    publicationDate
                    slug
                    sourceUrl
                    title
                }
            }
        `;
    },

    get(slug: string) {
        return gql`
            query {
                article(locale: en, filter: { slug: { eq: "${slug}" } }) {
                    createdAt
                    id
                    _seoMetaTags {
                        attributes
                        content
                        tag
                    }
                    publisher {
                        createdAt
                        id
                        logo {
                            id
                            alt
                            blurUpThumb
                            height
                            title
                            url
                            width
                        }
                        name
                    }
                    image {
                        alt
                        author
                        blurUpThumb
                        copyright
                        filename
                        format
                        height
                        id
                        mimeType
                        size
                        title
                        url
                        width
                    }
                    categories {
                        id
                        name
                        updatedAt
                    }
                    hosted
                    content
                    sourceUrl
                    publicationDate
                    slug
                    title
                }
            }
        `;
    },
};
