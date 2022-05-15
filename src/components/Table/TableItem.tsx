import { Box, Typography } from "@mui/material";
import { TableItemType } from "./types";

function TableItem({ 
  name, 
  description, 
  imageSrc 
}: TableItemType) {
  return (
    <>
      <Box sx={{
        textAlign: "center",
      }}>
        <img src={imageSrc} />
        <Typography variant="h5" textAlign="center" gutterBottom>
          {name}
        </Typography>
        <Typography textAlign="center">
          {description}
        </Typography>
      </Box>
    </>
  );
}

export default TableItem;
