# Smart Land website

Static React website built with Vite. The GitHub Pages workflow deploys the built `dist` folder automatically after every push to `main`.

## Local development

```bash
cd website
npm install
npm run dev
```

To make a production build:

```bash
npm run build
```

## Publish on GitHub Pages

1. Create an empty GitHub repository and push this project to it. Keep the `website/` and `.github/workflows/deploy.yml` folders in the repository.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push or merge a commit to the `main` branch. The **Deploy static site to GitHub Pages** workflow will install, build, and publish the site.
5. After the workflow succeeds, visit `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

The Vite configuration uses `base: './'`, so CSS, JavaScript, logo files, and future media work correctly when the site lives under a repository path. Add real AVIF/WebP images and MP4/WebM videos to the project before publishing; the current visual media areas are intentional placeholders.
