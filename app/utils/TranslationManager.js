export class TranslationManager {
    constructor (locale) {
        this.currLocale = "en";
        this.locale = locale;

        this.variables = [];
        this.$translateSubscribers = [];
    }

    // should be called in '.controller'
    subscribe ($translate) {
        if (this.$translateSubscribers.indexOf($translate) !== -1) { return; }
        this.$translateSubscribers.push($translate);
    }

    unsubscribe ($translate) {
        let indexToRemove = this.$translateSubscribers.indexOf($translate);
        if (indexToRemove === -1) { return; }
        this.$translateSubscribers.splice(indexToRemove, 1);        
    }

    update () {
        this.$translateSubscribers.forEach($translate => {
            $translate.use(this.currLocale);
        });
    }

    // should be called in '.config'
    translateProviderInit ($translateProvider) {
        $translateProvider.translations('en', this.locale.en);
        $translateProvider.translations('ru', this.locale.ru);  
        $translateProvider.translations('be', this.locale.be);  
        $translateProvider.preferredLanguage(this.currLocale || 'en');                
    }

    setCurrLocale (locale, $translate) {
        this.currLocale = locale;
        this.update();
        window.dispatchEvent(new CustomEvent('locale-changed',{locale}))
    }

    extendLocale (newLocale) {
        Object.assign(this.locale, newLocale);
    }
};
