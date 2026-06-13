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

// src/app/pages/drive-align/drive-align.component.ts
var _forTrack0 = ($index, $item) => $item.youtubeId;
function DriveAlignComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 2);
  }
  if (rf & 2) {
    const video_r1 = ctx.$implicit;
    \u0275\u0275property("video", video_r1);
  }
}
function DriveAlignComponent_ForEmpty_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No tutorials available at the moment. Please check back later!");
    \u0275\u0275elementEnd();
  }
}
var _videoService;
var _DriveAlignComponent = class _DriveAlignComponent {
  constructor() {
    __privateAdd(this, _videoService);
    __privateSet(this, _videoService, inject(VideoService));
    this.videos = () => __privateGet(this, _videoService).videos().filter((v) => v.category === "drive" || v.category === "general");
  }
};
_videoService = new WeakMap();
_DriveAlignComponent.\u0275fac = function DriveAlignComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DriveAlignComponent)();
};
_DriveAlignComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriveAlignComponent, selectors: [["app-drive-align"]], decls: 9, vars: 1, consts: [[1, "hero"], [1, "video-grid"], [3, "video"]], template: function DriveAlignComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1");
    \u0275\u0275text(2, "Drive Align Tutorials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Flush contact, consistent ball flight, lower scores \u2014 follow the line and watch your driving transform.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "section", 1);
    \u0275\u0275repeaterCreate(6, DriveAlignComponent_For_7_Template, 1, 1, "app-video-card", 2, _forTrack0, false, DriveAlignComponent_ForEmpty_8_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.videos());
  }
}, dependencies: [VideoCardComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  background-color: var(--white);\n  border-radius: var(--border-radius);\n  margin-bottom: 2rem;\n}\n.video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=drive-align.component.css.map */"], changeDetection: 0 });
var DriveAlignComponent = _DriveAlignComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriveAlignComponent, [{
    type: Component,
    args: [{ selector: "app-drive-align", imports: [VideoCardComponent], template: `
    <section class="hero">
      <h1>Drive Align Tutorials</h1>
      <p>Flush contact, consistent ball flight, lower scores \u2014 follow the line and watch your driving transform.</p>
    </section>
    <section class="video-grid">
      @for (video of videos(); track video.youtubeId) {
        <app-video-card [video]="video" />
      } @empty {
        <p>No tutorials available at the moment. Please check back later!</p>
      }
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;c81f4861ccd67591c53f4a1ce5f6c2b342200bd8c5340599e195db6bf2b71388;/home/hoyt/code/tutorial_site_HH/src/app/pages/drive-align/drive-align.component.ts */\n.hero {\n  text-align: center;\n  padding: 2rem 1rem;\n  background-color: var(--white);\n  border-radius: var(--border-radius);\n  margin-bottom: 2rem;\n}\n.video-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=drive-align.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriveAlignComponent, { className: "DriveAlignComponent", filePath: "src/app/pages/drive-align/drive-align.component.ts", lineNumber: 38 });
})();
export {
  DriveAlignComponent
};
//# sourceMappingURL=chunk-MA24YUOE.js.map
