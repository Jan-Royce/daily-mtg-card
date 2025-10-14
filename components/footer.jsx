import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            By: <span className="text-sm">
                <Link
                    href="https://janroyce.dev"
                    className="decoration-dashed text-primary underline-offset-8"
                    target="_blank"
                >
                    Royce
                </Link>
            </span>
        </footer>
    );
}
