export function getCroppedImageUrl(url: string) {
    const firstPart = url.substring(0, 27);
    const lastPart = url.substring(27);
    return `${firstPart}/crop/600/400${lastPart}`;
}
