export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentType {
  postId: number;
  id: number;
  email: string;
  body: string;
}
export interface AlbumType {
  userId: number;
  id: number;
  title: string;
}
type UserAdress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAdress;
  phone: string;
  website: string;
  company: UserCompany;
}
export interface PhotoType {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: string;
}
