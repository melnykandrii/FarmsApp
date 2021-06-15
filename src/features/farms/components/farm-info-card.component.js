import React from "react";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  FarmCard,
  FarmCardCover,
  Title,
  Address,
  Info,
  SectionIcons,
  RatingIcon,
  EndIconsSection,
  CloseLabel,
  SvgIcon,
  AmenityImage,
} from "./farm-info-card.styles.component";
import { Favourite } from "../../../components/favourites/favourite.component";

export const FarmInfoCard = ({ farm = {} }) => {
  const {
    name = "Some Farm",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg",
    ],
    address = "100 some address street",
    isOpenNow = true,
    rating = 3.6,
    isClosedTemporarily = true,
    placeId,
  } = farm;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <FarmCard elevation={5}>
      <Favourite farm={farm} />
      <FarmCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SectionIcons>
          <RatingIcon>
            {ratingArray.map((_, i) => (
              <SvgIcon key={`star-${placeId}-${i}`} xml={star} />
            ))}
          </RatingIcon>
          <EndIconsSection>
            {isClosedTemporarily && <CloseLabel>CLOSED TEMPORARILY</CloseLabel>}
            {isOpenNow && <SvgIcon xml={open} />}
            <AmenityImage source={{ uri: icon }} />
          </EndIconsSection>
        </SectionIcons>
        <Address>{address}</Address>
      </Info>
    </FarmCard>
  );
};
