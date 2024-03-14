/* file to handle images assets, create a fn that
will get url path */
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}
