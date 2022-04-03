import Link from 'next/link';

export default function CustomLink({ href, ...rest }: TypeCustomLink) {
    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...rest} />
            </Link>
        );
    }

    if (isAnchorLink) {
        return <a href={href} {...rest} />;
    }

    return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}
