import { inject } from '@angular/core';
import { FeatureFlagKeys, FeatureFlagService } from './feature-flag.service';

export const featureFlagGuard = (feature: FeatureFlagKeys) => {
  return () => {
    const featureFlagService = inject(FeatureFlagService);
    return featureFlagService.getFeature(feature);
  };
};
