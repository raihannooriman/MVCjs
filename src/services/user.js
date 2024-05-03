import { USER_DATA } from "../models/userData.js";

const querryUserById = (id) => {
  let user;
  USER_DATA.forEach((userData) => {
    if (userData.id == id) {
      user = userData;
    }
  });
  return user;
};

const querryListOfUsers = () => {
  return USER_DATA;
};

export { querryUserById, querryListOfUsers };
