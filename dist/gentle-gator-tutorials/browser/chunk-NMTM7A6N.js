import {
  ChangeDetectionStrategy,
  Component,
  DomSanitizer,
  Injectable,
  Input,
  __privateAdd,
  __privateGet,
  __privateSet,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QRZKKUHA.js";

// src/app/services/video.service.ts
var _videos;
var _VideoService = class _VideoService {
  constructor() {
    __privateAdd(this, _videos);
    __privateSet(this, _videos, signal([
      {
        youtubeId: "35f40d1f-a38d-470a-adea-81c6a7d6b270",
        title: "Grip",
        description: "Gripping the club correctly and consistently is your first step to a more consistent ball flight",
        category: "general"
      },
      {
        youtubeId: "5fc66aa5-0b0f-424f-be8d-dd72695104b7",
        title: "Driver: Pre Shot Routine",
        description: "How to walk into a shot like a pro and not only aim your body but your mind",
        category: "drive"
      },
      {
        youtubeId: "45d32b3d-a5e8-48f3-8e6f-afdd2c042b44",
        title: "Driver: Ball Position (Front View)",
        description: "Take the guesswork out of how far up in your stance the ball should be.",
        category: "drive"
      },
      {
        youtubeId: "24084f17-aa52-4a8d-9aac-7e41027e1b63",
        title: "Driver: Ball Position (Side View)",
        description: "Being incosistent with distance to the ball changes the club path. Learn how to find the middle ground and be consistent",
        category: "drive"
      },
      {
        youtubeId: "94f68a39-803b-4da3-8b3b-251a2fdab22c",
        title: "Driver: Face Checkpoints",
        description: "Practice the three critical face check points and get instant feedback",
        category: "drive"
      },
      {
        youtubeId: "28d4a2a0-1c05-4052-b17f-aa3a8d3694aa",
        title: "Iron: Ball Position (Front View)",
        description: "Side Hill lies can be tricky. Learn how to adjust your stance and swing to make solid contact and control your ball flight.",
        category: "iron"
      },
      {
        youtubeId: "d68ec3b1-fd2c-47a0-be9c-91bfc6a06406",
        title: "Iron: Ball Position (Side View)",
        description: "Side Hill lies can be tricky. Learn how to adjust your stance and swing to make solid contact and control your ball flight.",
        category: "iron"
      },
      {
        youtubeId: "84c04ad8-3da9-45bf-9532-e98393ea5c0c",
        title: "Iron: Side Hill Lies",
        description: "Side Hill lies can be tricky. Learn how to adjust your stance and swing to make solid contact and control your ball flight.",
        category: "iron"
      },
      {
        youtubeId: "3a909a6e-d7de-4a0a-a990-6a0cc47e10bc",
        title: "Iron: Up/Down Hill Lies",
        description: "Up/Down hill lies can really mess up your scorecard. Here is how to attack them.",
        category: "iron"
      },
      {
        youtubeId: "e0e200f9-a09c-498e-b4b1-749813fbcd7f",
        title: "Iron: Face Checkpoints",
        description: "Practice the three critical face check points and get instant feedback",
        category: "iron"
      }
    ], ...ngDevMode ? [{ debugName: "#videos" }] : []));
    this.videos = __privateGet(this, _videos).asReadonly();
  }
};
_videos = new WeakMap();
_VideoService.\u0275fac = function VideoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VideoService)();
};
_VideoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VideoService, factory: _VideoService.\u0275fac, providedIn: "root" });
var VideoService = _VideoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/video-card/video-card.component.ts
function VideoCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 1);
    \u0275\u0275domElement(6, "iframe", 2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const v_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("title", \u0275\u0275interpolate1("Video player for ", v_r1.title))("src", ctx_r1.safeYoutubeUrl(), \u0275\u0275sanitizeResourceUrl);
  }
}
var _sanitizer;
var _VideoCardComponent = class _VideoCardComponent {
  constructor() {
    __privateAdd(this, _sanitizer);
    this.video = input.required(...ngDevMode ? [{ debugName: "video" }] : []);
    __privateSet(this, _sanitizer, inject(DomSanitizer));
    this.safeYoutubeUrl = computed(() => {
      const videoId = this.video().youtubeId;
      const url = `https://iframe.mediadelivery.net/embed/503806/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`;
      return __privateGet(this, _sanitizer).bypassSecurityTrustResourceUrl(url);
    }, ...ngDevMode ? [{ debugName: "safeYoutubeUrl" }] : []);
  }
};
_sanitizer = new WeakMap();
_VideoCardComponent.\u0275fac = function VideoCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VideoCardComponent)();
};
_VideoCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCardComponent, selectors: [["app-video-card"]], inputs: { video: [1, "video"] }, decls: 1, vars: 1, consts: [[1, "video-card"], [1, "video-container"], ["loading", "lazy", "allow", "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture", "allowfullscreen", "true", 2, "border", "0", "position", "absolute", "top", "0", "height", "100%", "width", "100%", 3, "src", "title"]], template: function VideoCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VideoCardComponent_Conditional_0_Template, 7, 5, "article", 0);
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.video()) ? 0 : -1, tmp_0_0);
  }
}, styles: ["\n\n.video-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1.5rem;\n  overflow: hidden;\n}\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n  margin-top: 1rem;\n  border-radius: var(--border-radius);\n}\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=video-card.component.css.map */"], changeDetection: 0 });
var VideoCardComponent = _VideoCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCardComponent, [{
    type: Component,
    args: [{ selector: "app-video-card", standalone: true, template: `
    @if (video(); as v) {
      <article class="video-card">
        <h3>{{ v.title }}</h3>
        <p>{{ v.description }}</p>
        <div class="video-container">
          <iframe
            [src]="safeYoutubeUrl()"
            loading="lazy"
            style="border:0;position:absolute;top:0;height:100%;width:100%;"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowfullscreen="true"
            title="Video player for {{ v.title }}"
          ></iframe>
        </div>
      </article>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;6bcd651876837f05af8ddfe9849c062b45da8d577cb9e1185855be37e6b19dce;/home/hoyt/code/tutorial_site_HH/src/app/components/video-card/video-card.component.ts */\n.video-card {\n  background: var(--white);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 1.5rem;\n  overflow: hidden;\n}\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n  margin-top: 1rem;\n  border-radius: var(--border-radius);\n}\n.video-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=video-card.component.css.map */\n"] }]
  }], null, { video: [{ type: Input, args: [{ isSignal: true, alias: "video", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCardComponent, { className: "VideoCardComponent", filePath: "src/app/components/video-card/video-card.component.ts", lineNumber: 60 });
})();

export {
  VideoService,
  VideoCardComponent
};
//# sourceMappingURL=chunk-NMTM7A6N.js.map
