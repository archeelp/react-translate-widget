import getSupportedLanguages from "./getSupportedLanguages";

const validateLanguage = (language) => {
  const supportedLanguages = getSupportedLanguages();
  if (supportedLanguages.includes(language)) {
    return true;
  }
  return false;
}

export default validateLanguage;