import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

@Component({
  selector: 'app-all-videos',
  imports: [VideoCardComponent],
  template: `
    <section class="hero">
      <h1>All Tutorials</h1>
      <p>The complete Iron Align and Drive Align tutorial library — your full toolkit for a better golf game.</p>
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
  `,
  styles: `
    .hero {
      text-align: center;
      padding: 2rem 1rem;
      background-color: var(--white);
      border-radius: var(--border-radius);
      margin-bottom: 2rem;
    }

    .category-section {
      margin-bottom: 3rem;
    }

    .category-section h2 {
      color: var(--primary-green);
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
    }

    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllVideosComponent {
  #videoService = inject(VideoService);
  protected driveVideos = () =>
    this.#videoService.videos().filter(v => v.category === 'drive' || v.category === 'general');
  protected ironVideos = () =>
    this.#videoService.videos().filter(v => v.category === 'iron');
}
