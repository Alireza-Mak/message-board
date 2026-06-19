const Header = () => {
    return (
        <header className="w-full bg-neutral-800 px-6 py-5 text-white">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-2xl font-bold">
                    Welcome To Message Board App
                </h1>
                <p className="text-sm text-gray-300">
                    Created by{" "}
                    <a
                        className="text-primary"
                        href="https://alirezamak.com"
                    >
                        Alireza Mak
                    </a>
                </p>
            </div>
        </header>
    );
};

export default Header;
