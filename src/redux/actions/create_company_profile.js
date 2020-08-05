import {
  CREATE_COMPANY_PROFILE_SUCESS,
  CREATE_COMPANY_PROFILE_FAIL
} from "./types";

import RNGooglePlaces from "react-native-google-places";

export const createCompanyProfile = () => async dispatch => {
  try {
    const place = await RNGooglePlaces.openAutocompleteModal();
    let placeid = place.placeID;
    let placeDetails = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=AIzaSyDcWKkFpcT7Ws1DAZe1ruR4svsIE6X0oLg`
    );
    console.log(placeDetails);
    let json = JSON.parse(placeDetails._bodyText);
    let payload = Object.assign(json.result, place);
    let photo = [];
    var obj = {
      photo: []
    };
    if (json.status === "OK") {
      // One option if it's too slow then dispatch the action first for success and then dispatch another action later
      // to update the photos array
      await Promise.all(
        json.result.photos.map(async (item, i) => {
          const photoRef = item.photo_reference;
          //let r = getPhotosUrl(photoRef, photo);
          let Path = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyDcWKkFpcT7Ws1DAZe1ruR4svsIE6X0oLg`;
          let photos = await fetch(`${Path}`).then(res => {
            obj.photo.push(res.url);
            //console.log(res.url);
          });
        })
      );

      //console.log(obj);

      const payload = Object.assign(json.result, obj, place);
      console.log(payload);
      dispatch({
        type: CREATE_COMPANY_PROFILE_SUCESS,
        payload: payload
      });
    } else if (json.status === "INVALID_REQUEST") {
      dispatch({ type: CREATE_COMPANY_PROFILE_FAIL });
    } else if (json.status === "OVER_QUERY_LIMIT") {
      // it's urgent it menas you are over limit
      //send an email to indicate that I am over the quota!
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_COMPANY_PROFILE_FAIL, payload: error });
  }
};

const getPhotosUrl = async photoRef => {
  try {
    let photos = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyDcWKkFpcT7Ws1DAZe1ruR4svsIE6X0oLg`
    );
    //console.log(photos.url);
    return photos.url;
  } catch (error) {
    console.log("error getting the photo url");
    return "error";
  }
};

export default createCompanyProfile;
