import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
// internal
import { Email, EyeCut, Lock, UserTwo } from "@svg/index";
import ErrorMessage from "@components/error-message/error";
import { useRegisterUserMutation } from "src/redux/features/auth/authApi";
import { notifyError, notifySuccess } from "@utils/toast";


const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [registerUser, {}] = useRegisterUserMutation();
  // react hook form
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    resolver: yupResolver(schema)
  });
  // on submit
  const onSubmit = (data) => {
    registerUser({
      name:data.name,
      email:data.email,
      password:data.password,
      confirmPassword:data.confirmPassword,
    }).then((result) => {
      if(result?.error){
        notifyError('Lỗi đăng ký');
      }
      else {
        notifySuccess(result?.data?.message);
      }
    })
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              {...register("name",{required:`Tên là bắt buộc!`})}
              name="name"
              type="text"
              placeholder="Nhập tên"
              id="name"
            />
            <span>
              <UserTwo />
            </span>
          </div>
           <ErrorMessage message={errors.name?.message} />
        </div>

        <div className="login__input-item">
          <div className="login__input">
            <input
             {...register("email",{required:`Email là bắt buộc!`})}
              name="email"
              type="email"
              placeholder="Nhập email"
              id="email"
            />
            <span>
              <Email />
            </span>
          </div>
          <ErrorMessage message={errors.email?.message} />
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                {...register("password",{required:`Mật khẩu là bắt buộc!`})}
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                id="password"
              />
              <span>
                <Lock />
              </span>
            </div>
            <span
              className="login-input-eye"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
            </span>
          </div>
          <ErrorMessage message={errors.password?.message} />
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
               {...register("confirmPassword")}
                name="confirmPassword"
                type={showConPass ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                id="confirmPassword"
              />
              <span>
                <Lock />
              </span>
            </div>
            <span
              className="login-input-eye"
              onClick={() => setShowConPass(!showConPass)}
            >
              {showConPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
            </span>
          </div>
          <ErrorMessage message={errors.confirmPassword?.message} />
        </div>
      </div>


      <div className="login__btn mt-25">
        <button type="submit" className="tp-btn w-100">
          Đăng ký
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
