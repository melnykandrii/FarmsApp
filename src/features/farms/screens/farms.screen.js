import React, { useContext, useState, useCallback, useEffect } from "react";
import {
  RefreshControl,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Button, Provider } from "react-native-paper";

import { FarmInfoCard } from "../components/farm-info-card.component";
import { FarmList } from "../components/farm-list.styles";
import { LoadingState } from "../../../components/utils/loading-state.component";
import { theme } from "../../../infrastructure/theme/index";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FarmsContext } from "../../../services/farms/farms.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { ErrorScreen } from "../../../components/error-screen/error.screen.component";
import { EmptyState } from "../../../components/empty-screens/empty-state.component";
import { FavouritesRefresher } from "../../../components/refresher/refresher.component";
import { FiltersModal } from "../components/filters-modal.component";

const ButtonSizeH = 50;
const ButtonSizeW = 140;
const deviceWidth = Dimensions.get("window").width / 2 - ButtonSizeW / 2;
const deviceHeight = Dimensions.get("window").height / 1.3;
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const FarmsScreen = ({ navigation, route }) => {
  const { error: locationError } = useContext(LocationContext);
  const {
    isLoading,
    farms,
    error,
    filter,
    filterS,
    filterR,
    filterB,
    filterA,
    filterP,
  } = useContext(FarmsContext);
  const [filterKeywordS, setFilterKeywordS] = useState(filterS);
  const [filterKeywordR, setFilterKeywordR] = useState(filterR);
  const [filterKeywordB, setFilterKeywordB] = useState(filterB);
  const [filterKeywordA, setFilterKeywordA] = useState(filterA);
  const [filterKeywordP, setFilterKeywordP] = useState(filterP);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const hasError = !!error || !!locationError;
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [isStrawberry, setIsStrawberry] = useState(false);
  const [isRaspberry, setIsRaspberry] = useState(false);
  const [isBlueberry, setIsBlueberry] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const [isPumpkin, setIsPumpkin] = useState(false);

  useEffect(() => {
    if (isStrawberry) {
      setFilterKeywordS("strawberry");
    } else {
      setFilterKeywordS("farms");
    }
    if (isRaspberry) {
      setFilterKeywordR("raspberry");
    } else {
      setFilterKeywordR("farms");
    }
    if (isBlueberry) {
      setFilterKeywordB("blueberries");
    } else {
      setFilterKeywordB("farm");
    }
    if (isApple) {
      setFilterKeywordA("apple");
    } else {
      setFilterKeywordA("farm");
    }
    if (isPumpkin) {
      setFilterKeywordP("pumpkin");
    } else {
      setFilterKeywordP("self");
    }
    if (
      !isStrawberry &&
      !isRaspberry &&
      !isBlueberry &&
      !isApple &&
      !isPumpkin
    ) {
      setFilterKeywordS("vegetables");
    }
  }, [isApple, isBlueberry, isPumpkin, isRaspberry, isStrawberry]);

  const onApply = () => {
    hideModal();
    filter(
      filterKeywordS,
      filterKeywordR,
      filterKeywordB,
      filterKeywordA,
      filterKeywordP
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  if (refreshing) {
    return (
      <>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />
        <LoadingState />
      </>
    );
  }
  /*
  if (!farms.length && !hasError && !isLoading) {
    return (
      <>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />
        <EmptyState
          label="No farms for the selected location!"
          description="Please search for another location or adjust your filter!"
          icon="cloud-off-outline"
        />
      </>
    );
  }*/

  return (
    <Provider>
      {isLoading && <LoadingState />}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && !isLoading && (
        <ErrorScreen text="Something went wrong retriving the data" />
      )}
      {!farms.length && !hasError && !isLoading && (
        <EmptyState
          label="No farms for the selected location!"
          description="Please search for another location or adjust your filter!"
          icon="cloud-off-outline"
        />
      )}
      {!hasError && farms && (
        <FarmList
          data={farms}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Farm Details", {
                    farm: item,
                    farmname: item.name,
                    farmaddress: item.address,
                  })
                }
              >
                <FadeInView>
                  <FarmInfoCard farm={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={theme.colors.brand.spring}
              colors={[theme.colors.brand.spring]}
            />
          }
        />
      )}
      <Button
        icon="filter-outline"
        mode="text"
        onPress={showModal}
        style={styles.fav}
        theme={{
          colors: {
            primary: theme.colors.bg.primary,
          },
        }}
      >
        Filter
      </Button>
      <FiltersModal
        visible={visible}
        hideModal={hideModal}
        onApply={onApply}
        setIsStrawberry={setIsStrawberry}
        setIsRaspberry={setIsRaspberry}
        setIsBlueberry={setIsBlueberry}
        setIsApple={setIsApple}
        setIsPumpkin={setIsPumpkin}
        isStrawberry={isStrawberry}
        isRaspberry={isRaspberry}
        isBlueberry={isBlueberry}
        isApple={isApple}
        isPumpkin={isPumpkin}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  fav: {
    position: "absolute",
    top: deviceHeight,
    right: deviceWidth,
    zIndex: 9,
    borderWidth: 2,
    backgroundColor: theme.colors.brand.spring,
    height: ButtonSizeH,
    width: ButtonSizeW,
    justifyContent: "center",
    borderColor: theme.colors.bg.primary,
    borderRadius: 10,
  },
});
