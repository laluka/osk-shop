export const getAssetUrl = (path: string) => {
    if (path.startsWith('/')) {
        return `${import.meta.env.BASE_URL}${path.slice(1)}`;
    }
    return path;
};
