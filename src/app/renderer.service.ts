import { Injectable } from '@angular/core';

import { marked, Renderer } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class RendererService {
  private renderer: any;

  constructor() {
    this.renderer = this.getCustomRenderer();
  }

  private getCustomRenderer(): Renderer {
    const renderer = new Renderer();

    renderer.strong = (text: string) => {
      if (text.includes(':')) {
        const [type, subtype] = text.split(':');
        return `<img src="assets/inicon/${type}-${subtype}.png" class="inline-icon" />`;
      }
      return `<strong>${text}</strong>`;
    };

    renderer.paragraph = (text: string) => {
      return `<p class="paragraph">${text}</p>`;
    };

    return renderer;
  }

  public formatString(str: string): string {
    if (!str) {
      return '';
    }
    return marked(str, { renderer: this.renderer });
  }
}
