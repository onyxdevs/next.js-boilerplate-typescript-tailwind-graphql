declare global {
    type TypeCustomLinkProps = {
        href: string;
    };

    type TypeCustomLink = TypeCustomLinkProps &
        React.HTMLProps<HTMLAnchorElement> &
        React.HTMLAttributes<HTMLAnchorElement>;
}

export {};
