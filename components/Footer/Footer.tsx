import { Link } from '@components';

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-indigo-300">
                    <div>Obada Qawwas</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                        {process.env.NEXT_PUBLIC_TITLE}
                    </Link>
                </div>

                <div className="mb-8 text-sm text-gray-500 dark:text-indigo-300">
                    <Link
                        href="https://github.com/onyxdevs"
                        target="_blank"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                    >
                        Onyx
                    </Link>
                </div>
            </div>
        </footer>
    );
}
