import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  const [debouncedterm, setdebouncedTerm] = useState(term)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedTerm(term)
    }, 500)

    return(() => {
      clearTimeout(timerId)
    })
  }, [term])

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params : {
          origin : '*',
          action : 'query',
          format :'json',
          list : 'search',
          srsearch : debouncedterm
        }
      });
      setResults(data.query.search)
    };
    search();
  }, [debouncedterm])

  const renderedResult = results.map((result) => {
    return(
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button"
          href={`https://en.wikipedia.org/wiki?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML = {{ __html : result.snippet}}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
      <div className="ui celled list">
        {renderedResult ? renderedResult : null}
      </div>
    </div>
  );
};

export default Search;
