export interface iTechsProps {
  id: string;
  title: string;
  status: string;
}

export interface iDataUser {
  id: string;
  name: string;
  email: string;
  password: string;
  courseModule?: string;
  techs: iTechsProps[];
}
