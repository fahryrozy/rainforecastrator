export interface AstronomyAPI {
  astro: AstroAPI;
}

export interface AstroAPI {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}
