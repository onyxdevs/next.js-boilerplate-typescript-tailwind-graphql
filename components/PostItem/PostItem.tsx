import removeMd from 'remove-markdown';

import { formatDate, truncate } from '@lib/helpers';
import { Link, CategoryItem, Image } from '@components';

export default function PostItem({ data }: TypePostItemProps) {
    const excerpt = truncate(removeMd(data.content), 60);
    const href = data.hosted ? `/posts/${data.slug}` : data.sourceUrl;

    const linkProps: TypeLinkProps = {
        href,
        'aria-label': data.title,
        title: data.title,
    };
    if (!data.hosted) {
        linkProps.target = '_blank';
    }

    return (
        <article>
            <div className="space-y-2 sm:grid sm:grid-cols-4 sm:space-y-0">
                <div className="flex flex-col pr-10">
                    {!!data.image && (
                        <div className="relative rounded-full mb-5 overflow-hidden w-full">
                            <div className="pb-100% w-full">
                                <Image
                                    src={data.image.url}
                                    placeholder="blur"
                                    blurDataURL={data.image.blurUpThumb}
                                    width={data.image.width}
                                    height={data.image.height}
                                    alt={data.image.alt || undefined}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    )}

                    <dl className="sm:text-center grow flex flex-col">
                        <dt className="sr-only">Published on</dt>
                        <dt className="sr-only">Published by</dt>
                        <dd className="text-base font-bold leading-6 text-gray-500 dark:text-indigo-300">
                            {data.publisher.name}
                        </dd>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-indigo-300 mt-auto">
                            <time dateTime={data.publicationDate}>{formatDate(data.publicationDate)}</time>
                        </dd>
                    </dl>
                </div>

                <div className="space-y-5 sm:col-span-3">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                    className="text-gray-900 dark:text-indigo-300 hover:text-primary-600 dark:hover:text-primary-400"
                                    {...linkProps}
                                >
                                    {data.title}
                                </Link>
                            </h2>

                            <div className="flex flex-wrap pt-2">
                                {data.categories.map((category) => (
                                    <CategoryItem key={category.id} data={category} />
                                ))}
                            </div>
                        </div>

                        <div className="prose max-w-none text-gray-500 dark:text-slate-400">{excerpt}</div>
                    </div>

                    <div className="text-base font-medium leading-6">
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            {...linkProps}
                        >
                            Read more &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
