type FilterMessageProps = {
    searchMessage: string;
    handleSearchMessageChange: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
};

const FilterMessage = ({
    searchMessage,
    handleSearchMessageChange,
}: FilterMessageProps) => (
    <div className="flex w-full flex-col gap-2 md:w-1/2">
        <label className="font-semibold text-white">Filter Messages:</label>

        <input
            className="w-full rounded-lg border border-gray-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
            value={searchMessage}
            onChange={handleSearchMessageChange}
            placeholder="show only messages containing..."
        />
    </div>
);

export default FilterMessage;
