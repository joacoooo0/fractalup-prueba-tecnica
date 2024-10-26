export type Country = {
  name: string;
  capital: string;
  currency: string;
  languages: {
    name: string;
  }[];
  continent: {
    name: string;
  };
  flagUrl?: string;
};
