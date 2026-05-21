import geoip from "geoip-lite";

type Geolocation = {
  country: string | null;
  city: string | null;
};

export function getLocationFromIp(ipAddress: string): Geolocation {
  const geo = geoip.lookup(ipAddress);

  return {
    country: geo?.country || null,
    city: geo?.city || null,
  };
}
