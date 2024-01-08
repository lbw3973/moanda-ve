import { Map, MapMarker } from "react-kakao-maps-sdk";
import * as S from "./style";
import location from "@/constants/location.json";

const LocationCard = () => {
  return (
    <S.LocationCardContainer>
      <Map
        center={{ lat: location.latitude, lng: location.longitude }}
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      >
        <MapMarker position={{ lat: location.latitude, lng: location.longitude }}></MapMarker>
      </Map>
    </S.LocationCardContainer>
  );
};

export default LocationCard;
