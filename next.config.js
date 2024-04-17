/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/**
 * Check types and eslint in a GitHub Action for speed
 */

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
    }, 
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default config;
