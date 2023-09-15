import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getUsers } from "../../store/users/userSlice";

const User = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("user", user);
  return (
    <div className="">
      <h1>User</h1>
    </div>
  );
};

export default User;
