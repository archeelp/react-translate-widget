import validateLanguageCode from './validateLanguageCode';
import getTranslateRedirectURL from './getTranslateRedirectURL';

const translatePage = ({sourceLanguageCode, targetLanguageCode}) => {
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

export default translatePage;