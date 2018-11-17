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
    let view = this.routes[hash];

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