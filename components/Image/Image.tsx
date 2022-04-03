import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

// eslint-disable-next-line jsx-a11y/alt-text
export default function Image({ src, ...rest }: ImageProps) {
    return <NextImage src={src} {...rest} />;
}
