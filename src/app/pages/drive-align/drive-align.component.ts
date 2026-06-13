import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

@Component({
  selector: 'app-drive-align',
  imports: [VideoCardComponent],
  template: `
    <section class="hero">
      <h1>Drive Align Tutorials</h1>
      <p>Flush contact, consistent ball flight, lower scores — follow the line and watch your driving transform.</p>
    </section>
    <section class="video-grid">
      @for (video of videos(); track video.youtubeId) {
        <app-video-card [video]="video" />
      } @empty {
        <p>No tutorials available at the moment. Please check back later!</p>
      }
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

    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriveAlignComponent {
  #videoService = inject(VideoService);
  protected videos = () =>
    this.#videoService.videos().filter(v => v.category === 'drive' || v.category === 'general');
}
