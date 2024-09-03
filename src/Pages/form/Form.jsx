import { Button, MenuItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regContactNumber =/^((\+[1-9]{1,4}[-]?)|(\([0-9]{2,3}\)[-]?)|([0-9]{2,4})[-]?)*?[0-9]$/
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => console.log("done");
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
            error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) ? "This filed is required &  minLength: 3" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
           helperText={
             Boolean(errors.firstName) ? "This filed is required &  minLength: 3" : null
           }
          {...register("lastName", { required: true, minLength: 3 })}
          error={Boolean(errors.lastName)}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "This filed is required  & must be valid" : null
        }        {...register("Email", { required: true, pattern:regEmail })}
        />
      <TextField
        label="Contact Number"
        variant="filled"
        error={Boolean(errors.contactNumber)}
        helperText={
          Boolean(errors.contactNumber) ? "This filed is required  & must be valid" : null
        }        {...register("Contact Number", { required: true, pattern:regContactNumber})}
              />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
}

export default Form;
