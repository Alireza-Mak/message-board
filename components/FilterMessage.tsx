type FilterMessageType = {
    searchMessage: string;
    handleSearchMessageChange: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
};
const FilterMessage = ({
    searchMessage,
    handleSearchMessageChange,
}: FilterMessageType) => (
    <div>
        <span>Filter Message:</span>
        <input value={searchMessage} onChange={handleSearchMessageChange} />
    </div>
);

export default FilterMessage;
