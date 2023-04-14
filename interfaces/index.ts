export interface BeerType {
  stylebeer: string;
  mintemperature: number;
  maxtemperature: number;
  artists:{
    external_urls:{
      spotify: string
    };
    href: string;
    id: string;
    name: string;
    type: string;
  }[];
}

export interface NavItemType {
  name: string;
  link: string;
  title: string;
  photo: string;
}

export interface TemperatureType{
  temperature: number;
}

export  interface Props  {
  artists:{
    external_urls:{
      spotify: string
    };
    href: string;
    id: string;
    name: string;
    type: string;
  }[];
  album: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
};
