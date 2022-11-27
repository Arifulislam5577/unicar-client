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

// CREATE A NEW PRODUCT

export const createNewProduct = async (productData) => {
  try {
    const { data } = await axios.post(
      `${DomainName}/api/v1/products`,
      {
        name: productData.name,
        image: productData.image,
        description: productData.description,
        originalPrice: productData.originalPrice * 1,
        newPrice: productData.newPrice * 1,
        purchaseYear: productData.purchaseYear * 1,
        usedYear: productData.usedYear * 1,
        phoneNumber: productData.phoneNumber,
        location: productData.location,
        category: productData.category,
        conditionType: productData.conditionType,
        sellerInfo: JSON.parse(localStorage.getItem("userInfo")).user._id,
      },
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

// GET SELLER PRODUCTS

export const getSellerProducts = async () => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/products?sellerId=${
        JSON.parse(localStorage.getItem("userInfo")).user._id
      }`,
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

// GET CATEGORY PRODUCTS

export const getProductByCategory = async (category) => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/products?category=${category}`,
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
