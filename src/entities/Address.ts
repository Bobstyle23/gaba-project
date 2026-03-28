interface Coordinate {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  coordinates: Coordinate;
  country: string;
  postalCode: string;
  state: string;
  stateCode: string;
}
