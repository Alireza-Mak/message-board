import { Box, TextField, Typography } from "@mui/material";
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
    <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ ml: 3 }}>
            <Typography>Show only</Typography>
            <Typography>messages containing:</Typography>
        </Box>
        <TextField
            sx={{ ml: 1 }}
            value={searchMessage}
            onChange={handleSearchMessageChange}
        />
    </Box>
);

export default FilterMessage;
