import { useForm, Controller } from "react-hook-form";
import { TextField, Stack } from "@mui/material";

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
      <Stack spacing={2}>
        <Controller
          name="username"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              id="username"
              label="Username"
              variant="standard"
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              id="password"
              label="Password"
              type="password"
              variant="standard"
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
          )}
        />
      </Stack>
      <div className=" ">
        <button
          type="submit"
          className=" py-3 px-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium w-[99%] rounded-full text-center mt-16"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
