import axios from "axios";
const DomainName = "http://localhost:5000";
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

// GET ADVERTISED PRODUCTS

export const getAdvertisedProduct = async () => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/products?isSold=false&isAdvertised=true`
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// MAKE ADVERTISEMENT PRODUCT

export const makeProductAdvertiseMent = async (productId) => {
  try {
    const { data } = await axios.patch(
      `${DomainName}/api/v1/products/${productId}`,
      { isAdvertised: true },
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
// MAKE ADVERTISEMENT PRODUCT

export const deleteSellerProduct = async (productId) => {
  try {
    const { data } = await axios.delete(
      `${DomainName}/api/v1/products/${productId}`,
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
