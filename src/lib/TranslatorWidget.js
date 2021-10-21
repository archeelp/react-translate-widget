import { useState } from 'react';
import { languageMappings } from './constants';
import { validateLanguageCode, translatePage } from './utils';


const TranslatorWidget = ({ sourceLanguageCode, ...props }) => {
    if (!validateLanguageCode(sourceLanguageCode)) {
        throw new Error('Invalid source language code');
    }
    const [targetLanguageCode, setTargetLanguageCode] = useState(sourceLanguageCode);
    const handleLanguageChange = (event) => {
        const { value } = event.target;
        setTargetLanguageCode(value);
        translatePage({sourceLanguageCode, targetLanguageCode: value});
    }
    return (
        <select name="languages" id="languages" value={targetLanguageCode} onChange={handleLanguageChange} {...props}>
            {
                Object.keys(languageMappings).map((key, index) => {
                    return <option value={languageMappings[key]} key={index}>{key}</option>
                })
            }
        </select>
    );
}

export default TranslatorWidget;