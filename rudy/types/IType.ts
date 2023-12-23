export interface IError {
  statusCode: number;
  message: string;
}
export interface IPost {
  title: string;
  imagePreview: string;
  subDescription: string;
  description: string;
  author: string;
}

export interface IPrice {
  title: string;
  Price: number;
}

export interface IPriceUpdate {
  id: string;
  title: string;
  Price: number;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
