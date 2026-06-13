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

// src/app/pages/all-videos/all-videos.component.ts
var _forTrack0 = ($index, $item) => $item.youtubeId;
function AllVideosComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 3);
  }
  if (rf & 2) {
    const video_r1 = ctx.$implicit;
    \u0275\u0275property("video", video_r1);
  }
}
function AllVideosComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 3);
  }
  if (rf & 2) {
    const video_r2 = ctx.$implicit;
    \u0275\u0275property("video", video_r2);
  }
}
var _videoService;
var _AllVideosComponent = class _AllVideosComponent {
  constructor() {
    __privateAdd(this, _videoService);
    __privateSet(this, _videoService, inject(VideoService));
    this.driveVideos = () => __privateGet(this, _videoService).videos().filter((v) => v.category === "drive" || v.category === "general");
    this.ironVideos = () => __privateGet(this, _videoService).videos().filter((v) => v.category === "iron");
  }
};
_videoService = new WeakMap();
_AllVideosComponent.\u0275fac = function AllVideosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AllVideosComponent)();
};
_AllVideosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllVideosComponent, selectors: [["app-all-videos"]], decls: 17, vars: 0, consts: [[1, "hero"], [1, "category-section"], [1, "video-grid"], [3, "video"]], template: function AllVideosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1");
    \u0275\u0275text(2, "All Tutorials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The complete Iron Align and Drive Align tutorial library \u2014 your full toolkit for a better golf game.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "section", 1)(6, "h2");
    \u0275\u0275text(7, "Drive Align");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275repeaterCreate(9, AllVideosComponent_For_10_Template, 1, 1, "app-video-card", 3, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "section", 1)(12, "h2");
    \u0275\u0275text(13, "Iron Align");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 2);
    \u0275\u0275repeaterCreate(15, AllVideosComponent_For_16_Template, 1, 1, "app-video-card", 3, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.driveVideos());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.ironVideos());
  }
}, dependencies: [VideoCardComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  background-color: var(--white);\n  border-radius: var(--border-radius);\n  margin-bottom: 2rem;\n}\n.category-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.category-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n  margin-bottom: 1.25rem;\n  font-size: 1.5rem;\n}\n.video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=all-videos.component.css.map */"], changeDetection: 0 });
var AllVideosComponent = _AllVideosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AllVideosComponent, [{
    type: Component,
    args: [{ selector: "app-all-videos", imports: [VideoCardComponent], template: `
    <section class="hero">
      <h1>All Tutorials</h1>
      <p>The complete Iron Align and Drive Align tutorial library \u2014 your full toolkit for a better golf game.</p>
    </section>

    <section class="category-section">
      <h2>Drive Align</h2>
      <div class="video-grid">
        @for (video of driveVideos(); track video.youtubeId) {
          <app-video-card [video]="video" />
        }
      </div>
    </section>

    <section class="category-section">
      <h2>Iron Align</h2>
      <div class="video-grid">
        @for (video of ironVideos(); track video.youtubeId) {
          <app-video-card [video]="video" />
        }
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;8013f717ba6ace7e3eb97aee0f76a061f443dd5326a782e848cec7bb810c3e58;/home/hoyt/code/tutorial_site_HH/src/app/pages/all-videos/all-videos.component.ts */\n.hero {\n  text-align: center;\n  padding: 2rem 1rem;\n  background-color: var(--white);\n  border-radius: var(--border-radius);\n  margin-bottom: 2rem;\n}\n.category-section {\n  margin-bottom: 3rem;\n}\n.category-section h2 {\n  color: var(--primary-green);\n  margin-bottom: 1.25rem;\n  font-size: 1.5rem;\n}\n.video-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=all-videos.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllVideosComponent, { className: "AllVideosComponent", filePath: "src/app/pages/all-videos/all-videos.component.ts", lineNumber: 59 });
})();
export {
  AllVideosComponent
};
//# sourceMappingURL=chunk-NZYEF7LJ.js.map
