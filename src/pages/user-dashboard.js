import React, { useEffect } from "react";
import { useRouter } from "next/router";
// internal
import SEO from "@components/seo";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Footer from "@layout/footer";
import { useGetUserOrdersQuery } from "src/redux/features/orderApi";
import DashboardArea from "@components/user-dashboard/dashboard-area";
import Loader from "@components/loader/loader";
import ErrorMessage from "@components/error-message/error";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "src/redux/features/auth/authSlice";

const UserOrdersPage = () => {
  const {
    data: orderData,
    isError,
    isLoading,
    error,
    refetch,
  } = useGetUserOrdersQuery();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticate = localStorage.getItem("auth");
    if(isAuthenticate) {
    const { accessToken } = JSON.parse(isAuthenticate);
    const { exp } = jwtDecode(accessToken);
    if (!isAuthenticate || Date.now() >= exp * 1000) {
      dispatch(userLoggedOut());
      router.push("/login");
    }
    }
    if(orderData){
      refetch();
    }
  }, [router,orderData,refetch]);
  let content = null;

  if (isLoading) {
  content = <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Loader loading={isLoading} />
    </div>;
  }
  if(isError){
   content = <ErrorMessage message="Có lỗi xảy ra " />
  }
  if(orderData && !isError){
    content = <DashboardArea orderData={orderData} />
  }

  return (
    <Wrapper>
      <SEO pageTitle={"Tổng quan người dùng"} />
      <Header style_2={true} />
      {content}
      <Footer />
    </Wrapper>
  );
};

export default UserOrdersPage;
