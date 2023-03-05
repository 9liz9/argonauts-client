import { useState, useEffect } from "react";
import axios from "axios";
import AddArgonaut from "../components/AddArgonaut";
import './ArgonautsListPage.css';

const API_URL = "http://localhost:5005";
 
 
function ArgonautsListPage() {
  const [argonauts, setArgonauts] = useState([]);
 
  const getAllArgonauts = () => {
    axios
      .get(`${API_URL}/api/list`)
      .then((response) => setArgonauts(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllArgonauts();
  }, [] );
 
  
  return (
    <div className="ArgonautsListPage">
    <AddArgonaut refreshArgonauts={getAllArgonauts} />

        <h2>Membres de l'équipage</h2>
        <section className="member-list">
        {argonauts.map((argonaut) => {
          return (
                <p  key={argonaut._id} class="member-item">{argonaut.name}</p>
          );
        })}
        </section>     
    </div>
  );
}
 
export default ArgonautsListPage;