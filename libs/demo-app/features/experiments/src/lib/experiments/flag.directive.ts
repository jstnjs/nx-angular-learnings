import { Directive, Input, TemplateRef, ViewContainerRef, inject, signal } from '@angular/core';
import { FlagOptions, FlagService } from './flag.service';

@Directive({ selector: '[featureFlag]', standalone: true })
export class FlagDirective {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  flagService = inject(FlagService);
  hasView = signal(false);
  elseTemplateRef: TemplateRef<any> | null = null;

  @Input() set featureFlag(feature: FlagOptions) {
    if (this.flagService.getFeature(feature) && !this.hasView()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView.set(true);
    } else {
      this.viewContainer.clear();
      this.hasView.set(false);

      if (this.elseTemplateRef) {
        this.viewContainer.createEmbeddedView(this.elseTemplateRef);
      }
    }
  }

  @Input() set featureFlagElse(elseTemplateRef: TemplateRef<any>) {
    if (!this.hasView()) {
      this.viewContainer.createEmbeddedView(elseTemplateRef);
    }
  }
}