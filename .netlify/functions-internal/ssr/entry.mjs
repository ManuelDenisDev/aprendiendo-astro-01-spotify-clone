import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CrTsjJXS.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DX_h8moH.mjs');
const _page1 = () => import('./chunks/get-info-playlist_CCUlxjXr.mjs');
const _page2 = () => import('./chunks/_id__BjRummX2.mjs');
const _page3 = () => import('./chunks/index_BruV9YzB.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-info-playlist.json.js", _page1],
    ["src/pages/playlist/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "8e949737-1081-49fd-b40c-05b56424fede"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
