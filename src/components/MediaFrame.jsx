export default function MediaFrame({
  src,
  alt,
  type = "image",
  className = "",
}) {
  if (src) {
    return type === "video" ? (
      <video
        className={`media-frame ${className}`}
        src={src}
        alt={alt}
        loading="lazy"
        controls
      />
    ) : (
      <img
        className={`media-frame ${className}`}
        src={src}
        alt={alt}
        loading="lazy"
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
