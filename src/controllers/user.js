import { querryListOfUsers, querryUserById } from "../services/user.js";

const getAllUsers = (req, res) => {
  const userList = querryListOfUsers();
  return res.render("userAll", { userList });
};

const getUser = (req, res) => {
  const userId = req.params.id;
  const userData = querryUserById(userId);
  return res.render("userById", { userData });
};
export { getAllUsers, getUser };
