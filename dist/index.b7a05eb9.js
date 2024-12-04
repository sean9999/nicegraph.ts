// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dZI1r":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
var _sig = require("./sig");
const hello = ()=>{
    console.log("hello workd");
};
hello();
(0, _sig.goSigma)();

},{"./sig":"3o0w7"}],"3o0w7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "goSigma", ()=>goSigma);
var _edgeCurve = require("@sigma/edge-curve");
var _graphology = require("graphology");
var _graphologyDefault = parcelHelpers.interopDefault(_graphology);
var _worker = require("graphology-layout-force/worker");
var _workerDefault = parcelHelpers.interopDefault(_worker);
var _sigma = require("sigma");
var _sigmaDefault = parcelHelpers.interopDefault(_sigma);
const goSigma = ()=>{
    const container = document.getElementById("sigma-container");
    const graph = new (0, _graphologyDefault.default)();
    const RED = "#FA4F40";
    const BLUE = "#727EE0";
    const GREEN = "#5DB346";
    graph.addNode("John", {
        size: 15,
        label: "John",
        color: RED
    });
    graph.addNode("Mary", {
        size: 15,
        label: "Mary",
        color: RED
    });
    graph.addNode("Suzan", {
        size: 15,
        label: "Suzan",
        color: RED
    });
    graph.addNode("Nantes", {
        size: 15,
        label: "Nantes",
        color: BLUE
    });
    graph.addNode("New-York", {
        size: 15,
        label: "New-York",
        image: "./city.svg",
        color: BLUE
    });
    graph.addNode("Sushis", {
        size: 7,
        label: "Sushis",
        color: GREEN
    });
    graph.addNode("Falafels", {
        size: 7,
        label: "Falafels",
        color: GREEN
    });
    graph.addNode("Kouign Amann", {
        size: 7,
        label: "Kouign Amann",
        color: GREEN
    });
    graph.addEdge("John", "Mary", {
        type: "line",
        label: "works with",
        size: 5
    });
    graph.addEdge("Mary", "Suzan", {
        type: "line",
        label: "works with",
        size: 5
    });
    graph.addEdge("Mary", "Nantes", {
        type: "arrow",
        label: "lives in",
        size: 5
    });
    graph.addEdge("John", "New-York", {
        type: "arrow",
        label: "lives in",
        size: 5
    });
    graph.addEdge("Suzan", "New-York", {
        type: "arrow",
        label: "lives in",
        size: 5
    });
    graph.addEdge("John", "Falafels", {
        type: "arrow",
        label: "eats",
        size: 5
    });
    graph.addEdge("Mary", "Sushis", {
        type: "arrow",
        label: "eats",
        size: 5
    });
    graph.addEdge("Suzan", "Kouign Amann", {
        type: "arrow",
        label: "eats",
        size: 5
    });
    graph.nodes().forEach((node, i)=>{
        const angle = i * 2 * Math.PI / graph.order;
        graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
        graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
    });
    // Create the sigma
    const renderer = new (0, _sigmaDefault.default)(graph, container, {
        defaultEdgeType: "curve",
        labelSize: 15,
        edgeProgramClasses: {
            curve: (0, _edgeCurve.EdgeCurvedArrowProgram)
        }
    });
    const layout = new (0, _workerDefault.default)(graph, {
        isNodeFixed: (_, attr)=>attr.highlighted
    });
    layout.start();
};

},{"@sigma/edge-curve":"12Z4l","graphology":"7anno","graphology-layout-force/worker":"gRcTH","sigma":"k5Arr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12Z4l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_EDGE_CURVATURE", ()=>DEFAULT_EDGE_CURVATURE);
parcelHelpers.export(exports, "DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS", ()=>DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS", ()=>DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS);
parcelHelpers.export(exports, "EdgeCurvedArrowProgram", ()=>EdgeCurvedArrowProgram);
parcelHelpers.export(exports, "createDrawCurvedEdgeLabel", ()=>createDrawCurvedEdgeLabel);
parcelHelpers.export(exports, "createEdgeCurveProgram", ()=>createEdgeCurveProgram);
parcelHelpers.export(exports, "default", ()=>EdgeCurveProgram);
parcelHelpers.export(exports, "indexParallelEdgesIndex", ()=>indexParallelEdgesIndex);
var _rendering = require("sigma/rendering");
var _utils = require("sigma/utils");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function() {
        return !!t;
    })();
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function getCurvePoint(t, p0, p1, p2) {
    var x = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
    var y = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
    return {
        x: x,
        y: y
    };
}
function getCurveLength(p0, p1, p2) {
    var steps = 20;
    var length = 0;
    var lastPoint = p0;
    for(var i = 0; i < steps; i++){
        var point = getCurvePoint((i + 1) / steps, p0, p1, p2);
        length += Math.sqrt(Math.pow(lastPoint.x - point.x, 2) + Math.pow(lastPoint.y - point.y, 2));
        lastPoint = point;
    }
    return length;
}
function createDrawCurvedEdgeLabel(_ref) {
    var curvatureAttribute = _ref.curvatureAttribute, defaultCurvature = _ref.defaultCurvature, _ref$keepLabelUpright = _ref.keepLabelUpright, keepLabelUpright = _ref$keepLabelUpright === void 0 ? true : _ref$keepLabelUpright;
    return function(context, edgeData, sourceData, targetData, settings) {
        var size = settings.edgeLabelSize, curvature = edgeData[curvatureAttribute] || defaultCurvature, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
        var label = edgeData.label;
        if (!label) return;
        context.fillStyle = color;
        context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
        // Computing positions without considering nodes sizes:
        var ltr = !keepLabelUpright || sourceData.x < targetData.x;
        var sourceX = ltr ? sourceData.x : targetData.x;
        var sourceY = ltr ? sourceData.y : targetData.y;
        var targetX = ltr ? targetData.x : sourceData.x;
        var targetY = ltr ? targetData.y : sourceData.y;
        var centerX = (sourceX + targetX) / 2;
        var centerY = (sourceY + targetY) / 2;
        var diffX = targetX - sourceX;
        var diffY = targetY - sourceY;
        var diff = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
        // Anchor point:
        var orientation = ltr ? 1 : -1;
        var anchorX = centerX + diffY * curvature * orientation;
        var anchorY = centerY - diffX * curvature * orientation;
        // Adapt curve points to edge thickness:
        var offset = edgeData.size * 0.7 + 5;
        var sourceOffsetVector = {
            x: anchorY - sourceY,
            y: -(anchorX - sourceX)
        };
        var sourceOffsetVectorLength = Math.sqrt(Math.pow(sourceOffsetVector.x, 2) + Math.pow(sourceOffsetVector.y, 2));
        var targetOffsetVector = {
            x: targetY - anchorY,
            y: -(targetX - anchorX)
        };
        var targetOffsetVectorLength = Math.sqrt(Math.pow(targetOffsetVector.x, 2) + Math.pow(targetOffsetVector.y, 2));
        sourceX += offset * sourceOffsetVector.x / sourceOffsetVectorLength;
        sourceY += offset * sourceOffsetVector.y / sourceOffsetVectorLength;
        targetX += offset * targetOffsetVector.x / targetOffsetVectorLength;
        targetY += offset * targetOffsetVector.y / targetOffsetVectorLength;
        // For anchor, the vector is simpler, so it is inlined:
        anchorX += offset * diffY / diff;
        anchorY -= offset * diffX / diff;
        // Compute curve length:
        var anchorPoint = {
            x: anchorX,
            y: anchorY
        };
        var sourcePoint = {
            x: sourceX,
            y: sourceY
        };
        var targetPoint = {
            x: targetX,
            y: targetY
        };
        var curveLength = getCurveLength(sourcePoint, anchorPoint, targetPoint);
        if (curveLength < sourceData.size + targetData.size) return;
        // Handling ellipsis
        var textLength = context.measureText(label).width;
        var availableTextLength = curveLength - sourceData.size - targetData.size;
        if (textLength > availableTextLength) {
            var ellipsis = "\u2026";
            label = label + ellipsis;
            textLength = context.measureText(label).width;
            while(textLength > availableTextLength && label.length > 1){
                label = label.slice(0, -2) + ellipsis;
                textLength = context.measureText(label).width;
            }
            if (label.length < 4) return;
        }
        // Measure each character:
        var charactersLengthCache = {};
        for(var i = 0, length = label.length; i < length; i++){
            var character = label[i];
            if (!charactersLengthCache[character]) charactersLengthCache[character] = context.measureText(character).width * (1 + curvature * 0.35);
        }
        // Draw each character:
        var t = 0.5 - textLength / curveLength / 2;
        for(var _i = 0, _length = label.length; _i < _length; _i++){
            var _character = label[_i];
            var point = getCurvePoint(t, sourcePoint, anchorPoint, targetPoint);
            var tangentX = 2 * (1 - t) * (anchorX - sourceX) + 2 * t * (targetX - anchorX);
            var tangentY = 2 * (1 - t) * (anchorY - sourceY) + 2 * t * (targetY - anchorY);
            var angle = Math.atan2(tangentY, tangentX);
            context.save();
            context.translate(point.x, point.y);
            context.rotate(angle);
            // Dessiner le caractère
            context.fillText(_character, 0, 0);
            context.restore();
            t += charactersLengthCache[_character] / curveLength;
        }
    };
}
function getFragmentShader(_ref) {
    var arrowHead = _ref.arrowHead;
    // language=GLSL
    var SHADER = /*glsl*/ "\nprecision highp float;\n\nvarying vec4 v_color;\nvarying float v_thickness;\nvarying float v_feather;\nvarying vec2 v_cpA;\nvarying vec2 v_cpB;\nvarying vec2 v_cpC;\n".concat(arrowHead ? "\nvarying float v_targetSize;\nvarying vec2 v_targetPoint;\n\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;" : "", "\n\nfloat det(vec2 a, vec2 b) {\n  return a.x * b.y - b.x * a.y;\n}\n\nvec2 getDistanceVector(vec2 b0, vec2 b1, vec2 b2) {\n  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);\n  float f = b * d - a * a;\n  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;\n  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);\n  gf = vec2(gf.y, -gf.x);\n  vec2 pp = -f * gf / dot(gf, gf);\n  vec2 d0p = b0 - pp;\n  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);\n  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);\n  return mix(mix(b0, b1, t), mix(b1, b2, t), t);\n}\n\nfloat distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {\n  return length(getDistanceVector(b0 - p, b1 - p, b2 - p));\n}\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = distToQuadraticBezierCurve(gl_FragCoord.xy, v_cpA, v_cpB, v_cpC);\n  float thickness = v_thickness;\n").concat(arrowHead ? "\n  float distToTarget = length(gl_FragCoord.xy - v_targetPoint);\n  float arrowLength = v_targetSize + thickness * u_lengthToThicknessRatio;\n  if (distToTarget < arrowLength) {\n    thickness = (distToTarget - v_targetSize) / (arrowLength - v_targetSize) * u_widenessToThicknessRatio * thickness;\n  }" : "", "\n\n  float halfThickness = thickness / 2.0;\n  if (dist < halfThickness) {\n    #ifdef PICKING_MODE\n    gl_FragColor = v_color;\n    #else\n    float t = smoothstep(\n      halfThickness - v_feather,\n      halfThickness,\n      dist\n    );\n\n    gl_FragColor = mix(v_color, transparent, t);\n    #endif\n  } else {\n    gl_FragColor = transparent;\n  }\n}\n");
    return SHADER;
}
function getVertexShader(_ref) {
    var arrowHead = _ref.arrowHead;
    // language=GLSL
    var SHADER = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute float a_direction;\nattribute float a_thickness;\nattribute vec2 a_source;\nattribute vec2 a_target;\nattribute float a_current;\nattribute float a_curvature;\n".concat(arrowHead ? "attribute float a_targetSize;\n" : "", "\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform vec2 u_dimensions;\nuniform float u_minEdgeThickness;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying float v_thickness;\nvarying float v_feather;\nvarying vec2 v_cpA;\nvarying vec2 v_cpB;\nvarying vec2 v_cpC;\n").concat(arrowHead ? "\nvarying float v_targetSize;\nvarying vec2 v_targetPoint;\nuniform float u_widenessToThicknessRatio;\n" : "", '\n\nconst float bias = 255.0 / 254.0;\nconst float epsilon = 0.7;\n\nvec2 clipspaceToViewport(vec2 pos, vec2 dimensions) {\n  return vec2(\n    (pos.x + 1.0) * dimensions.x / 2.0,\n    (pos.y + 1.0) * dimensions.y / 2.0\n  );\n}\n\nvec2 viewportToClipspace(vec2 pos, vec2 dimensions) {\n  return vec2(\n    pos.x / dimensions.x * 2.0 - 1.0,\n    pos.y / dimensions.y * 2.0 - 1.0\n  );\n}\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  // Selecting the correct position\n  // Branchless "position = a_source if a_current == 1.0 else a_target"\n  vec2 position = a_source * max(0.0, a_current) + a_target * max(0.0, 1.0 - a_current);\n  position = (u_matrix * vec3(position, 1)).xy;\n\n  vec2 source = (u_matrix * vec3(a_source, 1)).xy;\n  vec2 target = (u_matrix * vec3(a_target, 1)).xy;\n\n  vec2 viewportPosition = clipspaceToViewport(position, u_dimensions);\n  vec2 viewportSource = clipspaceToViewport(source, u_dimensions);\n  vec2 viewportTarget = clipspaceToViewport(target, u_dimensions);\n\n  vec2 delta = viewportTarget.xy - viewportSource.xy;\n  float len = length(delta);\n  vec2 normal = vec2(-delta.y, delta.x) * a_direction;\n  vec2 unitNormal = normal / len;\n  float boundingBoxThickness = len * a_curvature;\n\n  float curveThickness = max(minThickness, a_thickness / u_sizeRatio);\n  v_thickness = curveThickness * u_pixelRatio;\n  v_feather = u_feather;\n\n  v_cpA = viewportSource;\n  v_cpB = 0.5 * (viewportSource + viewportTarget) + unitNormal * a_direction * boundingBoxThickness;\n  v_cpC = viewportTarget;\n\n  vec2 viewportOffsetPosition = (\n    viewportPosition +\n    unitNormal * (boundingBoxThickness / 2.0 + sign(boundingBoxThickness) * (').concat(arrowHead ? "curveThickness * u_widenessToThicknessRatio" : "curveThickness", " + epsilon)) *\n    max(0.0, a_direction) // NOTE: cutting the bounding box in half to avoid overdraw\n  );\n\n  position = viewportToClipspace(viewportOffsetPosition, u_dimensions);\n  gl_Position = vec4(position, 0, 1);\n    \n").concat(arrowHead ? "\n  v_targetSize = a_targetSize * u_pixelRatio / u_sizeRatio;\n  v_targetPoint = viewportTarget;\n" : "", "\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n");
    return SHADER;
}
var DEFAULT_EDGE_CURVATURE = 0.25;
var DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS = {
    arrowHead: null,
    curvatureAttribute: "curvature",
    defaultCurvature: DEFAULT_EDGE_CURVATURE
};
/**
 * This function helps to identify parallel edges, to adjust their curvatures.
 */ var DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS = {
    edgeIndexAttribute: "parallelIndex",
    edgeMinIndexAttribute: "parallelMinIndex",
    edgeMaxIndexAttribute: "parallelMaxIndex"
};
function indexParallelEdgesIndex(graph, options) {
    var opts = _objectSpread2(_objectSpread2({}, DEFAULT_INDEX_PARALLEL_EDGES_OPTIONS), options || {});
    var nodeIDsMapping = {};
    var edgeDirectedIDsMapping = {};
    var edgeUndirectedIDsMapping = {};
    // Normalize IDs:
    var incr = 0;
    graph.forEachNode(function(node) {
        nodeIDsMapping[node] = ++incr + "";
    });
    graph.forEachEdge(function(edge, _attrs, source, target) {
        var sourceId = nodeIDsMapping[source];
        var targetId = nodeIDsMapping[target];
        var directedId = [
            sourceId,
            targetId
        ].join("-");
        edgeDirectedIDsMapping[edge] = directedId;
        edgeUndirectedIDsMapping[directedId] = [
            sourceId,
            targetId
        ].sort().join("-");
    });
    // Index edge unique IDs, only based on their extremities:
    var directedIndex = {};
    var undirectedIndex = {};
    graph.forEachEdge(function(edge) {
        var directedId = edgeDirectedIDsMapping[edge];
        var undirectedId = edgeUndirectedIDsMapping[directedId];
        directedIndex[directedId] = directedIndex[directedId] || [];
        directedIndex[directedId].push(edge);
        undirectedIndex[undirectedId] = undirectedIndex[undirectedId] || [];
        undirectedIndex[undirectedId].push(edge);
    });
    // Store index attributes:
    for(var directedId in directedIndex){
        var edges = directedIndex[directedId];
        var directedCount = edges.length;
        var undirectedCount = undirectedIndex[edgeUndirectedIDsMapping[directedId]].length;
        // If the edge is alone, in both side:
        if (directedCount === 1 && undirectedCount === 1) {
            var edge = edges[0];
            graph.setEdgeAttribute(edge, opts.edgeIndexAttribute, null);
            graph.setEdgeAttribute(edge, opts.edgeMaxIndexAttribute, null);
        } else if (directedCount === 1) {
            var _edge = edges[0];
            graph.setEdgeAttribute(_edge, opts.edgeIndexAttribute, 1);
            graph.setEdgeAttribute(_edge, opts.edgeMaxIndexAttribute, 1);
        } else if (directedCount === undirectedCount) {
            var max = (directedCount - 1) / 2;
            var min = -max;
            for(var i = 0; i < directedCount; i++){
                var _edge2 = edges[i];
                var edgeIndex = -(directedCount - 1) / 2 + i;
                graph.setEdgeAttribute(_edge2, opts.edgeIndexAttribute, edgeIndex);
                graph.setEdgeAttribute(_edge2, opts.edgeMinIndexAttribute, min);
                graph.setEdgeAttribute(_edge2, opts.edgeMaxIndexAttribute, max);
            }
        } else for(var _i = 0; _i < directedCount; _i++){
            var _edge3 = edges[_i];
            graph.setEdgeAttribute(_edge3, opts.edgeIndexAttribute, _i + 1);
            graph.setEdgeAttribute(_edge3, opts.edgeMaxIndexAttribute, directedCount);
        }
    }
}
var _WebGLRenderingContex = WebGLRenderingContext, UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE, FLOAT = _WebGLRenderingContex.FLOAT;
function createEdgeCurveProgram(inputOptions) {
    var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CURVE_PROGRAM_OPTIONS), inputOptions || {});
    var _ref = options, arrowHead = _ref.arrowHead, curvatureAttribute = _ref.curvatureAttribute, drawLabel = _ref.drawLabel;
    var UNIFORMS = [
        "u_matrix",
        "u_sizeRatio",
        "u_dimensions",
        "u_pixelRatio",
        "u_feather",
        "u_minEdgeThickness"
    ].concat(_toConsumableArray(arrowHead ? [
        "u_lengthToThicknessRatio",
        "u_widenessToThicknessRatio"
    ] : []));
    return /*#__PURE__*/ function(_EdgeProgram) {
        _inherits(EdgeCurveProgram, _EdgeProgram);
        function EdgeCurveProgram() {
            var _this;
            _classCallCheck(this, EdgeCurveProgram);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _callSuper(this, EdgeCurveProgram, [].concat(args));
            _defineProperty(_assertThisInitialized(_this), "drawLabel", drawLabel || createDrawCurvedEdgeLabel(options));
            return _this;
        }
        _createClass(EdgeCurveProgram, [
            {
                key: "getDefinition",
                value: function getDefinition() {
                    return {
                        VERTICES: 6,
                        VERTEX_SHADER_SOURCE: getVertexShader(options),
                        FRAGMENT_SHADER_SOURCE: getFragmentShader(options),
                        METHOD: WebGLRenderingContext.TRIANGLES,
                        UNIFORMS: UNIFORMS,
                        ATTRIBUTES: [
                            {
                                name: "a_source",
                                size: 2,
                                type: FLOAT
                            },
                            {
                                name: "a_target",
                                size: 2,
                                type: FLOAT
                            }
                        ].concat(_toConsumableArray(arrowHead ? [
                            {
                                name: "a_targetSize",
                                size: 1,
                                type: FLOAT
                            }
                        ] : []), [
                            {
                                name: "a_thickness",
                                size: 1,
                                type: FLOAT
                            },
                            {
                                name: "a_curvature",
                                size: 1,
                                type: FLOAT
                            },
                            {
                                name: "a_color",
                                size: 4,
                                type: UNSIGNED_BYTE,
                                normalized: true
                            },
                            {
                                name: "a_id",
                                size: 4,
                                type: UNSIGNED_BYTE,
                                normalized: true
                            }
                        ]),
                        CONSTANT_ATTRIBUTES: [
                            {
                                name: "a_current",
                                size: 1,
                                type: FLOAT
                            },
                            // TODO: could optimize to bool
                            {
                                name: "a_direction",
                                size: 1,
                                type: FLOAT
                            } // TODO: could optimize to byte
                        ],
                        CONSTANT_DATA: [
                            [
                                0,
                                1
                            ],
                            [
                                0,
                                -1
                            ],
                            [
                                1,
                                1
                            ],
                            [
                                0,
                                -1
                            ],
                            [
                                1,
                                1
                            ],
                            [
                                1,
                                -1
                            ]
                        ]
                    };
                }
            },
            {
                key: "processVisibleItem",
                value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                    var _data;
                    var thickness = data.size || 1;
                    var x1 = sourceData.x;
                    var y1 = sourceData.y;
                    var x2 = targetData.x;
                    var y2 = targetData.y;
                    var color = (0, _utils.floatColor)(data.color);
                    var curvature = (_data = data[curvatureAttribute]) !== null && _data !== void 0 ? _data : DEFAULT_EDGE_CURVATURE;
                    var array = this.array;
                    // First point
                    array[startIndex++] = x1;
                    array[startIndex++] = y1;
                    array[startIndex++] = x2;
                    array[startIndex++] = y2;
                    if (arrowHead) array[startIndex++] = targetData.size;
                    array[startIndex++] = thickness;
                    array[startIndex++] = curvature;
                    array[startIndex++] = color;
                    array[startIndex++] = edgeIndex;
                }
            },
            {
                key: "setUniforms",
                value: function setUniforms(params, _ref2) {
                    var gl = _ref2.gl, uniformLocations = _ref2.uniformLocations;
                    var u_matrix = uniformLocations.u_matrix, u_pixelRatio = uniformLocations.u_pixelRatio, u_feather = uniformLocations.u_feather, u_sizeRatio = uniformLocations.u_sizeRatio, u_dimensions = uniformLocations.u_dimensions, u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
                    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                    gl.uniform1f(u_pixelRatio, params.pixelRatio);
                    gl.uniform1f(u_sizeRatio, params.sizeRatio);
                    gl.uniform1f(u_feather, params.antiAliasingFeather);
                    gl.uniform2f(u_dimensions, params.width * params.pixelRatio, params.height * params.pixelRatio);
                    gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
                    if (arrowHead) {
                        var u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio, u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
                        gl.uniform1f(u_lengthToThicknessRatio, arrowHead.lengthToThicknessRatio);
                        gl.uniform1f(u_widenessToThicknessRatio, arrowHead.widenessToThicknessRatio);
                    }
                }
            }
        ]);
        return EdgeCurveProgram;
    }((0, _rendering.EdgeProgram));
}
var EdgeCurveProgram = createEdgeCurveProgram();
var EdgeCurvedArrowProgram = createEdgeCurveProgram({
    arrowHead: (0, _rendering.DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS)
});

},{"sigma/rendering":"bpx0w","sigma/utils":"fTbbY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpx0w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractEdgeProgram", ()=>(0, _index766050CdEsmJs.i));
parcelHelpers.export(exports, "AbstractNodeProgram", ()=>(0, _index766050CdEsmJs.A));
parcelHelpers.export(exports, "AbstractProgram", ()=>(0, _index766050CdEsmJs.k));
parcelHelpers.export(exports, "DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS", ()=>(0, _index766050CdEsmJs.D));
parcelHelpers.export(exports, "DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS", ()=>(0, _index766050CdEsmJs.u));
parcelHelpers.export(exports, "EdgeArrowProgram", ()=>(0, _index766050CdEsmJs.E));
parcelHelpers.export(exports, "EdgeProgram", ()=>(0, _index766050CdEsmJs.g));
parcelHelpers.export(exports, "EdgeRectangleProgram", ()=>(0, _index766050CdEsmJs.e));
parcelHelpers.export(exports, "NodeCircleProgram", ()=>(0, _index766050CdEsmJs.N));
parcelHelpers.export(exports, "NodeProgram", ()=>(0, _index766050CdEsmJs.f));
parcelHelpers.export(exports, "Program", ()=>(0, _index766050CdEsmJs.P));
parcelHelpers.export(exports, "createEdgeArrowHeadProgram", ()=>(0, _index766050CdEsmJs.t));
parcelHelpers.export(exports, "createEdgeArrowProgram", ()=>(0, _index766050CdEsmJs.l));
parcelHelpers.export(exports, "createEdgeClampedProgram", ()=>(0, _index766050CdEsmJs.v));
parcelHelpers.export(exports, "createEdgeCompoundProgram", ()=>(0, _index766050CdEsmJs.j));
parcelHelpers.export(exports, "createNodeCompoundProgram", ()=>(0, _index766050CdEsmJs.h));
parcelHelpers.export(exports, "drawDiscNodeHover", ()=>(0, _index766050CdEsmJs.c));
parcelHelpers.export(exports, "drawDiscNodeLabel", ()=>(0, _index766050CdEsmJs.b));
parcelHelpers.export(exports, "drawStraightEdgeLabel", ()=>(0, _index766050CdEsmJs.d));
parcelHelpers.export(exports, "getAttributeItemsCount", ()=>(0, _index766050CdEsmJs.m));
parcelHelpers.export(exports, "getAttributesItemsCount", ()=>(0, _index766050CdEsmJs.n));
parcelHelpers.export(exports, "killProgram", ()=>(0, _index766050CdEsmJs.r));
parcelHelpers.export(exports, "loadFragmentShader", ()=>(0, _index766050CdEsmJs.p));
parcelHelpers.export(exports, "loadProgram", ()=>(0, _index766050CdEsmJs.q));
parcelHelpers.export(exports, "loadVertexShader", ()=>(0, _index766050CdEsmJs.o));
parcelHelpers.export(exports, "numberToGLSLFloat", ()=>(0, _index766050CdEsmJs.s));
parcelHelpers.export(exports, "EdgeLineProgram", ()=>EdgeLineProgram);
parcelHelpers.export(exports, "EdgeTriangleProgram", ()=>EdgeTriangleProgram);
parcelHelpers.export(exports, "NodePointProgram", ()=>NodePointProgram);
var _index766050CdEsmJs = require("../../dist/index-766050cd.esm.js");
var _inherits8Fbdedb5EsmJs = require("../../dist/inherits-8fbdedb5.esm.js");
var _colors2F6D17F0EsmJs = require("../../dist/colors-2f6d17f0.esm.js");
// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > v_border)\n    gl_FragColor = v_color;\n  else\n    gl_FragColor = transparent;\n\n  #else\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$5;
// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\n\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;\n\n  v_border = (0.5 / a_size) * u_sizeRatio;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$4;
var _WebGLRenderingContex$2 = WebGLRenderingContext, UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE, FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = [
    "u_sizeRatio",
    "u_pixelRatio",
    "u_matrix"
];
var NodePointProgram = /*#__PURE__*/ function(_NodeProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(NodePointProgram, _NodeProgram);
    function NodePointProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, NodePointProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, NodePointProgram, arguments);
    }
    (0, _inherits8Fbdedb5EsmJs.d)(NodePointProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 1,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
                    METHOD: WebGLRenderingContext.POINTS,
                    UNIFORMS: UNIFORMS$2,
                    ATTRIBUTES: [
                        {
                            name: "a_position",
                            size: 2,
                            type: FLOAT$2
                        },
                        {
                            name: "a_size",
                            size: 1,
                            type: FLOAT$2
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE$2,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE$2,
                            normalized: true
                        }
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(nodeIndex, startIndex, data) {
                var array = this.array;
                array[startIndex++] = data.x;
                array[startIndex++] = data.y;
                array[startIndex++] = data.size;
                array[startIndex++] = (0, _colors2F6D17F0EsmJs.f)(data.color);
                array[startIndex++] = nodeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(_ref, _ref2) {
                var sizeRatio = _ref.sizeRatio, pixelRatio = _ref.pixelRatio, matrix = _ref.matrix;
                var gl = _ref2.gl, uniformLocations = _ref2.uniformLocations;
                var u_sizeRatio = uniformLocations.u_sizeRatio, u_pixelRatio = uniformLocations.u_pixelRatio, u_matrix = uniformLocations.u_matrix;
                gl.uniform1f(u_pixelRatio, pixelRatio);
                gl.uniform1f(u_sizeRatio, sizeRatio);
                gl.uniformMatrix3fv(u_matrix, false, matrix);
            }
        }
    ]);
    return NodePointProgram;
}((0, _index766050CdEsmJs.f));
// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$3;
// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  // Scale from [[-1 1] [-1 1]] to the container:\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$2;
var _WebGLRenderingContex$1 = WebGLRenderingContext, UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE, FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = [
    "u_matrix"
];
var EdgeLineProgram = /*#__PURE__*/ function(_EdgeProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(EdgeLineProgram, _EdgeProgram);
    function EdgeLineProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeLineProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, EdgeLineProgram, arguments);
    }
    (0, _inherits8Fbdedb5EsmJs.d)(EdgeLineProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 2,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
                    METHOD: WebGLRenderingContext.LINES,
                    UNIFORMS: UNIFORMS$1,
                    ATTRIBUTES: [
                        {
                            name: "a_position",
                            size: 2,
                            type: FLOAT$1
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE$1,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE$1,
                            normalized: true
                        }
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                var array = this.array;
                var x1 = sourceData.x;
                var y1 = sourceData.y;
                var x2 = targetData.x;
                var y2 = targetData.y;
                var color = (0, _colors2F6D17F0EsmJs.f)(data.color);
                // First point
                array[startIndex++] = x1;
                array[startIndex++] = y1;
                array[startIndex++] = color;
                array[startIndex++] = edgeIndex;
                // Second point
                array[startIndex++] = x2;
                array[startIndex++] = y2;
                array[startIndex++] = color;
                array[startIndex++] = edgeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(params, _ref) {
                var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                var u_matrix = uniformLocations.u_matrix;
                gl.uniformMatrix3fv(u_matrix, false, params.matrix);
            }
        }
    ]);
    return EdgeLineProgram;
}((0, _index766050CdEsmJs.g));
// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$1;
// language=GLSL
var SHADER_SOURCE = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  // The only different here with edge.vert.glsl is that we need to handle null\n  // input normal vector. Apart from that, you can read edge.vert.glsl more info\n  // on how it works:\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n  if (normalLength <= 0.0) unitNormal = normal;\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;
var _WebGLRenderingContex = WebGLRenderingContext, UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE, FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = [
    "u_matrix",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_minEdgeThickness"
];
var EdgeTriangleProgram = /*#__PURE__*/ function(_EdgeProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(EdgeTriangleProgram, _EdgeProgram);
    function EdgeTriangleProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeTriangleProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, EdgeTriangleProgram, arguments);
    }
    (0, _inherits8Fbdedb5EsmJs.d)(EdgeTriangleProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 3,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
                    METHOD: WebGLRenderingContext.TRIANGLES,
                    UNIFORMS: UNIFORMS,
                    ATTRIBUTES: [
                        {
                            name: "a_positionStart",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_positionEnd",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_normal",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE,
                            normalized: true
                        }
                    ],
                    CONSTANT_ATTRIBUTES: [
                        // If 0, then position will be a_positionStart
                        // If 1, then position will be a_positionEnd
                        {
                            name: "a_positionCoef",
                            size: 1,
                            type: FLOAT
                        },
                        {
                            name: "a_normalCoef",
                            size: 1,
                            type: FLOAT
                        }
                    ],
                    CONSTANT_DATA: [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            -1
                        ],
                        [
                            1,
                            0
                        ]
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                var thickness = data.size || 1;
                var x1 = sourceData.x;
                var y1 = sourceData.y;
                var x2 = targetData.x;
                var y2 = targetData.y;
                var color = (0, _colors2F6D17F0EsmJs.f)(data.color);
                // Computing normals
                var dx = x2 - x1;
                var dy = y2 - y1;
                var len = dx * dx + dy * dy;
                var n1 = 0;
                var n2 = 0;
                if (len) {
                    len = 1 / Math.sqrt(len);
                    n1 = -dy * len * thickness;
                    n2 = dx * len * thickness;
                }
                var array = this.array;
                // First point
                array[startIndex++] = x1;
                array[startIndex++] = y1;
                array[startIndex++] = x2;
                array[startIndex++] = y2;
                array[startIndex++] = n1;
                array[startIndex++] = n2;
                array[startIndex++] = color;
                array[startIndex++] = edgeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(params, _ref) {
                var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                var u_matrix = uniformLocations.u_matrix, u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
                gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                gl.uniform1f(u_sizeRatio, params.sizeRatio);
                gl.uniform1f(u_correctionRatio, params.correctionRatio);
                gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
            }
        }
    ]);
    return EdgeTriangleProgram;
}((0, _index766050CdEsmJs.g));

},{"../../dist/index-766050cd.esm.js":"fZBXY","../../dist/inherits-8fbdedb5.esm.js":"4VwIq","../../dist/colors-2f6d17f0.esm.js":"jY79t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZBXY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>AbstractNodeProgram);
parcelHelpers.export(exports, "D", ()=>DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS);
parcelHelpers.export(exports, "E", ()=>EdgeArrowProgram$1);
parcelHelpers.export(exports, "N", ()=>NodeCircleProgram);
parcelHelpers.export(exports, "P", ()=>Program);
parcelHelpers.export(exports, "_", ()=>_defineProperty);
parcelHelpers.export(exports, "a", ()=>_objectSpread2);
parcelHelpers.export(exports, "b", ()=>drawDiscNodeLabel);
parcelHelpers.export(exports, "c", ()=>drawDiscNodeHover);
parcelHelpers.export(exports, "d", ()=>drawStraightEdgeLabel);
parcelHelpers.export(exports, "e", ()=>EdgeRectangleProgram);
parcelHelpers.export(exports, "f", ()=>NodeProgram);
parcelHelpers.export(exports, "g", ()=>EdgeProgram);
parcelHelpers.export(exports, "h", ()=>createNodeCompoundProgram);
parcelHelpers.export(exports, "i", ()=>AbstractEdgeProgram);
parcelHelpers.export(exports, "j", ()=>createEdgeCompoundProgram);
parcelHelpers.export(exports, "k", ()=>AbstractProgram);
parcelHelpers.export(exports, "l", ()=>createEdgeArrowProgram);
parcelHelpers.export(exports, "m", ()=>getAttributeItemsCount);
parcelHelpers.export(exports, "n", ()=>getAttributesItemsCount);
parcelHelpers.export(exports, "o", ()=>loadVertexShader);
parcelHelpers.export(exports, "p", ()=>loadFragmentShader);
parcelHelpers.export(exports, "q", ()=>loadProgram);
parcelHelpers.export(exports, "r", ()=>killProgram);
parcelHelpers.export(exports, "s", ()=>numberToGLSLFloat);
parcelHelpers.export(exports, "t", ()=>createEdgeArrowHeadProgram);
parcelHelpers.export(exports, "u", ()=>DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS);
parcelHelpers.export(exports, "v", ()=>createEdgeClampedProgram);
var _inherits8Fbdedb5EsmJs = require("./inherits-8fbdedb5.esm.js");
var _colors2F6D17F0EsmJs = require("./colors-2f6d17f0.esm.js");
function _defineProperty(obj, key, value) {
    key = (0, _inherits8Fbdedb5EsmJs.t)(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = (0, _inherits8Fbdedb5EsmJs.e)(object);
        if (object === null) break;
    }
    return object;
}
function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get.bind();
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return _get.apply(this, arguments);
}
function getAttributeItemsCount(attr) {
    return attr.normalized ? 1 : attr.size;
}
function getAttributesItemsCount(attrs) {
    var res = 0;
    attrs.forEach(function(attr) {
        return res += getAttributeItemsCount(attr);
    });
    return res;
}
function loadShader(type, gl, source) {
    var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    // Creating the shader
    var shader = gl.createShader(glType);
    if (shader === null) throw new Error("loadShader: error while creating the shader");
    // Loading source
    gl.shaderSource(shader, source);
    // Compiling the shader
    gl.compileShader(shader);
    // Retrieving compilation status
    var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    // Throwing if something went awry
    if (!successfullyCompiled) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
    }
    return shader;
}
function loadVertexShader(gl, source) {
    return loadShader("VERTEX", gl, source);
}
function loadFragmentShader(gl, source) {
    return loadShader("FRAGMENT", gl, source);
}
/**
 * Function used to load a program.
 */ function loadProgram(gl, shaders) {
    var program = gl.createProgram();
    if (program === null) throw new Error("loadProgram: error while creating the program.");
    var i, l;
    // Attaching the shaders
    for(i = 0, l = shaders.length; i < l; i++)gl.attachShader(program, shaders[i]);
    gl.linkProgram(program);
    // Checking status
    var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!successfullyLinked) {
        gl.deleteProgram(program);
        throw new Error("loadProgram: error while linking the program.");
    }
    return program;
}
function killProgram(_ref) {
    var gl = _ref.gl, buffer = _ref.buffer, program = _ref.program, vertexShader = _ref.vertexShader, fragmentShader = _ref.fragmentShader;
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteProgram(program);
    gl.deleteBuffer(buffer);
}
/**
 * Function use to print a float for inserting in a GLSL program.
 */ function numberToGLSLFloat(n) {
    return n % 1 === 0 ? n.toFixed(1) : n.toString();
}
var PICKING_PREFIX = "#define PICKING_MODE\n";
var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4);
var AbstractProgram = /*#__PURE__*/ (0, _inherits8Fbdedb5EsmJs.d)(// eslint-disable-next-line @typescript-eslint/no-empty-function
function AbstractProgram(_gl, _pickGl, _renderer) {
    (0, _inherits8Fbdedb5EsmJs.a)(this, AbstractProgram);
});
var Program = /*#__PURE__*/ function() {
    function Program(gl, pickingBuffer, renderer) {
        (0, _inherits8Fbdedb5EsmJs.a)(this, Program);
        // GLenum
        _defineProperty(this, "array", new Float32Array());
        _defineProperty(this, "constantArray", new Float32Array());
        _defineProperty(this, "capacity", 0);
        _defineProperty(this, "verticesCount", 0);
        // Reading and caching program definition
        var def = this.getDefinition();
        this.VERTICES = def.VERTICES;
        this.VERTEX_SHADER_SOURCE = def.VERTEX_SHADER_SOURCE;
        this.FRAGMENT_SHADER_SOURCE = def.FRAGMENT_SHADER_SOURCE;
        this.UNIFORMS = def.UNIFORMS;
        this.ATTRIBUTES = def.ATTRIBUTES;
        this.METHOD = def.METHOD;
        this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in def ? def.CONSTANT_ATTRIBUTES : [];
        this.CONSTANT_DATA = "CONSTANT_DATA" in def ? def.CONSTANT_DATA : [];
        this.isInstanced = "CONSTANT_ATTRIBUTES" in def;
        // Computing stride
        this.ATTRIBUTES_ITEMS_COUNT = getAttributesItemsCount(this.ATTRIBUTES);
        this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT;
        // Members
        this.renderer = renderer;
        this.normalProgram = this.getProgramInfo("normal", gl, def.VERTEX_SHADER_SOURCE, def.FRAGMENT_SHADER_SOURCE, null);
        this.pickProgram = pickingBuffer ? this.getProgramInfo("pick", gl, PICKING_PREFIX + def.VERTEX_SHADER_SOURCE, PICKING_PREFIX + def.FRAGMENT_SHADER_SOURCE, pickingBuffer) : null;
        // For instanced programs:
        if (this.isInstanced) {
            var constantAttributesItemsCount = getAttributesItemsCount(this.CONSTANT_ATTRIBUTES);
            if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
            this.constantArray = new Float32Array(this.CONSTANT_DATA.length * constantAttributesItemsCount);
            for(var i = 0; i < this.CONSTANT_DATA.length; i++){
                var vector = this.CONSTANT_DATA[i];
                if (vector.length !== constantAttributesItemsCount) throw new Error("Program: error while getting constant data (one vector has ".concat(vector.length, " items instead of ").concat(constantAttributesItemsCount, ")"));
                for(var j = 0; j < vector.length; j++)this.constantArray[i * constantAttributesItemsCount + j] = vector[j];
            }
            this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
        }
    }
    (0, _inherits8Fbdedb5EsmJs.d)(Program, [
        {
            key: "kill",
            value: function kill() {
                killProgram(this.normalProgram);
                if (this.pickProgram) {
                    killProgram(this.pickProgram);
                    this.pickProgram = null;
                }
            }
        },
        {
            key: "getProgramInfo",
            value: function getProgramInfo(name, gl, vertexShaderSource, fragmentShaderSource, frameBuffer) {
                var def = this.getDefinition();
                // WebGL buffers
                var buffer = gl.createBuffer();
                if (buffer === null) throw new Error("Program: error while creating the WebGL buffer.");
                // Shaders and program
                var vertexShader = loadVertexShader(gl, vertexShaderSource);
                var fragmentShader = loadFragmentShader(gl, fragmentShaderSource);
                var program = loadProgram(gl, [
                    vertexShader,
                    fragmentShader
                ]);
                // Initializing locations
                var uniformLocations = {};
                def.UNIFORMS.forEach(function(uniformName) {
                    var location = gl.getUniformLocation(program, uniformName);
                    if (location) uniformLocations[uniformName] = location;
                });
                var attributeLocations = {};
                def.ATTRIBUTES.forEach(function(attr) {
                    attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
                });
                // For instanced programs:
                var constantBuffer;
                if ("CONSTANT_ATTRIBUTES" in def) {
                    def.CONSTANT_ATTRIBUTES.forEach(function(attr) {
                        attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
                    });
                    constantBuffer = gl.createBuffer();
                    if (constantBuffer === null) throw new Error("Program: error while creating the WebGL constant buffer.");
                }
                return {
                    name: name,
                    program: program,
                    gl: gl,
                    frameBuffer: frameBuffer,
                    buffer: buffer,
                    constantBuffer: constantBuffer || {},
                    uniformLocations: uniformLocations,
                    attributeLocations: attributeLocations,
                    isPicking: name === "pick",
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader
                };
            }
        },
        {
            key: "bindProgram",
            value: function bindProgram(program) {
                var _this = this;
                var offset = 0;
                var gl = program.gl, buffer = program.buffer;
                if (!this.isInstanced) {
                    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                    offset = 0;
                    this.ATTRIBUTES.forEach(function(attr) {
                        return offset += _this.bindAttribute(attr, program, offset);
                    });
                    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
                } else {
                    // Handle constant data (things that remain unchanged for all items):
                    gl.bindBuffer(gl.ARRAY_BUFFER, program.constantBuffer);
                    offset = 0;
                    this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
                        return offset += _this.bindAttribute(attr, program, offset, false);
                    });
                    gl.bufferData(gl.ARRAY_BUFFER, this.constantArray, gl.STATIC_DRAW);
                    // Handle "instance specific" data (things that vary for each item):
                    gl.bindBuffer(gl.ARRAY_BUFFER, program.buffer);
                    offset = 0;
                    this.ATTRIBUTES.forEach(function(attr) {
                        return offset += _this.bindAttribute(attr, program, offset, true);
                    });
                    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
                }
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
            }
        },
        {
            key: "unbindProgram",
            value: function unbindProgram(program) {
                var _this2 = this;
                if (!this.isInstanced) this.ATTRIBUTES.forEach(function(attr) {
                    return _this2.unbindAttribute(attr, program);
                });
                else {
                    this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
                        return _this2.unbindAttribute(attr, program, false);
                    });
                    this.ATTRIBUTES.forEach(function(attr) {
                        return _this2.unbindAttribute(attr, program, true);
                    });
                }
            }
        },
        {
            key: "bindAttribute",
            value: function bindAttribute(attr, program, offset, setDivisor) {
                var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
                if (typeof sizeFactor !== "number") throw new Error('Program.bind: yet unsupported attribute type "'.concat(attr.type, '"'));
                var location = program.attributeLocations[attr.name];
                var gl = program.gl;
                if (location !== -1) {
                    gl.enableVertexAttribArray(location);
                    var stride = !this.isInstanced ? this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT : (setDivisor ? this.ATTRIBUTES_ITEMS_COUNT : getAttributesItemsCount(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT;
                    gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, stride, offset);
                    if (this.isInstanced && setDivisor) {
                        if (gl instanceof WebGL2RenderingContext) gl.vertexAttribDivisor(location, 1);
                        else {
                            var ext = gl.getExtension("ANGLE_instanced_arrays");
                            if (ext) ext.vertexAttribDivisorANGLE(location, 1);
                        }
                    }
                }
                return attr.size * sizeFactor;
            }
        },
        {
            key: "unbindAttribute",
            value: function unbindAttribute(attr, program, unsetDivisor) {
                var location = program.attributeLocations[attr.name];
                var gl = program.gl;
                if (location !== -1) {
                    gl.disableVertexAttribArray(location);
                    if (this.isInstanced && unsetDivisor) {
                        if (gl instanceof WebGL2RenderingContext) gl.vertexAttribDivisor(location, 0);
                        else {
                            var ext = gl.getExtension("ANGLE_instanced_arrays");
                            if (ext) ext.vertexAttribDivisorANGLE(location, 0);
                        }
                    }
                }
            }
        },
        {
            key: "reallocate",
            value: function reallocate(capacity) {
                // If desired capacity has not changed we do nothing
                // NOTE: it's possible here to implement more subtle reallocation schemes
                // when the number of rendered items increase or decrease
                if (capacity === this.capacity) return;
                this.capacity = capacity;
                this.verticesCount = this.VERTICES * capacity;
                this.array = new Float32Array(!this.isInstanced ? this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT : this.capacity * this.ATTRIBUTES_ITEMS_COUNT);
            }
        },
        {
            key: "hasNothingToRender",
            value: function hasNothingToRender() {
                return this.verticesCount === 0;
            }
        },
        {
            key: "renderProgram",
            value: function renderProgram(params, programInfo) {
                var gl = programInfo.gl, program = programInfo.program;
                // With the current fix for #1397, the alpha blending is enabled for the
                // picking layer:
                gl.enable(gl.BLEND);
                // Original code:
                // if (!isPicking) gl.enable(gl.BLEND);
                // else gl.disable(gl.BLEND);
                gl.useProgram(program);
                this.setUniforms(params, programInfo);
                this.drawWebGL(this.METHOD, programInfo);
            }
        },
        {
            key: "render",
            value: function render(params) {
                if (this.hasNothingToRender()) return;
                if (this.pickProgram) {
                    this.pickProgram.gl.viewport(0, 0, params.width * params.pixelRatio / params.downSizingRatio, params.height * params.pixelRatio / params.downSizingRatio);
                    this.bindProgram(this.pickProgram);
                    this.renderProgram(_objectSpread2(_objectSpread2({}, params), {}, {
                        pixelRatio: params.pixelRatio / params.downSizingRatio
                    }), this.pickProgram);
                    this.unbindProgram(this.pickProgram);
                }
                this.normalProgram.gl.viewport(0, 0, params.width * params.pixelRatio, params.height * params.pixelRatio);
                this.bindProgram(this.normalProgram);
                this.renderProgram(params, this.normalProgram);
                this.unbindProgram(this.normalProgram);
            }
        },
        {
            key: "drawWebGL",
            value: function drawWebGL(method, _ref) {
                var gl = _ref.gl, frameBuffer = _ref.frameBuffer;
                gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
                if (!this.isInstanced) gl.drawArrays(method, 0, this.verticesCount);
                else if (gl instanceof WebGL2RenderingContext) gl.drawArraysInstanced(method, 0, this.VERTICES, this.capacity);
                else {
                    var ext = gl.getExtension("ANGLE_instanced_arrays");
                    if (ext) ext.drawArraysInstancedANGLE(method, 0, this.VERTICES, this.capacity);
                }
            }
        }
    ]);
    return Program;
}();
var AbstractNodeProgram = /*#__PURE__*/ function(_AbstractProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(AbstractNodeProgram, _AbstractProgram);
    function AbstractNodeProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, AbstractNodeProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, AbstractNodeProgram, arguments);
    }
    return (0, _inherits8Fbdedb5EsmJs.d)(AbstractNodeProgram);
}(AbstractProgram);
var NodeProgram = /*#__PURE__*/ function(_ref) {
    (0, _inherits8Fbdedb5EsmJs._)(NodeProgram, _ref);
    function NodeProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, NodeProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, NodeProgram, arguments);
    }
    (0, _inherits8Fbdedb5EsmJs.d)(NodeProgram, [
        {
            key: "kill",
            value: function kill() {
                _get((0, _inherits8Fbdedb5EsmJs.e)(NodeProgram.prototype), "kill", this).call(this);
            }
        },
        {
            key: "process",
            value: function process(nodeIndex, offset, data) {
                var i = offset * this.STRIDE;
                // NOTE: dealing with hidden items automatically
                if (data.hidden) {
                    for(var l = i + this.STRIDE; i < l; i++)this.array[i] = 0;
                    return;
                }
                return this.processVisibleItem((0, _colors2F6D17F0EsmJs.i)(nodeIndex), i, data);
            }
        }
    ]);
    return NodeProgram;
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional node "draw label" function.
 * @param  {function} drawHover - An optional node "draw hover" function.
 * @return {function}
 */ function createNodeCompoundProgram(programClasses, drawLabel, drawHover) {
    return /*#__PURE__*/ function() {
        function NodeCompoundProgram(gl, pickingBuffer, renderer) {
            (0, _inherits8Fbdedb5EsmJs.a)(this, NodeCompoundProgram);
            _defineProperty(this, "drawLabel", drawLabel);
            _defineProperty(this, "drawHover", drawHover);
            this.programs = programClasses.map(function(Program) {
                return new Program(gl, pickingBuffer, renderer);
            });
        }
        (0, _inherits8Fbdedb5EsmJs.d)(NodeCompoundProgram, [
            {
                key: "reallocate",
                value: function reallocate(capacity) {
                    this.programs.forEach(function(program) {
                        return program.reallocate(capacity);
                    });
                }
            },
            {
                key: "process",
                value: function process(nodeIndex, offset, data) {
                    this.programs.forEach(function(program) {
                        return program.process(nodeIndex, offset, data);
                    });
                }
            },
            {
                key: "render",
                value: function render(params) {
                    this.programs.forEach(function(program) {
                        return program.render(params);
                    });
                }
            },
            {
                key: "kill",
                value: function kill() {
                    this.programs.forEach(function(program) {
                        return program.kill();
                    });
                }
            }
        ]);
        return NodeCompoundProgram;
    }();
}
var AbstractEdgeProgram = /*#__PURE__*/ function(_AbstractProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(AbstractEdgeProgram, _AbstractProgram);
    function AbstractEdgeProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, AbstractEdgeProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, AbstractEdgeProgram, arguments);
    }
    return (0, _inherits8Fbdedb5EsmJs.d)(AbstractEdgeProgram);
}(AbstractProgram);
var EdgeProgram = /*#__PURE__*/ function(_ref) {
    (0, _inherits8Fbdedb5EsmJs._)(EdgeProgram, _ref);
    function EdgeProgram() {
        var _this;
        (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeProgram);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, EdgeProgram, [].concat(args));
        _defineProperty((0, _inherits8Fbdedb5EsmJs.c)(_this), "drawLabel", undefined);
        return _this;
    }
    (0, _inherits8Fbdedb5EsmJs.d)(EdgeProgram, [
        {
            key: "kill",
            value: function kill() {
                _get((0, _inherits8Fbdedb5EsmJs.e)(EdgeProgram.prototype), "kill", this).call(this);
            }
        },
        {
            key: "process",
            value: function process(edgeIndex, offset, sourceData, targetData, data) {
                var i = offset * this.STRIDE;
                // NOTE: dealing with hidden items automatically
                if (data.hidden || sourceData.hidden || targetData.hidden) {
                    for(var l = i + this.STRIDE; i < l; i++)this.array[i] = 0;
                    return;
                }
                return this.processVisibleItem((0, _colors2F6D17F0EsmJs.i)(edgeIndex), i, sourceData, targetData, data);
            }
        }
    ]);
    return EdgeProgram;
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional edge "draw label" function.
 * @return {function}
 */ function createEdgeCompoundProgram(programClasses, drawLabel) {
    return /*#__PURE__*/ function() {
        function EdgeCompoundProgram(gl, pickingBuffer, renderer) {
            (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeCompoundProgram);
            _defineProperty(this, "drawLabel", drawLabel);
            this.programs = programClasses.map(function(Program) {
                return new Program(gl, pickingBuffer, renderer);
            });
        }
        (0, _inherits8Fbdedb5EsmJs.d)(EdgeCompoundProgram, [
            {
                key: "reallocate",
                value: function reallocate(capacity) {
                    this.programs.forEach(function(program) {
                        return program.reallocate(capacity);
                    });
                }
            },
            {
                key: "process",
                value: function process(edgeIndex, offset, sourceData, targetData, data) {
                    this.programs.forEach(function(program) {
                        return program.process(edgeIndex, offset, sourceData, targetData, data);
                    });
                }
            },
            {
                key: "render",
                value: function render(params) {
                    this.programs.forEach(function(program) {
                        return program.render(params);
                    });
                }
            },
            {
                key: "kill",
                value: function kill() {
                    this.programs.forEach(function(program) {
                        return program.kill();
                    });
                }
            }
        ]);
        return EdgeCompoundProgram;
    }();
}
function drawStraightEdgeLabel(context, edgeData, sourceData, targetData, settings) {
    var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
    var label = edgeData.label;
    if (!label) return;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    // Computing positions without considering nodes sizes:
    var sSize = sourceData.size;
    var tSize = targetData.size;
    var sx = sourceData.x;
    var sy = sourceData.y;
    var tx = targetData.x;
    var ty = targetData.y;
    var cx = (sx + tx) / 2;
    var cy = (sy + ty) / 2;
    var dx = tx - sx;
    var dy = ty - sy;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d < sSize + tSize) return;
    // Adding nodes sizes:
    sx += dx * sSize / d;
    sy += dy * sSize / d;
    tx -= dx * tSize / d;
    ty -= dy * tSize / d;
    cx = (sx + tx) / 2;
    cy = (sy + ty) / 2;
    dx = tx - sx;
    dy = ty - sy;
    d = Math.sqrt(dx * dx + dy * dy);
    // Handling ellipsis
    var textLength = context.measureText(label).width;
    if (textLength > d) {
        var ellipsis = "\u2026";
        label = label + ellipsis;
        textLength = context.measureText(label).width;
        while(textLength > d && label.length > 1){
            label = label.slice(0, -2) + ellipsis;
            textLength = context.measureText(label).width;
        }
        if (label.length < 4) return;
    }
    var angle;
    if (dx > 0) {
        if (dy > 0) angle = Math.acos(dx / d);
        else angle = Math.asin(dy / d);
    } else if (dy > 0) angle = Math.acos(dx / d) + Math.PI;
    else angle = Math.asin(dx / d) + Math.PI / 2;
    context.save();
    context.translate(cx, cy);
    context.rotate(angle);
    context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
    context.restore();
}
function drawDiscNodeLabel(context, data, settings) {
    if (!data.label) return;
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight, color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
/**
 * Draw an hovered node.
 * - if there is no label => display a shadow on the node
 * - if the label box is bigger than node size => display a label box that contains the node with a shadow
 * - else node with shadow and the label box
 */ function drawDiscNodeHover(context, data, settings) {
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    // Then we draw the label background
    context.fillStyle = "#FFF";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = "#000";
    var PADDING = 2;
    if (typeof data.label === "string") {
        var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
        var angleRadian = Math.asin(boxHeight / 2 / radius);
        var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
        context.beginPath();
        context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
        context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
        context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
        context.closePath();
        context.fill();
    } else {
        context.beginPath();
        context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;
    // And finally we draw the label
    drawDiscNodeLabel(context, data, settings);
}
// language=GLSL
var SHADER_SOURCE$6 = /*glsl*/ "\nprecision highp float;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\n\nuniform float u_correctionRatio;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float border = u_correctionRatio * 2.0;\n  float dist = length(v_diffVector) - v_radius + border;\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > border)\n    gl_FragColor = transparent;\n  else\n    gl_FragColor = v_color;\n\n  #else\n  float t = 0.0;\n  if (dist > border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / border;\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;
// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\nattribute float a_angle;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;\n  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));\n  vec2 position = a_position + diffVector;\n  gl_Position = vec4(\n    (u_matrix * vec3(position, 1)).xy,\n    0,\n    1\n  );\n\n  v_diffVector = diffVector;\n  v_radius = size / 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;
var _WebGLRenderingContex$3 = WebGLRenderingContext, UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE, FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = [
    "u_sizeRatio",
    "u_correctionRatio",
    "u_matrix"
];
var NodeCircleProgram = /*#__PURE__*/ function(_NodeProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(NodeCircleProgram, _NodeProgram);
    function NodeCircleProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, NodeCircleProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, NodeCircleProgram, arguments);
    }
    (0, _inherits8Fbdedb5EsmJs.d)(NodeCircleProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 3,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
                    METHOD: WebGLRenderingContext.TRIANGLES,
                    UNIFORMS: UNIFORMS$3,
                    ATTRIBUTES: [
                        {
                            name: "a_position",
                            size: 2,
                            type: FLOAT$3
                        },
                        {
                            name: "a_size",
                            size: 1,
                            type: FLOAT$3
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE$3,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE$3,
                            normalized: true
                        }
                    ],
                    CONSTANT_ATTRIBUTES: [
                        {
                            name: "a_angle",
                            size: 1,
                            type: FLOAT$3
                        }
                    ],
                    CONSTANT_DATA: [
                        [
                            NodeCircleProgram.ANGLE_1
                        ],
                        [
                            NodeCircleProgram.ANGLE_2
                        ],
                        [
                            NodeCircleProgram.ANGLE_3
                        ]
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(nodeIndex, startIndex, data) {
                var array = this.array;
                var color = (0, _colors2F6D17F0EsmJs.f)(data.color);
                array[startIndex++] = data.x;
                array[startIndex++] = data.y;
                array[startIndex++] = data.size;
                array[startIndex++] = color;
                array[startIndex++] = nodeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(params, _ref) {
                var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                var u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_matrix = uniformLocations.u_matrix;
                gl.uniform1f(u_correctionRatio, params.correctionRatio);
                gl.uniform1f(u_sizeRatio, params.sizeRatio);
                gl.uniformMatrix3fv(u_matrix, false, params.matrix);
            }
        }
    ]);
    return NodeCircleProgram;
}(NodeProgram);
_defineProperty(NodeCircleProgram, "ANGLE_1", 0);
_defineProperty(NodeCircleProgram, "ANGLE_2", 2 * Math.PI / 3);
_defineProperty(NodeCircleProgram, "ANGLE_3", 4 * Math.PI / 3);
// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$4;
// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/ "\nattribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec3 a_barycentric;\n\n#ifdef PICKING_MODE\nattribute vec4 a_id;\n#else\nattribute vec4 a_color;\n#endif\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$3;
var _WebGLRenderingContex$2 = WebGLRenderingContext, UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE, FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = [
    "u_matrix",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_minEdgeThickness",
    "u_lengthToThicknessRatio",
    "u_widenessToThicknessRatio"
];
var DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = {
    lengthToThicknessRatio: 2.5,
    widenessToThicknessRatio: 2
};
function createEdgeArrowHeadProgram(inputOptions) {
    var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS), inputOptions || {});
    return /*#__PURE__*/ function(_EdgeProgram) {
        (0, _inherits8Fbdedb5EsmJs._)(EdgeArrowHeadProgram, _EdgeProgram);
        function EdgeArrowHeadProgram() {
            (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeArrowHeadProgram);
            return (0, _inherits8Fbdedb5EsmJs.b)(this, EdgeArrowHeadProgram, arguments);
        }
        (0, _inherits8Fbdedb5EsmJs.d)(EdgeArrowHeadProgram, [
            {
                key: "getDefinition",
                value: function getDefinition() {
                    return {
                        VERTICES: 3,
                        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
                        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
                        METHOD: WebGLRenderingContext.TRIANGLES,
                        UNIFORMS: UNIFORMS$2,
                        ATTRIBUTES: [
                            {
                                name: "a_position",
                                size: 2,
                                type: FLOAT$2
                            },
                            {
                                name: "a_normal",
                                size: 2,
                                type: FLOAT$2
                            },
                            {
                                name: "a_radius",
                                size: 1,
                                type: FLOAT$2
                            },
                            {
                                name: "a_color",
                                size: 4,
                                type: UNSIGNED_BYTE$2,
                                normalized: true
                            },
                            {
                                name: "a_id",
                                size: 4,
                                type: UNSIGNED_BYTE$2,
                                normalized: true
                            }
                        ],
                        CONSTANT_ATTRIBUTES: [
                            {
                                name: "a_barycentric",
                                size: 3,
                                type: FLOAT$2
                            }
                        ],
                        CONSTANT_DATA: [
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    };
                }
            },
            {
                key: "processVisibleItem",
                value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                    var thickness = data.size || 1;
                    var radius = targetData.size || 1;
                    var x1 = sourceData.x;
                    var y1 = sourceData.y;
                    var x2 = targetData.x;
                    var y2 = targetData.y;
                    var color = (0, _colors2F6D17F0EsmJs.f)(data.color);
                    // Computing normals
                    var dx = x2 - x1;
                    var dy = y2 - y1;
                    var len = dx * dx + dy * dy;
                    var n1 = 0;
                    var n2 = 0;
                    if (len) {
                        len = 1 / Math.sqrt(len);
                        n1 = -dy * len * thickness;
                        n2 = dx * len * thickness;
                    }
                    var array = this.array;
                    array[startIndex++] = x2;
                    array[startIndex++] = y2;
                    array[startIndex++] = -n1;
                    array[startIndex++] = -n2;
                    array[startIndex++] = radius;
                    array[startIndex++] = color;
                    array[startIndex++] = edgeIndex;
                }
            },
            {
                key: "setUniforms",
                value: function setUniforms(params, _ref) {
                    var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                    var u_matrix = uniformLocations.u_matrix, u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness, u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio, u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
                    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                    gl.uniform1f(u_sizeRatio, params.sizeRatio);
                    gl.uniform1f(u_correctionRatio, params.correctionRatio);
                    gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
                    gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
                    gl.uniform1f(u_widenessToThicknessRatio, options.widenessToThicknessRatio);
                }
            }
        ]);
        return EdgeArrowHeadProgram;
    }(EdgeProgram);
}
createEdgeArrowHeadProgram();
// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  // We only handle antialiasing for normal mode:\n  #ifdef PICKING_MODE\n  gl_FragColor = v_color;\n  #else\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - v_feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$2;
// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_radius;\nattribute float a_radiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float radius = a_radius * a_radiusCoef;\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(radius);\n  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$1;
var _WebGLRenderingContex$1 = WebGLRenderingContext, UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE, FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = [
    "u_matrix",
    "u_zoomRatio",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_pixelRatio",
    "u_feather",
    "u_minEdgeThickness",
    "u_lengthToThicknessRatio"
];
var DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = {
    lengthToThicknessRatio: DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeClampedProgram(inputOptions) {
    var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
    return /*#__PURE__*/ function(_EdgeProgram) {
        (0, _inherits8Fbdedb5EsmJs._)(EdgeClampedProgram, _EdgeProgram);
        function EdgeClampedProgram() {
            (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeClampedProgram);
            return (0, _inherits8Fbdedb5EsmJs.b)(this, EdgeClampedProgram, arguments);
        }
        (0, _inherits8Fbdedb5EsmJs.d)(EdgeClampedProgram, [
            {
                key: "getDefinition",
                value: function getDefinition() {
                    return {
                        VERTICES: 6,
                        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
                        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
                        METHOD: WebGLRenderingContext.TRIANGLES,
                        UNIFORMS: UNIFORMS$1,
                        ATTRIBUTES: [
                            {
                                name: "a_positionStart",
                                size: 2,
                                type: FLOAT$1
                            },
                            {
                                name: "a_positionEnd",
                                size: 2,
                                type: FLOAT$1
                            },
                            {
                                name: "a_normal",
                                size: 2,
                                type: FLOAT$1
                            },
                            {
                                name: "a_color",
                                size: 4,
                                type: UNSIGNED_BYTE$1,
                                normalized: true
                            },
                            {
                                name: "a_id",
                                size: 4,
                                type: UNSIGNED_BYTE$1,
                                normalized: true
                            },
                            {
                                name: "a_radius",
                                size: 1,
                                type: FLOAT$1
                            }
                        ],
                        CONSTANT_ATTRIBUTES: [
                            // If 0, then position will be a_positionStart
                            // If 1, then position will be a_positionEnd
                            {
                                name: "a_positionCoef",
                                size: 1,
                                type: FLOAT$1
                            },
                            {
                                name: "a_normalCoef",
                                size: 1,
                                type: FLOAT$1
                            },
                            {
                                name: "a_radiusCoef",
                                size: 1,
                                type: FLOAT$1
                            }
                        ],
                        CONSTANT_DATA: [
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                -1,
                                0
                            ],
                            [
                                1,
                                1,
                                1
                            ],
                            [
                                1,
                                1,
                                1
                            ],
                            [
                                0,
                                -1,
                                0
                            ],
                            [
                                1,
                                -1,
                                -1
                            ]
                        ]
                    };
                }
            },
            {
                key: "processVisibleItem",
                value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                    var thickness = data.size || 1;
                    var x1 = sourceData.x;
                    var y1 = sourceData.y;
                    var x2 = targetData.x;
                    var y2 = targetData.y;
                    var color = (0, _colors2F6D17F0EsmJs.f)(data.color);
                    // Computing normals
                    var dx = x2 - x1;
                    var dy = y2 - y1;
                    var radius = targetData.size || 1;
                    var len = dx * dx + dy * dy;
                    var n1 = 0;
                    var n2 = 0;
                    if (len) {
                        len = 1 / Math.sqrt(len);
                        n1 = -dy * len * thickness;
                        n2 = dx * len * thickness;
                    }
                    var array = this.array;
                    array[startIndex++] = x1;
                    array[startIndex++] = y1;
                    array[startIndex++] = x2;
                    array[startIndex++] = y2;
                    array[startIndex++] = n1;
                    array[startIndex++] = n2;
                    array[startIndex++] = color;
                    array[startIndex++] = edgeIndex;
                    array[startIndex++] = radius;
                }
            },
            {
                key: "setUniforms",
                value: function setUniforms(params, _ref) {
                    var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                    var u_matrix = uniformLocations.u_matrix, u_zoomRatio = uniformLocations.u_zoomRatio, u_feather = uniformLocations.u_feather, u_pixelRatio = uniformLocations.u_pixelRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_sizeRatio = uniformLocations.u_sizeRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness, u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
                    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                    gl.uniform1f(u_zoomRatio, params.zoomRatio);
                    gl.uniform1f(u_sizeRatio, params.sizeRatio);
                    gl.uniform1f(u_correctionRatio, params.correctionRatio);
                    gl.uniform1f(u_pixelRatio, params.pixelRatio);
                    gl.uniform1f(u_feather, params.antiAliasingFeather);
                    gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
                    gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
                }
            }
        ]);
        return EdgeClampedProgram;
    }(EdgeProgram);
}
createEdgeClampedProgram();
function createEdgeArrowProgram(inputOptions) {
    return createEdgeCompoundProgram([
        createEdgeClampedProgram(inputOptions),
        createEdgeArrowHeadProgram(inputOptions)
    ]);
}
var EdgeArrowProgram = createEdgeArrowProgram();
var EdgeArrowProgram$1 = EdgeArrowProgram;
// language=GLSL
var SHADER_SOURCE = /*glsl*/ '\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // We require edges to be at least "minThickness" pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n';
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;
var _WebGLRenderingContex = WebGLRenderingContext, UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE, FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = [
    "u_matrix",
    "u_zoomRatio",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_pixelRatio",
    "u_feather",
    "u_minEdgeThickness"
];
var EdgeRectangleProgram = /*#__PURE__*/ function(_EdgeProgram) {
    (0, _inherits8Fbdedb5EsmJs._)(EdgeRectangleProgram, _EdgeProgram);
    function EdgeRectangleProgram() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, EdgeRectangleProgram);
        return (0, _inherits8Fbdedb5EsmJs.b)(this, EdgeRectangleProgram, arguments);
    }
    (0, _inherits8Fbdedb5EsmJs.d)(EdgeRectangleProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 6,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
                    METHOD: WebGLRenderingContext.TRIANGLES,
                    UNIFORMS: UNIFORMS,
                    ATTRIBUTES: [
                        {
                            name: "a_positionStart",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_positionEnd",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_normal",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE,
                            normalized: true
                        }
                    ],
                    CONSTANT_ATTRIBUTES: [
                        // If 0, then position will be a_positionStart
                        // If 2, then position will be a_positionEnd
                        {
                            name: "a_positionCoef",
                            size: 1,
                            type: FLOAT
                        },
                        {
                            name: "a_normalCoef",
                            size: 1,
                            type: FLOAT
                        }
                    ],
                    CONSTANT_DATA: [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            -1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            0,
                            -1
                        ],
                        [
                            1,
                            -1
                        ]
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                var thickness = data.size || 1;
                var x1 = sourceData.x;
                var y1 = sourceData.y;
                var x2 = targetData.x;
                var y2 = targetData.y;
                var color = (0, _colors2F6D17F0EsmJs.f)(data.color);
                // Computing normals
                var dx = x2 - x1;
                var dy = y2 - y1;
                var len = dx * dx + dy * dy;
                var n1 = 0;
                var n2 = 0;
                if (len) {
                    len = 1 / Math.sqrt(len);
                    n1 = -dy * len * thickness;
                    n2 = dx * len * thickness;
                }
                var array = this.array;
                array[startIndex++] = x1;
                array[startIndex++] = y1;
                array[startIndex++] = x2;
                array[startIndex++] = y2;
                array[startIndex++] = n1;
                array[startIndex++] = n2;
                array[startIndex++] = color;
                array[startIndex++] = edgeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(params, _ref) {
                var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                var u_matrix = uniformLocations.u_matrix, u_zoomRatio = uniformLocations.u_zoomRatio, u_feather = uniformLocations.u_feather, u_pixelRatio = uniformLocations.u_pixelRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_sizeRatio = uniformLocations.u_sizeRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
                gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                gl.uniform1f(u_zoomRatio, params.zoomRatio);
                gl.uniform1f(u_sizeRatio, params.sizeRatio);
                gl.uniform1f(u_correctionRatio, params.correctionRatio);
                gl.uniform1f(u_pixelRatio, params.pixelRatio);
                gl.uniform1f(u_feather, params.antiAliasingFeather);
                gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
            }
        }
    ]);
    return EdgeRectangleProgram;
}(EdgeProgram);

},{"./inherits-8fbdedb5.esm.js":"4VwIq","./colors-2f6d17f0.esm.js":"jY79t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VwIq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>_inherits);
parcelHelpers.export(exports, "a", ()=>_classCallCheck);
parcelHelpers.export(exports, "b", ()=>_callSuper);
parcelHelpers.export(exports, "c", ()=>_assertThisInitialized);
parcelHelpers.export(exports, "d", ()=>_createClass);
parcelHelpers.export(exports, "e", ()=>_getPrototypeOf);
parcelHelpers.export(exports, "t", ()=>toPropertyKey);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function() {
        return !!t;
    })();
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jY79t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "H", ()=>HTML_COLORS);
parcelHelpers.export(exports, "_", ()=>_slicedToArray);
parcelHelpers.export(exports, "a", ()=>_arrayLikeToArray);
parcelHelpers.export(exports, "b", ()=>_unsupportedIterableToArray);
parcelHelpers.export(exports, "c", ()=>colorToIndex);
parcelHelpers.export(exports, "d", ()=>colorToArray);
parcelHelpers.export(exports, "e", ()=>extractPixel);
parcelHelpers.export(exports, "f", ()=>floatColor);
parcelHelpers.export(exports, "g", ()=>getPixelColor);
parcelHelpers.export(exports, "i", ()=>indexToColor);
parcelHelpers.export(exports, "p", ()=>parseColor);
parcelHelpers.export(exports, "r", ()=>rgbaToFloat);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var HTML_COLORS = {
    black: "#000000",
    silver: "#C0C0C0",
    gray: "#808080",
    grey: "#808080",
    white: "#FFFFFF",
    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
    yellow: "#FFFF00",
    navy: "#000080",
    blue: "#0000FF",
    teal: "#008080",
    aqua: "#00FFFF",
    darkblue: "#00008B",
    mediumblue: "#0000CD",
    darkgreen: "#006400",
    darkcyan: "#008B8B",
    deepskyblue: "#00BFFF",
    darkturquoise: "#00CED1",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    cyan: "#00FFFF",
    midnightblue: "#191970",
    dodgerblue: "#1E90FF",
    lightseagreen: "#20B2AA",
    forestgreen: "#228B22",
    seagreen: "#2E8B57",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    limegreen: "#32CD32",
    mediumseagreen: "#3CB371",
    turquoise: "#40E0D0",
    royalblue: "#4169E1",
    steelblue: "#4682B4",
    darkslateblue: "#483D8B",
    mediumturquoise: "#48D1CC",
    indigo: "#4B0082",
    darkolivegreen: "#556B2F",
    cadetblue: "#5F9EA0",
    cornflowerblue: "#6495ED",
    rebeccapurple: "#663399",
    mediumaquamarine: "#66CDAA",
    dimgray: "#696969",
    dimgrey: "#696969",
    slateblue: "#6A5ACD",
    olivedrab: "#6B8E23",
    slategray: "#708090",
    slategrey: "#708090",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    mediumslateblue: "#7B68EE",
    lawngreen: "#7CFC00",
    chartreuse: "#7FFF00",
    aquamarine: "#7FFFD4",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    blueviolet: "#8A2BE2",
    darkred: "#8B0000",
    darkmagenta: "#8B008B",
    saddlebrown: "#8B4513",
    darkseagreen: "#8FBC8F",
    lightgreen: "#90EE90",
    mediumpurple: "#9370DB",
    darkviolet: "#9400D3",
    palegreen: "#98FB98",
    darkorchid: "#9932CC",
    yellowgreen: "#9ACD32",
    sienna: "#A0522D",
    brown: "#A52A2A",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    lightblue: "#ADD8E6",
    greenyellow: "#ADFF2F",
    paleturquoise: "#AFEEEE",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    firebrick: "#B22222",
    darkgoldenrod: "#B8860B",
    mediumorchid: "#BA55D3",
    rosybrown: "#BC8F8F",
    darkkhaki: "#BDB76B",
    mediumvioletred: "#C71585",
    indianred: "#CD5C5C",
    peru: "#CD853F",
    chocolate: "#D2691E",
    tan: "#D2B48C",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    thistle: "#D8BFD8",
    orchid: "#DA70D6",
    goldenrod: "#DAA520",
    palevioletred: "#DB7093",
    crimson: "#DC143C",
    gainsboro: "#DCDCDC",
    plum: "#DDA0DD",
    burlywood: "#DEB887",
    lightcyan: "#E0FFFF",
    lavender: "#E6E6FA",
    darksalmon: "#E9967A",
    violet: "#EE82EE",
    palegoldenrod: "#EEE8AA",
    lightcoral: "#F08080",
    khaki: "#F0E68C",
    aliceblue: "#F0F8FF",
    honeydew: "#F0FFF0",
    azure: "#F0FFFF",
    sandybrown: "#F4A460",
    wheat: "#F5DEB3",
    beige: "#F5F5DC",
    whitesmoke: "#F5F5F5",
    mintcream: "#F5FFFA",
    ghostwhite: "#F8F8FF",
    salmon: "#FA8072",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lightgoldenrodyellow: "#FAFAD2",
    oldlace: "#FDF5E6",
    magenta: "#FF00FF",
    deeppink: "#FF1493",
    orangered: "#FF4500",
    tomato: "#FF6347",
    hotpink: "#FF69B4",
    coral: "#FF7F50",
    darkorange: "#FF8C00",
    lightsalmon: "#FFA07A",
    orange: "#FFA500",
    lightpink: "#FFB6C1",
    pink: "#FFC0CB",
    gold: "#FFD700",
    peachpuff: "#FFDAB9",
    navajowhite: "#FFDEAD",
    moccasin: "#FFE4B5",
    bisque: "#FFE4C4",
    mistyrose: "#FFE4E1",
    blanchedalmond: "#FFEBCD",
    papayawhip: "#FFEFD5",
    lavenderblush: "#FFF0F5",
    seashell: "#FFF5EE",
    cornsilk: "#FFF8DC",
    lemonchiffon: "#FFFACD",
    floralwhite: "#FFFAF0",
    snow: "#FFFAFA",
    lightyellow: "#FFFFE0",
    ivory: "#FFFFF0"
};
/**
 * Function extracting the color at the given pixel.
 */ function extractPixel(gl, x, y, array) {
    var data = array || new Uint8Array(4);
    gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return data;
}
/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */ var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function parseColor(val) {
    var r = 0; // byte
    var g = 0; // byte
    var b = 0; // byte
    var a = 1; // float
    // Handling hexadecimal notation
    if (val[0] === "#") {
        if (val.length === 4) {
            r = parseInt(val.charAt(1) + val.charAt(1), 16);
            g = parseInt(val.charAt(2) + val.charAt(2), 16);
            b = parseInt(val.charAt(3) + val.charAt(3), 16);
        } else {
            r = parseInt(val.charAt(1) + val.charAt(2), 16);
            g = parseInt(val.charAt(3) + val.charAt(4), 16);
            b = parseInt(val.charAt(5) + val.charAt(6), 16);
        }
        if (val.length === 9) a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
    } else if (RGBA_TEST_REGEX.test(val)) {
        var match = val.match(RGBA_EXTRACT_REGEX);
        if (match) {
            r = +match[1];
            g = +match[2];
            b = +match[3];
            if (match[4]) a = +match[4];
        }
    }
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
var FLOAT_COLOR_CACHE = {};
for(var htmlColor in HTML_COLORS){
    FLOAT_COLOR_CACHE[htmlColor] = floatColor(HTML_COLORS[htmlColor]);
    // Replicating cache for hex values for free
    FLOAT_COLOR_CACHE[HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
function rgbaToFloat(r, g, b, a, masking) {
    INT32[0] = a << 24 | b << 16 | g << 8 | r;
    if (masking) INT32[0] = INT32[0] & 0xfeffffff;
    return FLOAT32[0];
}
function floatColor(val) {
    // The html color names are case-insensitive
    val = val.toLowerCase();
    // If the color is already computed, we yield it
    if (typeof FLOAT_COLOR_CACHE[val] !== "undefined") return FLOAT_COLOR_CACHE[val];
    var parsed = parseColor(val);
    var r = parsed.r, g = parsed.g, b = parsed.b;
    var a = parsed.a;
    a = a * 255 | 0;
    var color = rgbaToFloat(r, g, b, a, true);
    FLOAT_COLOR_CACHE[val] = color;
    return color;
}
function colorToArray(val, masking) {
    FLOAT32[0] = floatColor(val);
    var intValue = INT32[0];
    if (masking) intValue = intValue | 0x01000000;
    var r = intValue & 0xff;
    var g = intValue >> 8 & 0xff;
    var b = intValue >> 16 & 0xff;
    var a = intValue >> 24 & 0xff;
    return [
        r,
        g,
        b,
        a
    ];
}
var FLOAT_INDEX_CACHE = {};
function indexToColor(index) {
    // If the index is already computed, we yield it
    if (typeof FLOAT_INDEX_CACHE[index] !== "undefined") return FLOAT_INDEX_CACHE[index];
    // To address issue #1397, one strategy is to keep encoding 4 bytes colors,
    // but with alpha hard-set to 1.0 (or 255):
    var r = (index & 0x00ff0000) >>> 16;
    var g = (index & 0x0000ff00) >>> 8;
    var b = index & 0x000000ff;
    var a = 0x000000ff;
    // The original 4 bytes color encoding was the following:
    // const r = (index & 0xff000000) >>> 24;
    // const g = (index & 0x00ff0000) >>> 16;
    // const b = (index & 0x0000ff00) >>> 8;
    // const a = index & 0x000000ff;
    var color = rgbaToFloat(r, g, b, a, true);
    FLOAT_INDEX_CACHE[index] = color;
    return color;
}
function colorToIndex(r, g, b, _a) {
    // As for the function indexToColor, because of #1397 and the "alpha is always
    // 1.0" strategy, we need to fix this function as well:
    return b + (g << 8) + (r << 16);
// The original 4 bytes color decoding is the following:
// return a + (b << 8) + (g << 16) + (r << 24);
}
function getPixelColor(gl, frameBuffer, x, y, pixelRatio, downSizingRatio) {
    var bufferX = Math.floor(x / downSizingRatio * pixelRatio);
    var bufferY = Math.floor(gl.drawingBufferHeight / downSizingRatio - y / downSizingRatio * pixelRatio);
    var pixel = new Uint8Array(4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.readPixels(bufferX, bufferY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
    var _pixel = _slicedToArray(pixel, 4), r = _pixel[0], g = _pixel[1], b = _pixel[2], a = _pixel[3];
    return [
        r,
        g,
        b,
        a
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTbbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANIMATE_DEFAULTS", ()=>(0, _normalization6Ad2Dc39EsmJs.A));
parcelHelpers.export(exports, "animateNodes", ()=>(0, _normalization6Ad2Dc39EsmJs.h));
parcelHelpers.export(exports, "createElement", ()=>(0, _normalization6Ad2Dc39EsmJs.d));
parcelHelpers.export(exports, "createNormalizationFunction", ()=>(0, _normalization6Ad2Dc39EsmJs.c));
parcelHelpers.export(exports, "cubicIn", ()=>(0, _normalization6Ad2Dc39EsmJs.o));
parcelHelpers.export(exports, "cubicInOut", ()=>(0, _normalization6Ad2Dc39EsmJs.r));
parcelHelpers.export(exports, "cubicOut", ()=>(0, _normalization6Ad2Dc39EsmJs.p));
parcelHelpers.export(exports, "easings", ()=>(0, _normalization6Ad2Dc39EsmJs.e));
parcelHelpers.export(exports, "getCorrectionRatio", ()=>(0, _normalization6Ad2Dc39EsmJs.j));
parcelHelpers.export(exports, "getMatrixImpact", ()=>(0, _normalization6Ad2Dc39EsmJs.b));
parcelHelpers.export(exports, "getPixelRatio", ()=>(0, _normalization6Ad2Dc39EsmJs.g));
parcelHelpers.export(exports, "graphExtent", ()=>(0, _normalization6Ad2Dc39EsmJs.a));
parcelHelpers.export(exports, "identity", ()=>(0, _normalization6Ad2Dc39EsmJs.i));
parcelHelpers.export(exports, "linear", ()=>(0, _normalization6Ad2Dc39EsmJs.l));
parcelHelpers.export(exports, "matrixFromCamera", ()=>(0, _normalization6Ad2Dc39EsmJs.m));
parcelHelpers.export(exports, "multiply", ()=>(0, _normalization6Ad2Dc39EsmJs.w));
parcelHelpers.export(exports, "multiplyVec2", ()=>(0, _normalization6Ad2Dc39EsmJs.f));
parcelHelpers.export(exports, "quadraticIn", ()=>(0, _normalization6Ad2Dc39EsmJs.q));
parcelHelpers.export(exports, "quadraticInOut", ()=>(0, _normalization6Ad2Dc39EsmJs.n));
parcelHelpers.export(exports, "quadraticOut", ()=>(0, _normalization6Ad2Dc39EsmJs.k));
parcelHelpers.export(exports, "rotate", ()=>(0, _normalization6Ad2Dc39EsmJs.t));
parcelHelpers.export(exports, "scale", ()=>(0, _normalization6Ad2Dc39EsmJs.s));
parcelHelpers.export(exports, "translate", ()=>(0, _normalization6Ad2Dc39EsmJs.u));
parcelHelpers.export(exports, "validateGraph", ()=>(0, _normalization6Ad2Dc39EsmJs.v));
parcelHelpers.export(exports, "zIndexOrdering", ()=>(0, _normalization6Ad2Dc39EsmJs.z));
parcelHelpers.export(exports, "HTML_COLORS", ()=>(0, _colors2F6D17F0EsmJs.H));
parcelHelpers.export(exports, "colorToArray", ()=>(0, _colors2F6D17F0EsmJs.d));
parcelHelpers.export(exports, "colorToIndex", ()=>(0, _colors2F6D17F0EsmJs.c));
parcelHelpers.export(exports, "extractPixel", ()=>(0, _colors2F6D17F0EsmJs.e));
parcelHelpers.export(exports, "floatColor", ()=>(0, _colors2F6D17F0EsmJs.f));
parcelHelpers.export(exports, "getPixelColor", ()=>(0, _colors2F6D17F0EsmJs.g));
parcelHelpers.export(exports, "indexToColor", ()=>(0, _colors2F6D17F0EsmJs.i));
parcelHelpers.export(exports, "parseColor", ()=>(0, _colors2F6D17F0EsmJs.p));
parcelHelpers.export(exports, "rgbaToFloat", ()=>(0, _colors2F6D17F0EsmJs.r));
parcelHelpers.export(exports, "assign", ()=>(0, _data31990A76EsmJs.a));
parcelHelpers.export(exports, "assignDeep", ()=>(0, _data31990A76EsmJs.b));
parcelHelpers.export(exports, "extend", ()=>(0, _data31990A76EsmJs.e));
parcelHelpers.export(exports, "isPlainObject", ()=>(0, _data31990A76EsmJs.i));
var _normalization6Ad2Dc39EsmJs = require("../../dist/normalization-6ad2dc39.esm.js");
var _colors2F6D17F0EsmJs = require("../../dist/colors-2f6d17f0.esm.js");
var _data31990A76EsmJs = require("../../dist/data-31990a76.esm.js");
var _isGraph = require("graphology-utils/is-graph");

},{"../../dist/normalization-6ad2dc39.esm.js":false,"../../dist/colors-2f6d17f0.esm.js":"jY79t","../../dist/data-31990a76.esm.js":false,"graphology-utils/is-graph":"9Cax7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kr6jn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>ANIMATE_DEFAULTS);
parcelHelpers.export(exports, "a", ()=>graphExtent);
parcelHelpers.export(exports, "b", ()=>getMatrixImpact);
parcelHelpers.export(exports, "c", ()=>createNormalizationFunction);
parcelHelpers.export(exports, "d", ()=>createElement);
parcelHelpers.export(exports, "e", ()=>easings);
parcelHelpers.export(exports, "f", ()=>multiplyVec2);
parcelHelpers.export(exports, "g", ()=>getPixelRatio);
parcelHelpers.export(exports, "h", ()=>animateNodes);
parcelHelpers.export(exports, "i", ()=>identity);
parcelHelpers.export(exports, "j", ()=>getCorrectionRatio);
parcelHelpers.export(exports, "k", ()=>quadraticOut);
parcelHelpers.export(exports, "l", ()=>linear);
parcelHelpers.export(exports, "m", ()=>matrixFromCamera);
parcelHelpers.export(exports, "n", ()=>quadraticInOut);
parcelHelpers.export(exports, "o", ()=>cubicIn);
parcelHelpers.export(exports, "p", ()=>cubicOut);
parcelHelpers.export(exports, "q", ()=>quadraticIn);
parcelHelpers.export(exports, "r", ()=>cubicInOut);
parcelHelpers.export(exports, "s", ()=>scale);
parcelHelpers.export(exports, "t", ()=>rotate);
parcelHelpers.export(exports, "u", ()=>translate);
parcelHelpers.export(exports, "v", ()=>validateGraph);
parcelHelpers.export(exports, "w", ()=>multiply);
parcelHelpers.export(exports, "z", ()=>zIndexOrdering);
var _isGraph = require("graphology-utils/is-graph");
var _isGraphDefault = parcelHelpers.interopDefault(_isGraph);
var _colors2F6D17F0EsmJs = require("./colors-2f6d17f0.esm.js");
var linear = function linear(k) {
    return k;
};
var quadraticIn = function quadraticIn(k) {
    return k * k;
};
var quadraticOut = function quadraticOut(k) {
    return k * (2 - k);
};
var quadraticInOut = function quadraticInOut(k) {
    if ((k *= 2) < 1) return 0.5 * k * k;
    return -0.5 * (--k * (k - 2) - 1);
};
var cubicIn = function cubicIn(k) {
    return k * k * k;
};
var cubicOut = function cubicOut(k) {
    return --k * k * k + 1;
};
var cubicInOut = function cubicInOut(k) {
    if ((k *= 2) < 1) return 0.5 * k * k * k;
    return 0.5 * ((k -= 2) * k * k + 2);
};
var easings = {
    linear: linear,
    quadraticIn: quadraticIn,
    quadraticOut: quadraticOut,
    quadraticInOut: quadraticInOut,
    cubicIn: cubicIn,
    cubicOut: cubicOut,
    cubicInOut: cubicInOut
};
/**
 * Defaults.
 */ var ANIMATE_DEFAULTS = {
    easing: "quadraticInOut",
    duration: 150
};
/**
 * Function used to animate the nodes.
 */ function animateNodes(graph, targets, opts, callback) {
    var options = Object.assign({}, ANIMATE_DEFAULTS, opts);
    var easing = typeof options.easing === "function" ? options.easing : easings[options.easing];
    var start = Date.now();
    var startPositions = {};
    for(var node in targets){
        var attrs = targets[node];
        startPositions[node] = {};
        for(var _k in attrs)startPositions[node][_k] = graph.getNodeAttribute(node, _k);
    }
    var frame = null;
    var step = function step() {
        frame = null;
        var p = (Date.now() - start) / options.duration;
        if (p >= 1) {
            // Animation is done
            for(var _node in targets){
                var _attrs = targets[_node];
                // We use given values to avoid precision issues and for convenience
                for(var _k2 in _attrs)graph.setNodeAttribute(_node, _k2, _attrs[_k2]);
            }
            if (typeof callback === "function") callback();
            return;
        }
        p = easing(p);
        for(var _node2 in targets){
            var _attrs2 = targets[_node2];
            var s = startPositions[_node2];
            for(var _k3 in _attrs2)graph.setNodeAttribute(_node2, _k3, _attrs2[_k3] * p + s[_k3] * (1 - p));
        }
        frame = requestAnimationFrame(step);
    };
    step();
    return function() {
        if (frame) cancelAnimationFrame(frame);
    };
}
function identity() {
    return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
// TODO: optimize
function scale(m, x, y) {
    m[0] = x;
    m[4] = typeof y === "number" ? y : x;
    return m;
}
function rotate(m, r) {
    var s = Math.sin(r), c = Math.cos(r);
    m[0] = c;
    m[1] = s;
    m[3] = -s;
    m[4] = c;
    return m;
}
function translate(m, x, y) {
    m[6] = x;
    m[7] = y;
    return m;
}
function multiply(a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    a[0] = b00 * a00 + b01 * a10 + b02 * a20;
    a[1] = b00 * a01 + b01 * a11 + b02 * a21;
    a[2] = b00 * a02 + b01 * a12 + b02 * a22;
    a[3] = b10 * a00 + b11 * a10 + b12 * a20;
    a[4] = b10 * a01 + b11 * a11 + b12 * a21;
    a[5] = b10 * a02 + b11 * a12 + b12 * a22;
    a[6] = b20 * a00 + b21 * a10 + b22 * a20;
    a[7] = b20 * a01 + b21 * a11 + b22 * a21;
    a[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return a;
}
function multiplyVec2(a, b) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var a00 = a[0];
    var a01 = a[1];
    var a10 = a[3];
    var a11 = a[4];
    var a20 = a[6];
    var a21 = a[7];
    var b0 = b.x;
    var b1 = b.y;
    return {
        x: b0 * a00 + b1 * a10 + a20 * z,
        y: b0 * a01 + b1 * a11 + a21 * z
    };
}
/**
 * In sigma, the graph is normalized into a [0, 1], [0, 1] square, before being given to the various renderers. This
 * helps to deal with quadtree in particular.
 * But at some point, we need to rescale it so that it takes the best place in the screen, i.e. we always want to see two
 * nodes "touching" opposite sides of the graph, with the camera being at its default state.
 *
 * This function determines this ratio.
 */ function getCorrectionRatio(viewportDimensions, graphDimensions) {
    var viewportRatio = viewportDimensions.height / viewportDimensions.width;
    var graphRatio = graphDimensions.height / graphDimensions.width;
    // If the stage and the graphs are in different directions (such as the graph being wider that tall while the stage
    // is taller than wide), we can stop here to have indeed nodes touching opposite sides:
    if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) return 1;
    // Else, we need to fit the graph inside the stage:
    // 1. If the graph is "squarer" (i.e. with a ratio closer to 1), we need to make the largest sides touch;
    // 2. If the stage is "squarer", we need to make the smallest sides touch.
    return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}
/**
 * Function returning a matrix from the current state of the camera.
 */ function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
    // TODO: it's possible to optimize this drastically!
    var angle = state.angle, ratio = state.ratio, x = state.x, y = state.y;
    var width = viewportDimensions.width, height = viewportDimensions.height;
    var matrix = identity();
    var smallestDimension = Math.min(width, height) - 2 * padding;
    var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
    if (!inverse) {
        multiply(matrix, scale(identity(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
        multiply(matrix, rotate(identity(), -angle));
        multiply(matrix, scale(identity(), 1 / ratio));
        multiply(matrix, translate(identity(), -x, -y));
    } else {
        multiply(matrix, translate(identity(), x, y));
        multiply(matrix, scale(identity(), ratio));
        multiply(matrix, rotate(identity(), angle));
        multiply(matrix, scale(identity(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
    }
    return matrix;
}
/**
 * All these transformations we apply on the matrix to get it rescale the graph
 * as we want make it very hard to get pixel-perfect distances in WebGL. This
 * function returns a factor that properly cancels the matrix effect on lengths.
 *
 * [jacomyal]
 * To be fully honest, I can't really explain happens here... I notice that the
 * following ratio works (i.e. it correctly compensates the matrix impact on all
 * camera states I could try):
 * > `R = size(V) / size(M * V) / W`
 * as long as `M * V` is in the direction of W (ie. parallel to (Ox)). It works
 * as well with H and a vector that transforms into something parallel to (Oy).
 *
 * Also, note that we use `angle` and not `-angle` (that would seem logical,
 * since we want to anticipate the rotation), because the image is vertically
 * swapped in WebGL.
 */ function getMatrixImpact(matrix, cameraState, viewportDimensions) {
    var _multiplyVec = multiplyVec2(matrix, {
        x: Math.cos(cameraState.angle),
        y: Math.sin(cameraState.angle)
    }, 0), x = _multiplyVec.x, y = _multiplyVec.y;
    return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
}
/**
 * Function returning the graph's node extent in x & y.
 */ function graphExtent(graph) {
    if (!graph.order) return {
        x: [
            0,
            1
        ],
        y: [
            0,
            1
        ]
    };
    var xMin = Infinity;
    var xMax = -Infinity;
    var yMin = Infinity;
    var yMax = -Infinity;
    graph.forEachNode(function(_, attr) {
        var x = attr.x, y = attr.y;
        if (x < xMin) xMin = x;
        if (x > xMax) xMax = x;
        if (y < yMin) yMin = y;
        if (y > yMax) yMax = y;
    });
    return {
        x: [
            xMin,
            xMax
        ],
        y: [
            yMin,
            yMax
        ]
    };
}
/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */ function validateGraph(graph) {
    // check if it's a valid graphology instance
    if (!(0, _isGraphDefault.default)(graph)) throw new Error("Sigma: invalid graph instance.");
    // check if nodes have x/y attributes
    graph.forEachNode(function(key, attributes) {
        if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
    });
}
/**
 * Function used to create DOM elements easily.
 */ function createElement(tag, style, attributes) {
    var element = document.createElement(tag);
    if (style) for(var k in style)element.style[k] = style[k];
    if (attributes) for(var _k in attributes)element.setAttribute(_k, attributes[_k]);
    return element;
}
/**
 * Function returning the browser's pixel ratio.
 */ function getPixelRatio() {
    if (typeof window.devicePixelRatio !== "undefined") return window.devicePixelRatio;
    return 1;
}
/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 */ function zIndexOrdering(_extent, getter, elements) {
    // If k is > n, we'll use a standard sort
    return elements.sort(function(a, b) {
        var zA = getter(a) || 0, zB = getter(b) || 0;
        if (zA < zB) return -1;
        if (zA > zB) return 1;
        return 0;
    });
// TODO: counting sort optimization
}
/**
 * Factory returning a function normalizing the given node's position & size.
 */ function createNormalizationFunction(extent) {
    var _extent$x = (0, _colors2F6D17F0EsmJs._)(extent.x, 2), minX = _extent$x[0], maxX = _extent$x[1], _extent$y = (0, _colors2F6D17F0EsmJs._)(extent.y, 2), minY = _extent$y[0], maxY = _extent$y[1];
    var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
    if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio)) ratio = 1;
    if (isNaN(dX)) dX = 0;
    if (isNaN(dY)) dY = 0;
    var fn = function fn(data) {
        return {
            x: 0.5 + (data.x - dX) / ratio,
            y: 0.5 + (data.y - dY) / ratio
        };
    };
    // TODO: possibility to apply this in batch over array of indices
    fn.applyTo = function(data) {
        data.x = 0.5 + (data.x - dX) / ratio;
        data.y = 0.5 + (data.y - dY) / ratio;
    };
    fn.inverse = function(data) {
        return {
            x: dX + ratio * (data.x - 0.5),
            y: dY + ratio * (data.y - 0.5)
        };
    };
    fn.ratio = ratio;
    return fn;
}

},{"graphology-utils/is-graph":"9Cax7","./colors-2f6d17f0.esm.js":"jY79t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Cax7":[function(require,module,exports) {
/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */ /**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */ module.exports = function isGraph(value) {
    return value !== null && typeof value === "object" && typeof value.addUndirectedEdgeWithKey === "function" && typeof value.dropNode === "function" && typeof value.multi === "boolean";
};

},{}],"kT3L7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>assign);
parcelHelpers.export(exports, "b", ()=>assignDeep);
parcelHelpers.export(exports, "e", ()=>extend);
parcelHelpers.export(exports, "i", ()=>isPlainObject);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
/**
 * Extends the target array with the given values.
 */ function extend(array, values) {
    var l2 = values.size;
    if (l2 === 0) return;
    var l1 = array.length;
    array.length += l2;
    var i = 0;
    values.forEach(function(value) {
        array[l1 + i] = value;
        i++;
    });
}
/**
 * Checks whether the given value is a plain object.
 */ function isPlainObject(value) {
    return _typeof(value) === "object" && value !== null && value.constructor === Object;
}
/**
 * Helper to use `Object.assign` with more than two objects.
 */ function assign(target) {
    target = target || {};
    for(var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++){
        var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
        if (!o) continue;
        Object.assign(target, o);
    }
    return target;
}
/**
 * Very simple recursive `Object.assign` like function.
 */ function assignDeep(target) {
    target = target || {};
    for(var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++){
        var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
        if (!o) continue;
        for(var k in o)if (isPlainObject(o[k])) target[k] = assignDeep(target[k], o[k]);
        else target[k] = o[k];
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7anno":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t(e);
    }
    function e(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, r(t, e);
    }
    function n(t) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, n(t);
    }
    function r(t, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, r(t, e);
    }
    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function o(t, e, n) {
        return o = i() ? Reflect.construct.bind() : function(t, e, n) {
            var i = [
                null
            ];
            i.push.apply(i, e);
            var o = new (Function.bind.apply(t, i));
            return n && r(o, n.prototype), o;
        }, o.apply(null, arguments);
    }
    function a(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return a = function(t) {
            if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
            var i;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, a);
            }
            function a() {
                return o(t, arguments, n(this).constructor);
            }
            return a.prototype = Object.create(t.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r(a, t);
        }, a(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    var u = function() {
        for(var t = arguments[0], e = 1, n = arguments.length; e < n; e++)if (arguments[e]) for(var r in arguments[e])t[r] = arguments[e][r];
        return t;
    };
    function d(t, e, n, r) {
        var i = t._nodes.get(e), o = null;
        return i ? o = "mixed" === r ? i.out && i.out[n] || i.undirected && i.undirected[n] : "directed" === r ? i.out && i.out[n] : i.undirected && i.undirected[n] : o;
    }
    function s(e) {
        return "object" === t(e) && null !== e;
    }
    function h(t) {
        var e;
        for(e in t)return !1;
        return !0;
    }
    function p(t, e, n) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            configurable: !1,
            writable: !0,
            value: n
        });
    }
    function f(t, e, n) {
        var r = {
            enumerable: !0,
            configurable: !0
        };
        "function" == typeof n ? r.get = n : (r.value = n, r.writable = !1), Object.defineProperty(t, e, r);
    }
    function l(t) {
        return !!s(t) && !(t.attributes && !Array.isArray(t.attributes));
    }
    "function" == typeof Object.assign && (u = Object.assign);
    var g, y = {
        exports: {}
    }, w = "object" == typeof Reflect ? Reflect : null, v = w && "function" == typeof w.apply ? w.apply : function(t, e, n) {
        return Function.prototype.apply.call(t, e, n);
    };
    g = w && "function" == typeof w.ownKeys ? w.ownKeys : Object.getOwnPropertySymbols ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
        return Object.getOwnPropertyNames(t);
    };
    var b = Number.isNaN || function(t) {
        return t != t;
    };
    function m() {
        m.init.call(this);
    }
    y.exports = m, y.exports.once = function(t, e) {
        return new Promise(function(n, r) {
            function i(n) {
                t.removeListener(e, o), r(n);
            }
            function o() {
                "function" == typeof t.removeListener && t.removeListener("error", i), n([].slice.call(arguments));
            }
            U(t, e, o, {
                once: !0
            }), "error" !== e && function(t, e, n) {
                "function" == typeof t.on && U(t, "error", e, n);
            }(t, i, {
                once: !0
            });
        });
    }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
    var k = 10;
    function _(t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    function G(t) {
        return void 0 === t._maxListeners ? m.defaultMaxListeners : t._maxListeners;
    }
    function x(t, e, n, r) {
        var i, o, a, c;
        if (_(n), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), a = o[e]), void 0 === a) a = o[e] = n, ++t._eventsCount;
        else if ("function" == typeof a ? a = o[e] = r ? [
            n,
            a
        ] : [
            a,
            n
        ] : r ? a.unshift(n) : a.push(n), (i = G(t)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = a.length, c = u, console && console.warn && console.warn(c);
        }
        return t;
    }
    function E() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function A(t, e, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        }, i = E.bind(r);
        return i.listener = n, r.wrapFn = i, i;
    }
    function L(t, e, n) {
        var r = t._events;
        if (void 0 === r) return [];
        var i = r[e];
        return void 0 === i ? [] : "function" == typeof i ? n ? [
            i.listener || i
        ] : [
            i
        ] : n ? function(t) {
            for(var e = new Array(t.length), n = 0; n < e.length; ++n)e[n] = t[n].listener || t[n];
            return e;
        }(i) : D(i, i.length);
    }
    function S(t) {
        var e = this._events;
        if (void 0 !== e) {
            var n = e[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function D(t, e) {
        for(var n = new Array(e), r = 0; r < e; ++r)n[r] = t[r];
        return n;
    }
    function U(t, e, n, r) {
        if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
        else {
            if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
            t.addEventListener(e, function i(o) {
                r.once && t.removeEventListener(e, i), n(o);
            });
        }
    }
    function N(t) {
        if ("function" != typeof t) throw new Error("obliterator/iterator: expecting a function!");
        this.next = t;
    }
    Object.defineProperty(m, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return k;
        },
        set: function(t) {
            if ("number" != typeof t || t < 0 || b(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            k = t;
        }
    }), m.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, m.prototype.setMaxListeners = function(t) {
        if ("number" != typeof t || t < 0 || b(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this;
    }, m.prototype.getMaxListeners = function() {
        return G(this);
    }, m.prototype.emit = function(t) {
        for(var e = [], n = 1; n < arguments.length; n++)e.push(arguments[n]);
        var r = "error" === t, i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
            var o;
            if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
            var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw a.context = o, a;
        }
        var c = i[t];
        if (void 0 === c) return !1;
        if ("function" == typeof c) v(c, this, e);
        else {
            var u = c.length, d = D(c, u);
            for(n = 0; n < u; ++n)v(d[n], this, e);
        }
        return !0;
    }, m.prototype.addListener = function(t, e) {
        return x(this, t, e, !1);
    }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function(t, e) {
        return x(this, t, e, !0);
    }, m.prototype.once = function(t, e) {
        return _(e), this.on(t, A(this, t, e)), this;
    }, m.prototype.prependOnceListener = function(t, e) {
        return _(e), this.prependListener(t, A(this, t, e)), this;
    }, m.prototype.removeListener = function(t, e) {
        var n, r, i, o, a;
        if (_(e), void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[t])) return this;
        if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
        else if ("function" != typeof n) {
            for(i = -1, o = n.length - 1; o >= 0; o--)if (n[o] === e || n[o].listener === e) {
                a = n[o].listener, i = o;
                break;
            }
            if (i < 0) return this;
            0 === i ? n.shift() : function(t, e) {
                for(; e + 1 < t.length; e++)t[e] = t[e + 1];
                t.pop();
            }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, a || e);
        }
        return this;
    }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function(t) {
        var e, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
        if (0 === arguments.length) {
            var i, o = Object.keys(n);
            for(r = 0; r < o.length; ++r)"removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e = n[t])) this.removeListener(t, e);
        else if (void 0 !== e) for(r = e.length - 1; r >= 0; r--)this.removeListener(t, e[r]);
        return this;
    }, m.prototype.listeners = function(t) {
        return L(this, t, !0);
    }, m.prototype.rawListeners = function(t) {
        return L(this, t, !1);
    }, m.listenerCount = function(t, e) {
        return "function" == typeof t.listenerCount ? t.listenerCount(e) : S.call(t, e);
    }, m.prototype.listenerCount = S, m.prototype.eventNames = function() {
        return this._eventsCount > 0 ? g(this._events) : [];
    }, "undefined" != typeof Symbol && (N.prototype[Symbol.iterator] = function() {
        return this;
    }), N.of = function() {
        var t = arguments, e = t.length, n = 0;
        return new N(function() {
            return n >= e ? {
                done: !0
            } : {
                done: !1,
                value: t[n++]
            };
        });
    }, N.empty = function() {
        return new N(function() {
            return {
                done: !0
            };
        });
    }, N.fromSequence = function(t) {
        var e = 0, n = t.length;
        return new N(function() {
            return e >= n ? {
                done: !0
            } : {
                done: !1,
                value: t[e++]
            };
        });
    }, N.is = function(t) {
        return t instanceof N || "object" == typeof t && null !== t && "function" == typeof t.next;
    };
    var O = N, j = {};
    j.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, j.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
    var C = O, M = j, z = M.ARRAY_BUFFER_SUPPORT, W = M.SYMBOL_SUPPORT;
    var P = function(t) {
        var e = function(t) {
            return "string" == typeof t || Array.isArray(t) || z && ArrayBuffer.isView(t) ? C.fromSequence(t) : "object" != typeof t || null === t ? null : W && "function" == typeof t[Symbol.iterator] ? t[Symbol.iterator]() : "function" == typeof t.next ? t : null;
        }(t);
        if (!e) throw new Error("obliterator: target is not iterable nor a valid iterator.");
        return e;
    }, R = P, K = function(t, e) {
        for(var n, r = arguments.length > 1 ? e : 1 / 0, i = r !== 1 / 0 ? new Array(r) : [], o = 0, a = R(t);;){
            if (o === r) return i;
            if ((n = a.next()).done) return o !== e && (i.length = o), i;
            i[o++] = n.value;
        }
    }, T = function(t) {
        function n(e) {
            var n;
            return (n = t.call(this) || this).name = "GraphError", n.message = e, n;
        }
        return e(n, t), n;
    }(a(Error)), B = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
        }
        return e(n, t), n;
    }(T), F = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
        }
        return e(n, t), n;
    }(T), I = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
        }
        return e(n, t), n;
    }(T);
    function Y(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function q(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function J(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function V(t, e, n, r, i) {
        this.key = e, this.attributes = i, this.undirected = t, this.source = n, this.target = r;
    }
    Y.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
    }, q.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
    }, J.prototype.clear = function() {
        this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
    }, V.prototype.attach = function() {
        var t = "out", e = "in";
        this.undirected && (t = e = "undirected");
        var n = this.source.key, r = this.target.key;
        this.source[t][r] = this, this.undirected && n === r || (this.target[e][n] = this);
    }, V.prototype.attachMulti = function() {
        var t = "out", e = "in", n = this.source.key, r = this.target.key;
        this.undirected && (t = e = "undirected");
        var i = this.source[t], o = i[r];
        if (void 0 === o) return i[r] = this, void (this.undirected && n === r || (this.target[e][n] = this));
        o.previous = this, this.next = o, i[r] = this, this.target[e][n] = this;
    }, V.prototype.detach = function() {
        var t = this.source.key, e = this.target.key, n = "out", r = "in";
        this.undirected && (n = r = "undirected"), delete this.source[n][e], delete this.target[r][t];
    }, V.prototype.detachMulti = function() {
        var t = this.source.key, e = this.target.key, n = "out", r = "in";
        this.undirected && (n = r = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n][e], delete this.target[r][t]) : (this.next.previous = void 0, this.source[n][e] = this.next, this.target[r][t] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
    };
    function H(t, e, n, r, i, o, a) {
        var c, u, d, s;
        if (r = "" + r, 0 === n) {
            if (!(c = t._nodes.get(r))) throw new F("Graph.".concat(e, ': could not find the "').concat(r, '" node in the graph.'));
            d = i, s = o;
        } else if (3 === n) {
            if (i = "" + i, !(u = t._edges.get(i))) throw new F("Graph.".concat(e, ': could not find the "').concat(i, '" edge in the graph.'));
            var h = u.source.key, p = u.target.key;
            if (r === h) c = u.target;
            else {
                if (r !== p) throw new F("Graph.".concat(e, ': the "').concat(r, '" node is not attached to the "').concat(i, '" edge (').concat(h, ", ").concat(p, ")."));
                c = u.source;
            }
            d = o, s = a;
        } else {
            if (!(u = t._edges.get(r))) throw new F("Graph.".concat(e, ': could not find the "').concat(r, '" edge in the graph.'));
            c = 1 === n ? u.source : u.target, d = i, s = o;
        }
        return [
            c,
            d,
            s
        ];
    }
    var Q = [
        {
            name: function(t) {
                return "get".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    return a.attributes[c];
                };
            }
        },
        {
            name: function(t) {
                return "get".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    return H(this, e, n, t, r)[0].attributes;
                };
            }
        },
        {
            name: function(t) {
                return "has".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    return a.attributes.hasOwnProperty(c);
                };
            }
        },
        {
            name: function(t) {
                return "set".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i, o) {
                    var a = H(this, e, n, t, r, i, o), c = a[0], u = a[1], d = a[2];
                    return c.attributes[u] = d, this.emit("nodeAttributesUpdated", {
                        key: c.key,
                        type: "set",
                        attributes: c.attributes,
                        name: u
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i, o) {
                    var a = H(this, e, n, t, r, i, o), c = a[0], u = a[1], d = a[2];
                    if ("function" != typeof d) throw new B("Graph.".concat(e, ": updater should be a function."));
                    var s = c.attributes, h = d(s[u]);
                    return s[u] = h, this.emit("nodeAttributesUpdated", {
                        key: c.key,
                        type: "set",
                        attributes: c.attributes,
                        name: u
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "remove".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    return delete a.attributes[c], this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "remove",
                        attributes: a.attributes,
                        name: c
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "replace".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    if (!s(c)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return a.attributes = c, this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "replace",
                        attributes: a.attributes
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "merge".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    if (!s(c)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return u(a.attributes, c), this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "merge",
                        attributes: a.attributes,
                        data: c
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    if ("function" != typeof c) throw new B("Graph.".concat(e, ": provided updater is not a function."));
                    return a.attributes = c(a.attributes), this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "update",
                        attributes: a.attributes
                    }), this;
                };
            }
        }
    ];
    var X = [
        {
            name: function(t) {
                return "get".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return i.attributes[r];
                };
            }
        },
        {
            name: function(t) {
                return "get".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t) {
                    var r;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 1) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var i = "" + t, o = "" + arguments[1];
                        if (!(r = d(this, i, o, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(i, '" - "').concat(o, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(r = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return r.attributes;
                };
            }
        },
        {
            name: function(t) {
                return "has".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return i.attributes.hasOwnProperty(r);
                };
            }
        },
        {
            name: function(t) {
                return "set".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 3) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var a = "" + t, c = "" + r;
                        if (r = arguments[2], i = arguments[3], !(o = d(this, a, c, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(c, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(o = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return o.attributes[r] = i, this.emit("edgeAttributesUpdated", {
                        key: o.key,
                        type: "set",
                        attributes: o.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 3) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var a = "" + t, c = "" + r;
                        if (r = arguments[2], i = arguments[3], !(o = d(this, a, c, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(c, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(o = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if ("function" != typeof i) throw new B("Graph.".concat(e, ": updater should be a function."));
                    return o.attributes[r] = i(o.attributes[r]), this.emit("edgeAttributesUpdated", {
                        key: o.key,
                        type: "set",
                        attributes: o.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "remove".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return delete i.attributes[r], this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "remove",
                        attributes: i.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "replace".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if (!s(r)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return i.attributes = r, this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "replace",
                        attributes: i.attributes
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "merge".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if (!s(r)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return u(i.attributes, r), this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "merge",
                        attributes: i.attributes,
                        data: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if ("function" != typeof r) throw new B("Graph.".concat(e, ": provided updater is not a function."));
                    return i.attributes = r(i.attributes), this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "update",
                        attributes: i.attributes
                    }), this;
                };
            }
        }
    ];
    var Z = O, $ = P, tt = function() {
        var t = arguments, e = null, n = -1;
        return new Z(function() {
            for(var r = null;;){
                if (null === e) {
                    if (++n >= t.length) return {
                        done: !0
                    };
                    e = $(t[n]);
                }
                if (!0 !== (r = e.next()).done) break;
                e = null;
            }
            return r;
        });
    }, et = [
        {
            name: "edges",
            type: "mixed"
        },
        {
            name: "inEdges",
            type: "directed",
            direction: "in"
        },
        {
            name: "outEdges",
            type: "directed",
            direction: "out"
        },
        {
            name: "inboundEdges",
            type: "mixed",
            direction: "in"
        },
        {
            name: "outboundEdges",
            type: "mixed",
            direction: "out"
        },
        {
            name: "directedEdges",
            type: "directed"
        },
        {
            name: "undirectedEdges",
            type: "undirected"
        }
    ];
    function nt(t, e, n, r) {
        var i = !1;
        for(var o in e)if (o !== r) {
            var a = e[o];
            if (i = n(a.key, a.attributes, a.source.key, a.target.key, a.source.attributes, a.target.attributes, a.undirected), t && i) return a.key;
        }
    }
    function rt(t, e, n, r) {
        var i, o, a, c = !1;
        for(var u in e)if (u !== r) {
            i = e[u];
            do {
                if (o = i.source, a = i.target, c = n(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected), t && c) return i.key;
                i = i.next;
            }while (void 0 !== i);
        }
    }
    function it(t, e) {
        var n, r = Object.keys(t), i = r.length, o = 0;
        return new O(function() {
            do if (n) n = n.next;
            else {
                if (o >= i) return {
                    done: !0
                };
                var a = r[o++];
                if (a === e) {
                    n = void 0;
                    continue;
                }
                n = t[a];
            }
            while (!n);
            return {
                done: !1,
                value: {
                    edge: n.key,
                    attributes: n.attributes,
                    source: n.source.key,
                    target: n.target.key,
                    sourceAttributes: n.source.attributes,
                    targetAttributes: n.target.attributes,
                    undirected: n.undirected
                }
            };
        });
    }
    function ot(t, e, n, r) {
        var i = e[n];
        if (i) {
            var o = i.source, a = i.target;
            return r(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected) && t ? i.key : void 0;
        }
    }
    function at(t, e, n, r) {
        var i = e[n];
        if (i) {
            var o = !1;
            do {
                if (o = r(i.key, i.attributes, i.source.key, i.target.key, i.source.attributes, i.target.attributes, i.undirected), t && o) return i.key;
                i = i.next;
            }while (void 0 !== i);
        }
    }
    function ct(t, e) {
        var n = t[e];
        return void 0 !== n.next ? new O(function() {
            if (!n) return {
                done: !0
            };
            var t = {
                edge: n.key,
                attributes: n.attributes,
                source: n.source.key,
                target: n.target.key,
                sourceAttributes: n.source.attributes,
                targetAttributes: n.target.attributes,
                undirected: n.undirected
            };
            return n = n.next, {
                done: !1,
                value: t
            };
        }) : O.of({
            edge: n.key,
            attributes: n.attributes,
            source: n.source.key,
            target: n.target.key,
            sourceAttributes: n.source.attributes,
            targetAttributes: n.target.attributes,
            undirected: n.undirected
        });
    }
    function ut(t, e) {
        if (0 === t.size) return [];
        if ("mixed" === e || e === t.type) return "function" == typeof Array.from ? Array.from(t._edges.keys()) : K(t._edges.keys(), t._edges.size);
        for(var n, r, i = "undirected" === e ? t.undirectedSize : t.directedSize, o = new Array(i), a = "undirected" === e, c = t._edges.values(), u = 0; !0 !== (n = c.next()).done;)(r = n.value).undirected === a && (o[u++] = r.key);
        return o;
    }
    function dt(t, e, n, r) {
        if (0 !== e.size) {
            for(var i, o, a = "mixed" !== n && n !== e.type, c = "undirected" === n, u = !1, d = e._edges.values(); !0 !== (i = d.next()).done;)if (o = i.value, !a || o.undirected === c) {
                var s = o, h = s.key, p = s.attributes, f = s.source, l = s.target;
                if (u = r(h, p, f.key, l.key, f.attributes, l.attributes, o.undirected), t && u) return h;
            }
        }
    }
    function st(t, e) {
        if (0 === t.size) return O.empty();
        var n = "mixed" !== e && e !== t.type, r = "undirected" === e, i = t._edges.values();
        return new O(function() {
            for(var t, e;;){
                if ((t = i.next()).done) return t;
                if (e = t.value, !n || e.undirected === r) break;
            }
            return {
                value: {
                    edge: e.key,
                    attributes: e.attributes,
                    source: e.source.key,
                    target: e.target.key,
                    sourceAttributes: e.source.attributes,
                    targetAttributes: e.target.attributes,
                    undirected: e.undirected
                },
                done: !1
            };
        });
    }
    function ht(t, e, n, r, i, o) {
        var a, c = e ? rt : nt;
        if ("undirected" !== n) {
            if ("out" !== r && (a = c(t, i.in, o), t && a)) return a;
            if ("in" !== r && (a = c(t, i.out, o, r ? void 0 : i.key), t && a)) return a;
        }
        if ("directed" !== n && (a = c(t, i.undirected, o), t && a)) return a;
    }
    function pt(t, e, n, r) {
        var i = [];
        return ht(!1, t, e, n, r, function(t) {
            i.push(t);
        }), i;
    }
    function ft(t, e, n) {
        var r = O.empty();
        return "undirected" !== t && ("out" !== e && void 0 !== n.in && (r = tt(r, it(n.in))), "in" !== e && void 0 !== n.out && (r = tt(r, it(n.out, e ? void 0 : n.key)))), "directed" !== t && void 0 !== n.undirected && (r = tt(r, it(n.undirected))), r;
    }
    function lt(t, e, n, r, i, o, a) {
        var c, u = n ? at : ot;
        if ("undirected" !== e) {
            if (void 0 !== i.in && "out" !== r && (c = u(t, i.in, o, a), t && c)) return c;
            if (void 0 !== i.out && "in" !== r && (r || i.key !== o) && (c = u(t, i.out, o, a), t && c)) return c;
        }
        if ("directed" !== e && void 0 !== i.undirected && (c = u(t, i.undirected, o, a), t && c)) return c;
    }
    function gt(t, e, n, r, i) {
        var o = [];
        return lt(!1, t, e, n, r, i, function(t) {
            o.push(t);
        }), o;
    }
    function yt(t, e, n, r) {
        var i = O.empty();
        return "undirected" !== t && (void 0 !== n.in && "out" !== e && r in n.in && (i = tt(i, ct(n.in, r))), void 0 !== n.out && "in" !== e && r in n.out && (e || n.key !== r) && (i = tt(i, ct(n.out, r)))), "directed" !== t && void 0 !== n.undirected && r in n.undirected && (i = tt(i, ct(n.undirected, r))), i;
    }
    var wt = [
        {
            name: "neighbors",
            type: "mixed"
        },
        {
            name: "inNeighbors",
            type: "directed",
            direction: "in"
        },
        {
            name: "outNeighbors",
            type: "directed",
            direction: "out"
        },
        {
            name: "inboundNeighbors",
            type: "mixed",
            direction: "in"
        },
        {
            name: "outboundNeighbors",
            type: "mixed",
            direction: "out"
        },
        {
            name: "directedNeighbors",
            type: "directed"
        },
        {
            name: "undirectedNeighbors",
            type: "undirected"
        }
    ];
    function vt() {
        this.A = null, this.B = null;
    }
    function bt(t, e, n, r, i) {
        for(var o in r){
            var a = r[o], c = a.source, u = a.target, d = c === n ? u : c;
            if (!e || !e.has(d.key)) {
                var s = i(d.key, d.attributes);
                if (t && s) return d.key;
            }
        }
    }
    function mt(t, e, n, r, i) {
        if ("mixed" !== e) {
            if ("undirected" === e) return bt(t, null, r, r.undirected, i);
            if ("string" == typeof n) return bt(t, null, r, r[n], i);
        }
        var o, a = new vt;
        if ("undirected" !== e) {
            if ("out" !== n) {
                if (o = bt(t, null, r, r.in, i), t && o) return o;
                a.wrap(r.in);
            }
            if ("in" !== n) {
                if (o = bt(t, a, r, r.out, i), t && o) return o;
                a.wrap(r.out);
            }
        }
        if ("directed" !== e && (o = bt(t, a, r, r.undirected, i), t && o)) return o;
    }
    function kt(t, e, n) {
        var r = Object.keys(n), i = r.length, o = 0;
        return new O(function() {
            var a = null;
            do {
                if (o >= i) return t && t.wrap(n), {
                    done: !0
                };
                var c = n[r[o++]], u = c.source, d = c.target;
                a = u === e ? d : u, t && t.has(a.key) && (a = null);
            }while (null === a);
            return {
                done: !1,
                value: {
                    neighbor: a.key,
                    attributes: a.attributes
                }
            };
        });
    }
    function _t(t, e) {
        var n = e.name, r = e.type, i = e.direction;
        t.prototype[n] = function(t) {
            if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
            t = "" + t;
            var e = this._nodes.get(t);
            if (void 0 === e) throw new F("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
            return function(t, e, n) {
                if ("mixed" !== t) {
                    if ("undirected" === t) return Object.keys(n.undirected);
                    if ("string" == typeof e) return Object.keys(n[e]);
                }
                var r = [];
                return mt(!1, t, e, n, function(t) {
                    r.push(t);
                }), r;
            }("mixed" === r ? this.type : r, i, e);
        };
    }
    function Gt(t, e) {
        var n = e.name, r = e.type, i = e.direction, o = n.slice(0, -1) + "Entries";
        t.prototype[o] = function(t) {
            if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
            t = "" + t;
            var e = this._nodes.get(t);
            if (void 0 === e) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
            return function(t, e, n) {
                if ("mixed" !== t) {
                    if ("undirected" === t) return kt(null, n, n.undirected);
                    if ("string" == typeof e) return kt(null, n, n[e]);
                }
                var r = O.empty(), i = new vt;
                return "undirected" !== t && ("out" !== e && (r = tt(r, kt(i, n, n.in))), "in" !== e && (r = tt(r, kt(i, n, n.out)))), "directed" !== t && (r = tt(r, kt(i, n, n.undirected))), r;
            }("mixed" === r ? this.type : r, i, e);
        };
    }
    function xt(t, e, n, r, i) {
        for(var o, a, c, u, d, s, h, p = r._nodes.values(), f = r.type; !0 !== (o = p.next()).done;){
            var l = !1;
            if (a = o.value, "undirected" !== f) for(c in u = a.out){
                d = u[c];
                do {
                    if (s = d.target, l = !0, h = i(a.key, s.key, a.attributes, s.attributes, d.key, d.attributes, d.undirected), t && h) return d;
                    d = d.next;
                }while (d);
            }
            if ("directed" !== f) {
                for(c in u = a.undirected)if (!(e && a.key > c)) {
                    d = u[c];
                    do {
                        if ((s = d.target).key !== c && (s = d.source), l = !0, h = i(a.key, s.key, a.attributes, s.attributes, d.key, d.attributes, d.undirected), t && h) return d;
                        d = d.next;
                    }while (d);
                }
            }
            if (n && !l && (h = i(a.key, null, a.attributes, null, null, null, null), t && h)) return null;
        }
    }
    function Et(t) {
        if (!s(t)) throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
        if (!("key" in t)) throw new B("Graph.import: serialized node is missing its key.");
        if ("attributes" in t && (!s(t.attributes) || null === t.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
    }
    function At(t) {
        if (!s(t)) throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
        if (!("source" in t)) throw new B("Graph.import: serialized edge is missing its source.");
        if (!("target" in t)) throw new B("Graph.import: serialized edge is missing its target.");
        if ("attributes" in t && (!s(t.attributes) || null === t.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        if ("undirected" in t && "boolean" != typeof t.undirected) throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
    }
    vt.prototype.wrap = function(t) {
        null === this.A ? this.A = t : null === this.B && (this.B = t);
    }, vt.prototype.has = function(t) {
        return null !== this.A && t in this.A || null !== this.B && t in this.B;
    };
    var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
        return Lt++;
    }), Dt = new Set([
        "directed",
        "undirected",
        "mixed"
    ]), Ut = new Set([
        "domain",
        "_events",
        "_eventsCount",
        "_maxListeners"
    ]), Nt = {
        allowSelfLoops: !0,
        multi: !1,
        type: "mixed"
    };
    function Ot(t, e, n) {
        var r = new t.NodeDataClass(e, n);
        return t._nodes.set(e, r), t.emit("nodeAdded", {
            key: e,
            attributes: n
        }), r;
    }
    function jt(t, e, n, r, i, o, a, c) {
        if (!r && "undirected" === t.type) throw new I("Graph.".concat(e, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
        if (r && "directed" === t.type) throw new I("Graph.".concat(e, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
        if (c && !s(c)) throw new B("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(c, '"'));
        if (o = "" + o, a = "" + a, c = c || {}, !t.allowSelfLoops && o === a) throw new I("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
        var u = t._nodes.get(o), d = t._nodes.get(a);
        if (!u) throw new F("Graph.".concat(e, ': source node "').concat(o, '" not found.'));
        if (!d) throw new F("Graph.".concat(e, ': target node "').concat(a, '" not found.'));
        var h = {
            key: null,
            undirected: r,
            source: o,
            target: a,
            attributes: c
        };
        if (n) i = t._edgeKeyGenerator();
        else if (i = "" + i, t._edges.has(i)) throw new I("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
        if (!t.multi && (r ? void 0 !== u.undirected[a] : void 0 !== u.out[a])) throw new I("Graph.".concat(e, ': an edge linking "').concat(o, '" to "').concat(a, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
        var p = new V(r, i, u, d, c);
        t._edges.set(i, p);
        var f = o === a;
        return r ? (u.undirectedDegree++, d.undirectedDegree++, f && (u.undirectedLoops++, t._undirectedSelfLoopCount++)) : (u.outDegree++, d.inDegree++, f && (u.directedLoops++, t._directedSelfLoopCount++)), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, h.key = i, t.emit("edgeAdded", h), i;
    }
    function Ct(t, e, n, r, i, o, a, c, d) {
        if (!r && "undirected" === t.type) throw new I("Graph.".concat(e, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
        if (r && "directed" === t.type) throw new I("Graph.".concat(e, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
        if (c) {
            if (d) {
                if ("function" != typeof c) throw new B("Graph.".concat(e, ': invalid updater function. Expecting a function but got "').concat(c, '"'));
            } else if (!s(c)) throw new B("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(c, '"'));
        }
        var h;
        if (o = "" + o, a = "" + a, d && (h = c, c = void 0), !t.allowSelfLoops && o === a) throw new I("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
        var p, f, l = t._nodes.get(o), g = t._nodes.get(a);
        if (!n && (p = t._edges.get(i))) {
            if (!(p.source.key === o && p.target.key === a || r && p.source.key === a && p.target.key === o)) throw new I("Graph.".concat(e, ': inconsistency detected when attempting to merge the "').concat(i, '" edge with "').concat(o, '" source & "').concat(a, '" target vs. ("').concat(p.source.key, '", "').concat(p.target.key, '").'));
            f = p;
        }
        if (f || t.multi || !l || (f = r ? l.undirected[a] : l.out[a]), f) {
            var y = [
                f.key,
                !1,
                !1,
                !1
            ];
            if (d ? !h : !c) return y;
            if (d) {
                var w = f.attributes;
                f.attributes = h(w), t.emit("edgeAttributesUpdated", {
                    type: "replace",
                    key: f.key,
                    attributes: f.attributes
                });
            } else u(f.attributes, c), t.emit("edgeAttributesUpdated", {
                type: "merge",
                key: f.key,
                attributes: f.attributes,
                data: c
            });
            return y;
        }
        c = c || {}, d && h && (c = h(c));
        var v = {
            key: null,
            undirected: r,
            source: o,
            target: a,
            attributes: c
        };
        if (n) i = t._edgeKeyGenerator();
        else if (i = "" + i, t._edges.has(i)) throw new I("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
        var b = !1, m = !1;
        l || (l = Ot(t, o, {}), b = !0, o === a && (g = l, m = !0)), g || (g = Ot(t, a, {}), m = !0), p = new V(r, i, l, g, c), t._edges.set(i, p);
        var k = o === a;
        return r ? (l.undirectedDegree++, g.undirectedDegree++, k && (l.undirectedLoops++, t._undirectedSelfLoopCount++)) : (l.outDegree++, g.inDegree++, k && (l.directedLoops++, t._directedSelfLoopCount++)), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, v.key = i, t.emit("edgeAdded", v), [
            i,
            !0,
            b,
            m
        ];
    }
    function Mt(t, e) {
        t._edges.delete(e.key);
        var n = e.source, r = e.target, i = e.attributes, o = e.undirected, a = n === r;
        o ? (n.undirectedDegree--, r.undirectedDegree--, a && (n.undirectedLoops--, t._undirectedSelfLoopCount--)) : (n.outDegree--, r.inDegree--, a && (n.directedLoops--, t._directedSelfLoopCount--)), t.multi ? e.detachMulti() : e.detach(), o ? t._undirectedSize-- : t._directedSize--, t.emit("edgeDropped", {
            key: e.key,
            attributes: i,
            source: n.key,
            target: r.key,
            undirected: o
        });
    }
    var zt = function(n) {
        function r(t) {
            var e;
            if (e = n.call(this) || this, "boolean" != typeof (t = u({}, Nt, t)).multi) throw new B("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t.multi, '".'));
            if (!Dt.has(t.type)) throw new B('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t.type, '".'));
            if ("boolean" != typeof t.allowSelfLoops) throw new B("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t.allowSelfLoops, '".'));
            var r = "mixed" === t.type ? Y : "directed" === t.type ? q : J;
            p(c(e), "NodeDataClass", r);
            var i = "geid_" + St() + "_", o = 0;
            return p(c(e), "_attributes", {}), p(c(e), "_nodes", new Map), p(c(e), "_edges", new Map), p(c(e), "_directedSize", 0), p(c(e), "_undirectedSize", 0), p(c(e), "_directedSelfLoopCount", 0), p(c(e), "_undirectedSelfLoopCount", 0), p(c(e), "_edgeKeyGenerator", function() {
                var t;
                do t = i + o++;
                while (e._edges.has(t));
                return t;
            }), p(c(e), "_options", t), Ut.forEach(function(t) {
                return p(c(e), t, e[t]);
            }), f(c(e), "order", function() {
                return e._nodes.size;
            }), f(c(e), "size", function() {
                return e._edges.size;
            }), f(c(e), "directedSize", function() {
                return e._directedSize;
            }), f(c(e), "undirectedSize", function() {
                return e._undirectedSize;
            }), f(c(e), "selfLoopCount", function() {
                return e._directedSelfLoopCount + e._undirectedSelfLoopCount;
            }), f(c(e), "directedSelfLoopCount", function() {
                return e._directedSelfLoopCount;
            }), f(c(e), "undirectedSelfLoopCount", function() {
                return e._undirectedSelfLoopCount;
            }), f(c(e), "multi", e._options.multi), f(c(e), "type", e._options.type), f(c(e), "allowSelfLoops", e._options.allowSelfLoops), f(c(e), "implementation", function() {
                return "graphology";
            }), e;
        }
        e(r, n);
        var i = r.prototype;
        return i._resetInstanceCounters = function() {
            this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
        }, i.hasNode = function(t) {
            return this._nodes.has("" + t);
        }, i.hasDirectedEdge = function(t, e) {
            if ("undirected" === this.type) return !1;
            if (1 === arguments.length) {
                var n = "" + t, r = this._edges.get(n);
                return !!r && !r.undirected;
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var i = this._nodes.get(t);
                return !!i && i.out.hasOwnProperty(e);
            }
            throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i.hasUndirectedEdge = function(t, e) {
            if ("directed" === this.type) return !1;
            if (1 === arguments.length) {
                var n = "" + t, r = this._edges.get(n);
                return !!r && r.undirected;
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var i = this._nodes.get(t);
                return !!i && i.undirected.hasOwnProperty(e);
            }
            throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i.hasEdge = function(t, e) {
            if (1 === arguments.length) {
                var n = "" + t;
                return this._edges.has(n);
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var r = this._nodes.get(t);
                return !!r && (void 0 !== r.out && r.out.hasOwnProperty(e) || void 0 !== r.undirected && r.undirected.hasOwnProperty(e));
            }
            throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i.directedEdge = function(t, e) {
            if ("undirected" !== this.type) {
                if (t = "" + t, e = "" + e, this.multi) throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
                var n = this._nodes.get(t);
                if (!n) throw new F('Graph.directedEdge: could not find the "'.concat(t, '" source node in the graph.'));
                if (!this._nodes.has(e)) throw new F('Graph.directedEdge: could not find the "'.concat(e, '" target node in the graph.'));
                var r = n.out && n.out[e] || void 0;
                return r ? r.key : void 0;
            }
        }, i.undirectedEdge = function(t, e) {
            if ("directed" !== this.type) {
                if (t = "" + t, e = "" + e, this.multi) throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
                var n = this._nodes.get(t);
                if (!n) throw new F('Graph.undirectedEdge: could not find the "'.concat(t, '" source node in the graph.'));
                if (!this._nodes.has(e)) throw new F('Graph.undirectedEdge: could not find the "'.concat(e, '" target node in the graph.'));
                var r = n.undirected && n.undirected[e] || void 0;
                return r ? r.key : void 0;
            }
        }, i.edge = function(t, e) {
            if (this.multi) throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.edge: could not find the "'.concat(t, '" source node in the graph.'));
            if (!this._nodes.has(e)) throw new F('Graph.edge: could not find the "'.concat(e, '" target node in the graph.'));
            var r = n.out && n.out[e] || n.undirected && n.undirected[e] || void 0;
            if (r) return r.key;
        }, i.areDirectedNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && (e in n.in || e in n.out);
        }, i.areOutNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areOutNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.out;
        }, i.areInNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areInNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.in;
        }, i.areUndirectedNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" !== this.type && e in n.undirected;
        }, i.areNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && (e in n.in || e in n.out) || "directed" !== this.type && e in n.undirected;
        }, i.areInboundNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.in || "directed" !== this.type && e in n.undirected;
        }, i.areOutboundNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.out || "directed" !== this.type && e in n.undirected;
        }, i.inDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree;
        }, i.outDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.outDegree;
        }, i.directedDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.directedDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree + e.outDegree;
        }, i.undirectedDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.undirectedDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" === this.type ? 0 : e.undirectedDegree;
        }, i.inboundDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inboundDegree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree), n;
        }, i.outboundDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outboundDegree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.outDegree), n;
        }, i.degree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.degree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree + e.outDegree), n;
        }, i.inDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree - e.directedLoops;
        }, i.outDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.outDegree - e.directedLoops;
        }, i.directedDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree + e.outDegree - 2 * e.directedLoops;
        }, i.undirectedDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" === this.type ? 0 : e.undirectedDegree - 2 * e.undirectedLoops;
        }, i.inboundDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0, r = 0;
            return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.inDegree, r += e.directedLoops), n - r;
        }, i.outboundDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0, r = 0;
            return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.outDegree, r += e.directedLoops), n - r;
        }, i.degreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0, r = 0;
            return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.inDegree + e.outDegree, r += 2 * e.directedLoops), n - r;
        }, i.source = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.source: could not find the "'.concat(t, '" edge in the graph.'));
            return e.source.key;
        }, i.target = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.target: could not find the "'.concat(t, '" edge in the graph.'));
            return e.target.key;
        }, i.extremities = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.extremities: could not find the "'.concat(t, '" edge in the graph.'));
            return [
                e.source.key,
                e.target.key
            ];
        }, i.opposite = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._edges.get(e);
            if (!n) throw new F('Graph.opposite: could not find the "'.concat(e, '" edge in the graph.'));
            var r = n.source.key, i = n.target.key;
            if (t === r) return i;
            if (t === i) return r;
            throw new F('Graph.opposite: the "'.concat(t, '" node is not attached to the "').concat(e, '" edge (').concat(r, ", ").concat(i, ")."));
        }, i.hasExtremity = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._edges.get(t);
            if (!n) throw new F('Graph.hasExtremity: could not find the "'.concat(t, '" edge in the graph.'));
            return n.source.key === e || n.target.key === e;
        }, i.isUndirected = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.isUndirected: could not find the "'.concat(t, '" edge in the graph.'));
            return e.undirected;
        }, i.isDirected = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.isDirected: could not find the "'.concat(t, '" edge in the graph.'));
            return !e.undirected;
        }, i.isSelfLoop = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.isSelfLoop: could not find the "'.concat(t, '" edge in the graph.'));
            return e.source === e.target;
        }, i.addNode = function(t, e) {
            var n = function(t, e, n) {
                if (n && !s(n)) throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n, '"'));
                if (e = "" + e, n = n || {}, t._nodes.has(e)) throw new I('Graph.addNode: the "'.concat(e, '" node already exist in the graph.'));
                var r = new t.NodeDataClass(e, n);
                return t._nodes.set(e, r), t.emit("nodeAdded", {
                    key: e,
                    attributes: n
                }), r;
            }(this, t, e);
            return n.key;
        }, i.mergeNode = function(t, e) {
            if (e && !s(e)) throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e, '"'));
            t = "" + t, e = e || {};
            var n = this._nodes.get(t);
            return n ? (e && (u(n.attributes, e), this.emit("nodeAttributesUpdated", {
                type: "merge",
                key: t,
                attributes: n.attributes,
                data: e
            })), [
                t,
                !1
            ]) : (n = new this.NodeDataClass(t, e), this._nodes.set(t, n), this.emit("nodeAdded", {
                key: t,
                attributes: e
            }), [
                t,
                !0
            ]);
        }, i.updateNode = function(t, e) {
            if (e && "function" != typeof e) throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e, '"'));
            t = "" + t;
            var n = this._nodes.get(t);
            if (n) {
                if (e) {
                    var r = n.attributes;
                    n.attributes = e(r), this.emit("nodeAttributesUpdated", {
                        type: "replace",
                        key: t,
                        attributes: n.attributes
                    });
                }
                return [
                    t,
                    !1
                ];
            }
            var i = e ? e({}) : {};
            return n = new this.NodeDataClass(t, i), this._nodes.set(t, n), this.emit("nodeAdded", {
                key: t,
                attributes: i
            }), [
                t,
                !0
            ];
        }, i.dropNode = function(t) {
            t = "" + t;
            var e, n = this._nodes.get(t);
            if (!n) throw new F('Graph.dropNode: could not find the "'.concat(t, '" node in the graph.'));
            if ("undirected" !== this.type) {
                for(var r in n.out){
                    e = n.out[r];
                    do Mt(this, e), e = e.next;
                    while (e);
                }
                for(var i in n.in){
                    e = n.in[i];
                    do Mt(this, e), e = e.next;
                    while (e);
                }
            }
            if ("directed" !== this.type) for(var o in n.undirected){
                e = n.undirected[o];
                do Mt(this, e), e = e.next;
                while (e);
            }
            this._nodes.delete(t), this.emit("nodeDropped", {
                key: t,
                attributes: n.attributes
            });
        }, i.dropEdge = function(t) {
            var e;
            if (arguments.length > 1) {
                var n = "" + arguments[0], r = "" + arguments[1];
                if (!(e = d(this, n, r, this.type))) throw new F('Graph.dropEdge: could not find the "'.concat(n, '" -> "').concat(r, '" edge in the graph.'));
            } else if (t = "" + t, !(e = this._edges.get(t))) throw new F('Graph.dropEdge: could not find the "'.concat(t, '" edge in the graph.'));
            return Mt(this, e), this;
        }, i.dropDirectedEdge = function(t, e) {
            if (arguments.length < 2) throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi) throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n = d(this, t = "" + t, e = "" + e, "directed");
            if (!n) throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
            return Mt(this, n), this;
        }, i.dropUndirectedEdge = function(t, e) {
            if (arguments.length < 2) throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi) throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n = d(this, t, e, "undirected");
            if (!n) throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
            return Mt(this, n), this;
        }, i.clear = function() {
            this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
        }, i.clearEdges = function() {
            for(var t, e = this._nodes.values(); !0 !== (t = e.next()).done;)t.value.clear();
            this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
        }, i.getAttribute = function(t) {
            return this._attributes[t];
        }, i.getAttributes = function() {
            return this._attributes;
        }, i.hasAttribute = function(t) {
            return this._attributes.hasOwnProperty(t);
        }, i.setAttribute = function(t, e) {
            return this._attributes[t] = e, this.emit("attributesUpdated", {
                type: "set",
                attributes: this._attributes,
                name: t
            }), this;
        }, i.updateAttribute = function(t, e) {
            if ("function" != typeof e) throw new B("Graph.updateAttribute: updater should be a function.");
            var n = this._attributes[t];
            return this._attributes[t] = e(n), this.emit("attributesUpdated", {
                type: "set",
                attributes: this._attributes,
                name: t
            }), this;
        }, i.removeAttribute = function(t) {
            return delete this._attributes[t], this.emit("attributesUpdated", {
                type: "remove",
                attributes: this._attributes,
                name: t
            }), this;
        }, i.replaceAttributes = function(t) {
            if (!s(t)) throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
            return this._attributes = t, this.emit("attributesUpdated", {
                type: "replace",
                attributes: this._attributes
            }), this;
        }, i.mergeAttributes = function(t) {
            if (!s(t)) throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
            return u(this._attributes, t), this.emit("attributesUpdated", {
                type: "merge",
                attributes: this._attributes,
                data: t
            }), this;
        }, i.updateAttributes = function(t) {
            if ("function" != typeof t) throw new B("Graph.updateAttributes: provided updater is not a function.");
            return this._attributes = t(this._attributes), this.emit("attributesUpdated", {
                type: "update",
                attributes: this._attributes
            }), this;
        }, i.updateEachNodeAttributes = function(t, e) {
            if ("function" != typeof t) throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
            if (e && !l(e)) throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for(var n, r, i = this._nodes.values(); !0 !== (n = i.next()).done;)(r = n.value).attributes = t(r.key, r.attributes);
            this.emit("eachNodeAttributesUpdated", {
                hints: e || null
            });
        }, i.updateEachEdgeAttributes = function(t, e) {
            if ("function" != typeof t) throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
            if (e && !l(e)) throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for(var n, r, i, o, a = this._edges.values(); !0 !== (n = a.next()).done;)i = (r = n.value).source, o = r.target, r.attributes = t(r.key, r.attributes, i.key, o.key, i.attributes, o.attributes, r.undirected);
            this.emit("eachEdgeAttributesUpdated", {
                hints: e || null
            });
        }, i.forEachAdjacencyEntry = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
            xt(!1, !1, !1, this, t);
        }, i.forEachAdjacencyEntryWithOrphans = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
            xt(!1, !1, !0, this, t);
        }, i.forEachAssymetricAdjacencyEntry = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
            xt(!1, !0, !1, this, t);
        }, i.forEachAssymetricAdjacencyEntryWithOrphans = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
            xt(!1, !0, !0, this, t);
        }, i.nodes = function() {
            return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
        }, i.forEachNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)t((n = e.value).key, n.attributes);
        }, i.findNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.findNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (t((n = e.value).key, n.attributes)) return n.key;
        }, i.mapNodes = function(t) {
            if ("function" != typeof t) throw new B("Graph.mapNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(), i = new Array(this.order), o = 0; !0 !== (e = r.next()).done;)n = e.value, i[o++] = t(n.key, n.attributes);
            return i;
        }, i.someNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.someNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (t((n = e.value).key, n.attributes)) return !0;
            return !1;
        }, i.everyNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.everyNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (!t((n = e.value).key, n.attributes)) return !1;
            return !0;
        }, i.filterNodes = function(t) {
            if ("function" != typeof t) throw new B("Graph.filterNodes: expecting a callback.");
            for(var e, n, r = this._nodes.values(), i = []; !0 !== (e = r.next()).done;)t((n = e.value).key, n.attributes) && i.push(n.key);
            return i;
        }, i.reduceNodes = function(t, e) {
            if ("function" != typeof t) throw new B("Graph.reduceNodes: expecting a callback.");
            if (arguments.length < 2) throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
            for(var n, r, i = e, o = this._nodes.values(); !0 !== (n = o.next()).done;)i = t(i, (r = n.value).key, r.attributes);
            return i;
        }, i.nodeEntries = function() {
            var t = this._nodes.values();
            return new O(function() {
                var e = t.next();
                if (e.done) return e;
                var n = e.value;
                return {
                    value: {
                        node: n.key,
                        attributes: n.attributes
                    },
                    done: !1
                };
            });
        }, i.export = function() {
            var t = this, e = new Array(this._nodes.size), n = 0;
            this._nodes.forEach(function(t, r) {
                e[n++] = function(t, e) {
                    var n = {
                        key: t
                    };
                    return h(e.attributes) || (n.attributes = u({}, e.attributes)), n;
                }(r, t);
            });
            var r = new Array(this._edges.size);
            return n = 0, this._edges.forEach(function(e, i) {
                r[n++] = function(t, e, n) {
                    var r = {
                        key: e,
                        source: n.source.key,
                        target: n.target.key
                    };
                    return h(n.attributes) || (r.attributes = u({}, n.attributes)), "mixed" === t && n.undirected && (r.undirected = !0), r;
                }(t.type, i, e);
            }), {
                options: {
                    type: this.type,
                    multi: this.multi,
                    allowSelfLoops: this.allowSelfLoops
                },
                attributes: this.getAttributes(),
                nodes: e,
                edges: r
            };
        }, i.import = function(t) {
            var e, n, i, o, a, c = this, u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t instanceof r) return t.forEachNode(function(t, e) {
                u ? c.mergeNode(t, e) : c.addNode(t, e);
            }), t.forEachEdge(function(t, e, n, r, i, o, a) {
                u ? a ? c.mergeUndirectedEdgeWithKey(t, n, r, e) : c.mergeDirectedEdgeWithKey(t, n, r, e) : a ? c.addUndirectedEdgeWithKey(t, n, r, e) : c.addDirectedEdgeWithKey(t, n, r, e);
            }), this;
            if (!s(t)) throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
            if (t.attributes) {
                if (!s(t.attributes)) throw new B("Graph.import: invalid attributes. Expecting a plain object.");
                u ? this.mergeAttributes(t.attributes) : this.replaceAttributes(t.attributes);
            }
            if (t.nodes) {
                if (i = t.nodes, !Array.isArray(i)) throw new B("Graph.import: invalid nodes. Expecting an array.");
                for(e = 0, n = i.length; e < n; e++){
                    Et(o = i[e]);
                    var d = o, h = d.key, p = d.attributes;
                    u ? this.mergeNode(h, p) : this.addNode(h, p);
                }
            }
            if (t.edges) {
                var f = !1;
                if ("undirected" === this.type && (f = !0), i = t.edges, !Array.isArray(i)) throw new B("Graph.import: invalid edges. Expecting an array.");
                for(e = 0, n = i.length; e < n; e++){
                    At(a = i[e]);
                    var l = a, g = l.source, y = l.target, w = l.attributes, v = l.undirected, b = void 0 === v ? f : v;
                    "key" in a ? (u ? b ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a.key, g, y, w) : (u ? b ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g, y, w);
                }
            }
            return this;
        }, i.nullCopy = function(t) {
            var e = new r(u({}, this._options, t));
            return e.replaceAttributes(u({}, this.getAttributes())), e;
        }, i.emptyCopy = function(t) {
            var e = this.nullCopy(t);
            return this._nodes.forEach(function(t, n) {
                var r = u({}, t.attributes);
                t = new e.NodeDataClass(n, r), e._nodes.set(n, t);
            }), e;
        }, i.copy = function(t) {
            if ("string" == typeof (t = t || {}).type && t.type !== this.type && "mixed" !== t.type) throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t.type, '" because this would mean losing information about the current graph.'));
            if ("boolean" == typeof t.multi && t.multi !== this.multi && !0 !== t.multi) throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
            if ("boolean" == typeof t.allowSelfLoops && t.allowSelfLoops !== this.allowSelfLoops && !0 !== t.allowSelfLoops) throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
            for(var e, n, r = this.emptyCopy(t), i = this._edges.values(); !0 !== (e = i.next()).done;)jt(r, "copy", !1, (n = e.value).undirected, n.key, n.source.key, n.target.key, u({}, n.attributes));
            return r;
        }, i.toJSON = function() {
            return this.export();
        }, i.toString = function() {
            return "[object Graph]";
        }, i.inspect = function() {
            var e = this, n = {};
            this._nodes.forEach(function(t, e) {
                n[e] = t.attributes;
            });
            var r = {}, i = {};
            this._edges.forEach(function(t, n) {
                var o, a = t.undirected ? "--" : "->", c = "", u = t.source.key, d = t.target.key;
                t.undirected && u > d && (o = u, u = d, d = o);
                var s = "(".concat(u, ")").concat(a, "(").concat(d, ")");
                n.startsWith("geid_") ? e.multi && (void 0 === i[s] ? i[s] = 0 : i[s]++, c += "".concat(i[s], ". ")) : c += "[".concat(n, "]: "), r[c += s] = t.attributes;
            });
            var o = {};
            for(var a in this)this.hasOwnProperty(a) && !Ut.has(a) && "function" != typeof this[a] && "symbol" !== t(a) && (o[a] = this[a]);
            return o.attributes = this._attributes, o.nodes = n, o.edges = r, p(o, "constructor", this.constructor), o;
        }, r;
    }(y.exports.EventEmitter);
    "undefined" != typeof Symbol && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [
        {
            name: function(t) {
                return "".concat(t, "Edge");
            },
            generateKey: !0
        },
        {
            name: function(t) {
                return "".concat(t, "DirectedEdge");
            },
            generateKey: !0,
            type: "directed"
        },
        {
            name: function(t) {
                return "".concat(t, "UndirectedEdge");
            },
            generateKey: !0,
            type: "undirected"
        },
        {
            name: function(t) {
                return "".concat(t, "EdgeWithKey");
            }
        },
        {
            name: function(t) {
                return "".concat(t, "DirectedEdgeWithKey");
            },
            type: "directed"
        },
        {
            name: function(t) {
                return "".concat(t, "UndirectedEdgeWithKey");
            },
            type: "undirected"
        }
    ].forEach(function(t) {
        [
            "add",
            "merge",
            "update"
        ].forEach(function(e) {
            var n = t.name(e), r = "add" === e ? jt : Ct;
            t.generateKey ? zt.prototype[n] = function(i, o, a) {
                return r(this, n, !0, "undirected" === (t.type || this.type), null, i, o, a, "update" === e);
            } : zt.prototype[n] = function(i, o, a, c) {
                return r(this, n, !1, "undirected" === (t.type || this.type), i, o, a, c, "update" === e);
            };
        });
    }), function(t) {
        Q.forEach(function(e) {
            var n = e.name, r = e.attacher;
            r(t, n("Node"), 0), r(t, n("Source"), 1), r(t, n("Target"), 2), r(t, n("Opposite"), 3);
        });
    }(zt), function(t) {
        X.forEach(function(e) {
            var n = e.name, r = e.attacher;
            r(t, n("Edge"), "mixed"), r(t, n("DirectedEdge"), "directed"), r(t, n("UndirectedEdge"), "undirected");
        });
    }(zt), function(t) {
        et.forEach(function(e) {
            !function(t, e) {
                var n = e.name, r = e.type, i = e.direction;
                t.prototype[n] = function(t, e) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
                    if (!arguments.length) return ut(this, r);
                    if (1 === arguments.length) {
                        t = "" + t;
                        var o = this._nodes.get(t);
                        if (void 0 === o) throw new F("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
                        return pt(this.multi, "mixed" === r ? this.type : r, i, o);
                    }
                    if (2 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var a = this._nodes.get(t);
                        if (!a) throw new F("Graph.".concat(n, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new F("Graph.".concat(n, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return gt(r, this.multi, i, a, e);
                    }
                    throw new B("Graph.".concat(n, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = "forEach" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[o] = function(t, e, n) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        if (1 === arguments.length) return dt(!1, this, r, n = t);
                        if (2 === arguments.length) {
                            t = "" + t, n = e;
                            var a = this._nodes.get(t);
                            if (void 0 === a) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                            return ht(!1, this.multi, "mixed" === r ? this.type : r, i, a, n);
                        }
                        if (3 === arguments.length) {
                            t = "" + t, e = "" + e;
                            var c = this._nodes.get(t);
                            if (!c) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                            if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                            return lt(!1, r, this.multi, i, c, e, n);
                        }
                        throw new B("Graph.".concat(o, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                    }
                };
                var a = "map" + n[0].toUpperCase() + n.slice(1);
                t.prototype[a] = function() {
                    var t, e = Array.prototype.slice.call(arguments), n = e.pop();
                    if (0 === e.length) {
                        var i = 0;
                        "directed" !== r && (i += this.undirectedSize), "undirected" !== r && (i += this.directedSize), t = new Array(i);
                        var a = 0;
                        e.push(function(e, r, i, o, c, u, d) {
                            t[a++] = n(e, r, i, o, c, u, d);
                        });
                    } else t = [], e.push(function(e, r, i, o, a, c, u) {
                        t.push(n(e, r, i, o, a, c, u));
                    });
                    return this[o].apply(this, e), t;
                };
                var c = "filter" + n[0].toUpperCase() + n.slice(1);
                t.prototype[c] = function() {
                    var t = Array.prototype.slice.call(arguments), e = t.pop(), n = [];
                    return t.push(function(t, r, i, o, a, c, u) {
                        e(t, r, i, o, a, c, u) && n.push(t);
                    }), this[o].apply(this, t), n;
                };
                var u = "reduce" + n[0].toUpperCase() + n.slice(1);
                t.prototype[u] = function() {
                    var t, e, n = Array.prototype.slice.call(arguments);
                    if (n.length < 2 || n.length > 4) throw new B("Graph.".concat(u, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n.length, ")."));
                    if ("function" == typeof n[n.length - 1] && "function" != typeof n[n.length - 2]) throw new B("Graph.".concat(u, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                    2 === n.length ? (t = n[0], e = n[1], n = []) : 3 === n.length ? (t = n[1], e = n[2], n = [
                        n[0]
                    ]) : 4 === n.length && (t = n[2], e = n[3], n = [
                        n[0],
                        n[1]
                    ]);
                    var r = e;
                    return n.push(function(e, n, i, o, a, c, u) {
                        r = t(r, e, n, i, o, a, c, u);
                    }), this[o].apply(this, n), r;
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = "find" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[o] = function(t, e, n) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return !1;
                    if (1 === arguments.length) return dt(!0, this, r, n = t);
                    if (2 === arguments.length) {
                        t = "" + t, n = e;
                        var a = this._nodes.get(t);
                        if (void 0 === a) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        return ht(!0, this.multi, "mixed" === r ? this.type : r, i, a, n);
                    }
                    if (3 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var c = this._nodes.get(t);
                        if (!c) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return lt(!0, r, this.multi, i, c, e, n);
                    }
                    throw new B("Graph.".concat(o, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                };
                var a = "some" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[a] = function() {
                    var t = Array.prototype.slice.call(arguments), e = t.pop();
                    return t.push(function(t, n, r, i, o, a, c) {
                        return e(t, n, r, i, o, a, c);
                    }), !!this[o].apply(this, t);
                };
                var c = "every" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[c] = function() {
                    var t = Array.prototype.slice.call(arguments), e = t.pop();
                    return t.push(function(t, n, r, i, o, a, c) {
                        return !e(t, n, r, i, o, a, c);
                    }), !this[o].apply(this, t);
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = n.slice(0, -1) + "Entries";
                t.prototype[o] = function(t, e) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
                    if (!arguments.length) return st(this, r);
                    if (1 === arguments.length) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (!n) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        return ft(r, i, n);
                    }
                    if (2 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var a = this._nodes.get(t);
                        if (!a) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return yt(r, i, a, e);
                    }
                    throw new B("Graph.".concat(o, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
                };
            }(t, e);
        });
    }(zt), function(t) {
        wt.forEach(function(e) {
            _t(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = "forEach" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[o] = function(t, e) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        mt(!1, "mixed" === r ? this.type : r, i, n, e);
                    }
                };
                var a = "map" + n[0].toUpperCase() + n.slice(1);
                t.prototype[a] = function(t, e) {
                    var n = [];
                    return this[o](t, function(t, r) {
                        n.push(e(t, r));
                    }), n;
                };
                var c = "filter" + n[0].toUpperCase() + n.slice(1);
                t.prototype[c] = function(t, e) {
                    var n = [];
                    return this[o](t, function(t, r) {
                        e(t, r) && n.push(t);
                    }), n;
                };
                var u = "reduce" + n[0].toUpperCase() + n.slice(1);
                t.prototype[u] = function(t, e, n) {
                    if (arguments.length < 3) throw new B("Graph.".concat(u, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                    var r = n;
                    return this[o](t, function(t, n) {
                        r = e(r, t, n);
                    }), r;
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = n[0].toUpperCase() + n.slice(1, -1), a = "find" + o;
                t.prototype[a] = function(t, e) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n) throw new F("Graph.".concat(a, ': could not find the "').concat(t, '" node in the graph.'));
                        return mt(!0, "mixed" === r ? this.type : r, i, n, e);
                    }
                };
                var c = "some" + o;
                t.prototype[c] = function(t, e) {
                    return !!this[a](t, e);
                };
                var u = "every" + o;
                t.prototype[u] = function(t, e) {
                    return !this[a](t, function(t, n) {
                        return !e(t, n);
                    });
                };
            }(t, e), Gt(t, e);
        });
    }(zt);
    var Wt = function(t) {
        function n(e) {
            var n = u({
                type: "directed"
            }, e);
            if ("multi" in n && !1 !== n.multi) throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("directed" !== n.type) throw new B('DirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Pt = function(t) {
        function n(e) {
            var n = u({
                type: "undirected"
            }, e);
            if ("multi" in n && !1 !== n.multi) throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("undirected" !== n.type) throw new B('UndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Rt = function(t) {
        function n(e) {
            var n = u({
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Kt = function(t) {
        function n(e) {
            var n = u({
                type: "directed",
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("directed" !== n.type) throw new B('MultiDirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Tt = function(t) {
        function n(e) {
            var n = u({
                type: "undirected",
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("undirected" !== n.type) throw new B('MultiUndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt);
    function Bt(t) {
        t.from = function(e, n) {
            var r = u({}, e.options, n), i = new t(r);
            return i.import(e), i;
        };
    }
    return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
});

},{}],"gRcTH":[function(require,module,exports) {
/**
 * Graphology Force Layout Worker
 * ===============================
 *
 * A worker made for running a force layout live.
 *
 * Note that it does not run in a webworker yet but respect animation frames.
 */ const isGraph = require("bf46d4a034a07588");
const resolveDefaults = require("3fffbbec3e256779");
const iterate = require("1ee43fbd82080384");
const helpers = require("8bee297df1754484");
const DEFAULTS = require("7074fd9aba984b7c");
function ForceSupervisor(graph, params) {
    // Validation
    if (!isGraph(graph)) throw new Error("graphology-layout-force/worker: the given graph is not a valid graphology instance.");
    params = resolveDefaults(params, DEFAULTS);
    this.callbacks = {};
    if (params.onConverged) this.callbacks.onConverged = params.onConverged;
    this.graph = graph;
    this.params = params;
    this.nodeStates = {};
    this.frameID = null;
    this.running = false;
    this.killed = false;
// TODO: hook listeners on graph to listen to dropNode, dropEdge, clear, clearEdges
}
ForceSupervisor.prototype.isRunning = function() {
    return this.running;
};
ForceSupervisor.prototype.runFrame = function() {
    let { converged } = iterate(this.graph, this.nodeStates, this.params);
    helpers.assignLayoutChanges(this.graph, this.nodeStates, this.params);
    // TODO: figure out convergence
    converged = false;
    if (converged) {
        if (this.callbacks.onConverged) this.callbacks.onConverged();
        this.stop();
    } else this.frameID = window.requestAnimationFrame(()=>this.runFrame());
};
ForceSupervisor.prototype.stop = function() {
    this.running = false;
    if (this.frameID !== null) {
        window.cancelAnimationFrame(this.frameID);
        this.frameID = null;
    }
    return this;
};
ForceSupervisor.prototype.start = function() {
    if (this.killed) throw new Error("graphology-layout-force/worker.start: layout was killed.");
    if (this.running) return;
    this.running = true;
    this.runFrame();
};
ForceSupervisor.prototype.kill = function() {
    this.stop();
    delete this.nodeStates;
    this.killed = true;
// TODO: cleanup events
};
module.exports = ForceSupervisor;

},{"bf46d4a034a07588":"9Cax7","3fffbbec3e256779":"lK0QR","1ee43fbd82080384":"2BMVy","8bee297df1754484":"hRgLu","7074fd9aba984b7c":"4AE03"}],"lK0QR":[function(require,module,exports) {
/**
 * Graphology Defaults
 * ====================
 *
 * Helper function used throughout the standard lib to resolve defaults.
 */ function isLeaf(o) {
    return !o || typeof o !== "object" || typeof o === "function" || Array.isArray(o) || o instanceof Set || o instanceof Map || o instanceof RegExp || o instanceof Date;
}
function resolveDefaults(target, defaults) {
    target = target || {};
    var output = {};
    for(var k in defaults){
        var existing = target[k];
        var def = defaults[k];
        // Recursion
        if (!isLeaf(def)) {
            output[k] = resolveDefaults(existing, def);
            continue;
        }
        // Leaf
        if (existing === undefined) output[k] = def;
        else output[k] = existing;
    }
    return output;
}
module.exports = resolveDefaults;

},{}],"2BMVy":[function(require,module,exports) {
/**
 * Graphology Force Layout Iteration
 * ==================================
 *
 * Function describing a single iteration of the force layout.
 */ const { createNodeValueGetter, createEdgeValueGetter } = require("6440fe4741766b0f");
// const EPSILON = -Infinity;
// function isVeryCloseToZero(x) {
//   return Math.abs(x) < EPSILON;
// }
module.exports = function iterate(graph, nodeStates, params) {
    const { nodeXAttribute: xKey, nodeYAttribute: yKey } = params;
    const { attraction, repulsion, gravity, inertia, maxMove } = params.settings;
    let { shouldSkipNode, shouldSkipEdge, isNodeFixed } = params;
    isNodeFixed = createNodeValueGetter(isNodeFixed);
    shouldSkipNode = createNodeValueGetter(shouldSkipNode, false);
    shouldSkipEdge = createEdgeValueGetter(shouldSkipEdge, false);
    const nodes = graph.filterNodes((n, attr)=>{
        return !shouldSkipNode.fromEntry(n, attr);
    });
    const adjustedOrder = nodes.length;
    // Check nodeStatess and inertia
    for(let i = 0; i < adjustedOrder; i++){
        const n = nodes[i];
        const attr = graph.getNodeAttributes(n);
        const nodeState = nodeStates[n];
        if (!nodeState) nodeStates[n] = {
            dx: 0,
            dy: 0,
            x: attr[xKey] || 0,
            y: attr[yKey] || 0
        };
        else nodeStates[n] = {
            dx: nodeState.dx * inertia,
            dy: nodeState.dy * inertia,
            x: attr[xKey] || 0,
            y: attr[yKey] || 0
        };
    }
    // Repulsion
    if (repulsion) for(let i = 0; i < adjustedOrder; i++){
        const n1 = nodes[i];
        const n1State = nodeStates[n1];
        for(let j = i + 1; j < adjustedOrder; j++){
            const n2 = nodes[j];
            const n2State = nodeStates[n2];
            // Compute distance:
            const dx = n2State.x - n1State.x;
            const dy = n2State.y - n1State.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            // Repulse nodes relatively to 1 / distance:
            const repulsionX = repulsion / distance * dx;
            const repulsionY = repulsion / distance * dy;
            n1State.dx -= repulsionX;
            n1State.dy -= repulsionY;
            n2State.dx += repulsionX;
            n2State.dy += repulsionY;
        }
    }
    // Attraction
    if (attraction) graph.forEachEdge((edge, attr, source, target, sourceAttr, targetAttr, undirected)=>{
        if (source === target) return;
        if (shouldSkipNode.fromEntry(source, sourceAttr) || shouldSkipNode.fromEntry(target, targetAttr)) return;
        if (shouldSkipEdge.fromEntry(edge, attr, source, target, sourceAttr, targetAttr, undirected)) return;
        const n1State = nodeStates[source];
        const n2State = nodeStates[target];
        // Compute distance:
        const dx = n2State.x - n1State.x;
        const dy = n2State.y - n1State.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        // Attract nodes relatively to their distance:
        const attractionX = attraction * distance * dx;
        const attractionY = attraction * distance * dy;
        n1State.dx += attractionX;
        n1State.dy += attractionY;
        n2State.dx -= attractionX;
        n2State.dy -= attractionY;
    });
    // Gravity
    if (gravity) for(let i = 0; i < adjustedOrder; i++){
        const n = nodes[i];
        const nodeState = nodeStates[n];
        // Attract nodes to [0, 0] relatively to the distance:
        const { x, y } = nodeState;
        const distance = Math.sqrt(x * x + y * y) || 1;
        nodeStates[n].dx -= x * gravity * distance;
        nodeStates[n].dy -= y * gravity * distance;
    }
    // Apply forces
    const converged = false;
    for(let i = 0; i < adjustedOrder; i++){
        const n = nodes[i];
        const nodeState = nodeStates[n];
        const distance = Math.sqrt(nodeState.dx * nodeState.dx + nodeState.dy * nodeState.dy);
        if (distance > maxMove) {
            nodeState.dx *= maxMove / distance;
            nodeState.dy *= maxMove / distance;
        }
        // if (!isVeryCloseToZero(nodeState.dx) || !isVeryCloseToZero(nodeState.dy)) {
        //   converged = false;
        // }
        if (!isNodeFixed.fromGraph(graph, n)) {
            nodeState.x += nodeState.dx;
            nodeState.y += nodeState.dy;
            nodeState.fixed = false;
        } else nodeState.fixed = true;
    // NOTE: possibility to assign here to save one loop in the future
    }
    return {
        converged
    };
};

},{"6440fe4741766b0f":"g8ceC"}],"g8ceC":[function(require,module,exports) {
/**
 * Graphology Weight Getter
 * =========================
 *
 * Function creating weight getters.
 */ function coerceWeight(value) {
    // Ensuring target value is a correct number
    if (typeof value !== "number" || isNaN(value)) return 1;
    return value;
}
function createNodeValueGetter(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v) {
        if (typeof v === "undefined") return defaultValue;
        return v;
    };
    if (typeof defaultValue === "function") coerceToDefault = defaultValue;
    var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
        return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === "string") {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, node) {
            return get(graph.getNodeAttributes(node));
        };
        getter.fromEntry = function(node, attributes) {
            return get(attributes);
        };
    } else if (typeof nameOrFunction === "function") {
        getter.fromAttributes = function() {
            throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.");
        };
        getter.fromGraph = function(graph, node) {
            return coerceToDefault(nameOrFunction(node, graph.getNodeAttributes(node)));
        };
        getter.fromEntry = function(node, attributes) {
            return coerceToDefault(nameOrFunction(node, attributes));
        };
    } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
    }
    return getter;
}
function createEdgeValueGetter(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v) {
        if (typeof v === "undefined") return defaultValue;
        return v;
    };
    if (typeof defaultValue === "function") coerceToDefault = defaultValue;
    var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
        return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === "string") {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, edge) {
            return get(graph.getEdgeAttributes(edge));
        };
        getter.fromEntry = function(edge, attributes) {
            return get(attributes);
        };
        getter.fromPartialEntry = getter.fromEntry;
        getter.fromMinimalEntry = getter.fromEntry;
    } else if (typeof nameOrFunction === "function") {
        getter.fromAttributes = function() {
            throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.");
        };
        getter.fromGraph = function(graph, edge) {
            // TODO: we can do better, check #310
            var extremities = graph.extremities(edge);
            return coerceToDefault(nameOrFunction(edge, graph.getEdgeAttributes(edge), extremities[0], extremities[1], graph.getNodeAttributes(extremities[0]), graph.getNodeAttributes(extremities[1]), graph.isUndirected(edge)));
        };
        getter.fromEntry = function(e, a, s, t, sa, ta, u) {
            return coerceToDefault(nameOrFunction(e, a, s, t, sa, ta, u));
        };
        getter.fromPartialEntry = function(e, a, s, t) {
            return coerceToDefault(nameOrFunction(e, a, s, t));
        };
        getter.fromMinimalEntry = function(e, a) {
            return coerceToDefault(nameOrFunction(e, a));
        };
    } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
        getter.fromMinimalEntry = returnDefault;
    }
    return getter;
}
exports.createNodeValueGetter = createNodeValueGetter;
exports.createEdgeValueGetter = createEdgeValueGetter;
exports.createEdgeWeightGetter = function(name) {
    return createEdgeValueGetter(name, coerceWeight);
};

},{}],"hRgLu":[function(require,module,exports) {
/**
 * Graphology Force Layout Helpers
 * ================================
 *
 * Miscellaneous helper functions related to the force layout.
 */ exports.assignLayoutChanges = function(graph, nodeStates, params) {
    const { nodeXAttribute: x, nodeYAttribute: y } = params;
    graph.updateEachNodeAttributes((n, attr)=>{
        const state = nodeStates[n];
        if (!state || state.fixed) return attr;
        attr[x] = state.x;
        attr[y] = state.y;
        return attr;
    }, {
        attributes: [
            "x",
            "y"
        ]
    });
};
exports.collectLayoutChanges = function(nodeStates) {
    const mapping = {};
    for(const n in nodeStates){
        const state = nodeStates[n];
        mapping[n] = {
            x: state.x,
            y: state.y
        };
    }
    return mapping;
};

},{}],"4AE03":[function(require,module,exports) {
/**
 * Graphology Force Layout Defaults
 * =================================
 *
 * Default options & settings used by the library.
 */ module.exports = {
    nodeXAttribute: "x",
    nodeYAttribute: "y",
    isNodeFixed: "fixed",
    shouldSkipNode: null,
    shouldSkipEdge: null,
    settings: {
        attraction: 0.0005,
        repulsion: 0.1,
        gravity: 0.0001,
        inertia: 0.6,
        maxMove: 200
    }
};

},{}],"k5Arr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
parcelHelpers.export(exports, "MouseCaptor", ()=>MouseCaptor);
parcelHelpers.export(exports, "Sigma", ()=>Sigma$1);
parcelHelpers.export(exports, "TouchCaptor", ()=>TouchCaptor);
parcelHelpers.export(exports, "default", ()=>Sigma);
var _inherits8Fbdedb5EsmJs = require("./inherits-8fbdedb5.esm.js");
var _index766050CdEsmJs = require("./index-766050cd.esm.js");
var _sigmaTypesEsmJs = require("../types/dist/sigma-types.esm.js");
var _normalization6Ad2Dc39EsmJs = require("./normalization-6ad2dc39.esm.js");
var _colors2F6D17F0EsmJs = require("./colors-2f6d17f0.esm.js");
var _sigmaSettingsEsmJs = require("../settings/dist/sigma-settings.esm.js");
var _data31990A76EsmJs = require("./data-31990a76.esm.js");
var _events = require("events");
var _isGraph = require("graphology-utils/is-graph");
/**
 * Defaults.
 */ var DEFAULT_ZOOMING_RATIO = 1.5;
/**
 * Event types.
 */ /**
 * Camera class
 *
 * @constructor
 */ var Camera = /*#__PURE__*/ function(_TypedEventEmitter) {
    (0, _inherits8Fbdedb5EsmJs._)(Camera, _TypedEventEmitter);
    function Camera() {
        var _this;
        (0, _inherits8Fbdedb5EsmJs.a)(this, Camera);
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, Camera);
        // State
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "x", 0.5);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "y", 0.5);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "angle", 0);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "ratio", 1);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "minRatio", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "maxRatio", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "enabledRotation", true);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nextFrame", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "previousState", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "enabled", true);
        _this.previousState = _this.getState();
        return _this;
    }
    /**
   * Static method used to create a Camera object with a given state.
   *
   * @param state
   * @return {Camera}
   */ (0, _inherits8Fbdedb5EsmJs.d)(Camera, [
        {
            key: "enable",
            value: /**
     * Method used to enable the camera.
     *
     * @return {Camera}
     */ function enable() {
                this.enabled = true;
                return this;
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.enabled = false;
                return this;
            }
        },
        {
            key: "getState",
            value: function getState() {
                return {
                    x: this.x,
                    y: this.y,
                    angle: this.angle,
                    ratio: this.ratio
                };
            }
        },
        {
            key: "hasState",
            value: function hasState(state) {
                return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
            }
        },
        {
            key: "getPreviousState",
            value: function getPreviousState() {
                var state = this.previousState;
                if (!state) return null;
                return {
                    x: state.x,
                    y: state.y,
                    angle: state.angle,
                    ratio: state.ratio
                };
            }
        },
        {
            key: "getBoundedRatio",
            value: function getBoundedRatio(ratio) {
                var r = ratio;
                if (typeof this.minRatio === "number") r = Math.max(r, this.minRatio);
                if (typeof this.maxRatio === "number") r = Math.min(r, this.maxRatio);
                return r;
            }
        },
        {
            key: "validateState",
            value: function validateState(state) {
                var validatedState = {};
                if (typeof state.x === "number") validatedState.x = state.x;
                if (typeof state.y === "number") validatedState.y = state.y;
                if (this.enabledRotation && typeof state.angle === "number") validatedState.angle = state.angle;
                if (typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
                return validatedState;
            }
        },
        {
            key: "isAnimated",
            value: function isAnimated() {
                return !!this.nextFrame;
            }
        },
        {
            key: "setState",
            value: function setState(state) {
                if (!this.enabled) return this;
                // TODO: update by function
                // Keeping track of last state
                this.previousState = this.getState();
                var validState = this.validateState(state);
                if (typeof validState.x === "number") this.x = validState.x;
                if (typeof validState.y === "number") this.y = validState.y;
                if (this.enabledRotation && typeof validState.angle === "number") this.angle = validState.angle;
                if (typeof validState.ratio === "number") this.ratio = validState.ratio;
                // Emitting
                if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
                return this;
            }
        },
        {
            key: "updateState",
            value: function updateState(updater) {
                this.setState(updater(this.getState()));
                return this;
            }
        },
        {
            key: "animate",
            value: function animate(state, opts, callback) {
                var _this2 = this;
                if (!this.enabled) return;
                var options = Object.assign({}, (0, _normalization6Ad2Dc39EsmJs.A), opts);
                var validState = this.validateState(state);
                var easing = typeof options.easing === "function" ? options.easing : (0, _normalization6Ad2Dc39EsmJs.e)[options.easing];
                // State
                var start = Date.now(), initialState = this.getState();
                // Function performing the animation
                var fn = function fn() {
                    var t = (Date.now() - start) / options.duration;
                    // The animation is over:
                    if (t >= 1) {
                        _this2.nextFrame = null;
                        _this2.setState(validState);
                        if (_this2.animationCallback) {
                            _this2.animationCallback.call(null);
                            _this2.animationCallback = undefined;
                        }
                        return;
                    }
                    var coefficient = easing(t);
                    var newState = {};
                    if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
                    if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
                    if (_this2.enabledRotation && typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
                    if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
                    _this2.setState(newState);
                    _this2.nextFrame = requestAnimationFrame(fn);
                };
                if (this.nextFrame) {
                    cancelAnimationFrame(this.nextFrame);
                    if (this.animationCallback) this.animationCallback.call(null);
                    this.nextFrame = requestAnimationFrame(fn);
                } else fn();
                this.animationCallback = callback;
            }
        },
        {
            key: "animatedZoom",
            value: function animatedZoom(factorOrOptions) {
                if (!factorOrOptions) this.animate({
                    ratio: this.ratio / DEFAULT_ZOOMING_RATIO
                });
                else {
                    if (typeof factorOrOptions === "number") return this.animate({
                        ratio: this.ratio / factorOrOptions
                    });
                    else this.animate({
                        ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
                    }, factorOrOptions);
                }
            }
        },
        {
            key: "animatedUnzoom",
            value: function animatedUnzoom(factorOrOptions) {
                if (!factorOrOptions) this.animate({
                    ratio: this.ratio * DEFAULT_ZOOMING_RATIO
                });
                else {
                    if (typeof factorOrOptions === "number") return this.animate({
                        ratio: this.ratio * factorOrOptions
                    });
                    else this.animate({
                        ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
                    }, factorOrOptions);
                }
            }
        },
        {
            key: "animatedReset",
            value: function animatedReset(options) {
                this.animate({
                    x: 0.5,
                    y: 0.5,
                    ratio: 1,
                    angle: 0
                }, options);
            }
        },
        {
            key: "copy",
            value: function copy() {
                return Camera.from(this.getState());
            }
        }
    ], [
        {
            key: "from",
            value: function from(state) {
                var camera = new Camera();
                return camera.setState(state);
            }
        }
    ]);
    return Camera;
}((0, _sigmaTypesEsmJs.TypedEventEmitter));
/**
 * Captor utils functions
 * ======================
 */ /**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */ function getPosition(e, dom) {
    var bbox = dom.getBoundingClientRect();
    return {
        x: e.clientX - bbox.left,
        y: e.clientY - bbox.top
    };
}
/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */ function getMouseCoords(e, dom) {
    var res = (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, getPosition(e, dom)), {}, {
        sigmaDefaultPrevented: false,
        preventSigmaDefault: function preventSigmaDefault() {
            res.sigmaDefaultPrevented = true;
        },
        original: e
    });
    return res;
}
/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */ function getWheelCoords(e, dom) {
    return (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, getMouseCoords(e, dom)), {}, {
        delta: getWheelDelta(e)
    });
}
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
    var arr = [];
    for(var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++)arr.push(touches[i]);
    return arr;
}
/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e   - A touch event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */ function getTouchCoords(e, dom) {
    return {
        touches: getTouchesArray(e.touches).map(function(touch) {
            return getPosition(touch, dom);
        }),
        original: e
    };
}
/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */ function getWheelDelta(e) {
    // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
    if (typeof e.deltaY !== "undefined") return e.deltaY * -3 / 360;
    if (typeof e.detail !== "undefined") return e.detail / -9;
    throw new Error("Captor: could not extract delta from event.");
}
/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */ var Captor = /*#__PURE__*/ function(_TypedEventEmitter) {
    (0, _inherits8Fbdedb5EsmJs._)(Captor, _TypedEventEmitter);
    function Captor(container, renderer) {
        var _this;
        (0, _inherits8Fbdedb5EsmJs.a)(this, Captor);
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, Captor);
        // Properties
        _this.container = container;
        _this.renderer = renderer;
        return _this;
    }
    return (0, _inherits8Fbdedb5EsmJs.d)(Captor);
}((0, _sigmaTypesEsmJs.TypedEventEmitter));
/**
 * Constants.
 */ var DRAG_TIMEOUT$1 = 100;
var DRAGGED_EVENTS_TOLERANCE = 3;
var MOUSE_INERTIA_DURATION = 200;
var MOUSE_INERTIA_RATIO = 3;
var MOUSE_ZOOM_DURATION = 250;
var ZOOMING_RATIO = 1.7;
var DOUBLE_CLICK_TIMEOUT = 300;
var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
var DOUBLE_CLICK_ZOOMING_DURATION = 200;
/**
 * Event types.
 */ /**
 * Mouse captor class.
 *
 * @constructor
 */ var MouseCaptor = /*#__PURE__*/ function(_Captor) {
    (0, _inherits8Fbdedb5EsmJs._)(MouseCaptor, _Captor);
    function MouseCaptor(container, renderer) {
        var _this;
        (0, _inherits8Fbdedb5EsmJs.a)(this, MouseCaptor);
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, MouseCaptor, [
            container,
            renderer
        ]);
        // Binding methods
        // State
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "enabled", true);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "draggedEvents", 0);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "downStartTime", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "lastMouseX", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "lastMouseY", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "isMouseDown", false);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "isMoving", false);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "movingTimeout", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "startCameraState", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "clicks", 0);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "doubleClickTimeout", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "currentWheelDirection", 0);
        _this.handleClick = _this.handleClick.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleRightClick = _this.handleRightClick.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleDown = _this.handleDown.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleUp = _this.handleUp.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleMove = _this.handleMove.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleWheel = _this.handleWheel.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleLeave = _this.handleLeave.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleEnter = _this.handleEnter.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        // Binding events
        container.addEventListener("click", _this.handleClick, false);
        container.addEventListener("contextmenu", _this.handleRightClick, false);
        container.addEventListener("mousedown", _this.handleDown, false);
        container.addEventListener("wheel", _this.handleWheel, false);
        container.addEventListener("mouseleave", _this.handleLeave, false);
        container.addEventListener("mouseenter", _this.handleEnter, false);
        document.addEventListener("mousemove", _this.handleMove, false);
        document.addEventListener("mouseup", _this.handleUp, false);
        return _this;
    }
    (0, _inherits8Fbdedb5EsmJs.d)(MouseCaptor, [
        {
            key: "kill",
            value: function kill() {
                var container = this.container;
                container.removeEventListener("click", this.handleClick);
                container.removeEventListener("contextmenu", this.handleRightClick);
                container.removeEventListener("mousedown", this.handleDown);
                container.removeEventListener("wheel", this.handleWheel);
                container.removeEventListener("mouseleave", this.handleLeave);
                container.removeEventListener("mouseenter", this.handleEnter);
                document.removeEventListener("mousemove", this.handleMove);
                document.removeEventListener("mouseup", this.handleUp);
            }
        },
        {
            key: "handleClick",
            value: function handleClick(e) {
                var _this2 = this;
                if (!this.enabled) return;
                this.clicks++;
                if (this.clicks === 2) {
                    this.clicks = 0;
                    if (typeof this.doubleClickTimeout === "number") {
                        clearTimeout(this.doubleClickTimeout);
                        this.doubleClickTimeout = null;
                    }
                    return this.handleDoubleClick(e);
                }
                setTimeout(function() {
                    _this2.clicks = 0;
                    _this2.doubleClickTimeout = null;
                }, DOUBLE_CLICK_TIMEOUT);
                // NOTE: this is here to prevent click events on drag
                if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE) this.emit("click", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleRightClick",
            value: function handleRightClick(e) {
                if (!this.enabled) return;
                this.emit("rightClick", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleDoubleClick",
            value: function handleDoubleClick(e) {
                if (!this.enabled) return;
                e.preventDefault();
                e.stopPropagation();
                var mouseCoords = getMouseCoords(e, this.container);
                this.emit("doubleClick", mouseCoords);
                if (mouseCoords.sigmaDefaultPrevented) return;
                // default behavior
                var camera = this.renderer.getCamera();
                var newRatio = camera.getBoundedRatio(camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO);
                camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
                    easing: "quadraticInOut",
                    duration: DOUBLE_CLICK_ZOOMING_DURATION
                });
            }
        },
        {
            key: "handleDown",
            value: function handleDown(e) {
                if (!this.enabled) return;
                // We only start dragging on left button
                if (e.button === 0) {
                    this.startCameraState = this.renderer.getCamera().getState();
                    var _getPosition = getPosition(e, this.container), x = _getPosition.x, y = _getPosition.y;
                    this.lastMouseX = x;
                    this.lastMouseY = y;
                    this.draggedEvents = 0;
                    this.downStartTime = Date.now();
                    this.isMouseDown = true;
                }
                this.emit("mousedown", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleUp",
            value: function handleUp(e) {
                var _this3 = this;
                if (!this.enabled || !this.isMouseDown) return;
                var camera = this.renderer.getCamera();
                this.isMouseDown = false;
                if (typeof this.movingTimeout === "number") {
                    clearTimeout(this.movingTimeout);
                    this.movingTimeout = null;
                }
                var _getPosition2 = getPosition(e, this.container), x = _getPosition2.x, y = _getPosition2.y;
                var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
                    x: 0,
                    y: 0
                };
                if (this.isMoving) camera.animate({
                    x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                    y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
                }, {
                    duration: MOUSE_INERTIA_DURATION,
                    easing: "quadraticOut"
                });
                else if (this.lastMouseX !== x || this.lastMouseY !== y) camera.setState({
                    x: cameraState.x,
                    y: cameraState.y
                });
                this.isMoving = false;
                setTimeout(function() {
                    var shouldRefresh = _this3.draggedEvents > 0;
                    _this3.draggedEvents = 0;
                    // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
                    // when someone releases camera pan drag after having stopped moving.
                    // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
                    // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
                    // It could be possible to render instead of scheduling a refresh but for
                    // now it seems good enough.
                    if (shouldRefresh) _this3.renderer.refresh();
                }, 0);
                this.emit("mouseup", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleMove",
            value: function handleMove(e) {
                var _this4 = this;
                if (!this.enabled) return;
                var mouseCoords = getMouseCoords(e, this.container);
                // Always trigger a "mousemovebody" event, so that it is possible to develop
                // a drag-and-drop effect that works even when the mouse is out of the
                // container:
                this.emit("mousemovebody", mouseCoords);
                // Only trigger the "mousemove" event when the mouse is actually hovering
                // the container, to avoid weirdly hovering nodes and/or edges when the
                // mouse is not hover the container:
                if (e.target === this.container || e.composedPath()[0] === this.container) this.emit("mousemove", mouseCoords);
                if (mouseCoords.sigmaDefaultPrevented) return;
                // Handle the case when "isMouseDown" all the time, to allow dragging the
                // stage while the mouse is not hover the container:
                if (this.isMouseDown) {
                    this.isMoving = true;
                    this.draggedEvents++;
                    if (typeof this.movingTimeout === "number") clearTimeout(this.movingTimeout);
                    this.movingTimeout = window.setTimeout(function() {
                        _this4.movingTimeout = null;
                        _this4.isMoving = false;
                    }, DRAG_TIMEOUT$1);
                    var camera = this.renderer.getCamera();
                    var _getPosition3 = getPosition(e, this.container), eX = _getPosition3.x, eY = _getPosition3.y;
                    var lastMouse = this.renderer.viewportToFramedGraph({
                        x: this.lastMouseX,
                        y: this.lastMouseY
                    });
                    var mouse = this.renderer.viewportToFramedGraph({
                        x: eX,
                        y: eY
                    });
                    var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
                    var cameraState = camera.getState();
                    var x = cameraState.x + offsetX, y = cameraState.y + offsetY;
                    camera.setState({
                        x: x,
                        y: y
                    });
                    this.lastMouseX = eX;
                    this.lastMouseY = eY;
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        },
        {
            key: "handleLeave",
            value: function handleLeave(e) {
                this.emit("mouseleave", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleEnter",
            value: function handleEnter(e) {
                this.emit("mouseenter", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleWheel",
            value: function handleWheel(e) {
                var _this5 = this;
                if (!this.enabled) return;
                e.preventDefault();
                e.stopPropagation();
                var delta = getWheelDelta(e);
                if (!delta) return;
                var wheelCoords = getWheelCoords(e, this.container);
                this.emit("wheel", wheelCoords);
                if (wheelCoords.sigmaDefaultPrevented) return;
                // Default behavior
                var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
                var camera = this.renderer.getCamera();
                var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
                var wheelDirection = delta > 0 ? 1 : -1;
                var now = Date.now();
                // Cancel events that are too close too each other and in the same direction:
                if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) return;
                camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
                    easing: "quadraticOut",
                    duration: MOUSE_ZOOM_DURATION
                }, function() {
                    _this5.currentWheelDirection = 0;
                });
                this.currentWheelDirection = wheelDirection;
                this.lastWheelTriggerTime = now;
            }
        }
    ]);
    return MouseCaptor;
}(Captor);
var DRAG_TIMEOUT = 200;
var TOUCH_INERTIA_RATIO = 3;
var TOUCH_INERTIA_DURATION = 200;
/**
 * Event types.
 */ /**
 * Touch captor class.
 *
 * @constructor
 */ var TouchCaptor = /*#__PURE__*/ function(_Captor) {
    (0, _inherits8Fbdedb5EsmJs._)(TouchCaptor, _Captor);
    function TouchCaptor(container, renderer) {
        var _this;
        (0, _inherits8Fbdedb5EsmJs.a)(this, TouchCaptor);
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, TouchCaptor, [
            container,
            renderer
        ]);
        // Binding methods:
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "enabled", true);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "isMoving", false);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "hasMoved", false);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "touchMode", 0);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "startTouchesPositions", []);
        _this.handleStart = _this.handleStart.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleLeave = _this.handleLeave.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.handleMove = _this.handleMove.bind((0, _inherits8Fbdedb5EsmJs.c)(_this));
        // Binding events
        container.addEventListener("touchstart", _this.handleStart, false);
        container.addEventListener("touchend", _this.handleLeave, false);
        container.addEventListener("touchcancel", _this.handleLeave, false);
        container.addEventListener("touchmove", _this.handleMove, false);
        return _this;
    }
    (0, _inherits8Fbdedb5EsmJs.d)(TouchCaptor, [
        {
            key: "kill",
            value: function kill() {
                var container = this.container;
                container.removeEventListener("touchstart", this.handleStart);
                container.removeEventListener("touchend", this.handleLeave);
                container.removeEventListener("touchcancel", this.handleLeave);
                container.removeEventListener("touchmove", this.handleMove);
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions() {
                return {
                    width: this.container.offsetWidth,
                    height: this.container.offsetHeight
                };
            }
        },
        {
            key: "dispatchRelatedMouseEvent",
            value: function dispatchRelatedMouseEvent(type, e, touch, emitter) {
                var mousePosition = touch || e.touches[0];
                var mouseEvent = new MouseEvent(type, {
                    clientX: mousePosition.clientX,
                    clientY: mousePosition.clientY,
                    altKey: e.altKey,
                    ctrlKey: e.ctrlKey
                });
                mouseEvent.isFakeSigmaMouseEvent = true;
                (emitter || this.container).dispatchEvent(mouseEvent);
            }
        },
        {
            key: "handleStart",
            value: function handleStart(e) {
                var _this2 = this;
                if (!this.enabled) return;
                // Prevent default to avoid default browser behaviors...
                e.preventDefault();
                // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
                if (e.touches.length === 1) this.dispatchRelatedMouseEvent("mousedown", e);
                var touches = getTouchesArray(e.touches);
                this.touchMode = touches.length;
                this.startCameraState = this.renderer.getCamera().getState();
                this.startTouchesPositions = touches.map(function(touch) {
                    return getPosition(touch, _this2.container);
                });
                this.lastTouches = touches;
                this.lastTouchesPositions = this.startTouchesPositions;
                // When there are two touches down, let's record distance and angle as well:
                if (this.touchMode === 2) {
                    var _this$startTouchesPos = (0, _colors2F6D17F0EsmJs._)(this.startTouchesPositions, 2), _this$startTouchesPos2 = _this$startTouchesPos[0], x0 = _this$startTouchesPos2.x, y0 = _this$startTouchesPos2.y, _this$startTouchesPos3 = _this$startTouchesPos[1], x1 = _this$startTouchesPos3.x, y1 = _this$startTouchesPos3.y;
                    this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
                    this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
                }
                this.emit("touchdown", getTouchCoords(e, this.container));
            }
        },
        {
            key: "handleLeave",
            value: function handleLeave(e) {
                if (!this.enabled) return;
                // Prevent default to avoid default browser behaviors...
                e.preventDefault();
                // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
                if (e.touches.length === 0 && this.lastTouches && this.lastTouches.length) {
                    this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouches[0], document);
                    // ... and only click if no move was made
                    if (!this.hasMoved) this.dispatchRelatedMouseEvent("click", e, this.lastTouches[0]);
                }
                if (this.movingTimeout) {
                    this.isMoving = false;
                    clearTimeout(this.movingTimeout);
                }
                switch(this.touchMode){
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    case 2:
                        if (e.touches.length === 1) {
                            this.handleStart(e);
                            e.preventDefault();
                            break;
                        }
                    /* falls through */ case 1:
                        // TODO
                        // Dispatch event
                        if (this.isMoving) {
                            var camera = this.renderer.getCamera();
                            var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
                                x: 0,
                                y: 0
                            };
                            camera.animate({
                                x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                                y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
                            }, {
                                duration: TOUCH_INERTIA_DURATION,
                                easing: "quadraticOut"
                            });
                        }
                        this.hasMoved = false;
                        this.isMoving = false;
                        this.touchMode = 0;
                        break;
                }
                this.emit("touchup", getTouchCoords(e, this.container));
            }
        },
        {
            key: "handleMove",
            value: function handleMove(e) {
                var _this3 = this;
                if (!this.enabled) return;
                // Prevent default to avoid default browser behaviors...
                e.preventDefault();
                // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
                if (e.touches.length === 1) this.dispatchRelatedMouseEvent("mousemove", e);
                var touches = getTouchesArray(e.touches);
                var touchesPositions = touches.map(function(touch) {
                    return getPosition(touch, _this3.container);
                });
                this.lastTouches = touches;
                this.lastTouchesPositions = touchesPositions;
                // If a move was initiated at some point and we get back to startpoint,
                // we should still consider that we did move (which also happens after a
                // multiple touch when only one touch remains in which case handleStart
                // is recalled within handleLeave).
                // Now, some mobile browsers report zero-distance moves so we also check that
                // one of the touches did actually move from the origin position.
                this.hasMoved || (this.hasMoved = touchesPositions.some(function(position, idx) {
                    var startPosition = _this3.startTouchesPositions[idx];
                    return position.x !== startPosition.x || position.y !== startPosition.y;
                }));
                // If there was no move, do not trigger touch moves behavior
                if (!this.hasMoved) return;
                this.isMoving = true;
                if (this.movingTimeout) clearTimeout(this.movingTimeout);
                this.movingTimeout = window.setTimeout(function() {
                    _this3.isMoving = false;
                }, DRAG_TIMEOUT);
                var camera = this.renderer.getCamera();
                var startCameraState = this.startCameraState;
                switch(this.touchMode){
                    case 1:
                        var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _this$renderer$viewpo.x, yStart = _this$renderer$viewpo.y;
                        var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]), x = _this$renderer$viewpo2.x, y = _this$renderer$viewpo2.y;
                        camera.setState({
                            x: startCameraState.x + xStart - x,
                            y: startCameraState.y + yStart - y
                        });
                        break;
                    case 2:
                        /**
             * Here is the thinking here:
             *
             * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
             *    of the d'n'd and now
             *
             * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
             *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
             *    position of this same touch now
             */ var newCameraState = {};
                        var _touchesPositions$ = touchesPositions[0], x0 = _touchesPositions$.x, y0 = _touchesPositions$.y;
                        var _touchesPositions$2 = touchesPositions[1], x1 = _touchesPositions$2.x, y1 = _touchesPositions$2.y;
                        var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
                        var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
                        // 1.
                        var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
                        newCameraState.ratio = newRatio;
                        newCameraState.angle = startCameraState.angle + angleDiff;
                        // 2.
                        var dimensions = this.getDimensions();
                        var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
                            cameraState: startCameraState
                        });
                        var smallestDimension = Math.min(dimensions.width, dimensions.height);
                        var dx = smallestDimension / dimensions.width;
                        var dy = smallestDimension / dimensions.height;
                        var ratio = newRatio / smallestDimension;
                        // Align with center of the graph:
                        var _x = x0 - smallestDimension / 2 / dx;
                        var _y = y0 - smallestDimension / 2 / dy;
                        // Rotate:
                        var _ref = [
                            _x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle),
                            _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)
                        ];
                        _x = _ref[0];
                        _y = _ref[1];
                        newCameraState.x = touchGraphPosition.x - _x * ratio;
                        newCameraState.y = touchGraphPosition.y + _y * ratio;
                        camera.setState(newCameraState);
                        break;
                }
                this.emit("touchmove", getTouchCoords(e, this.container));
            }
        }
    ]);
    return TouchCaptor;
}(Captor);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _colors2F6D17F0EsmJs.a)(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0, _colors2F6D17F0EsmJs.b)(arr) || _nonIterableSpread();
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
/**
 * Sigma.js Labels Heuristics
 * ===========================
 *
 * Miscellaneous heuristics related to label display.
 * @module
 */ /**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */ var LabelCandidate = /*#__PURE__*/ function() {
    function LabelCandidate(key, size) {
        (0, _inherits8Fbdedb5EsmJs.a)(this, LabelCandidate);
        this.key = key;
        this.size = size;
    }
    (0, _inherits8Fbdedb5EsmJs.d)(LabelCandidate, null, [
        {
            key: "compare",
            value: function compare(first, second) {
                // First we compare by size
                if (first.size > second.size) return -1;
                if (first.size < second.size) return 1;
                // Then since no two nodes can have the same key, we use it to
                // deterministically tie-break by key
                if (first.key > second.key) return 1;
                // NOTE: this comparator cannot return 0
                return -1;
            }
        }
    ]);
    return LabelCandidate;
}();
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */ var LabelGrid = /*#__PURE__*/ function() {
    function LabelGrid() {
        (0, _inherits8Fbdedb5EsmJs.a)(this, LabelGrid);
        (0, _index766050CdEsmJs._)(this, "width", 0);
        (0, _index766050CdEsmJs._)(this, "height", 0);
        (0, _index766050CdEsmJs._)(this, "cellSize", 0);
        (0, _index766050CdEsmJs._)(this, "columns", 0);
        (0, _index766050CdEsmJs._)(this, "rows", 0);
        (0, _index766050CdEsmJs._)(this, "cells", {});
    }
    (0, _inherits8Fbdedb5EsmJs.d)(LabelGrid, [
        {
            key: "resizeAndClear",
            value: function resizeAndClear(dimensions, cellSize) {
                this.width = dimensions.width;
                this.height = dimensions.height;
                this.cellSize = cellSize;
                this.columns = Math.ceil(dimensions.width / cellSize);
                this.rows = Math.ceil(dimensions.height / cellSize);
                this.cells = {};
            }
        },
        {
            key: "getIndex",
            value: function getIndex(pos) {
                var xIndex = Math.floor(pos.x / this.cellSize);
                var yIndex = Math.floor(pos.y / this.cellSize);
                return yIndex * this.columns + xIndex;
            }
        },
        {
            key: "add",
            value: function add(key, size, pos) {
                var candidate = new LabelCandidate(key, size);
                var index = this.getIndex(pos);
                var cell = this.cells[index];
                if (!cell) {
                    cell = [];
                    this.cells[index] = cell;
                }
                cell.push(candidate);
            }
        },
        {
            key: "organize",
            value: function organize() {
                for(var k in this.cells){
                    var cell = this.cells[k];
                    cell.sort(LabelCandidate.compare);
                }
            }
        },
        {
            key: "getLabelsToDisplay",
            value: function getLabelsToDisplay(ratio, density) {
                // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
                // TODO: adjust threshold lower, but increase cells a bit?
                // TODO: hunt for geom issue in disguise
                // TODO: memoize while ratio does not move. method to force recompute
                var cellArea = this.cellSize * this.cellSize;
                var scaledCellArea = cellArea / ratio / ratio;
                var scaledDensity = scaledCellArea * density / cellArea;
                var labelsToDisplayPerCell = Math.ceil(scaledDensity);
                var labels = [];
                for(var k in this.cells){
                    var cell = this.cells[k];
                    for(var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++)labels.push(cell[i].key);
                }
                return labels;
            }
        }
    ]);
    return LabelGrid;
}();
/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */ function edgeLabelsToDisplayFromNodes(params) {
    var graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
    var worthyEdges = [];
    // TODO: the code below can be optimized using #.forEach and batching the code per adj
    // We should display an edge's label if:
    //   - Any of its extremities is highlighted or hovered
    //   - Both of its extremities has its label shown
    graph.forEachEdge(function(edge, _, source, target) {
        if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) worthyEdges.push(edge);
    });
    return worthyEdges;
}
/**
 * Constants.
 */ var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Important functions.
 */ function applyNodeDefaults(settings, key, data) {
    if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y")) throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(key, '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));
    if (!data.color) data.color = settings.defaultNodeColor;
    if (!data.label && data.label !== "") data.label = null;
    if (data.label !== undefined && data.label !== null) data.label = "" + data.label;
    else data.label = null;
    if (!data.size) data.size = 2;
    if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
    if (!hasOwnProperty.call(data, "highlighted")) data.highlighted = false;
    if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
    if (!data.type || data.type === "") data.type = settings.defaultNodeType;
    if (!data.zIndex) data.zIndex = 0;
    return data;
}
function applyEdgeDefaults(settings, _key, data) {
    if (!data.color) data.color = settings.defaultEdgeColor;
    if (!data.label) data.label = "";
    if (!data.size) data.size = 0.5;
    if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
    if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
    if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
    if (!data.zIndex) data.zIndex = 0;
    return data;
}
/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */ var Sigma$1 = /*#__PURE__*/ function(_TypedEventEmitter) {
    (0, _inherits8Fbdedb5EsmJs._)(Sigma, _TypedEventEmitter);
    function Sigma(graph, container) {
        var _this;
        var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        (0, _inherits8Fbdedb5EsmJs.a)(this, Sigma);
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, Sigma);
        // Resolving settings
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "elements", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "canvasContexts", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "webGLContexts", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "pickingLayers", new Set());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "textures", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "frameBuffers", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "activeListeners", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "labelGrid", new LabelGrid());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodeDataCache", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "edgeDataCache", {});
        // Indices to keep track of the index of the item inside programs
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodeProgramIndex", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "edgeProgramIndex", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodesWithForcedLabels", new Set());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "edgesWithForcedLabels", new Set());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodeExtent", {
            x: [
                0,
                1
            ],
            y: [
                0,
                1
            ]
        });
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodeZExtent", [
            Infinity,
            -Infinity
        ]);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "edgeZExtent", [
            Infinity,
            -Infinity
        ]);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "matrix", (0, _normalization6Ad2Dc39EsmJs.i)());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "invMatrix", (0, _normalization6Ad2Dc39EsmJs.i)());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "correctionRatio", 1);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "customBBox", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "normalizationFunction", (0, _normalization6Ad2Dc39EsmJs.c)({
            x: [
                0,
                1
            ],
            y: [
                0,
                1
            ]
        }));
        // Cache:
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "graphToViewportRatio", 1);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "itemIDsIndex", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodeIndices", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "edgeIndices", {});
        // Starting dimensions and pixel ratio
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "width", 0);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "height", 0);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "pixelRatio", (0, _normalization6Ad2Dc39EsmJs.g)());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "pickingDownSizingRatio", 2 * _this.pixelRatio);
        // Graph State
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "displayedNodeLabels", new Set());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "displayedEdgeLabels", new Set());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "highlightedNodes", new Set());
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "hoveredNode", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "hoveredEdge", null);
        // Internal states
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "renderFrame", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "renderHighlightedNodesFrame", null);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "needToProcess", false);
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "checkEdgesEventsFrame", null);
        // Programs
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodePrograms", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "nodeHoverPrograms", {});
        (0, _index766050CdEsmJs._)((0, _inherits8Fbdedb5EsmJs.c)(_this), "edgePrograms", {});
        _this.settings = (0, _sigmaSettingsEsmJs.resolveSettings)(settings);
        // Validating
        (0, _sigmaSettingsEsmJs.validateSettings)(_this.settings);
        (0, _normalization6Ad2Dc39EsmJs.v)(graph);
        if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
        // Properties
        _this.graph = graph;
        _this.container = container;
        // Initializing contexts
        _this.createWebGLContext("edges", {
            picking: settings.enableEdgeEvents
        });
        _this.createCanvasContext("edgeLabels");
        _this.createWebGLContext("nodes", {
            picking: true
        });
        _this.createCanvasContext("labels");
        _this.createCanvasContext("hovers");
        _this.createWebGLContext("hoverNodes");
        _this.createCanvasContext("mouse");
        // Initial resize
        _this.resize();
        // Loading programs
        for(var type in _this.settings.nodeProgramClasses)_this.registerNodeProgram(type, _this.settings.nodeProgramClasses[type], _this.settings.nodeHoverProgramClasses[type]);
        for(var _type in _this.settings.edgeProgramClasses)_this.registerEdgeProgram(_type, _this.settings.edgeProgramClasses[_type]);
        // Initializing the camera
        _this.camera = new Camera();
        // Binding camera events
        _this.bindCameraHandlers();
        // Initializing captors
        _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, (0, _inherits8Fbdedb5EsmJs.c)(_this));
        _this.touchCaptor = new TouchCaptor(_this.elements.mouse, (0, _inherits8Fbdedb5EsmJs.c)(_this));
        // Binding event handlers
        _this.bindEventHandlers();
        // Binding graph handlers
        _this.bindGraphHandlers();
        // Trigger eventual settings-related things
        _this.handleSettingsUpdate();
        // Processing data for the first time & render
        _this.refresh();
        return _this;
    }
    /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */ /**
   * Internal function used to register a node program
   *
   * @param  {string}           key              - The program's key, matching the related nodes "type" values.
   * @param  {NodeProgramType}  NodeProgramClass - A nodes program class.
   * @param  {NodeProgramType?} NodeHoverProgram - A nodes program class to render hovered nodes (optional).
   * @return {Sigma}
   */ (0, _inherits8Fbdedb5EsmJs.d)(Sigma, [
        {
            key: "registerNodeProgram",
            value: function registerNodeProgram(key, NodeProgramClass, NodeHoverProgram) {
                if (this.nodePrograms[key]) this.nodePrograms[key].kill();
                if (this.nodeHoverPrograms[key]) this.nodeHoverPrograms[key].kill();
                this.nodePrograms[key] = new NodeProgramClass(this.webGLContexts.nodes, this.frameBuffers.nodes, this);
                this.nodeHoverPrograms[key] = new (NodeHoverProgram || NodeProgramClass)(this.webGLContexts.hoverNodes, null, this);
                return this;
            }
        },
        {
            key: "registerEdgeProgram",
            value: function registerEdgeProgram(key, EdgeProgramClass) {
                if (this.edgePrograms[key]) this.edgePrograms[key].kill();
                this.edgePrograms[key] = new EdgeProgramClass(this.webGLContexts.edges, this.frameBuffers.edges, this);
                return this;
            }
        },
        {
            key: "unregisterNodeProgram",
            value: function unregisterNodeProgram(key) {
                if (this.nodePrograms[key]) {
                    var _this$nodePrograms = this.nodePrograms, program = _this$nodePrograms[key], programs = _objectWithoutProperties(_this$nodePrograms, [
                        key
                    ].map((0, _inherits8Fbdedb5EsmJs.t)));
                    program.kill();
                    this.nodePrograms = programs;
                }
                if (this.nodeHoverPrograms[key]) {
                    var _this$nodeHoverProgra = this.nodeHoverPrograms, _program = _this$nodeHoverProgra[key], _programs = _objectWithoutProperties(_this$nodeHoverProgra, [
                        key
                    ].map((0, _inherits8Fbdedb5EsmJs.t)));
                    _program.kill();
                    this.nodePrograms = _programs;
                }
                return this;
            }
        },
        {
            key: "unregisterEdgeProgram",
            value: function unregisterEdgeProgram(key) {
                if (this.edgePrograms[key]) {
                    var _this$edgePrograms = this.edgePrograms, program = _this$edgePrograms[key], programs = _objectWithoutProperties(_this$edgePrograms, [
                        key
                    ].map((0, _inherits8Fbdedb5EsmJs.t)));
                    program.kill();
                    this.edgePrograms = programs;
                }
                return this;
            }
        },
        {
            key: "resetWebGLTexture",
            value: function resetWebGLTexture(id) {
                var gl = this.webGLContexts[id];
                var frameBuffer = this.frameBuffers[id];
                var currentTexture = this.textures[id];
                if (currentTexture) gl.deleteTexture(currentTexture);
                var pickingTexture = gl.createTexture();
                gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
                gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
                this.textures[id] = pickingTexture;
                return this;
            }
        },
        {
            key: "bindCameraHandlers",
            value: function bindCameraHandlers() {
                var _this2 = this;
                this.activeListeners.camera = function() {
                    _this2.scheduleRender();
                };
                this.camera.on("updated", this.activeListeners.camera);
                return this;
            }
        },
        {
            key: "unbindCameraHandlers",
            value: function unbindCameraHandlers() {
                this.camera.removeListener("updated", this.activeListeners.camera);
                return this;
            }
        },
        {
            key: "getNodeAtPosition",
            value: function getNodeAtPosition(position) {
                var x = position.x, y = position.y;
                var color = (0, _colors2F6D17F0EsmJs.g)(this.webGLContexts.nodes, this.frameBuffers.nodes, x, y, this.pixelRatio, this.pickingDownSizingRatio);
                var index = (0, _colors2F6D17F0EsmJs.c).apply(void 0, _toConsumableArray(color));
                var itemAt = this.itemIDsIndex[index];
                return itemAt && itemAt.type === "node" ? itemAt.id : null;
            }
        },
        {
            key: "bindEventHandlers",
            value: function bindEventHandlers() {
                var _this3 = this;
                // Handling window resize
                this.activeListeners.handleResize = function() {
                    // need to call a refresh to rebuild the labelgrid
                    _this3.scheduleRefresh();
                };
                window.addEventListener("resize", this.activeListeners.handleResize);
                // Handling mouse move
                this.activeListeners.handleMove = function(e) {
                    var baseEvent = {
                        event: e,
                        preventSigmaDefault: function preventSigmaDefault() {
                            e.preventSigmaDefault();
                        }
                    };
                    var nodeToHover = _this3.getNodeAtPosition(e);
                    if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
                        // Handling passing from one node to the other directly
                        if (_this3.hoveredNode) _this3.emit("leaveNode", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                            node: _this3.hoveredNode
                        }));
                        _this3.hoveredNode = nodeToHover;
                        _this3.emit("enterNode", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                            node: nodeToHover
                        }));
                        _this3.scheduleHighlightedNodesRender();
                        return;
                    }
                    // Checking if the hovered node is still hovered
                    if (_this3.hoveredNode) {
                        if (_this3.getNodeAtPosition(e) !== _this3.hoveredNode) {
                            var node = _this3.hoveredNode;
                            _this3.hoveredNode = null;
                            _this3.emit("leaveNode", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                                node: node
                            }));
                            _this3.scheduleHighlightedNodesRender();
                            return;
                        }
                    }
                    if (_this3.settings.enableEdgeEvents) {
                        var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
                        if (edgeToHover !== _this3.hoveredEdge) {
                            if (_this3.hoveredEdge) _this3.emit("leaveEdge", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                                edge: _this3.hoveredEdge
                            }));
                            if (edgeToHover) _this3.emit("enterEdge", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                                edge: edgeToHover
                            }));
                            _this3.hoveredEdge = edgeToHover;
                        }
                    }
                };
                // Handling mouse leave stage:
                this.activeListeners.handleLeave = function(e) {
                    var baseEvent = {
                        event: e,
                        preventSigmaDefault: function preventSigmaDefault() {
                            e.preventSigmaDefault();
                        }
                    };
                    if (_this3.hoveredNode) {
                        _this3.emit("leaveNode", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                            node: _this3.hoveredNode
                        }));
                        _this3.scheduleHighlightedNodesRender();
                    }
                    if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
                        _this3.emit("leaveEdge", (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                            edge: _this3.hoveredEdge
                        }));
                        _this3.scheduleHighlightedNodesRender();
                    }
                    _this3.emit("leaveStage", (0, _index766050CdEsmJs.a)({}, baseEvent));
                };
                // Handling mouse enter stage:
                this.activeListeners.handleEnter = function(e) {
                    var baseEvent = {
                        event: e,
                        preventSigmaDefault: function preventSigmaDefault() {
                            e.preventSigmaDefault();
                        }
                    };
                    _this3.emit("enterStage", (0, _index766050CdEsmJs.a)({}, baseEvent));
                };
                // Handling click
                var createMouseListener = function createMouseListener(eventType) {
                    return function(e) {
                        var baseEvent = {
                            event: e,
                            preventSigmaDefault: function preventSigmaDefault() {
                                e.preventSigmaDefault();
                            }
                        };
                        var isFakeSigmaMouseEvent = e.original.isFakeSigmaMouseEvent;
                        var nodeAtPosition = isFakeSigmaMouseEvent ? _this3.getNodeAtPosition(e) : _this3.hoveredNode;
                        if (nodeAtPosition) return _this3.emit("".concat(eventType, "Node"), (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                            node: nodeAtPosition
                        }));
                        if (_this3.settings.enableEdgeEvents) {
                            var edge = _this3.getEdgeAtPoint(e.x, e.y);
                            if (edge) return _this3.emit("".concat(eventType, "Edge"), (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, baseEvent), {}, {
                                edge: edge
                            }));
                        }
                        return _this3.emit("".concat(eventType, "Stage"), baseEvent);
                    };
                };
                this.activeListeners.handleClick = createMouseListener("click");
                this.activeListeners.handleRightClick = createMouseListener("rightClick");
                this.activeListeners.handleDoubleClick = createMouseListener("doubleClick");
                this.activeListeners.handleWheel = createMouseListener("wheel");
                this.activeListeners.handleDown = createMouseListener("down");
                this.activeListeners.handleUp = createMouseListener("up");
                this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
                this.mouseCaptor.on("click", this.activeListeners.handleClick);
                this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
                this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
                this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
                this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
                this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
                this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
                this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
                // TODO
                // Deal with Touch captor events
                return this;
            }
        },
        {
            key: "bindGraphHandlers",
            value: function bindGraphHandlers() {
                var _this4 = this;
                var graph = this.graph;
                var LAYOUT_IMPACTING_FIELDS = new Set([
                    "x",
                    "y",
                    "zIndex",
                    "type"
                ]);
                this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function(e) {
                    var _e$hints;
                    var updatedFields = (_e$hints = e.hints) === null || _e$hints === void 0 ? void 0 : _e$hints.attributes;
                    // we process all nodes
                    _this4.graph.forEachNode(function(node) {
                        return _this4.updateNode(node);
                    });
                    // if coord, type or zIndex have changed, we need to schedule a render
                    // (zIndex for the programIndex)
                    var layoutChanged = !updatedFields || updatedFields.some(function(f) {
                        return LAYOUT_IMPACTING_FIELDS.has(f);
                    });
                    _this4.refresh({
                        partialGraph: {
                            nodes: graph.nodes()
                        },
                        skipIndexation: !layoutChanged,
                        schedule: true
                    });
                };
                this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function(e) {
                    var _e$hints2;
                    var updatedFields = (_e$hints2 = e.hints) === null || _e$hints2 === void 0 ? void 0 : _e$hints2.attributes;
                    // we process all edges
                    _this4.graph.forEachEdge(function(edge) {
                        return _this4.updateEdge(edge);
                    });
                    var layoutChanged = updatedFields && [
                        "zIndex",
                        "type"
                    ].some(function(f) {
                        return updatedFields === null || updatedFields === void 0 ? void 0 : updatedFields.includes(f);
                    });
                    _this4.refresh({
                        partialGraph: {
                            edges: graph.edges()
                        },
                        skipIndexation: !layoutChanged,
                        schedule: true
                    });
                };
                // On add node, we add the node in indices and then call for a render
                this.activeListeners.addNodeGraphUpdate = function(payload) {
                    var node = payload.key;
                    // we process the node
                    _this4.addNode(node);
                    // schedule a render for the node
                    _this4.refresh({
                        partialGraph: {
                            nodes: [
                                node
                            ]
                        },
                        skipIndexation: false,
                        schedule: true
                    });
                };
                // On update node, we update indices and then call for a render
                this.activeListeners.updateNodeGraphUpdate = function(payload) {
                    var node = payload.key;
                    // schedule a render for the node
                    _this4.refresh({
                        partialGraph: {
                            nodes: [
                                node
                            ]
                        },
                        skipIndexation: false,
                        schedule: true
                    });
                };
                // On drop node, we remove the node from indices and then call for a refresh
                this.activeListeners.dropNodeGraphUpdate = function(payload) {
                    var node = payload.key;
                    // we process the node
                    _this4.removeNode(node);
                    // schedule a render for everything
                    _this4.refresh({
                        schedule: true
                    });
                };
                // On add edge, we remove the edge from indices and then call for a refresh
                this.activeListeners.addEdgeGraphUpdate = function(payload) {
                    var edge = payload.key;
                    // we process the edge
                    _this4.addEdge(edge);
                    // schedule a render for the edge
                    _this4.refresh({
                        partialGraph: {
                            edges: [
                                edge
                            ]
                        },
                        schedule: true
                    });
                };
                // On update edge, we update indices and then call for a refresh
                this.activeListeners.updateEdgeGraphUpdate = function(payload) {
                    var edge = payload.key;
                    // schedule a repaint for the edge
                    _this4.refresh({
                        partialGraph: {
                            edges: [
                                edge
                            ]
                        },
                        skipIndexation: false,
                        schedule: true
                    });
                };
                // On drop edge, we remove the edge from indices and then call for a refresh
                this.activeListeners.dropEdgeGraphUpdate = function(payload) {
                    var edge = payload.key;
                    // we process the edge
                    _this4.removeEdge(edge);
                    // schedule a render for all edges
                    _this4.refresh({
                        schedule: true
                    });
                };
                // On clear edges, we clear the edge indices and then call for a refresh
                this.activeListeners.clearEdgesGraphUpdate = function() {
                    // we clear the edge data structures
                    _this4.clearEdgeState();
                    _this4.clearEdgeIndices();
                    // schedule a render for all edges
                    _this4.refresh({
                        schedule: true
                    });
                };
                // On graph clear, we clear indices and then call for a refresh
                this.activeListeners.clearGraphUpdate = function() {
                    // clear graph state
                    _this4.clearEdgeState();
                    _this4.clearNodeState();
                    // clear graph indices
                    _this4.clearEdgeIndices();
                    _this4.clearNodeIndices();
                    // schedule a render for all
                    _this4.refresh({
                        schedule: true
                    });
                };
                graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
                graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
                graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
                graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
                graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
                graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
                graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
                graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
                graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
                graph.on("cleared", this.activeListeners.clearGraphUpdate);
                return this;
            }
        },
        {
            key: "unbindGraphHandlers",
            value: function unbindGraphHandlers() {
                var graph = this.graph;
                graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
                graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
                graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
                graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
                graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
                graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
                graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
                graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
                graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
                graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
            }
        },
        {
            key: "getEdgeAtPoint",
            value: function getEdgeAtPoint(x, y) {
                var color = (0, _colors2F6D17F0EsmJs.g)(this.webGLContexts.edges, this.frameBuffers.edges, x, y, this.pixelRatio, this.pickingDownSizingRatio);
                var index = (0, _colors2F6D17F0EsmJs.c).apply(void 0, _toConsumableArray(color));
                var itemAt = this.itemIDsIndex[index];
                return itemAt && itemAt.type === "edge" ? itemAt.id : null;
            }
        },
        {
            key: "process",
            value: function process() {
                var _this5 = this;
                this.emit("beforeProcess");
                var graph = this.graph;
                var settings = this.settings;
                var dimensions = this.getDimensions();
                //
                // NODES
                //
                this.nodeExtent = (0, _normalization6Ad2Dc39EsmJs.a)(this.graph);
                this.normalizationFunction = (0, _normalization6Ad2Dc39EsmJs.c)(this.customBBox || this.nodeExtent);
                // NOTE: it is important to compute this matrix after computing the node's extent
                // because #.getGraphDimensions relies on it
                var nullCamera = new Camera();
                var nullCameraMatrix = (0, _normalization6Ad2Dc39EsmJs.m)(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
                // Resetting the label grid
                // TODO: it's probably better to do this explicitly or on resizes for layout and anims
                this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
                var nodesPerPrograms = {};
                var nodeIndices = {};
                var edgeIndices = {};
                var itemIDsIndex = {};
                var incrID = 1;
                var nodes = graph.nodes();
                // Do some indexation on the whole graph
                for(var i = 0, l = nodes.length; i < l; i++){
                    var node = nodes[i];
                    var data = this.nodeDataCache[node];
                    // Get initial coordinates
                    var attrs = graph.getNodeAttributes(node);
                    data.x = attrs.x;
                    data.y = attrs.y;
                    this.normalizationFunction.applyTo(data);
                    // labelgrid
                    if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
                        matrix: nullCameraMatrix
                    }));
                    // update count per program
                    nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
                }
                this.labelGrid.organize();
                // Allocate memory to programs
                for(var type in this.nodePrograms){
                    if (!hasOwnProperty.call(this.nodePrograms, type)) throw new Error('Sigma: could not find a suitable program for node type "'.concat(type, '"!'));
                    this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
                    // We reset that count here, so that we can reuse it while calling the Program#process methods:
                    nodesPerPrograms[type] = 0;
                }
                // Order nodes by zIndex before to add them to program
                if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1]) nodes = (0, _normalization6Ad2Dc39EsmJs.z)(this.nodeZExtent, function(node) {
                    return _this5.nodeDataCache[node].zIndex;
                }, nodes);
                // Add data to programs
                for(var _i = 0, _l = nodes.length; _i < _l; _i++){
                    var _node = nodes[_i];
                    nodeIndices[_node] = incrID;
                    itemIDsIndex[nodeIndices[_node]] = {
                        type: "node",
                        id: _node
                    };
                    incrID++;
                    var _data = this.nodeDataCache[_node];
                    this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
                }
                //
                // EDGES
                //
                var edgesPerPrograms = {};
                var edges = graph.edges();
                // Allocate memory to programs
                for(var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++){
                    var edge = edges[_i2];
                    var _data2 = this.edgeDataCache[edge];
                    edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
                }
                // Order edges by zIndex before to add them to program
                if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1]) edges = (0, _normalization6Ad2Dc39EsmJs.z)(this.edgeZExtent, function(edge) {
                    return _this5.edgeDataCache[edge].zIndex;
                }, edges);
                for(var _type2 in this.edgePrograms){
                    if (!hasOwnProperty.call(this.edgePrograms, _type2)) throw new Error('Sigma: could not find a suitable program for edge type "'.concat(_type2, '"!'));
                    this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
                    // We reset that count here, so that we can reuse it while calling the Program#process methods:
                    edgesPerPrograms[_type2] = 0;
                }
                // Add data to programs
                for(var _i3 = 0, _l3 = edges.length; _i3 < _l3; _i3++){
                    var _edge = edges[_i3];
                    edgeIndices[_edge] = incrID;
                    itemIDsIndex[edgeIndices[_edge]] = {
                        type: "edge",
                        id: _edge
                    };
                    incrID++;
                    var _data3 = this.edgeDataCache[_edge];
                    this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
                }
                this.itemIDsIndex = itemIDsIndex;
                this.nodeIndices = nodeIndices;
                this.edgeIndices = edgeIndices;
                this.emit("afterProcess");
                return this;
            }
        },
        {
            key: "handleSettingsUpdate",
            value: function handleSettingsUpdate(oldSettings) {
                var settings = this.settings;
                this.camera.minRatio = settings.minCameraRatio;
                this.camera.maxRatio = settings.maxCameraRatio;
                this.camera.enabledRotation = settings.enableCameraRotation;
                this.camera.setState(this.camera.validateState(this.camera.getState()));
                if (oldSettings) {
                    // Check edge programs:
                    if (oldSettings.edgeProgramClasses !== settings.edgeProgramClasses) {
                        for(var type in settings.edgeProgramClasses)if (settings.edgeProgramClasses[type] !== oldSettings.edgeProgramClasses[type]) this.registerEdgeProgram(type, settings.edgeProgramClasses[type]);
                        for(var _type3 in oldSettings.edgeProgramClasses)if (!settings.edgeProgramClasses[_type3]) this.unregisterEdgeProgram(_type3);
                    }
                    // Check node programs:
                    if (oldSettings.nodeProgramClasses !== settings.nodeProgramClasses || oldSettings.nodeHoverProgramClasses !== settings.nodeHoverProgramClasses) {
                        for(var _type4 in settings.nodeProgramClasses)if (settings.nodeProgramClasses[_type4] !== oldSettings.nodeProgramClasses[_type4] || settings.nodeHoverProgramClasses[_type4] !== oldSettings.nodeHoverProgramClasses[_type4]) this.registerNodeProgram(_type4, settings.nodeProgramClasses[_type4], settings.nodeHoverProgramClasses[_type4]);
                        for(var _type5 in oldSettings.nodeProgramClasses)if (!settings.nodeProgramClasses[_type5]) this.unregisterNodeProgram(_type5);
                    }
                }
                return this;
            }
        },
        {
            key: "renderLabels",
            value: function renderLabels() {
                if (!this.settings.renderLabels) return this;
                var cameraState = this.camera.getState();
                // Selecting labels to draw
                var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
                (0, _data31990A76EsmJs.e)(labelsToDisplay, this.nodesWithForcedLabels);
                this.displayedNodeLabels = new Set();
                // Drawing labels
                var context = this.canvasContexts.labels;
                for(var i = 0, l = labelsToDisplay.length; i < l; i++){
                    var node = labelsToDisplay[i];
                    var data = this.nodeDataCache[node];
                    // If the node was already drawn (like if it is eligible AND has
                    // `forceLabel`), we don't want to draw it again
                    // NOTE: we can do better probably
                    if (this.displayedNodeLabels.has(node)) continue;
                    // If the node is hidden, we don't need to display its label obviously
                    if (data.hidden) continue;
                    var _this$framedGraphToVi = this.framedGraphToViewport(data), x = _this$framedGraphToVi.x, y = _this$framedGraphToVi.y;
                    // NOTE: we can cache the labels we need to render until the camera's ratio changes
                    var size = this.scaleSize(data.size);
                    // Is node big enough?
                    if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;
                    // Is node actually on screen (with some margin)
                    // NOTE: we used to rely on the quadtree for this, but the coordinates
                    // conversion make it unreliable and at that point we already converted
                    // to viewport coordinates and since the label grid already culls the
                    // number of potential labels to display this looks like a good
                    // performance compromise.
                    // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
                    // considering cells obviously outside of the range of the current
                    // view rectangle.
                    if (x < -X_LABEL_MARGIN || x > this.width + X_LABEL_MARGIN || y < -Y_LABEL_MARGIN || y > this.height + Y_LABEL_MARGIN) continue;
                    // Because displayed edge labels depend directly on actually rendered node
                    // labels, we need to only add to this.displayedNodeLabels nodes whose label
                    // is rendered.
                    // This makes this.displayedNodeLabels depend on viewport, which might become
                    // an issue once we start memoizing getLabelsToDisplay.
                    this.displayedNodeLabels.add(node);
                    var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
                    var nodeProgram = this.nodePrograms[data.type];
                    var drawLabel = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawLabel) || defaultDrawNodeLabel;
                    drawLabel(context, (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({
                        key: node
                    }, data), {}, {
                        size: size,
                        x: x,
                        y: y
                    }), this.settings);
                }
                return this;
            }
        },
        {
            key: "renderEdgeLabels",
            value: function renderEdgeLabels() {
                if (!this.settings.renderEdgeLabels) return this;
                var context = this.canvasContexts.edgeLabels;
                // Clearing
                context.clearRect(0, 0, this.width, this.height);
                var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
                    graph: this.graph,
                    hoveredNode: this.hoveredNode,
                    displayedNodeLabels: this.displayedNodeLabels,
                    highlightedNodes: this.highlightedNodes
                });
                (0, _data31990A76EsmJs.e)(edgeLabelsToDisplay, this.edgesWithForcedLabels);
                var displayedLabels = new Set();
                for(var i = 0, l = edgeLabelsToDisplay.length; i < l; i++){
                    var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
                    // If the edge was already drawn (like if it is eligible AND has
                    // `forceLabel`), we don't want to draw it again
                    if (displayedLabels.has(edge)) continue;
                    // If the edge is hidden we don't need to display its label
                    // NOTE: the test on sourceData & targetData is probably paranoid at this point?
                    if (edgeData.hidden || sourceData.hidden || targetData.hidden) continue;
                    var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
                    var edgeProgram = this.edgePrograms[edgeData.type];
                    var drawLabel = (edgeProgram === null || edgeProgram === void 0 ? void 0 : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
                    drawLabel(context, (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({
                        key: edge
                    }, edgeData), {}, {
                        size: this.scaleSize(edgeData.size)
                    }), (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({
                        key: extremities[0]
                    }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
                        size: this.scaleSize(sourceData.size)
                    }), (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({
                        key: extremities[1]
                    }, targetData), this.framedGraphToViewport(targetData)), {}, {
                        size: this.scaleSize(targetData.size)
                    }), this.settings);
                    displayedLabels.add(edge);
                }
                this.displayedEdgeLabels = displayedLabels;
                return this;
            }
        },
        {
            key: "renderHighlightedNodes",
            value: function renderHighlightedNodes() {
                var _this6 = this;
                var context = this.canvasContexts.hovers;
                // Clearing
                context.clearRect(0, 0, this.width, this.height);
                // Rendering
                var render = function render(node) {
                    var data = _this6.nodeDataCache[node];
                    var _this6$framedGraphToV = _this6.framedGraphToViewport(data), x = _this6$framedGraphToV.x, y = _this6$framedGraphToV.y;
                    var size = _this6.scaleSize(data.size);
                    var defaultDrawNodeHover = _this6.settings.defaultDrawNodeHover;
                    var nodeProgram = _this6.nodePrograms[data.type];
                    var drawHover = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawHover) || defaultDrawNodeHover;
                    drawHover(context, (0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({
                        key: node
                    }, data), {}, {
                        size: size,
                        x: x,
                        y: y
                    }), _this6.settings);
                };
                var nodesToRender = [];
                if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) nodesToRender.push(this.hoveredNode);
                this.highlightedNodes.forEach(function(node) {
                    // The hovered node has already been highlighted
                    if (node !== _this6.hoveredNode) nodesToRender.push(node);
                });
                // Draw labels:
                nodesToRender.forEach(function(node) {
                    return render(node);
                });
                // Draw WebGL nodes on top of the labels:
                var nodesPerPrograms = {};
                // 1. Count nodes per type:
                nodesToRender.forEach(function(node) {
                    var type = _this6.nodeDataCache[node].type;
                    nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
                });
                // 2. Allocate for each type for the proper number of nodes
                for(var type in this.nodeHoverPrograms){
                    this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
                    // Also reset count, to use when rendering:
                    nodesPerPrograms[type] = 0;
                }
                // 3. Process all nodes to render:
                nodesToRender.forEach(function(node) {
                    var data = _this6.nodeDataCache[node];
                    _this6.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
                });
                // 4. Clear hovered nodes layer:
                this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
                // 5. Render:
                var renderParams = this.getRenderParams();
                for(var _type6 in this.nodeHoverPrograms){
                    var program = this.nodeHoverPrograms[_type6];
                    program.render(renderParams);
                }
            }
        },
        {
            key: "scheduleHighlightedNodesRender",
            value: function scheduleHighlightedNodesRender() {
                var _this7 = this;
                if (this.renderHighlightedNodesFrame || this.renderFrame) return;
                this.renderHighlightedNodesFrame = requestAnimationFrame(function() {
                    // Resetting state
                    _this7.renderHighlightedNodesFrame = null;
                    // Rendering
                    _this7.renderHighlightedNodes();
                    _this7.renderEdgeLabels();
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this8 = this;
                this.emit("beforeRender");
                var exitRender = function exitRender() {
                    _this8.emit("afterRender");
                    return _this8;
                };
                // If a render was scheduled, we cancel it
                if (this.renderFrame) {
                    cancelAnimationFrame(this.renderFrame);
                    this.renderFrame = null;
                }
                // First we need to resize
                this.resize();
                // Do we need to reprocess data?
                if (this.needToProcess) this.process();
                this.needToProcess = false;
                // Clearing the canvases
                this.clear();
                // Prepare the textures
                this.pickingLayers.forEach(function(layer) {
                    return _this8.resetWebGLTexture(layer);
                });
                // If we have no nodes we can stop right there
                if (!this.graph.order) return exitRender();
                // TODO: improve this heuristic or move to the captor itself?
                // TODO: deal with the touch captor here as well
                var mouseCaptor = this.mouseCaptor;
                var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
                // Then we need to extract a matrix from the camera
                var cameraState = this.camera.getState();
                var viewportDimensions = this.getDimensions();
                var graphDimensions = this.getGraphDimensions();
                var padding = this.getSetting("stagePadding") || 0;
                this.matrix = (0, _normalization6Ad2Dc39EsmJs.m)(cameraState, viewportDimensions, graphDimensions, padding);
                this.invMatrix = (0, _normalization6Ad2Dc39EsmJs.m)(cameraState, viewportDimensions, graphDimensions, padding, true);
                this.correctionRatio = (0, _normalization6Ad2Dc39EsmJs.b)(this.matrix, cameraState, viewportDimensions);
                this.graphToViewportRatio = this.getGraphToViewportRatio();
                // [jacomyal]
                // This comment is related to the one above the `getMatrixImpact` definition:
                // - `this.correctionRatio` is somehow not completely explained
                // - `this.graphToViewportRatio` is the ratio of a distance in the viewport divided by the same distance in the
                //   graph
                // - `this.normalizationFunction.ratio` is basically `Math.max(graphDX, graphDY)`
                // And now, I observe that if I multiply these three ratios, I have something constant, which value remains 2, even
                // when I change the graph, the viewport or the camera. It might be useful later, so I prefer to let this comment:
                // console.log(this.graphToViewportRatio * this.correctionRatio * this.normalizationFunction.ratio * 2);
                var params = this.getRenderParams();
                // Drawing nodes
                for(var type in this.nodePrograms){
                    var program = this.nodePrograms[type];
                    program.render(params);
                }
                // Drawing edges
                if (!this.settings.hideEdgesOnMove || !moving) for(var _type7 in this.edgePrograms){
                    var _program2 = this.edgePrograms[_type7];
                    _program2.render(params);
                }
                // Do not display labels on move per setting
                if (this.settings.hideLabelsOnMove && moving) return exitRender();
                this.renderLabels();
                this.renderEdgeLabels();
                this.renderHighlightedNodes();
                return exitRender();
            }
        },
        {
            key: "addNode",
            value: function addNode(key) {
                // Node display data resolution:
                //  1. First we get the node's attributes
                //  2. We optionally reduce them using the function provided by the user
                //     Note that this function must return a total object and won't be merged
                //  3. We apply our defaults, while running some vital checks
                //  4. We apply the normalization function
                // We shallow copy node data to avoid dangerous behaviors from reducers
                var attr = Object.assign({}, this.graph.getNodeAttributes(key));
                if (this.settings.nodeReducer) attr = this.settings.nodeReducer(key, attr);
                var data = applyNodeDefaults(this.settings, key, attr);
                this.nodeDataCache[key] = data;
                // Label:
                // We delete and add if needed because this function is also used from
                // update
                this.nodesWithForcedLabels["delete"](key);
                if (data.forceLabel && !data.hidden) this.nodesWithForcedLabels.add(key);
                // Highlighted:
                // We remove and re add if needed because this function is also used from
                // update
                this.highlightedNodes["delete"](key);
                if (data.highlighted && !data.hidden) this.highlightedNodes.add(key);
                // zIndex
                if (this.settings.zIndex) {
                    if (data.zIndex < this.nodeZExtent[0]) this.nodeZExtent[0] = data.zIndex;
                    if (data.zIndex > this.nodeZExtent[1]) this.nodeZExtent[1] = data.zIndex;
                }
            }
        },
        {
            key: "updateNode",
            value: function updateNode(key) {
                this.addNode(key);
                // Re-apply normalization on the node
                var data = this.nodeDataCache[key];
                this.normalizationFunction.applyTo(data);
            }
        },
        {
            key: "removeNode",
            value: function removeNode(key) {
                // Remove from node cache
                delete this.nodeDataCache[key];
                // Remove from node program index
                delete this.nodeProgramIndex[key];
                // Remove from higlighted nodes
                this.highlightedNodes["delete"](key);
                // Remove from hovered
                if (this.hoveredNode === key) this.hoveredNode = null;
                // Remove from forced label
                this.nodesWithForcedLabels["delete"](key);
            }
        },
        {
            key: "addEdge",
            value: function addEdge(key) {
                // Edge display data resolution:
                //  1. First we get the edge's attributes
                //  2. We optionally reduce them using the function provided by the user
                //  3. Note that this function must return a total object and won't be merged
                //  4. We apply our defaults, while running some vital checks
                // We shallow copy edge data to avoid dangerous behaviors from reducers
                var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
                if (this.settings.edgeReducer) attr = this.settings.edgeReducer(key, attr);
                var data = applyEdgeDefaults(this.settings, key, attr);
                this.edgeDataCache[key] = data;
                // Forced label
                // we filter and re push if needed because this function is also used from
                // update
                this.edgesWithForcedLabels["delete"](key);
                if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.add(key);
                // Check zIndex
                if (this.settings.zIndex) {
                    if (data.zIndex < this.edgeZExtent[0]) this.edgeZExtent[0] = data.zIndex;
                    if (data.zIndex > this.edgeZExtent[1]) this.edgeZExtent[1] = data.zIndex;
                }
            }
        },
        {
            key: "updateEdge",
            value: function updateEdge(key) {
                this.addEdge(key);
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(key) {
                // Remove from edge cache
                delete this.edgeDataCache[key];
                // Remove from programId index
                delete this.edgeProgramIndex[key];
                // Remove from hovered
                if (this.hoveredEdge === key) this.hoveredEdge = null;
                // Remove from forced label
                this.edgesWithForcedLabels["delete"](key);
            }
        },
        {
            key: "clearNodeIndices",
            value: function clearNodeIndices() {
                // LabelGrid & nodeExtent are only manage/populated in the process function
                this.labelGrid = new LabelGrid();
                this.nodeExtent = {
                    x: [
                        0,
                        1
                    ],
                    y: [
                        0,
                        1
                    ]
                };
                this.nodeDataCache = {};
                this.edgeProgramIndex = {};
                this.nodesWithForcedLabels = new Set();
                this.nodeZExtent = [
                    Infinity,
                    -Infinity
                ];
            }
        },
        {
            key: "clearEdgeIndices",
            value: function clearEdgeIndices() {
                this.edgeDataCache = {};
                this.edgeProgramIndex = {};
                this.edgesWithForcedLabels = new Set();
                this.edgeZExtent = [
                    Infinity,
                    -Infinity
                ];
            }
        },
        {
            key: "clearIndices",
            value: function clearIndices() {
                this.clearEdgeIndices();
                this.clearNodeIndices();
            }
        },
        {
            key: "clearNodeState",
            value: function clearNodeState() {
                this.displayedNodeLabels = new Set();
                this.highlightedNodes = new Set();
                this.hoveredNode = null;
            }
        },
        {
            key: "clearEdgeState",
            value: function clearEdgeState() {
                this.displayedEdgeLabels = new Set();
                this.highlightedNodes = new Set();
                this.hoveredEdge = null;
            }
        },
        {
            key: "clearState",
            value: function clearState() {
                this.clearEdgeState();
                this.clearNodeState();
            }
        },
        {
            key: "addNodeToProgram",
            value: function addNodeToProgram(node, fingerprint, position) {
                var data = this.nodeDataCache[node];
                var nodeProgram = this.nodePrograms[data.type];
                if (!nodeProgram) throw new Error('Sigma: could not find a suitable program for node type "'.concat(data.type, '"!'));
                nodeProgram.process(fingerprint, position, data);
                // Saving program index
                this.nodeProgramIndex[node] = position;
            }
        },
        {
            key: "addEdgeToProgram",
            value: function addEdgeToProgram(edge, fingerprint, position) {
                var data = this.edgeDataCache[edge];
                var edgeProgram = this.edgePrograms[data.type];
                if (!edgeProgram) throw new Error('Sigma: could not find a suitable program for edge type "'.concat(data.type, '"!'));
                var extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
                edgeProgram.process(fingerprint, position, sourceData, targetData, data);
                // Saving program index
                this.edgeProgramIndex[edge] = position;
            }
        },
        {
            key: "getRenderParams",
            value: function getRenderParams() {
                return {
                    matrix: this.matrix,
                    invMatrix: this.invMatrix,
                    width: this.width,
                    height: this.height,
                    pixelRatio: this.pixelRatio,
                    zoomRatio: this.camera.ratio,
                    cameraAngle: this.camera.angle,
                    sizeRatio: 1 / this.scaleSize(),
                    correctionRatio: this.correctionRatio,
                    downSizingRatio: this.pickingDownSizingRatio,
                    minEdgeThickness: this.settings.minEdgeThickness,
                    antiAliasingFeather: this.settings.antiAliasingFeather
                };
            }
        },
        {
            key: "createCanvas",
            value: function createCanvas(id) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (this.elements[id]) throw new Error('Sigma: a layer named "'.concat(id, '" already exists'));
                var canvas = (0, _normalization6Ad2Dc39EsmJs.d)("canvas", {
                    position: "absolute"
                }, {
                    "class": "sigma-".concat(id)
                });
                this.elements[id] = canvas;
                if ("beforeLayer" in options && options.beforeLayer) this.elements[options.beforeLayer].before(canvas);
                else if ("afterLayer" in options && options.afterLayer) this.elements[options.afterLayer].after(canvas);
                else this.container.appendChild(canvas);
                return canvas;
            }
        },
        {
            key: "createCanvasContext",
            value: function createCanvasContext(id) {
                var canvas = this.createCanvas(id);
                var contextOptions = {
                    preserveDrawingBuffer: false,
                    antialias: false
                };
                this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
                return this;
            }
        },
        {
            key: "createWebGLContext",
            value: function createWebGLContext(id, options) {
                var canvas = (options === null || options === void 0 ? void 0 : options.canvas) || this.createCanvas(id);
                if (options !== null && options !== void 0 && options.hidden) canvas.remove();
                var contextOptions = (0, _index766050CdEsmJs.a)({
                    preserveDrawingBuffer: false,
                    antialias: false
                }, options || {});
                var context;
                // First we try webgl2 for an easy performance boost
                context = canvas.getContext("webgl2", contextOptions);
                // Else we fall back to webgl
                if (!context) context = canvas.getContext("webgl", contextOptions);
                // Edge, I am looking right at you...
                if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
                var gl = context;
                this.webGLContexts[id] = gl;
                // Blending:
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                // Prepare frame buffer for picking layers:
                if (options !== null && options !== void 0 && options.picking) {
                    this.pickingLayers.add(id);
                    var newFrameBuffer = gl.createFramebuffer();
                    if (!newFrameBuffer) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
                    this.frameBuffers[id] = newFrameBuffer;
                }
                return gl;
            }
        },
        {
            key: "killLayer",
            value: function killLayer(id) {
                var canvas = this.elements[id];
                if (!canvas) throw new Error("Sigma: cannot kill layer ".concat(id, ", which does not exist"));
                if (this.webGLContexts[id]) {
                    var _gl$getExtension;
                    var gl = this.webGLContexts[id];
                    (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl$getExtension === void 0 || _gl$getExtension.loseContext();
                    delete this.webGLContexts[id];
                } else delete this.canvasContexts[id];
                // Delete canvas:
                canvas.remove();
                delete this.elements[id];
                return this;
            }
        },
        {
            key: "getCamera",
            value: function getCamera() {
                return this.camera;
            }
        },
        {
            key: "setCamera",
            value: function setCamera(camera) {
                this.unbindCameraHandlers();
                this.camera = camera;
                this.bindCameraHandlers();
            }
        },
        {
            key: "getContainer",
            value: function getContainer() {
                return this.container;
            }
        },
        {
            key: "getGraph",
            value: function getGraph() {
                return this.graph;
            }
        },
        {
            key: "setGraph",
            value: function setGraph(graph) {
                if (graph === this.graph) return;
                // Unbinding handlers on the current graph
                this.unbindGraphHandlers();
                if (this.checkEdgesEventsFrame !== null) {
                    cancelAnimationFrame(this.checkEdgesEventsFrame);
                    this.checkEdgesEventsFrame = null;
                }
                // Installing new graph
                this.graph = graph;
                // Binding new handlers
                this.bindGraphHandlers();
                // Re-rendering now to avoid discrepancies from now to next frame
                this.refresh();
            }
        },
        {
            key: "getMouseCaptor",
            value: function getMouseCaptor() {
                return this.mouseCaptor;
            }
        },
        {
            key: "getTouchCaptor",
            value: function getTouchCaptor() {
                return this.touchCaptor;
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions() {
                return {
                    width: this.width,
                    height: this.height
                };
            }
        },
        {
            key: "getGraphDimensions",
            value: function getGraphDimensions() {
                var extent = this.customBBox || this.nodeExtent;
                return {
                    width: extent.x[1] - extent.x[0] || 1,
                    height: extent.y[1] - extent.y[0] || 1
                };
            }
        },
        {
            key: "getNodeDisplayData",
            value: function getNodeDisplayData(key) {
                var node = this.nodeDataCache[key];
                return node ? Object.assign({}, node) : undefined;
            }
        },
        {
            key: "getEdgeDisplayData",
            value: function getEdgeDisplayData(key) {
                var edge = this.edgeDataCache[key];
                return edge ? Object.assign({}, edge) : undefined;
            }
        },
        {
            key: "getNodeDisplayedLabels",
            value: function getNodeDisplayedLabels() {
                return new Set(this.displayedNodeLabels);
            }
        },
        {
            key: "getEdgeDisplayedLabels",
            value: function getEdgeDisplayedLabels() {
                return new Set(this.displayedEdgeLabels);
            }
        },
        {
            key: "getSettings",
            value: function getSettings() {
                return (0, _index766050CdEsmJs.a)({}, this.settings);
            }
        },
        {
            key: "getSetting",
            value: function getSetting(key) {
                return this.settings[key];
            }
        },
        {
            key: "setSetting",
            value: function setSetting(key, value) {
                var oldValues = (0, _index766050CdEsmJs.a)({}, this.settings);
                this.settings[key] = value;
                (0, _sigmaSettingsEsmJs.validateSettings)(this.settings);
                this.handleSettingsUpdate(oldValues);
                this.scheduleRefresh();
                return this;
            }
        },
        {
            key: "updateSetting",
            value: function updateSetting(key, updater) {
                this.setSetting(key, updater(this.settings[key]));
                return this;
            }
        },
        {
            key: "resize",
            value: function resize(force) {
                var previousWidth = this.width, previousHeight = this.height;
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.pixelRatio = (0, _normalization6Ad2Dc39EsmJs.g)();
                if (this.width === 0) {
                    if (this.settings.allowInvalidContainer) this.width = 1;
                    else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
                }
                if (this.height === 0) {
                    if (this.settings.allowInvalidContainer) this.height = 1;
                    else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
                }
                // If nothing has changed, we can stop right here
                if (!force && previousWidth === this.width && previousHeight === this.height) return this;
                this.emit("resize");
                // Sizing dom elements
                for(var id in this.elements){
                    var element = this.elements[id];
                    element.style.width = this.width + "px";
                    element.style.height = this.height + "px";
                }
                // Sizing canvas contexts
                for(var _id in this.canvasContexts){
                    this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
                    this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
                    if (this.pixelRatio !== 1) this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
                }
                // Sizing WebGL contexts
                for(var _id2 in this.webGLContexts){
                    this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
                    this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
                    var gl = this.webGLContexts[_id2];
                    gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
                    // Clear picking texture if needed
                    if (this.pickingLayers.has(_id2)) {
                        var currentTexture = this.textures[_id2];
                        if (currentTexture) gl.deleteTexture(currentTexture);
                    }
                }
                return this;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.emit("beforeClear");
                this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
                this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
                this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
                this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
                this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
                this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
                this.emit("afterClear");
                return this;
            }
        },
        {
            key: "refresh",
            value: function refresh(opts) {
                var _this9 = this;
                var skipIndexation = (opts === null || opts === void 0 ? void 0 : opts.skipIndexation) !== undefined ? opts === null || opts === void 0 ? void 0 : opts.skipIndexation : false;
                var schedule = (opts === null || opts === void 0 ? void 0 : opts.schedule) !== undefined ? opts.schedule : false;
                var fullRefresh = !opts || !opts.partialGraph;
                if (fullRefresh) {
                    // Re-index graph data
                    this.clearEdgeIndices();
                    this.clearNodeIndices();
                    this.graph.forEachNode(function(node) {
                        return _this9.addNode(node);
                    });
                    this.graph.forEachEdge(function(edge) {
                        return _this9.addEdge(edge);
                    });
                } else {
                    var _opts$partialGraph, _opts$partialGraph2;
                    var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === void 0 ? void 0 : _opts$partialGraph.nodes) || [];
                    for(var i = 0, l = (nodes === null || nodes === void 0 ? void 0 : nodes.length) || 0; i < l; i++){
                        var node = nodes[i];
                        // Recompute node's data (ie. apply reducer)
                        this.updateNode(node);
                        // Add node to the program if layout is unchanged.
                        // otherwise it will be done in the process function
                        if (skipIndexation) {
                            var programIndex = this.nodeProgramIndex[node];
                            if (programIndex === undefined) throw new Error('Sigma: node "'.concat(node, "\" can't be repaint"));
                            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
                        }
                    }
                    var edges = (opts === null || opts === void 0 || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === void 0 ? void 0 : _opts$partialGraph2.edges) || [];
                    for(var _i4 = 0, _l4 = edges.length; _i4 < _l4; _i4++){
                        var edge = edges[_i4];
                        // Recompute edge's data (ie. apply reducer)
                        this.updateEdge(edge);
                        // Add edge to the program
                        // otherwise it will be done in the process function
                        if (skipIndexation) {
                            var _programIndex = this.edgeProgramIndex[edge];
                            if (_programIndex === undefined) throw new Error('Sigma: edge "'.concat(edge, "\" can't be repaint"));
                            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
                        }
                    }
                }
                // Do we need to call the process function ?
                if (fullRefresh || !skipIndexation) this.needToProcess = true;
                if (schedule) this.scheduleRender();
                else this.render();
                return this;
            }
        },
        {
            key: "scheduleRender",
            value: function scheduleRender() {
                var _this10 = this;
                if (!this.renderFrame) this.renderFrame = requestAnimationFrame(function() {
                    _this10.render();
                });
                return this;
            }
        },
        {
            key: "scheduleRefresh",
            value: function scheduleRefresh(opts) {
                return this.refresh((0, _index766050CdEsmJs.a)((0, _index766050CdEsmJs.a)({}, opts), {}, {
                    schedule: true
                }));
            }
        },
        {
            key: "getViewportZoomedState",
            value: function getViewportZoomedState(viewportTarget, newRatio) {
                var _this$camera$getState = this.camera.getState(), ratio = _this$camera$getState.ratio, angle = _this$camera$getState.angle, x = _this$camera$getState.x, y = _this$camera$getState.y;
                // TODO: handle max zoom
                var ratioDiff = newRatio / ratio;
                var center = {
                    x: this.width / 2,
                    y: this.height / 2
                };
                var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
                var graphCenterPosition = this.viewportToFramedGraph(center);
                return {
                    angle: angle,
                    x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
                    y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
                    ratio: newRatio
                };
            }
        },
        {
            key: "viewRectangle",
            value: function viewRectangle() {
                // TODO: reduce relative margin?
                var marginX = 0 * this.width / 8, marginY = 0 * this.height / 8;
                var p1 = this.viewportToFramedGraph({
                    x: 0 - marginX,
                    y: 0 - marginY
                }), p2 = this.viewportToFramedGraph({
                    x: this.width + marginX,
                    y: 0 - marginY
                }), h = this.viewportToFramedGraph({
                    x: 0,
                    y: this.height + marginY
                });
                return {
                    x1: p1.x,
                    y1: p1.y,
                    x2: p2.x,
                    y2: p2.y,
                    height: p2.y - h.y
                };
            }
        },
        {
            key: "framedGraphToViewport",
            value: function framedGraphToViewport(coordinates) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
                var matrix = override.matrix ? override.matrix : recomputeMatrix ? (0, _normalization6Ad2Dc39EsmJs.m)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0) : this.matrix;
                var viewportPos = (0, _normalization6Ad2Dc39EsmJs.f)(matrix, coordinates);
                return {
                    x: (1 + viewportPos.x) * this.width / 2,
                    y: (1 - viewportPos.y) * this.height / 2
                };
            }
        },
        {
            key: "viewportToFramedGraph",
            value: function viewportToFramedGraph(coordinates) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
                var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? (0, _normalization6Ad2Dc39EsmJs.m)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true) : this.invMatrix;
                var res = (0, _normalization6Ad2Dc39EsmJs.f)(invMatrix, {
                    x: coordinates.x / this.width * 2 - 1,
                    y: 1 - coordinates.y / this.height * 2
                });
                if (isNaN(res.x)) res.x = 0;
                if (isNaN(res.y)) res.y = 0;
                return res;
            }
        },
        {
            key: "viewportToGraph",
            value: function viewportToGraph(viewportPoint) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
            }
        },
        {
            key: "graphToViewport",
            value: function graphToViewport(graphPoint) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
            }
        },
        {
            key: "getGraphToViewportRatio",
            value: function getGraphToViewportRatio() {
                var graphP1 = {
                    x: 0,
                    y: 0
                };
                var graphP2 = {
                    x: 1,
                    y: 1
                };
                var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
                var viewportP1 = this.graphToViewport(graphP1);
                var viewportP2 = this.graphToViewport(graphP2);
                var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
                return viewportD / graphD;
            }
        },
        {
            key: "getBBox",
            value: function getBBox() {
                return this.nodeExtent;
            }
        },
        {
            key: "getCustomBBox",
            value: function getCustomBBox() {
                return this.customBBox;
            }
        },
        {
            key: "setCustomBBox",
            value: function setCustomBBox(customBBox) {
                this.customBBox = customBBox;
                this.scheduleRender();
                return this;
            }
        },
        {
            key: "kill",
            value: function kill() {
                // Emitting "kill" events so that plugins and such can cleanup
                this.emit("kill");
                // Releasing events
                this.removeAllListeners();
                // Releasing camera handlers
                this.unbindCameraHandlers();
                // Releasing DOM events & captors
                window.removeEventListener("resize", this.activeListeners.handleResize);
                this.mouseCaptor.kill();
                this.touchCaptor.kill();
                // Releasing graph handlers
                this.unbindGraphHandlers();
                // Releasing cache & state
                this.clearIndices();
                this.clearState();
                this.nodeDataCache = {};
                this.edgeDataCache = {};
                this.highlightedNodes.clear();
                // Clearing frames
                if (this.renderFrame) {
                    cancelAnimationFrame(this.renderFrame);
                    this.renderFrame = null;
                }
                if (this.renderHighlightedNodesFrame) {
                    cancelAnimationFrame(this.renderHighlightedNodesFrame);
                    this.renderHighlightedNodesFrame = null;
                }
                // Destroying canvases
                var container = this.container;
                while(container.firstChild)container.removeChild(container.firstChild);
                // Destroying remaining collections
                this.canvasContexts = {};
                this.webGLContexts = {};
                this.elements = {};
                // Kill programs:
                for(var type in this.nodePrograms)this.nodePrograms[type].kill();
                for(var _type8 in this.nodeHoverPrograms)this.nodeHoverPrograms[_type8].kill();
                for(var _type9 in this.edgePrograms)this.edgePrograms[_type9].kill();
                this.nodePrograms = {};
                this.nodeHoverPrograms = {};
                this.edgePrograms = {};
                // Kill all canvas/WebGL contexts
                for(var id in this.elements)this.killLayer(id);
            }
        },
        {
            key: "scaleSize",
            value: function scaleSize() {
                var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var cameraRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.camera.ratio;
                return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
            }
        },
        {
            key: "getCanvases",
            value: function getCanvases() {
                return (0, _index766050CdEsmJs.a)({}, this.elements);
            }
        }
    ]);
    return Sigma;
}((0, _sigmaTypesEsmJs.TypedEventEmitter));
/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */ var Sigma = Sigma$1;

},{"./inherits-8fbdedb5.esm.js":"4VwIq","./index-766050cd.esm.js":"fZBXY","../types/dist/sigma-types.esm.js":"iskul","./normalization-6ad2dc39.esm.js":"kr6jn","./colors-2f6d17f0.esm.js":"jY79t","../settings/dist/sigma-settings.esm.js":"gE52Y","./data-31990a76.esm.js":"kT3L7","events":"1VQLm","graphology-utils/is-graph":"9Cax7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iskul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Event types.
 */ /**
 * Export various other types:
 */ parcelHelpers.export(exports, "TypedEventEmitter", ()=>TypedEventEmitter);
var _inherits8Fbdedb5EsmJs = require("../../dist/inherits-8fbdedb5.esm.js");
var _events = require("events");
/**
 * Util type to represent maps of typed elements, but implemented with
 * JavaScript objects.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Returns a type similar to T, but with the K set of properties of the type
 * T *required*, and the rest optional.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Custom event emitter types.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
var TypedEventEmitter = /*#__PURE__*/ function(_ref) {
    (0, _inherits8Fbdedb5EsmJs._)(TypedEventEmitter, _ref);
    function TypedEventEmitter() {
        var _this;
        (0, _inherits8Fbdedb5EsmJs.a)(this, TypedEventEmitter);
        _this = (0, _inherits8Fbdedb5EsmJs.b)(this, TypedEventEmitter);
        _this.rawEmitter = (0, _inherits8Fbdedb5EsmJs.c)(_this);
        return _this;
    }
    return (0, _inherits8Fbdedb5EsmJs.d)(TypedEventEmitter);
}((0, _events.EventEmitter));

},{"../../dist/inherits-8fbdedb5.esm.js":"4VwIq","events":"1VQLm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"gE52Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_EDGE_PROGRAM_CLASSES", ()=>DEFAULT_EDGE_PROGRAM_CLASSES);
parcelHelpers.export(exports, "DEFAULT_NODE_PROGRAM_CLASSES", ()=>DEFAULT_NODE_PROGRAM_CLASSES);
parcelHelpers.export(exports, "DEFAULT_SETTINGS", ()=>DEFAULT_SETTINGS);
parcelHelpers.export(exports, "resolveSettings", ()=>resolveSettings);
parcelHelpers.export(exports, "validateSettings", ()=>validateSettings);
var _index766050CdEsmJs = require("../../dist/index-766050cd.esm.js");
var _data31990A76EsmJs = require("../../dist/data-31990a76.esm.js");
var _inherits8Fbdedb5EsmJs = require("../../dist/inherits-8fbdedb5.esm.js");
var _colors2F6D17F0EsmJs = require("../../dist/colors-2f6d17f0.esm.js");
/**
 * Sigma.js Settings
 * =================================
 *
 * The list of settings and some handy functions.
 * @module
 */ /**
 * Sigma.js settings
 * =================================
 */ var DEFAULT_SETTINGS = {
    // Performance
    hideEdgesOnMove: false,
    hideLabelsOnMove: false,
    renderLabels: true,
    renderEdgeLabels: false,
    enableEdgeEvents: false,
    // Component rendering
    defaultNodeColor: "#999",
    defaultNodeType: "circle",
    defaultEdgeColor: "#ccc",
    defaultEdgeType: "line",
    labelFont: "Arial",
    labelSize: 14,
    labelWeight: "normal",
    labelColor: {
        color: "#000"
    },
    edgeLabelFont: "Arial",
    edgeLabelSize: 14,
    edgeLabelWeight: "normal",
    edgeLabelColor: {
        attribute: "color"
    },
    stagePadding: 30,
    zoomToSizeRatioFunction: Math.sqrt,
    itemSizesReference: "screen",
    defaultDrawEdgeLabel: (0, _index766050CdEsmJs.d),
    defaultDrawNodeLabel: (0, _index766050CdEsmJs.b),
    defaultDrawNodeHover: (0, _index766050CdEsmJs.c),
    minEdgeThickness: 1.7,
    antiAliasingFeather: 1,
    // Labels
    labelDensity: 1,
    labelGridCellSize: 100,
    labelRenderedSizeThreshold: 6,
    // Reducers
    nodeReducer: null,
    edgeReducer: null,
    // Features
    zIndex: false,
    minCameraRatio: null,
    maxCameraRatio: null,
    enableCameraRotation: true,
    // Lifecycle
    allowInvalidContainer: false,
    // Program classes
    nodeProgramClasses: {},
    nodeHoverProgramClasses: {},
    edgeProgramClasses: {}
};
var DEFAULT_NODE_PROGRAM_CLASSES = {
    circle: (0, _index766050CdEsmJs.N)
};
var DEFAULT_EDGE_PROGRAM_CLASSES = {
    arrow: (0, _index766050CdEsmJs.E),
    line: (0, _index766050CdEsmJs.e)
};
function validateSettings(settings) {
    if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
    var minCameraRatio = settings.minCameraRatio, maxCameraRatio = settings.maxCameraRatio;
    if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
}
function resolveSettings(settings) {
    var resolvedSettings = (0, _data31990A76EsmJs.a)({}, DEFAULT_SETTINGS, settings);
    resolvedSettings.nodeProgramClasses = (0, _data31990A76EsmJs.a)({}, DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
    resolvedSettings.edgeProgramClasses = (0, _data31990A76EsmJs.a)({}, DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
    return resolvedSettings;
}

},{"../../dist/index-766050cd.esm.js":"fZBXY","../../dist/data-31990a76.esm.js":"kT3L7","../../dist/inherits-8fbdedb5.esm.js":"4VwIq","../../dist/colors-2f6d17f0.esm.js":"jY79t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dZI1r","jeorp"], "jeorp", "parcelRequire70f0")

//# sourceMappingURL=index.b7a05eb9.js.map
