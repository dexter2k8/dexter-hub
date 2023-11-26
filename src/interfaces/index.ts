export interface ITechsProps {
  id: string;
  title: string;
  status: string;
}

export interface IDataUser {
  id: string;
  name: string;
  email: string;
  password: string;
  courseModule?: string;
  techs: ITechsProps[];
}
