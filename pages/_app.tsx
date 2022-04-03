import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { LayoutWrapper } from '@containers';

import 'styles/globals.scss';

function OnyxApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        NProgress.configure({ showSpinner: false });

        const handleStart = () => {
            NProgress.start();
        };
        const handleStop = () => {
            NProgress.done();
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <ThemeProvider attribute="class" defaultTheme="system">
                <LayoutWrapper>
                    <Component {...pageProps} />
                </LayoutWrapper>
            </ThemeProvider>
        </>
    );
}

export default OnyxApp;
