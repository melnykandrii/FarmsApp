import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const header = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.medium};
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const description = (theme) => `
    font-size: ${theme.fontSizes.caption};
`;

const emptyBody = (theme) => `
    font-size: ${theme.fontSizes.body};
    align-self: center;
`;

const emptyDescription = (theme) => `
    font-size: ${theme.fontSizes.caption};
    align-self: center;
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const button = (theme) => `
    font-family: ${theme.fonts.body};
    color: ${theme.colors.brand.spring};
    font-size: ${theme.fontSizes.title};
`;

const variants = {
  title,
  header,
  body,
  description,
  label,
  caption,
  error,
  hint,
  button,
  emptyDescription,
  emptyBody,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
