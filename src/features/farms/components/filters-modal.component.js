import React, { useState, useEffect, useContext } from "react";
import { Portal } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { CloseButton } from "../../../components/buttons/close.button.component";
import {
  ModalContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
  ButtonContainer,
  Scroll,
  Slider,
} from "./filters-modal.styles";
import { BodyButton } from "../../../components/buttons/body.buttons";
import { FilterSwitch } from "../../../components/filters/FilterSwitch";
import { theme } from "../../../infrastructure/theme";

export const FiltersModal = ({
  isStrawberry,
  isRaspberry,
  isBlueberry,
  isApple,
  isPumpkin,
  setIsStrawberry,
  setIsRaspberry,
  setIsBlueberry,
  setIsApple,
  setIsPumpkin,
  hideModal,
  visible,
  onApply,
}) => {
  return (
    <Portal>
      <ModalContainer visible={visible} onDismiss={hideModal}>
        <TopContainer>
          <CloseButton onClose={hideModal} name="close" />
        </TopContainer>
        <TitleContainer>
          <Text variant="header">Filters</Text>
        </TitleContainer>
        <ContentContainer>
          <Scroll>
            <FilterSwitch
              label="Strawberry"
              state={isStrawberry}
              onChange={(newValue) => setIsStrawberry(newValue)}
            />
            <FilterSwitch
              label="Raspberry"
              state={isRaspberry}
              onChange={(newValue) => setIsRaspberry(newValue)}
            />
            <FilterSwitch
              label="Blueberry"
              state={isBlueberry}
              onChange={(newValue) => setIsBlueberry(newValue)}
            />
            <FilterSwitch
              label="Apple"
              state={isApple}
              onChange={(newValue) => setIsApple(newValue)}
            />
            <FilterSwitch
              label="Pumpkin"
              state={isPumpkin}
              onChange={(newValue) => setIsPumpkin(newValue)}
            />
          </Scroll>
        </ContentContainer>
        <ButtonContainer>
          <BodyButton
            onNavi={onApply}
            color={theme.colors.text.primary}
            mode="outlined"
            title="Apply"
          />
        </ButtonContainer>
      </ModalContainer>
    </Portal>
  );
};
