import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// internal
import ErrorMessage from "@components/error-message/error";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone"),
  company: Yup.string().required().label("Company"),
  message: Yup.string().required().min(20).label("Message"),
});

const ContactForm = () => {
    // react hook form
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    reset();
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="name"
              {...register("name",{required:`Tên là bắt buộc!`})}
              type="text"
              placeholder="Nhập tên"
              id="name"
            />
            <ErrorMessage message={errors.name?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="email"
              {...register("email",{required:`Email là bắt buộc!`})}
              type="email"
              placeholder="Nhập email"
              id="email"
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="phone"
              {...register("phone",{required:`Số điện thoại là bắt buộc!`})}
              type="text"
              placeholder="Số điện thoại"
              id="phone"
            />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="company"
              {...register("company",{required:`Tên công ty/tổ chức!`})}
              type="text"
              placeholder="Công ty/Tổ chức"
              id="company"
            />
            <ErrorMessage message={errors.company?.message} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__input-2">
            <textarea
              name="message"
              {...register("message",{required:`Tin nhắn là bắt buộc!`})}
              id="message"
              placeholder="Viết tin nhắn"
            ></textarea>
            <ErrorMessage message={errors.message?.message} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__agree d-flex align-items-start mb-25">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
            Tôi bị ràng buộc bởi các điều khoản của Dịch vụ và chấp nhận Chính sách quyền riêng tư.
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="tp-btn">
              Gửi tin nhắn
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
