## Notes

- Choose SCSS for familiarity
- Choose Context API for state management (simple app????)
- Use SVG sprite to normalize and optimize icons
- Simple implementation of routing an data fetching with router and apollo-fetch
- Problem with separator.svg

## Enhancements

- Optimize re-renders by: memoize and generate split contexts
  https://github.com/facebook/react/issues/15156

- Render Topbar only in one place and determine the mode based on route, requirements, etc.
- SVG-sprite for icons and assets
- Add Prettier, Stylelint, other linterss
- environment settings and configuration managed by dotenv in .env files
- Implement something similar to @mixins with SC
