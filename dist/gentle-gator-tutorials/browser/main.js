import {
  AuthService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter,
  withComponentInputBinding
} from "./chunk-AXBSBSEW.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgOptimizedImage,
  __privateAdd,
  __privateGet,
  __privateSet,
  bootstrapApplication,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QRZKKUHA.js";

// src/app/guards/auth.guard.ts
var authGuard = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-LYJEOD6T.js").then((m) => m.LoginComponent),
    title: "Login \u2014 Gentle Gator Golf"
  },
  {
    path: "drive-align",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-MA24YUOE.js").then((m) => m.DriveAlignComponent),
    title: "Drive Align \u2014 Gentle Gator Golf"
  },
  {
    path: "iron-align",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-H5EYDTCE.js").then((m) => m.IronAlignComponent),
    title: "Iron Align \u2014 Gentle Gator Golf"
  },
  {
    path: "all-videos",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-NZYEF7LJ.js").then((m) => m.AllVideosComponent),
    title: "All Tutorials \u2014 Gentle Gator Golf"
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())]
};

// src/app/components/header/header.component.ts
function HeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav")(1, "a", 2);
    \u0275\u0275text(2, "Drive Align");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "Iron Align");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 4);
    \u0275\u0275text(6, "All Videos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(8, "Logout");
    \u0275\u0275elementEnd()();
  }
}
var _router;
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    __privateAdd(this, _router);
    this.auth = inject(AuthService);
    __privateSet(this, _router, inject(Router));
  }
  logout() {
    this.auth.logout();
    __privateGet(this, _router).navigate(["/login"]);
  }
};
_router = new WeakMap();
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 1, consts: [["routerLink", "/"], ["ngSrc", "assets/images/Logo.PNG", "alt", "Gentle Gator Logo", "width", "200", "height", "50", "priority", "", 2, "width", "200px", "height", "50px", "object-fit", "contain"], ["routerLink", "/drive-align", "routerLinkActive", "active"], ["routerLink", "/iron-align", "routerLinkActive", "active"], ["routerLink", "/all-videos", "routerLinkActive", "active"], [1, "logout-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "a", 0);
    \u0275\u0275element(2, "img", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HeaderComponent_Conditional_3_Template, 9, 0, "nav");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.auth.isLoggedIn() ? 3 : -1);
  }
}, dependencies: [NgOptimizedImage, RouterLink, RouterLinkActive], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: var(--white);\n  box-shadow: var(--box-shadow);\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--primary-green);\n  font-weight: 500;\n  padding: 0.25rem 0;\n  border-bottom: 2px solid transparent;\n  transition: border-color 0.2s;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom-color: var(--primary-green);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--primary-green);\n  color: var(--primary-green);\n  padding: 0.3rem 0.85rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-green);\n  color: var(--white);\n}\n/*# sourceMappingURL=header.component.css.map */"], changeDetection: 0 });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [NgOptimizedImage, RouterLink, RouterLinkActive], template: `
<header>
  <a routerLink="/">
    <img
      ngSrc="assets/images/Logo.PNG"
      alt="Gentle Gator Logo"
      width="200"
      height="50"
      priority
      style="width: 200px; height: 50px; object-fit: contain;"
    />
  </a>
  @if (auth.isLoggedIn()) {
    <nav>
      <a routerLink="/drive-align" routerLinkActive="active">Drive Align</a>
      <a routerLink="/iron-align" routerLinkActive="active">Iron Align</a>
      <a routerLink="/all-videos" routerLinkActive="active">All Videos</a>
      <button class="logout-btn" (click)="logout()">Logout</button>
    </nav>
  }
</header>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;012b072513ed340084c5d452ab08b6a3fd76bb082bb554773d574e69674808de;/home/hoyt/code/tutorial_site_HH/src/app/components/header/header.component.ts */\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: var(--white);\n  box-shadow: var(--box-shadow);\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\nnav {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\nnav a {\n  text-decoration: none;\n  color: var(--primary-green);\n  font-weight: 500;\n  padding: 0.25rem 0;\n  border-bottom: 2px solid transparent;\n  transition: border-color 0.2s;\n}\nnav a.active {\n  border-bottom-color: var(--primary-green);\n}\n.logout-btn {\n  background: none;\n  border: 1px solid var(--primary-green);\n  color: var(--primary-green);\n  padding: 0.3rem 0.85rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.logout-btn:hover {\n  background-color: var(--primary-green);\n  color: var(--white);\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 79 });
})();

// src/app/components/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 1, template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "footer")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Gentle Gator Golf. All Rights Reserved.");
  }
}, styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  background-color: var(--primary-green);\n  color: var(--white);\n  margin-top: auto;\n}\n/*# sourceMappingURL=footer.component.css.map */"], changeDetection: 0 });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, template: `
    <footer>
      <p>&copy; {{ currentYear }} Gentle Gator Golf. All Rights Reserved.</p>
    </footer>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;bf07f54b6656966879b38f0f77573b4a9910d04d8753f6214365d1d1d95ef26f;/home/hoyt/code/tutorial_site_HH/src/app/components/footer/footer.component.ts */\nfooter {\n  padding: 2rem;\n  text-align: center;\n  background-color: var(--primary-green);\n  color: var(--white);\n  margin-top: auto;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 22 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "main");
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer");
  }
}, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=app.component.css.map */"], changeDetection: 0 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, HeaderComponent, FooterComponent], template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;1c80f315eab5c105d9895d4ce4720766f9bc46f3e9156263224bf0e9dc2b3084;/home/hoyt/code/tutorial_site_HH/src/app/app.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex: 1;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 29 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
