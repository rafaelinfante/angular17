import {Component} from '@angular/core';
import {LANGUAGES_MAP} from "../../configs/language.config";
import {Language} from "../../interfaces/language.interfaces";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  // protected readonly languages : Language[] = LANGUAGES;
  protected readonly languagesMap:Map<string, Language>  = LANGUAGES_MAP;
  public selectedLanguage: Language;

  constructor(private languageService: LanguageService) {
    // this.selectedLanguage = this.languages.find(lang => lang.id === translate.currentLang)!;
    this.selectedLanguage = languageService.getCurrentLanguage();
  }

  onLanguageChange(language:Language) {
    this.selectedLanguage = language;
    this.languageService.useLanguage(language.id);
  }
}
