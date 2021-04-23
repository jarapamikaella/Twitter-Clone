/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  TweetRoot: undefined;
};

export type TweetRootStackParamList = {
  Tweet: {id: number};
}

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

export type HomeTabParamList = {
  homescreen: undefined;
};

export type SearchTabParamList = {
  searchscreen: undefined;
};

export type NotifParamList = {
  notification: undefined;
};

export type MessageParamList = {
  message: undefined;
};