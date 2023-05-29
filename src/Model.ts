export interface PageResponse {
    headerData: HeaderData;
    loggedInUser: UserData;
    sideNavigationButtons: ButtonData[];
    trendingData: TrendingListData;
    followData: FollowData;
    tweetThreads: TweetData[][];
    tweetButton: ButtonData;
}

export interface HeaderData {
  title: TextData;
  backButton?: ButtonData;
  sideButton?: ButtonData;
  navigationTabs?: ButtonData[];
}

export interface ButtonData {
  buttonText: string;
  bgColorData?: BackgroundColorData;
  icon?: ImageData;
  iconPlacement: "RIGHT" | "LEFT";
  actionUrl: string;
  textAfterIcon?: string;
  disabled?: boolean;
  textColor?: string;
}

export interface BackgroundColorData {
  bgKey?: string;
  bgBorderKey?: string;
  dottedBorder?: boolean;
}

export interface FollowData {
  title: string;
  usersToFollow: UserData[];
}

export interface ImageData {
  url: string;
  aspX?: number;
  aspY?: number;
  alt: string;
}


 

export enum LoadingState {
    LOADING="LOADING",
    LOADED="LOADED",
    ERROR="ERROR",
}

export interface TextData {
  text: string;
  subText?: string;
  superText?: string;
  bgColorData?: BackgroundColorData;
}

export interface TrendData {
  category?: string;
  country?: string;
  text: string;
  tweets?: number;
  hashTags?: string[];
  image?: ImageData;
}

export interface TrendingListData {
  title: string;
  trends: TrendData[];
}

export interface TweetData {
  id:string;
  user: UserData;
  tweetTime: number;
  textArea: string;
  media?: ImageData | VideoData;
  replies: number;
  reTweets: number;
  likes: number;
  views: number;
}

// export interface TypographyData {
//   heading1: CSSProperties;
//   heading2: CSSProperties;
//   buttonLarge: CSSProperties;
//   buttonSmall: CSSProperties;
//   body: CSSProperties;
//   secondaryBody: CSSProperties;
//   caption: CSSProperties;
// }

export interface UserData {
  imageData: ImageData;
  userName: string;
  userId: string;
  blueTick: boolean;
  joiningDate: number;
  desc?: string;
  location?: string;
  following: number;
  followers: number;
}

export interface VideoData {
  url: string;
  views: number;
  aspX?: number;
  aspY?: number;
}