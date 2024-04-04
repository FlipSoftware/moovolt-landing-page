import { sections } from "./sections";

interface SummaryProps {
    title: string;
    content: string;
}

const Summary: React.FC<SummaryProps> = ({ title, content }) => {
    return (
        <details className="w-full">
            <summary className="list-none py-8 px-4 transition-all duration-150 cursor-pointer bg-white hover:bg-slate-2 drop-shadow-2xl">
                <h1 className="title-font pl-4 text-3xl font-medium leading-10 text-shadow">
                    {title}
                </h1>
            </summary>
            <div className="content p-4">
                <p className="leading-relaxed text-xl text-shadow p-8 bg-white bg-opacity-70">
                    {content}
                </p>
            </div>
        </details>
    );
};

const App: React.FC = () => {
    function getCurrentYear(): number {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <div className="bg-gray-3 text-gray-800 leading-normal font-sans min-h-screen grid">
            {/* Header */}
            <header className="bg-black place-self-center">
                <div className="container m-auto flex-wrap p-5 flex-col md:flex-row items-center">
                    <a
                        href="/"
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <span className="ml-3 text-5xl text-white">
                            MOOV.OLT
                        </span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {/* TODO: Add navigation */}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-[900px] place-self-center">
                <section className="text-gray-700">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -mx-4 -my-8">
                            {sections.map((item) => {
                                return (
                                    <div className="flex-grow-1">
                                        <Summary
                                            key={item.title}
                                            title={item.title}
                                            content={item.description}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
                        © 2022 - {getCurrentYear()} MOOV.OLT —
                        <a
                            href="/"
                            className="text-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Termos do Serviço
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
