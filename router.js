export class Router {

  constructor() {
    this.current = null;
    this.routes = {};
  }

  register(name, fn) {
    this.routes[name] = fn;
  }

  onRouteChanged() {
    let hash = location.hash.replace('#', '');
    let viewName = hash;
    const paramsIndex = hash.indexOf('?');
    if (paramsIndex !== -1) {
        viewName = hash.substring(0, paramsIndex);
    }
    let view = this.routes[viewName];

    if (this.current) {
      this.current.hide();
    }

    if (view) {
      view.show()
    }

    this.current = view;
  }

  start() {
    window.addEventListener('hashchange', () => this.onRouteChanged());
    this.onRouteChanged();
  }


}