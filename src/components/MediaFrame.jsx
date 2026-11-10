export default function MediaFrame({
  src,
  srcSet,
  thumbnail,
  alt,
  type = "image",
  className = "",
  sizes = "100vw",
}) {
  if (src) {
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
