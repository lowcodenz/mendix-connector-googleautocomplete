import { Component, createElement } from "react";
import Autocomplete from "react-google-autocomplete";

var addressPropertyNumber = "";
var addressStreetName = "";
var addressSuburb = "";
var addressCity = "";

export class GoogleAutocompletelcnz extends Component {
  render() {
    return <Autocomplete
      apiKey={this.props.apikey}
      onPlaceSelected={(place) => {
        if (place != null) {
          // place data
          for (let i = 0; i < place.address_components.length; i++) {
            if (checkTypes(place.address_components[i].types, "street_number")) {
              if (this.props.addressFull != null){
                addressPropertyNumber = place.address_components[i].long_name;
              }
              if (this.props.streetNumber != null) {
                this.props.streetNumber.setValue(place.address_components[i].long_name);
              }
            } else if (checkTypes(place.address_components[i].types, "route")) {
              if (this.props.addressFull != null){
                addressStreetName = place.address_components[i].long_name;
              }
              if (this.props.streetName != null) {
                this.props.streetName.setValue(place.address_components[i].long_name);
              }
            } else if (checkTypes(place.address_components[i].types, "locality")) {
              if (this.props.addressFull != null){
                addressSuburb = place.address_components[i].long_name;
              }
              if (this.props.suburb != null) {
                this.props.suburb.setValue(place.address_components[i].long_name); 
              }
            } else if (checkTypes(place.address_components[i].types, "administrative_area_level_1")) {
              if (this.props.addressFull != null){
                addressCity = place.address_components[i].long_name;
              } 
              if (this.props.city != null) {
                this.props.city.setValue(place.address_components[i].long_name);
              }
            } else if (checkTypes(place.address_components[i].types, "country")) {
              if (this.props.country != null) {
                this.props.country.setValue(place.address_components[i].long_name);
              }
            } else if (checkTypes(place.address_components[i].types, "postal_code")) {
              if (this.props.postcode != null) {
                this.props.postcode.setValue(place.address_components[i].long_name);
              }
            }
          }
          if (this.props.placeId != null){
            this.props.placeId.setValue(place.place_id);
          }
          var latLong = place.geometry.location.toString();
          var latLongSubstring = latLong.substring(1, latLong.length - 1);
          var latLongArray = latLongSubstring.split(",");
          // lat & long
          if (this.props.latitude != null) {
            this.props.latitude.setValue(latLongArray[0]);
          }
          if (this.props.longitude != null) {
            this.props.longitude.setValue(latLongArray[1]);
          }
          // establishment data
          if (this.props.establishmentName != null) {
            this.props.establishmentName.setValue(place.name);
          }
          if (this.props.establishmentPhoneNumber != null) {
            this.props.establishmentPhoneNumber.setValue(place.formatted_phone_number);
          }
          if (this.props.establishmentWebsite != null) {
            this.props.establishmentWebsite.setValue(place.website);
          }
          if (this.props.establishmentMapsUrl != null) {
            this.props.establishmentMapsUrl.setValue(place.url);
          }
          // Full Address
          if (this.props.addressFull != null){
            var addressFullResult = "";
            if (addressPropertyNumber != null && addressPropertyNumber != ""){
              addressFullResult += addressPropertyNumber + " ";
            }
            if (addressStreetName != null && addressStreetName != " "){
              addressFullResult += addressStreetName + " ";
            }
            if (addressSuburb != null && addressSuburb != " "){
              addressFullResult += addressSuburb + " ";
            }
            if (addressCity != null && addressCity != " "){
              addressFullResult += addressCity;
            }
            this.props.addressFull.setValue(addressFullResult);
            addressPropertyNumber = "";
            addressStreetName = "";
            addressSuburb = "";
            addressCity = "";
          }
        }
      }}
      options={{
        types: ['establishment', 'geocode'],
        fields: ['address_components', 'name', 'geometry', 'formatted_phone_number', 'website', 'place_id'],
        componentRestrictions: { country: this.props.countryName },
      }}
      defaultValue=""
    />;
  }
}

function checkTypes(typesArray, typeToCheck) {
  for (let i = 0; i < typesArray.length; i++) {
    if (typesArray[i] == typeToCheck) {
      return true;
    }
  }
  return false;
}