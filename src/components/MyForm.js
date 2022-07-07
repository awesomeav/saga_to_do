import Input from "@mui/material/Input";

import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";

const MyForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    user.id === 0
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } }) // random id generator nanoid
      : dispatch({ type: UPDATE_USER_BY_ID, user });

    dispatch(
      setUserSlice({
        id: 0,
        name: "",
        description: "",
        assigned: "",
      })
    );
  };
  return (
    <>
      <>
        <Input
          onChange={handleChange("name")}
          placeholder="Enter Name"
          value={user.name}
        />
        <Input
          onChange={handleChange("description")}
          placeholder="Enter description"
          value={user.description}
        />
        <Input
          onChange={handleChange("assigned")}
          placeholder="Enter assigned"
          value={user.assigned}
        />
        <Button onClick={() => handleSubmit()}>Submit</Button>
      </>
    </>
  );
};
export default MyForm;
