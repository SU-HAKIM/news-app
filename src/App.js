import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const context = React.createContext()

const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-07-24&sortBy=publishedAt&apiKey=";

function App() {
  const [articles, setArticles] = useState([])
  const [data, setData] = useState([])

  const searchData = (text) => {
    if (data.length) {
      const newArr = data.filter(sin => sin.title.includes(text))
      setArticles(newArr)
    }
  }

  useEffect(() => {
    axios.get(`${url}${process.env.REACT_APP_KEY}`)
      .then(response => {
        setArticles(response.data.articles)
        setData(response.data.articles)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <context.Provider value={{ articles, data, searchData }}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </context.Provider>
  );
}

export default App;



