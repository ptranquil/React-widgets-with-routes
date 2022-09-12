import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label : 'Dutch',
    value : 'nl'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState('')
  return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Text</label>
                <input value={text} className='text' onChange={(e) => setText(e.target.value)}/>
            </div>
        </div>
      <Dropdown
        label="Select Languages"
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <div className="ui header">
        <h1>output</h1>
        <Convert text={text} language = {language} />
      </div>
    </div>
  );
};

export default Translate;
