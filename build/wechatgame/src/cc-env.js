'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/*
* SystemJS 1.0.4
*/

(function () {
  var hasSelf = typeof self !== 'undefined';
  var envGlobal = hasSelf ? self : commonjsGlobal;
  var baseUrl;

  if (typeof document !== 'undefined') {
    var baseEl = document.querySelector('base[href]');
    if (baseEl) baseUrl = baseEl.href;
  }

  if (!baseUrl && typeof location !== 'undefined') {
    baseUrl = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl.lastIndexOf('/');
    if (lastSepIndex !== -1) baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }

  var backslashRegEx = /\\/g;

  function resolveIfNotPlainOrUrl(relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1) relUrl = relUrl.replace(backslashRegEx, '/'); // protocol-relative

    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    } // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) || relUrl.length === 1 && (relUrl += '/')) || relUrl[0] === '/') {
        var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1); // Disabled, but these cases will give inconsistent results for deep backtracking
        //if (parentUrl[parentProtocol.length] !== '/')
        //  throw Error('Cannot resolve');
        // read pathname from parent URL
        // pathname taken to be part after leading "/"

        var pathname;

        if (parentUrl[parentProtocol.length + 1] === '/') {
          // resolving to a :// so we need to read out the auth and host
          if (parentProtocol !== 'file:') {
            pathname = parentUrl.slice(parentProtocol.length + 2);
            pathname = pathname.slice(pathname.indexOf('/') + 1);
          } else {
            pathname = parentUrl.slice(8);
          }
        } else {
          // resolving to :/ so pathname is the /... part
          pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
        }

        if (relUrl[0] === '/') return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl; // join together and split for removal of .. and . segments
        // looping the string instead of anything fancy for perf reasons
        // '../../../../../z' resolved to 'x/y' is just 'z'

        var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;
        var output = [];
        var segmentIndex = -1;

        for (var i = 0; i < segmented.length; i++) {
          // busy reading a segment - only terminate on '/'
          if (segmentIndex !== -1) {
            if (segmented[i] === '/') {
              output.push(segmented.slice(segmentIndex, i + 1));
              segmentIndex = -1;
            }
          } // new segment - check if it is relative
          else if (segmented[i] === '.') {
              // ../ segment
              if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
                output.pop();
                i += 2;
              } // ./ segment
              else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
                  i += 1;
                } else {
                  // the start of a new segment as below
                  segmentIndex = i;
                }
            } // it is the start of a new segment
            else {
                segmentIndex = i;
              }
        } // finish reading out the last segment


        if (segmentIndex !== -1) output.push(segmented.slice(segmentIndex));
        return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
      }
  }
  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */


  function resolveUrl(relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || relUrl.indexOf(':') !== -1 && relUrl || resolveIfNotPlainOrUrl('./' + relUrl, parentUrl);
  }

  function resolvePackages(pkgs, baseUrl) {
    var outPkgs = {};

    for (var p in pkgs) {
      var value = pkgs[p]; // TODO package fallback support

      if (typeof value !== 'string') continue;
      outPkgs[resolveIfNotPlainOrUrl(p, baseUrl) || p] = resolveUrl(value, baseUrl);
    }

    return outPkgs;
  }

  function parseImportMap(json, baseUrl) {
    var imports = resolvePackages(json.imports, baseUrl) || {};
    var scopes = {};

    if (json.scopes) {
      for (var scopeName in json.scopes) {
        var scope = json.scopes[scopeName];
        var resolvedScopeName = resolveUrl(scopeName, baseUrl);
        if (resolvedScopeName[resolvedScopeName.length - 1] !== '/') resolvedScopeName += '/';
        scopes[resolvedScopeName] = resolvePackages(scope, baseUrl) || {};
      }
    }

    return {
      imports: imports,
      scopes: scopes
    };
  }

  function getMatch(path, matchObj) {
    if (matchObj[path]) return path;
    var sepIndex = path.length;

    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj) return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1);
  }

  function applyPackages(id, packages) {
    var pkgName = getMatch(id, packages);

    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') console.warn("Invalid package target " + pkg + " for '" + pkgName + "' should have a trailing '/'.");
      return pkg + id.slice(pkgName.length);
    }
  }

  function resolveImportMap(id, parentUrl, importMap) {
    var urlResolved = resolveIfNotPlainOrUrl(id, parentUrl) || id.indexOf(':') !== -1 && id;
    if (urlResolved) id = urlResolved;
    var scopeName = getMatch(parentUrl, importMap.scopes);

    if (scopeName) {
      var scopePackages = importMap.scopes[scopeName];
      var packageResolution = applyPackages(id, scopePackages);
      if (packageResolution) return packageResolution;
    }

    return applyPackages(id, importMap.imports) || urlResolved || throwBare(id, parentUrl);
  }

  function throwBare(id, parentUrl) {
    throw Error('Unable to resolve bare specifier "' + id + (parentUrl ? '" from ' + parentUrl : '"'));
  }
  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(id, err?) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */


  var hasSymbol = typeof Symbol !== 'undefined';
  var toStringTag = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS() {
    this[REGISTRY] = {};
  }

  var systemJSPrototype = SystemJS.prototype;

  systemJSPrototype["import"] = function (id, parentUrl) {
    var loader = this;
    return Promise.resolve(loader.resolve(id, parentUrl)).then(function (id) {
      var load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  }; // Hookable createContext function -> allowing eg custom import meta


  systemJSPrototype.createContext = function (parentId) {
    return {
      url: parentId
    };
  }; // onLoad(id, err) provided for tracing / hot-reloading


  systemJSPrototype.onload = function () {};

  var lastRegister;

  systemJSPrototype.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };
  /*
   * getRegister provides the last anonymous System.register call
   */


  systemJSPrototype.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad(loader, id, firstParentUrl) {
    var load = loader[REGISTRY][id];
    if (load) return load;
    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag) Object.defineProperty(ns, toStringTag, {
      value: 'Module'
    });
    var instantiatePromise = Promise.resolve().then(function () {
      return loader.instantiate(id, firstParentUrl);
    }).then(function (registration) {
      if (!registration) throw Error('Module ' + id + ' did not instantiate');

      function _export(name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;

        if (_typeof(name) !== 'object') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        } else {
          for (var p in name) {
            var _value = name[p];

            if (!(p in ns) || ns[p] !== _value) {
              ns[p] = _value;
              changed = true;
            }
          }
        }

        if (changed) for (var i = 0; i < importerSetters.length; i++) {
          importerSetters[i](ns);
        }
        return value;
      }

      var declared = registration[1](_export, registration[1].length === 2 ? {
        "import": function _import(importId) {
          return loader["import"](importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);

      load.e = declared.execute || function () {};

      return [registration[0], declared.setters || []];
    });
    instantiatePromise = instantiatePromise["catch"](function (err) {
      loader.onload(load.id, err);
      throw err;
    });
    var linkPromise = instantiatePromise.then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id)).then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id); // depLoad.I may be undefined for already-evaluated

          return Promise.resolve(depLoad.I).then(function () {
            if (setter) {
              depLoad.i.push(setter); // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters

              if (depLoad.h || !depLoad.I) setter(depLoad.n);
            }

            return depLoad;
          });
        });
      })).then(function (depLoads) {
        load.d = depLoads;
      });
    });
    linkPromise["catch"](function (err) {
      load.e = null;
      load.er = err;
    }); // Capital letter = a promise function

    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,
      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,
      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      // set to NULL immediately after execution (or on any failure) to indicate execution has happened
      // in such a case, pC should be used, and pLo, pLi will be emptied
      e: undefined,
      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,
      // On execution, pLi, pLo, e cleared
      // Promise for top-level completion
      C: undefined
    };
  }

  function instantiateAll(loader, load, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true; // load.L may be undefined for already-instantiated

      return Promise.resolve(load.L).then(function () {
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, loaded);
        }));
      });
    }
  }

  function topLevelLoad(loader, load) {
    return load.C = instantiateAll(loader, load, {}).then(function () {
      return postOrderExec(loader, load, {});
    }).then(function () {
      return load.n;
    });
  } // the closest we can get to call(undefined)


  var nullContext = Object.freeze(Object.create(null)); // returns a promise if and only if a top-level await subgraph
  // throws on sync errors

  function postOrderExec(loader, load, seen) {
    if (seen[load.id]) return;
    seen[load.id] = true;

    if (!load.e) {
      if (load.er) throw load.er;
      if (load.E) return load.E;
      return;
    } // deps execute first, unless circular


    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      {
        try {
          var depLoadPromise = postOrderExec(loader, depLoad, seen);
          if (depLoadPromise) (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
        } catch (err) {
          loader.onload(load.id, err);
          throw err;
        }
      }
    });

    if (depLoadPromises) {
      return Promise.all(depLoadPromises).then(doExec)["catch"](function (err) {
        loader.onload(load.id, err);
        throw err;
      });
    }

    return doExec();

    function doExec() {
      try {
        var execPromise = load.e.call(nullContext);

        if (execPromise) {
          execPromise = execPromise.then(function () {
            load.C = load.n;
            load.E = null; // indicates completion

            loader.onload(load.id, null);
          }, function (err) {
            loader.onload(load.id, err);
            throw err;
          });
          return load.E = load.E || execPromise;
        } // (should be a promise, but a minify optimization to leave out Promise.resolve)


        load.C = load.n;
        loader.onload(load.id, null);
      } catch (err) {
        loader.onload(load.id, err);
        load.er = err;
        throw err;
      } finally {
        load.L = load.I = undefined;
        load.e = null;
      }
    }
  }

  envGlobal.System = new SystemJS();
  /*
   * Supports loading System.register via script tag injection
   */

  var systemRegister = systemJSPrototype.register;

  systemJSPrototype.register = function (deps, declare) {
    systemRegister.call(this, deps, declare);
  };

  systemJSPrototype.fetchScript = function (url, firstParentUrl) {
    return new Promise(function (resolve, reject) {
      var err;

      function windowErrorListener(evt) {
        if (evt.filename === url) err = evt.error;
      }

      window.addEventListener('error', windowErrorListener);
      var script = document.createElement('script');
      script.charset = 'utf-8';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.addEventListener('error', function () {
        window.removeEventListener('error', windowErrorListener);
        reject(Error('Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : '')));
      });
      script.addEventListener('load', function () {
        window.removeEventListener('error', windowErrorListener);
        document.head.removeChild(script); // Note that if an error occurs that isn't caught by this if statement,
        // that getRegister will return null and a "did not instantiate" error will be thrown.

        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
      script.src = url;
      document.head.appendChild(script);
    });
  };

  systemJSPrototype.fetchJson = function (url, firstParentUrl) {
    return fetch(url).then(function (resp) {
      return resp.text();
    });
  };

  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var loader = this;

    if (url.substr(-5) === '.json') {
      return this.fetchJson(url, firstParentUrl).then(function (source) {
        return [[], function (_export) {
          return {
            execute: function execute() {
              _export('default', JSON.parse(source));
            }
          };
        }];
      });
    } else {
      return this.fetchScript(url, firstParentUrl).then(function () {
        return loader.getRegister();
      });
    }
  };
  /*
   * Supports loading System.register in workers
   */


  if (hasSelf && typeof importScripts === 'function') systemJSPrototype.instantiate = function (url) {
    var loader = this;
    return new Promise(function (resolve, reject) {
      try {
        importScripts(url);
      } catch (e) {
        reject(e);
      }

      resolve(loader.getRegister());
    });
  };
  /*
   * SystemJS global script loading support
   * Extra for the s.js build only
   * (Included by default in system.js build)
   */

  (function (global) {
    var systemJSPrototype = System.constructor.prototype; // safari unpredictably lists some new globals first or second in object order

    var firstGlobalProp, secondGlobalProp, lastGlobalProp;

    function getGlobalProp() {
      var cnt = 0;
      var lastProp;

      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (!global.hasOwnProperty(p) || !isNaN(p) && p < global.length) continue;
        if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp) return p;
        cnt++;
        lastProp = p;
      }

      if (lastProp !== lastGlobalProp) return lastProp;
    }

    function noteGlobalProps() {
      // alternatively Object.keys(global).pop()
      // but this may be faster (pending benchmarks)
      firstGlobalProp = secondGlobalProp = undefined;

      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (!global.hasOwnProperty(p) || !isNaN(p) && p < global.length) continue;
        if (!firstGlobalProp) firstGlobalProp = p;else if (!secondGlobalProp) secondGlobalProp = p;
        lastGlobalProp = p;
      }

      return lastGlobalProp;
    }

    var impt = systemJSPrototype["import"];

    systemJSPrototype["import"] = function (id, parentUrl) {
      noteGlobalProps();
      return impt.call(this, id, parentUrl);
    };

    var emptyInstantiation = [[], function () {
      return {};
    }];
    var getRegister = systemJSPrototype.getRegister;

    systemJSPrototype.getRegister = function () {
      var lastRegister = getRegister.call(this);
      if (lastRegister) return lastRegister; // no registration -> attempt a global detection as difference from snapshot
      // when multiple globals, we take the global value to be the last defined new global object property
      // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
      // note in Edge, deleting and re-adding a global does not change its ordering

      var globalProp = getGlobalProp();
      if (!globalProp) return emptyInstantiation;
      var globalExport;

      try {
        globalExport = global[globalProp];
      } catch (e) {
        return emptyInstantiation;
      }

      return [[], function (_export) {
        return {
          execute: function execute() {
            _export({
              "default": globalExport,
              __useDefault: true
            });
          }
        };
      }];
    };
  })(typeof self !== 'undefined' ? self : commonjsGlobal);
  /*
   * Loads WASM based on file extension detection
   * Assumes successive instantiate will handle other files
   */


  var instantiate = systemJSPrototype.instantiate;

  systemJSPrototype.instantiate = function (url, parent) {
    if (url.slice(-5) !== '.wasm') return instantiate.call(this, url, parent);
    return fetch(url).then(function (res) {
      if (!res.ok) throw Error(res.status + ' ' + res.statusText + ' ' + res.url + (parent ? ' loading from ' + parent : ''));
      if (WebAssembly.compileStreaming) return WebAssembly.compileStreaming(res);
      return res.arrayBuffer().then(function (buf) {
        return WebAssembly.compile(buf);
      });
    }).then(function (module) {
      var deps = [];
      var setters = [];
      var importObj = {}; // we can only set imports if supported (eg early Safari doesnt support)

      if (WebAssembly.Module.imports) WebAssembly.Module.imports(module).forEach(function (impt) {
        var key = impt.module;
        setters.push(function (m) {
          importObj[key] = m;
        });
        if (deps.indexOf(key) === -1) deps.push(key);
      });
      return [deps, function (_export) {
        return {
          setters: setters,
          execute: function execute() {
            return WebAssembly.instantiate(module, importObj).then(function (instance) {
              _export(instance.exports);
            });
          }
        };
      }];
    });
  };
  /*
   * Import map support for SystemJS
   * 
   * <script type="systemjs-importmap">{}</script>
   * OR
   * <script type="systemjs-importmap" src=package.json></script>
   * 
   * Only those import maps available at the time of SystemJS initialization will be loaded
   * and they will be loaded in DOM order.
   * 
   * There is no support for dynamic import maps injection currently.
   */


  var baseMap = Object.create(null);
  baseMap.imports = Object.create(null);
  baseMap.scopes = Object.create(null);
  var importMapPromise = Promise.resolve(baseMap);
  var acquiringImportMaps = typeof document !== 'undefined';

  if (acquiringImportMaps) {
    Array.prototype.forEach.call(document.querySelectorAll('script[type="systemjs-importmap"][src]'), function (script) {
      script._j = fetch(script.src).then(function (resp) {
        return resp.json();
      });
    });
  }

  function mergeImportMap(originalMap, newMap) {
    for (var i in newMap.imports) {
      originalMap.imports[i] = newMap.imports[i];
    }

    for (var _i in newMap.scopes) {
      originalMap.scopes[_i] = newMap.scopes[_i];
    }

    return originalMap;
  }

  systemJSPrototype.acquireImportMaps = function () {
    return document.querySelectorAll('script[type="systemjs-importmap"]');
  };

  systemJSPrototype.resolve = function (id, parentUrl) {
    parentUrl = parentUrl || baseUrl;

    if (acquiringImportMaps) {
      acquiringImportMaps = false;
      Array.prototype.forEach.call(this.acquireImportMaps(), function (script) {
        importMapPromise = importMapPromise.then(function (map) {
          return (script._j || script.src && fetch(script.src).then(function (resp) {
            return resp.json();
          }) || Promise.resolve(JSON.parse(script.innerHTML))).then(function (json) {
            return mergeImportMap(map, parseImportMap(json, script.src || baseUrl));
          });
        });
      });
    }

    return importMapPromise.then(function (importMap) {
      return resolveImportMap(id, parentUrl, importMap);
    });
  };

  var toStringTag$1 = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype.get = function (id) {
    var load = this[REGISTRY][id];

    if (load && load.e === null && !load.E) {
      if (load.er) return null;
      return load.n;
    }
  };

  systemJSPrototype.set = function (id, module) {
    var ns;

    if (toStringTag$1 && module[toStringTag$1] === 'Module') {
      ns = module;
    } else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag$1) Object.defineProperty(ns, toStringTag$1, {
        value: 'Module'
      });
    }

    var done = Promise.resolve(ns);
    this["delete"](id);
    this[REGISTRY][id] = {
      id: id,
      i: [],
      n: ns,
      I: done,
      L: done,
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined,
      C: done
    };
    return ns;
  };

  systemJSPrototype.has = function (id) {
    var load = this[REGISTRY][id];
    return load && load.e === null && !load.E;
  }; // Delete function provided for hot-reloading use cases


  systemJSPrototype["delete"] = function (id) {
    var load = this.get(id);
    if (load === undefined) return false; // remove from importerSetters
    // (release for gc)

    if (load && load.d) load.d.forEach(function (depLoad) {
      var importerIndex = depLoad.i.indexOf(load);
      if (importerIndex !== -1) depLoad.i.splice(importerIndex, 1);
    });
    return delete this[REGISTRY][id];
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype.entries = function () {
    var loader = this,
        keys = Object.keys(loader[REGISTRY]);
    var index = 0,
        ns,
        key;
    var result = {
      next: function next() {
        while ((key = keys[index++]) !== undefined && (ns = loader.get(key)) === undefined) {
        }

        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function () {
      return this;
    };

    return result;
  };
})();

/*
 * SystemJS named register extension
 * Supports System.register('name', [..deps..], function (_export, _context) { ... })
 * 
 * Names are written to the registry as-is
 * System.register('x', ...) can be imported as System.import('x')
 */
(function () {
  var systemJSPrototype = System.constructor.prototype;
  var constructor = System.constructor;

  var SystemJS = function SystemJS() {
    constructor.call(this);
    this.registerRegistry = Object.create(null);
  };

  SystemJS.prototype = systemJSPrototype;
  System = new SystemJS();
  var register = systemJSPrototype.register;

  systemJSPrototype.register = function (name, deps, declare) {
    if (typeof name !== 'string') return register.apply(this, arguments);
    this.registerRegistry[name] = [deps, declare]; // Provide an empty module to signal success.

    return register.call(this, [], function () {
      return {};
    });
  };

  var resolve = systemJSPrototype.resolve;

  systemJSPrototype.resolve = function (id, parentURL) {
    if (id[0] === '/' || id[0] === '.' && (id[1] === '/' || id[1] === '.' && id[2] === '/')) return resolve.call(this, id, parentURL);
    if (id in this.registerRegistry) return id;
    return resolve.call(this, id, parentURL);
  };

  var instantiate = systemJSPrototype.instantiate;

  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    return this.registerRegistry[url] || instantiate.call(this, url, firstParentUrl);
  };
})();

var urlMappings = {};
var vendorInstantiate = System.constructor.prototype.instantiate;

System.constructor.prototype.instantiate = function (url, firstParentUrl) {
  var realUrl = url in urlMappings ? urlMappings[url] : url;
  return vendorInstantiate.call(this, realUrl, firstParentUrl);
};
/**
 * Import a module.
 * @param name 
 */


function imp(name) {
  return System["import"](name);
}
/**
 * Delete a module.
 * @param name 
 */

function del(name) {
  return System["delete"](name);
}
/**
 * The "type" property of the HTML script element which is treated as an import map.
 */

var importMapType = 'systemjs-importmap';
/**
 * Set the mapping of the specified url to another url.
 * Note, this function is for private use only.
 * @param url 
 * @param mapped 
 */

function _setUrlMapping(url, mapped) {
  urlMappings[url] = mapped;
}
/**
 * Delete the mapping of the specified url.
 * Note, this function is for private use only.
 * @param url 
 */

function _deleteUrlMapping(url) {
  delete urlMappings[url];
}
/**
 * Register a module who forward all exports from a commonjs module.
 * Note, this function is for private use only.
 * @param aliasUrl The url the result module having.
 * @param requirer The requirer is called to provide the commonjs module.
 */

function _forwardCommonJsModule(aliasUrl, requirer) {
  System.register(aliasUrl, [], function (_export, _context) {
    return {
      setters: [],
      execute: function execute() {
        var cjsm = requirer();

        _export(cjsm);
      }
    };
  });
}

exports._deleteUrlMapping = _deleteUrlMapping;
exports._forwardCommonJsModule = _forwardCommonJsModule;
exports._setUrlMapping = _setUrlMapping;
exports.del = del;
exports.imp = imp;
exports.importMapType = importMapType;
//# sourceMappingURL=cc-env.js.map
