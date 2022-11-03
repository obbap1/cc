import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function Card({name, stars, status, onClick}){
    return (
      <div className="card" onClick={onClick}>
        <h2>{name}-{status}</h2>
        <div className="stars">
          <p>*</p>
          <p>{stars}</p>
        </div>
      </div>
    )
}

function App() {
  const [repos, setRepos] = useState()
  const fetchRepos = async ()=> {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: new Headers({
        'Authorization': 'Bearer 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'
      })
    }).then(res => res.json())
    console.log("response ->", response)
    setRepos(response)
  }
  useEffect(() => {
    fetchRepos()
  }, [])
  return (
    <div className="App">
       {
      repos && repos.length &&
      repos.map(repo=>(
          <Card name={repo.name} stars={repo.open_issues} status={repo.language} onClick={()=> {
              alert("hello")
          }} />
      ))
        }
    </div>
  );
}

export default App;
