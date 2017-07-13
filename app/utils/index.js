import 'angular-translate';
import utilsConfigs from './../../configs/';
import utilsConstants from './../../constants/';
import utilsLocalizationMessages from './../../localization/messages.json';
import utilsLocalizationMessagesEn from './../../localization/messages_en.json';
import utilsLocalizationMessagesRu from './../../localization/messages_ru.json';
import utilsLocalizationMessagesBe from './../../localization/messages_be.json';

// import './../../static/css/flags.css';
// import flagsImg from './../../static/flags/flags.png';
// import './../../static/css/big_flags.css';
// import bigFlagsImg from './../../static/flags/big_flags.png';

import { TranslationManager } from './TranslationManager'

const locale = {
    en: utilsLocalizationMessagesEn,
    ru: utilsLocalizationMessagesRu,
    be: utilsLocalizationMessagesBe,
}
export const translationManager = new TranslationManager(locale);
export const configs = utilsConfigs;
export const constants = utilsConstants;
// export const imgs = {
//     flags: flagsImg,
//     bigFlags: bigFlagsImg
// };
export default locale;
