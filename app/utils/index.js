import 'angular-translate';
import utilsConfigs from './../../configs/';
import utilsConstants from './../../constants/';
import utilsLocalizationMessages from './../../localization/messages.json';
import utilsLocalizationMessagesEn from './../../localization/messages_en.json';
import utilsLocalizationMessagesRu from './../../localization/messages_ru.json';
import utilsLocalizationMessagesBe from './../../localization/messages_be.json';

const locale = {
    en: utilsLocalizationMessagesEn,
    ru: utilsLocalizationMessagesRu,
    be: utilsLocalizationMessagesBe,
}

class TranslationManager {
    constructor (locale) {
        this.currLocale = "en";
        this.locale = locale;
    }

    translateProviderInit ($translateProvider) {
        $translateProvider.translations('en', this.locale.en);
        $translateProvider.translations('ru', this.locale.ru);  
        $translateProvider.translations('be', this.locale.be);  
        $translateProvider.preferredLanguage(this.currLocale || 'en');                
    }

    setCurrLocale (locale, $translate) {
        this.currLocale = locale;
        $translate.use(locale);
    }
};

export const translationManager = new TranslationManager(locale);
export const configs = utilsConfigs;
export const constants = utilsConstants;
export default locale;
