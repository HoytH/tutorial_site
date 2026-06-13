import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

@Component({
  selector: 'app-iron-align',
  imports: [VideoCardComponent],
  template: `
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
export class IronAlignComponent {
  #videoService = inject(VideoService);
  protected videos = () =>
    this.#videoService.videos().filter(v => v.category === 'iron' || v.category === 'general');
}
