import { getStrapiURL } from "./api"

export function getStrapiMedia(image) {
  const imageUrl = image.url.startsWith("/")
    ? getStrapiURL(image.url)
    : image.url
  return imageUrl
}
