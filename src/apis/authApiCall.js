import axios from "axios";
const DomainName = "http://localhost:5000";
export const createUserInDb = async (user) => {
  try {
    const { data } = await axios.post(`${DomainName}/api/v1/users/signin`, {
      userName: user.userName,
      userEmail: user.userEmail,
      userRole: user.userRole,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUserInDb = async (email) => {
  try {
    const { data } = await axios.post(`${DomainName}/api/v1/users/login`, {
      userEmail: email,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUser = async (role) => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/users?userRole=${role}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
