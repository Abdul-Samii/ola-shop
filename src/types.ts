//will be changing this when the APIs are developed

export interface categoryItemType {
  categoryName: string;
  iconName: string;
}

export interface iconsType {
  iconName: string,
  size: number,
  className: string,
}

export interface RatingStarType {
  rating: number;
}

export interface ButtonType {
  className: string;
  btnTitle: string;
  onClick: () => void;
}

export interface productCardType {
  product: any;
}
