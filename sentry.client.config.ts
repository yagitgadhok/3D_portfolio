import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://535dedf35efa4fb2b95ce6405a40ac24@o4509310285774848.ingest.de.sentry.io/4509310287741008",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
