import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  const [result, setresult] = useState('')
  const [debouncedterm, setDebouncedterm] = useState(text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedterm(text)
    },500)
    return(() => {
      clearTimeout(timerId)
    })
  },[text])

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedterm,
            target: language.value,
            key: API_KEY,
          },
        }
      );
      setresult(data.data.translations[0].translatedText)
    }
    search();
  }, [language, debouncedterm]);
  return <div>
      <h2 className="ui header">{result}</h2>
    </div>;
};

export default Convert;
