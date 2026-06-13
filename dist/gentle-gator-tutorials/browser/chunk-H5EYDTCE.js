import {
  VideoCardComponent,
  VideoService
} from "./chunk-NMTM7A6N.js";
import {
  ChangeDetectionStrategy,
  Component,
  __privateAdd,
  __privateGet,
  __privateSet,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext
} from "./chunk-QRZKKUHA.js";

// src/app/pages/iron-align/iron-align.component.ts
var _forTrack0 = ($index, $item) => $item.youtubeId;
function IronAlignComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 2);
  }
  if (rf & 2) {
    const video_r1 = ctx.$implicit;
    \u0275\u0275property("video", video_r1);
  }
}
function IronAlignComponent_ForEmpty_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No tutorials available at the moment. Please check back later!");
    \u0275\u0275elementEnd();
  }
}
var _videoService;
var _IronAlignComponent = class _IronAlignComponent {
  constructor() {
    __privateAdd(this, _videoService);
    __privateSet(this, _videoService, inject(VideoService));
    this.videos = () => __privateGet(this, _videoService).videos().filter((v) => v.category === "iron" || v.category === "general");
  }
};
_videoService = new WeakMap();
_IronAlignComponent.\u0275fac = function IronAlignComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IronAlignComponent)();
};
_IronAlignComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IronAlignComponent, selectors: [["app-iron-align"]], decls: 9, vars: 1, consts: [[1, "hero"], [1, "video-grid"], [3, "video"]], template: function IronAlignComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1");
    \u0275\u0275text(2, "Iron Align Tutorials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Master your iron game with these step-by-step video tutorials from Chris Spalla, Golf Digest's Best Young Teachers in America.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "section", 1);
    \u0275\u0275repeaterCreate(6, IronAlignComponent_For_7_Template, 1, 1, "app-video-card", 2, _forTrack0, false, IronAlignComponent_ForEmpty_8_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.videos());
  }
}, dependencies: [VideoCardComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  background-color: var(--white);\n  border-radius: var(--border-radius);\n  margin-bottom: 2rem;\n}\n.video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=iron-align.component.css.map */"], changeDetection: 0 });
var IronAlignComponent = _IronAlignComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IronAlignComponent, [{
    type: Component,
    args: [{ selector: "app-iron-align", imports: [VideoCardComponent], template: `
    <section class="hero">
      <h1>Iron Align Tutorials</h1>
      <p>Master your iron game with these step-by-step video tutorials from Chris Spalla, Golf Digest's Best Young Teachers in America.</p>
    </section>
    <section class="video-grid">
      @for (video of videos(); track video.youtubeId) {
        <app-video-card [video]="video" />
      } @empty {
        <p>No tutorials available at the moment. Please check back later!</p>
      }
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;c81f4861ccd67591c53f4a1ce5f6c2b342200bd8c5340599e195db6bf2b71388;/home/hoyt/code/tutorial_site_HH/src/app/pages/iron-align/iron-align.component.ts */\n.hero {\n  text-align: center;\n  padding: 2rem 1rem;\n  background-color: var(--white);\n  border-radius: var(--border-radius);\n  margin-bottom: 2rem;\n}\n.video-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=iron-align.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IronAlignComponent, { className: "IronAlignComponent", filePath: "src/app/pages/iron-align/iron-align.component.ts", lineNumber: 38 });
})();
export {
  IronAlignComponent
};
//# sourceMappingURL=chunk-H5EYDTCE.js.map
