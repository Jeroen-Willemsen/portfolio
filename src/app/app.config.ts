import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideHighlightOptions} from 'ngx-highlightjs';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'top'})),
    provideHttpClient(),
    // Only the Python grammar is needed for the code samples, so load just that instead of all of highlight.js.
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        python: () => import('highlight.js/lib/languages/python'),
      },
    }),
  ],
};
