import { Pipe, PipeTransform, inject } from '@angular/core';
import { RendererService } from './renderer.service';
@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {
  private rendererService = inject(RendererService);

  transform(value: string): unknown {
    return this.rendererService.formatString(value);
  }
}
