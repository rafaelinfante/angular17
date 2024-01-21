import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES_MAP } from '../configs/language.config';
import { APP_DEFAULT_LANGUAGE } from '../constants/language.constants';
import { Language } from '../interfaces/language.interfaces';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isDarkTheme: boolean = false;
  private selectedLanguage!: Language;

  constructor(
    private translate: TranslateService,
    private browserStorage: BrowserStorageService
  ) {}

  initializeLanguage(): void {
    this.translate.setDefaultLang(APP_DEFAULT_LANGUAGE);

    const browserLang: string = this.translate.getBrowserLang() || '';

    const language: string = LANGUAGES_MAP.get(browserLang) ? browserLang : APP_DEFAULT_LANGUAGE;

    this.useLanguage(language);
  }

  getCurrentLanguage(): Language {
    //return this.translate.currentLang;
    return this.selectedLanguage;
  }

  useLanguage(language: string): void {
    this.selectedLanguage = LANGUAGES_MAP.get(language)!;
    this.translate.use(language);
  }
  setDarkTheme(): void {
    this.isDarkTheme = true;
  }
  isDarkThemeEnabled(): boolean {
    return this.isDarkTheme;
  }
}
