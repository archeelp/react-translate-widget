const getTranslateRedirectURL = ({currentURL, sourceLanguageCode, targetLanguageCode}) => {
    return `https://translate.google.com/translate?u=${currentURL}&hl=${sourceLanguageCode}&ie=UTF8&sl=${sourceLanguageCode}&tl=${targetLanguageCode}`;
}

export default getTranslateRedirectURL;