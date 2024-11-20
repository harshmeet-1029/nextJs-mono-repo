import axios from "axios";

const serverUrl = "https://gateway.dev.boostfloral.com/";
const APIV2 = " /v2";
const USE_APIV2 = "true";

export const getProductList = async (
  pageNumber = 0,
  pageSize = 50,
  reqFilter = '{"search":""}'
) => {
  try {
    const url = `${serverUrl}inventory/api/floristInventory${APIV2}/public/website?size=${pageSize}&page=${pageNumber}&filter=${encodeURI(
      reqFilter
    )}`;
    const response = await axios.get(url);
    if (response?.status === 200) {
      const proList = response?.data?.objectData;
      if (proList) {
        proList.content = proList?.content?.map((product) => {
          if (product?.floristInventoryImages) {
            return {
              ...product,
              floristInventoryImages: product?.floristInventoryImages.sort(
                (a, b) => b?.thumbnail - a?.thumbnail
              ),
            };
          }
          return product;
        });
      }

      return proList;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getTagsList = async () => {
  try {
    const response = await axios.get(
      `${serverUrl}inventory/invTag/public/website`
    );
    if (response?.status === 200) {
      return response?.data?.objectData;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getCategoryList = async () => {
  try {
    const response = await axios.get(
      `${serverUrl}inventory/api/category/public/website`
    );
    if (response?.status === 200) {
      return response?.data?.objectData;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const submitContactDetails = async (formData) => {
  try {
    const response = await axios.post(
      `${serverUrl}vendor/api/contactUs/public/website`,
      formData
    );
    if (response?.status === 200 || response?.status === 201) {
      return response?.data?.objectData;
    }
    return null;
  } catch (error) {}
};

export const verifyRecaptcha = async (token) => {
  try {
    const response = await axios.post(
      `${serverUrl}authentication/auth/validate-recaptcha?recaptchaToken=${token}`
    );
    if (response?.status === 200 || response?.status === 201) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getProductDetails = async (pId, headers = null) => {
  try {
    const reqUrl = `${serverUrl}inventory/api/floristInventory/public/website/slug/${pId}`;

    const response = await axios.get(reqUrl, headers);
    if (response?.status === 200) {
      const proDetail = response?.data?.objectData;
      proDetail.floristInventoryImages = proDetail?.floristInventoryImages
        ? proDetail?.floristInventoryImages.sort(
            (a, b) => b?.thumbnail - a?.thumbnail
          )
        : null;
      return proDetail;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getTemplateInitialData = async (
  headers = null,
  slug = "/home"
) => {
  try {
    let url = `${serverUrl}vendor/api/templateData/v2/public/website/getByFloristId/1`;

    if (slug) {
      url = `${url}?slug=${slug}`;
    }

    const response = await axios.get(url, headers);
    if (response?.status === 200) {
      return response?.data?.objectData;
    }
    return null;
  } catch (error) {
    // Handle the error here, such as showing a toast message, redirecting the user, etc.
    return null;
  }
};

export const getPageDataBySlug = async (slug, headers = null) => {
  try {
    const response = await axios.get(
      `${serverUrl}vendor/api/settings/template/public/website/pages?slug=${slug}`,
      headers
    );
    if (response?.status === 200) {
      return response?.data?.objectData;
    }
    return null;
  } catch (error) {
    // Handle the error here, such as showing a toast message, redirecting the user, etc.
    return null;
  }
};
