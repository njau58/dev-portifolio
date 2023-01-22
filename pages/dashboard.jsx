import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../redux/features/userSlice";

const dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.user }));
  const router = useRouter();

  useEffect(() => {
    if (user?.data?.token === undefined) {
      router.push("/login");
    }
  }, [user, dispatch]);

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <>
     
    </>
  );
};

export default dashboard;
