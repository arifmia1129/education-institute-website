export function extractFileIdFromUrl(url) {
  const match = url.match(/\/file\/d\/(.+?)\//);
  return match ? match[1] : null;
}
