import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import client from '@lib/apolloClient';
import postsQueries from '@lib/queries/posts';
import { formatDate } from '@lib/helpers';
import { PageTitle, Image, Link, CategoryItem } from '@components';
import { SectionContainer } from '@containers';

// import DUMMY_DATA_ARTICLE from 'DUMMY_DATA/article.json';

export async function getServerSideProps(context: any) {
    // const posts: TypePostItem[] = DUMMY_DATA.data.allArticles;

    const {
        query: { slug },
    } = context;

    const { data } = await client.query({
        query: postsQueries.get(slug),
    });

    return {
        props: {
            data: data.article,
        },
    };
}

export default function PostPage({ data }: TypeArticleProps) {
    return (
        <>
            <Head>
                {data._seoMetaTags.map((metaTag, index) => {
                    if (metaTag.attributes) {
                        return (
                            <meta key={index} name={metaTag.attributes.property} content={metaTag.attributes.content} />
                        );
                    } else {
                        return <title key={index}>{metaTag.content}</title>;
                    }
                })}
            </Head>

            <SectionContainer>
                <article>
                    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                        <header className="pt-6 xl:pb-6">
                            <div className="space-y-1 text-center">
                                <dl className="space-y-10">
                                    <div>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={data.publicationDate}>
                                                {formatDate(data.publicationDate)}
                                            </time>
                                        </dd>
                                    </div>
                                </dl>

                                <div>
                                    <PageTitle>{data.title}</PageTitle>
                                </div>
                            </div>
                        </header>

                        <div
                            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                            style={{ gridTemplateRows: 'auto 1fr' }}
                        >
                            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                                <dt className="sr-only">Authors</dt>
                                <dd>
                                    <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                        <li className="flex flex-col space-x-2" key={data.publisher.name}>
                                            {data.publisher?.logo.url && (
                                                <Image
                                                    src={data.publisher.logo.url}
                                                    placeholder="blur"
                                                    blurDataURL={data.publisher.logo.blurUpThumb}
                                                    width={data.publisher.logo.width}
                                                    height={data.publisher.logo.height}
                                                    alt={data.publisher.logo.alt || undefined}
                                                    className="h-10 w-10"
                                                />
                                            )}

                                            <dl className="whitespace-nowrap text-sm font-medium leading-5 mt-5">
                                                <dt className="sr-only">Name</dt>
                                                <dd className="text-center text-gray-900 dark:text-gray-100">
                                                    {data.publisher.name}
                                                </dd>
                                            </dl>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>

                            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                                <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                                    <ReactMarkdown>{data.content}</ReactMarkdown>
                                </div>
                            </div>

                            <footer>
                                <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                                    {!!data.categories.length && (
                                        <div className="py-4 xl:py-8">
                                            <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                                Categories
                                            </h2>
                                            <div className="flex flex-wrap">
                                                {data.categories.map((category) => (
                                                    <CategoryItem key={category.id} data={category} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4 xl:pt-8">
                                    <Link
                                        href="/"
                                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    >
                                        &larr; Back to the home page
                                    </Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>
            </SectionContainer>
        </>
    );
}
