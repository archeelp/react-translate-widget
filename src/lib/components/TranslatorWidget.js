import { useState } from 'react';
import constants from '../constants';
import utils from '../utils';

const { languageMappings } = constants;
const { validateLanguageCode, translatePage } = utils;


const TranslatorWidget = ({ sourceLanguageCode }) => {
    if (!validateLanguageCode(sourceLanguageCode)) {
        throw new Error('Invalid source language code');
    }
    const [targetLanguageCode, setTargetLanguageCode] = useState(languageMappings[sourceLanguageCode]);
    return (
        <div>
            <label htmlFor="languages">Change Your Language</label>
            <select name="languages" id="languages" value={targetLanguageCode} onChange={({target:{value}})=>setTargetLanguageCode(value)}>
                {
                    Object.keys(languageMappings).map((key, index) => {
                        return <option value={languageMappings[key]} key={index}>{key}</option>
                    })
                }
            </select>
            <div onClick={()=>translatePage({sourceLanguageCode, targetLanguageCode})}>Update Language</div>
        </div>
    );
}

export default TranslatorWidget;