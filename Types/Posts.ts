declare global {
    type TypePostItem = {
        createdAt: string;
        id: string;
        publisher: {
            createdAt: string;
            id: string;
            logo: {
                url: string;
            };
            name: string;
        };
        image: TypePostImage | null;
        categories: TypeCategoryItem[];
        hosted: boolean;
        content: string;
        sourceUrl: string;
        publicationDate: string;
        slug: string;
        title: string;
    };
    type TypePostItemProps = {
        data: TypePostItem;
    };

    type TypeLinkProps = { target?: string; href: string; 'aria-label': string; title: string };

    type TypePostImage = {
        alt: string | null;
        blurUpThumb: string;
        height: number;
        id?: string;
        title: null;
        url: string;
        width: number;
    };

    type TypeCategoryItem = {
        id: string;
        name: string;
        updatedAt: string;
    };
    type TypeCategoryItemProps = { data: TypeCategoryItem };

    type TypeArticle = {
        createdAt: string;
        id: string;
        _seoMetaTags: TypeSeoMetaTag[];
        publisher: {
            createdAt: string;
            id: string;
            logo: TypePostImage;
            name: string;
        };
        image: {
            alt: string | null;
            author: string | null;
            blurUpThumb: string;
            copyright: string | null;
            filename: string;
            format: string;
            height: number;
            id: string;
            mimeType: string;
            size: number;
            title: string | null;
            url: string;
            width: number;
        };
        categories: TypeCategoryItem[];
        hosted: boolean;
        content: string;
        sourceUrl: string;
        publicationDate: string;
        slug: string;
        title: string;
    };
    type TypeSeoMetaTag = {
        attributes?: {
            property?: string | undefined;
            content?: string | undefined;
        } | null;
        content: string | null;
        tag: string;
    };
    type TypeArticleProps = { data: TypeArticle };
}

export {};
