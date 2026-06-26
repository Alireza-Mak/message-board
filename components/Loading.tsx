const Loading = () => {
    return (
        <div
            className="flex min-h-64 w-full items-center justify-center"
            role="status"
            aria-live="polite"
        >
            <div className="flex flex-col items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900/80 px-10 py-8 shadow-xl shadow-blue-950/20">
                <div className="relative h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-700" />
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500 motion-reduce:animate-none" />
                    <div className="absolute inset-3 rounded-full bg-blue-500/20" />
                </div>

                <div className="text-center">
                    <p className="font-semibold text-white">
                        Loading message board application
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                        Checking your session...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loading;
