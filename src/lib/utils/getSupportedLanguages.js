import constants from "../constants";
const { languageMappings } = constants;

const getSupportedLanguages = () => {
    return Object.keys(languageMappings);
}

export default getSupportedLanguages;