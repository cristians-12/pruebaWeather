export interface currentLocationDataResponse {
  temp_c: number;
  wind_kph: number;
  condition: ConditionCurrentLocation
}

export interface LocationDataResponse {
  country: string;
  localtime: string;
  name: string;
  region: string;
  tz_id: string;
}

export interface WeatherDataResponse {
  current: currentLocationDataResponse;
  location: LocationDataResponse;
  error: ErrorResponse;
}

export interface ErrorResponse {
  message: string;
  code: number;
}

export interface ConditionCurrentLocation {
  code: number;
  icon: string;
  text: string;
}
