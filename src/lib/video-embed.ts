/**
 * Chuyển URL video (YouTube, TikTok) sang embed URL để iframe
 */
export function getVideoEmbedUrl(url: string, autoplay = false): string | null {
  try {
    const u = new URL(url);

    // YouTube: watch?v=, youtu.be/, shorts/
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      let videoId: string | null = null;
      if (u.hostname === "youtu.be") {
        videoId = u.pathname.slice(1).split("/")[0];
      } else if (u.pathname.includes("/shorts/")) {
        videoId = u.pathname.split("/shorts/")[1]?.split("/")[0] ?? null;
      } else {
        videoId = u.searchParams.get("v");
      }
      if (videoId) {
        const embed = `https://www.youtube.com/embed/${videoId}`;
        return autoplay ? `${embed}?autoplay=1` : embed;
      }
    }

    // TikTok: /@user/video/123 hoặc /@user/photo/123
    if (u.hostname.includes("tiktok.com")) {
      const match = u.pathname.match(/\/(video|photo)\/(\d+)/);
      if (match) {
        const videoId = match[2];
        return `https://www.tiktok.com/embed/v2/${videoId}${autoplay ? "?autoplay=1" : ""}`;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function isVideoUrl(url: string): boolean {
  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("tiktok.com")
  );
}
