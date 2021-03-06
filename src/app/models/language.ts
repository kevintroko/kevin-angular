export interface LanguageDetailĀ {
  title: string;
  company?: string;
  url?: string;
}

export interface Language {
  name: string;
      level: string;
      emoji: string;
      details?: LanguageDetail[];
}
