import '../styles/globals.css';
import { Footer } from '../components/footer';

export const metadata = {
    title: {
        template: '%s | MTG: Card of the Day',
        default: 'MTG: Card of the Day'
    },
    description: 'Magic The Gathering card of the day',
    openGraph: {
        title: 'MTG: Card of the Day',
        description: 'Magic The Gathering card of the day',
        url: 'https://daily-mtg-card.netlify.app/',
        siteName: 'MTG: Card of the Day',
        images: [
            {
                url: 'https://daily-mtg-card.netlify.app/images/fleem.png',
                width: 1200,
                height: 627,
                alt: 'Card of the Day',
            }
        ],
        type: 'website'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/tap.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
