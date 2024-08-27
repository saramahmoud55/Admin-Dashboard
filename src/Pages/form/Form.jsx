import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Form() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{gap:2}}>
        <TextField sx={{flex:1}} label="First Name" variant="filled" />
        <TextField sx={{flex:1}} label="Last Name" variant="filled" />
      </Stack>
      
    </Box>
  );
}

export default Form;
