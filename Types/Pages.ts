declare global {
    type HomeProps = {
        posts: TypePostItem[];
    };

    type LayoutWrapperProps = {
        children: JSX.Element;
    };

    type SectionContainerProps = {
        children: JSX.Element;
    };
}

export {};
