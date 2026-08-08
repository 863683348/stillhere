/** Q1 decision (spec §0): stillherememory.com. */
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://stillherememory.com';

/**
 * Crawlers we allow to index, versus crawlers that scrape for model training.
 * Blocking the second group is not decoration here — "never used for training"
 * is the product's central promise (spec §6, uiux §6.2).
 */
export const AI_TRAINING_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'PerplexityBot',
  'Amazonbot',
  'FacebookBot',
  'Diffbot',
  'omgili',
] as const;
