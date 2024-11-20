import { createSlice } from "@reduxjs/toolkit";
import { SubscriptionType } from "../utils/enum";

const initialState = {
  headerData: {},
  footerData: {},
  templateData: {},
  floristData: {},
  typographyData: {},
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateData: (state, action) => {
      const { payload } = action;

      return {
        ...state,
        footerData: payload?.footerDataDTO || {},
        headerData: payload?.headerDTO || {},
        templateData: payload?.baseTemplateDTO || {},
        floristData: {
          ...payload?.floristDTO,
          payoutConnected: payload?.payoutConnected || false,
          instagramEnabled: payload?.instagramEnabled || false,
          analyticsId: payload?.analyticsId || false,
        },
        socialMediaData: payload?.typographyDTO?.socialMediaDTOS || [],
        typographyData: payload?.typographyDTO?.typographyDetailsDTOS || [],
        buttonStyleData: payload?.typographyDTO?.buttonDTOS || [],
        promotionalBannerData: payload?.promotionalBannerDTO || {},
        shopCartDTO: payload?.shopCartDTO || {},
        primiumSubscriptionEnabled:
          (payload?.subscriptionType &&
            payload?.subscriptionType === SubscriptionType.PREMIUM) ||
          false,
        googleMapLocationUrl: payload?.googleMapLocationUrl,
        googlePlaceId: payload?.floristDTO?.googlePlaceId,
        yelpUrl: payload?.yelpUrl,
        facebookUrl: payload?.facebookUrl,
      };
    },
  },
});

export const { setTemplateData } = templateSlice.actions;

export default templateSlice.reducer;
