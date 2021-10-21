import { languageMappings } from "./constants";


export const validateLanguageCode = (language) => {
    const supportedLanguages = Object.keys(languageMappings).map(key => languageMappings[key]);
    if (supportedLanguages.includes(language)) {
        return true;
    }
    return false;
}

export const validateLanguage = (language) => {
    const supportedLanguages = getSupportedLanguages();
    if (supportedLanguages.includes(language)) {
        return true;
    }
    return false;
}

export const translatePage = ({ sourceLanguageCode, targetLanguageCode }) => {
    if (!validateLanguageCode(sourceLanguageCode)) {
        throw new Error(`Invalid source language code ${sourceLanguageCode}`);
    }
    if (!validateLanguageCode(targetLanguageCode)) {
        console.log(`Invalid target language code ${targetLanguageCode}`);
        targetLanguageCode = 'en';
    }
    if (sourceLanguageCode === targetLanguageCode) {
        return;
    }
    const currentURL = window.location.href;
    const redirectURL = getTranslateRedirectURL({ currentURL, sourceLanguageCode, targetLanguageCode });
    window.location.href = redirectURL;
}

export const getTranslateRedirectURL = ({ currentURL, sourceLanguageCode, targetLanguageCode }) => {
    return `https://translate.google.com/translate?u=${currentURL}&hl=${sourceLanguageCode}&ie=UTF8&sl=${sourceLanguageCode}&tl=${targetLanguageCode}`;
}

export const getSupportedLanguages = () => {
    return Object.keys(languageMappings);
}