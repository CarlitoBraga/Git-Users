import React, {useState} from 'react';
import './App.css';
import logo from './logo.jpg'
import Search from './components/Search'
import Info from './components/Info';
import Repo from './components/Repo';
function App(){
    const [data,setData] = useState({});
    const [username,setUserName] = useState("");
    const [repositories, setRepositories] = useState([])   

    const onChange = (e) =>{
        setUserName(e);
    }
    const submit = async (e) =>{
       e.preventDefault();
       
       const profile = await fetch(`https://api.github.com/users/${username}`);
       const profileJson = await profile.json();
       
       const repo =  await fetch(profileJson.repos_url);
       const repoJson = await repo.json();
       setRepositories(repoJson);       
       setData(profileJson);
       console.log(repositories);
    }
   return(
       <section className="app">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"></img>
            </header>
            <Search onChangeH ={onChange} submitH = {submit} />
            <Info  data = {data.avatar_url} dataN ={data.name} dataB={data.bio} />
            <Repo  repo = {repositories}/>            
       </section>
   );
 

}


export default App;