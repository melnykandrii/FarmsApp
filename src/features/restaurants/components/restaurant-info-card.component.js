import React from "react";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Address,
  Info,
  SectionIcons,
  RatingIcon,
  EndIconsSection,
  CloseLabel,
  SvgIcon,
  AmenityImage,
} from "../components/restaurant-info-card.styles.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg",
    photos = [
      "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg",
    ],
    address = "100 some address street",
    isOpenNow = true,
    rating = 3.6,
    isCloseTemporary = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={15}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SectionIcons>
          <RatingIcon>
            {ratingArray.map(() => (
              <SvgIcon xml={star} />
            ))}
          </RatingIcon>
          <EndIconsSection>
            {isCloseTemporary && <CloseLabel>CLOSED TEMPORARILY</CloseLabel>}
            {isOpenNow && <SvgIcon xml={open} />}
            <AmenityImage source={{ uri: icon }} />
          </EndIconsSection>
        </SectionIcons>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
