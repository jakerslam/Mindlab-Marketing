/** Public project settings. Secrets belong in the host environment or an ignored .env. */
export const projectConfig = {
  // Published Sanity content is required; a failed read stops the build.
  contentSource: 'sanity',
  sanity: { projectId: 'o19f4dqg', dataset: 'production' },
  tallyFormId: 'zEN7DM',
  bookingUrl: 'https://cal.com/jacob-haslam-zfpxbo/30min',
  callDurationMinutes: 30,
} as const;
