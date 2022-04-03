import { Link, ThemeSwitch, Footer } from '@components';
import { SectionContainer } from '@containers';

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    return (
        <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
                <header className="flex items-center justify-between py-10">
                    <Link href="/" aria-label={process.env.NEXT_PUBLIC_TITLE}>
                        <div className="text-2xl font-semibold sm:block">{process.env.NEXT_PUBLIC_TITLE}</div>
                    </Link>

                    <div className="flex items-center text-base leading-5">
                        <ThemeSwitch />
                    </div>
                </header>

                <main className="mb-auto">{children}</main>

                <Footer />
            </div>
        </SectionContainer>
    );
}
