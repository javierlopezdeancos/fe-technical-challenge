function getCountryCodeHelper (url: string): string {
  return url.slice(-2);
}

export default getCountryCodeHelper
