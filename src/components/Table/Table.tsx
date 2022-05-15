import { Container, Grid, Paper, Typography } from "@mui/material";
import TableItem from "./TableItem";
import { TableItemType } from "./types";

interface Props {
  title: string;
  items: TableItemType[];
}

function Table({ 
  title,
  items,
}: Props) {
  return (
    <>
      <Container sx={{
        textAlign: "center",
        padding: "3rem 2rem"
      }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          {title}
        </Typography>
        
        <Grid container spacing={3} sx={{
          justifyContent: "center",
          marginTop: 2,
        }}>
          {items.length > 0 &&
          items.map((item, index) => (
            <Grid item xs={12} sm={4} md={3}>
              <TableItem
                key={`item_${index}`}
                {...item}
              />
            </Grid>
            
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Table;
