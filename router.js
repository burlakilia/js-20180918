export class Router {
    constructor() {
        this.routes = {};
    }

    register(name, view) {
        this.routes[name] = view;
    }

    onRouteChanged() {

        let hash = location.hash.replace("#", "");
        let view = this.routes[hash];

        if (this.current) {
            this.current.hide();
        }

        if (view) {
            view.show();
        }

        this.current = view;
    }

    start() {
        window.addEventListener("hashchange", () => this.onRouteChanged());
        this.onRouteChanged();
    }
}