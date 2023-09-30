import { inject } from '@angular/core';
import { FlagOptions, FlagService } from './flag.service';

export const featureFlagGuard = (feature: FlagOptions) => {
  return () => {
    const flagService = inject(FlagService);
    return flagService.getFeature(feature);
  };
};
