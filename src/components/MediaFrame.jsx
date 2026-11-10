import { useState } from "react";

function getYouTubeEmbedUrl(source) {
  try {
    const url = new URL(source);
    let videoId = url.hostname === "youtu.be" ? url.pathname.slice(1) : "";

    if (!videoId && url.hostname.endsWith("youtube.com")) {
      videoId = url.searchParams.get("v") || url.pathname.split("/").at(-1);
    }

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
      : "";
  } catch {
    return "";
  }
}

export default function MediaFrame({
  src,
  srcSet,
  thumbnail,
  alt,
  type = "image",
  className = "",
  sizes = "100vw",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (src) {
    const youtubeUrl = type === "video" ? getYouTubeEmbedUrl(src) : "";

    if (youtubeUrl && !isPlaying) {
      return (
        <div className={`media-frame youtube-preview ${className}`}>
          {thumbnail ? (
            <img src={thumbnail} alt="" aria-hidden="true" />
          ) : (
            <span aria-hidden="true" />
          )}
          <button
            type="button"
            className="youtube-play"
            aria-label={`تشغيل ${alt}`}
            onClick={() => setIsPlaying(true)}
          >
            <span aria-hidden="true">▶</span>
          </button>
        </div>
      );
    }

    if (youtubeUrl) {
      return (
        <iframe
          className={`media-frame ${className}`}
          src={`${youtubeUrl}?autoplay=1`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }

    return type === "video" ? (
      <video
        className={`media-frame ${className}`}
        src={src}
        poster={thumbnail}
        aria-label={alt}
        preload="none"
        controls
      />
    ) : (
      <img
        className={`media-frame ${className}`}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        sizes={sizes}
      />
    );
  }

  if (srcSet) {
    const fallbackSrc = srcSet.split(",")[0].trim().split(/\s+/)[0];

    return (
      <img
        className={`media-frame ${className}`}
        src={fallbackSrc}
        srcSet={srcSet}
        alt={alt}
        loading="lazy"
        decoding="async"
        sizes={sizes}
      />
    );
  }

  return (
    <div
      className={`media-frame placeholder ${className}`}
      role="img"
      aria-label={alt}
    >
      <b>{type === "video" ? "▶" : "▧"}</b>
      <span>{alt}</span>
      <small>
        {type === "video" ? "MP4/WebM + VTT captions" : "AVIF or WebP"}
      </small>
    </div>
  );
}
