import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/media/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/media/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/media/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/media/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/media/favicons/safari-pinned-tab.svg" color="#121212" />
                <link rel="shortcut icon" href="/media/favicons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#f6ede4" />
                <meta name="msapplication-config" content="/media/favicons/browserconfig.xml" />
                <meta name="theme-color" content="#f6ede4" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-white text-black antialiased dark:bg-slate-900 dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
