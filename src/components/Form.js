import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Your name is required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match!"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("username")} />
      <p>{errors.username?.message}</p>
      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Re enter password" {...register("confirmPassword")} />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  )
}