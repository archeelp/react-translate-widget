import constants from "../constants";
const { languageMappings } = constants;

const validateLanguageCode = (language) => {
  const supportedLanguages = Object.keys(languageMappings).map(key => languageMappings[key]);
  if (supportedLanguages.includes(language)) {
    return true;
  }
  return false;
}

export default validateLanguageCode;