// Smart Land components v1.0. Import './tokens.css' and './components.css' in main.jsx.
import React from 'react';

const cx = (...c) => c.filter(Boolean).join(' ');

export const Container = ({ className, ...p }) => <div className={cx('sl-container', className)} {...p} />;

/** tone: 'mist' (default) | 'white' | 'lagoon' */
export const Section = ({ tone = 'mist', id, className, children }) => (
  <section id={id} data-tone={tone === 'mist' ? undefined : tone} className={cx('sl-section', className)}>
    <Container>{children}</Container>
  </section>
);

/** level 1-4 maps to h1-h4 */
export const Heading = ({ level = 2, children, ...p }) => React.createElement(`h${level}`, p, children);

/** variant: 'primary' | 'secondary' | 'ghost'. Pass href for a link, otherwise renders a button. */
export const Button = ({ variant = 'primary', href, className, children, ...p }) => {
  const props = { className: cx('sl-btn', `sl-btn--${variant}`, className), ...p };
  return href ? <a href={href} {...props}>{children}</a> : <button type="button" {...props}>{children}</button>;
};

export const Card = ({ cut = true, className, children }) => (
  <article className={cx('sl-card', cut && 'sl-cut', className)}>{children}</article>
);

/** Small badge for AI-generated media. Rendered automatically by MediaFrame/VideoFrame via the `ai` prop. */
export const AIBadge = ({ label = 'Made with AI' }) => <span className="sl-ai-badge">{label}</span>;

/**
 * Responsive image. `src` is the base path WITHOUT size/extension, e.g. '/img/hero'
 * Expects files: hero-480.avif, hero-960.avif, hero-1600.avif and the same in .webp
 */
export const MediaFrame = ({ src, alt, widths = [480, 960, 1600], sizes = '(min-width: 960px) 50vw, 100vw',
  ratio = '16 / 9', ai = false, caption, cut = true, className, eager = false }) => {
  const set = (ext) => widths.map((w) => `${src}-${w}.${ext} ${w}w`).join(', ');
  return (
    <figure className={cx('sl-media', cut && 'sl-cut', className)} style={{ aspectRatio: ratio }}>
      <picture>
        <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
        <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
        <img src={`${src}-${widths[widths.length - 1]}.webp`} alt={alt}
          loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </picture>
      {ai && <AIBadge />}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

/**
 * Video with poster + captions. tracks: [{ src:'/vtt/intro.en.vtt', srcLang:'en', label:'English', default:true }]
 * sources: [{ src:'/video/intro.mp4', type:'video/mp4' }, { src:'/video/intro.webm', type:'video/webm' }]
 */
export const VideoFrame = ({ sources, tracks = [], poster, ratio = '16 / 9', ai = false, caption, cut = true }) => (
  <figure className={cx('sl-media', cut && 'sl-cut')} style={{ aspectRatio: ratio }}>
    <video controls preload="metadata" poster={poster} playsInline>
      {sources.map((s) => <source key={s.src} {...s} />)}
      {tracks.map((t) => <track key={t.src} kind="captions" {...t} />)}
    </video>
    {ai && <AIBadge />}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

/** Project card. The meta list carries real survey data: sector, year, platform. */
export const ProjectCard = ({ name, summary, sector, year, platform, image, href, ai = false }) => (
  <Card>
    {image && <MediaFrame {...image} ai={ai} cut={false} ratio="4 / 3" />}
    <div className="sl-card__body">
      <dl className="sl-project__meta">
        {sector && <><dt>Sector</dt><dd>{sector}</dd></>}
        {year && <><dt>Year</dt><dd>{year}</dd></>}
        {platform && <><dt>Platform</dt><dd>{platform}</dd></>}
      </dl>
      <Heading level={3}>{name}</Heading>
      <p className="sl-muted">{summary}</p>
      {href && <Button variant="ghost" href={href}>Read the story</Button>}
    </div>
  </Card>
);

/** Decorative contour lines. Use as a section divider; set `color` to the NEXT section's background. */
export const ContourDivider = ({ color = 'var(--sl-lagoon-900)', lines = 4 }) => (
  <svg className="sl-contours" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true"
    style={{ color }}>
    {Array.from({ length: lines }, (_, i) => (
      <path key={i} stroke="currentColor" strokeOpacity={1 - i * 0.22}
        d={`M0 ${130 - i * 18} C 300 ${40 + i * 14}, 600 ${150 - i * 10}, 900 ${70 + i * 8} S 1300 ${50 + i * 12}, 1440 ${100 - i * 12}`}
        style={{ animationDelay: `${i * 120}ms` }} />
    ))}
  </svg>
);

/** links: [{ href:'#projects', label:'Projects' }]. activeHref marks aria-current. */
export const SiteHeader = ({ logoSrc = '/brand/logo-horizontal.svg', links = [], activeHref, cta }) => (
  <header className="sl-header">
    <Container className="sl-header__inner">
      <a href="#top" aria-label="Smart Land home"><img src={logoSrc} alt="Smart Land" height="36" /></a>
      <nav className="sl-nav" aria-label="Main">
        {links.map((l) => <a key={l.href} href={l.href} aria-current={activeHref === l.href ? 'true' : undefined}>{l.label}</a>)}
      </nav>
      {cta && <Button href={cta.href}>{cta.label}</Button>}
    </Container>
  </header>
);
