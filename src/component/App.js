import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header"

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use Recat?",
    content: "Its a favourite framework among engieers",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];

const options = [
  {
    label: "Classic Red",
    value: "red",
  },
  {
    label: "Elegant Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Header />
      <Route route="/">
        <Accordion items={items} />
      </Route>
      <Route route="/search">
        <Search />
      </Route>
      <Route route="/dropdown">
        <Dropdown
          label="Select colors"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route route="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
