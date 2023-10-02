import { Directive, Input, TemplateRef, ViewContainerRef, inject, signal } from '@angular/core';
import { FeatureFlagKeys, FeatureFlagService } from './feature-flag.service';

@Directive({ selector: '[featureFlag]', standalone: true })
export class FeatureFlagDirective {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  featureFlagService = inject(FeatureFlagService);
  hasView = signal(false);

  @Input() set featureFlag(feature: FeatureFlagKeys) {
    if (this.featureFlagService.getFeature(feature) && !this.hasView()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView.set(true);
    } else {
      this.viewContainer.clear();
      this.hasView.set(false);
    }
  }

  @Input() set featureFlagElse(elseTemplateRef: TemplateRef<any>) {
    if (!this.hasView()) {
      this.viewContainer.createEmbeddedView(elseTemplateRef);
    }
  }
}
