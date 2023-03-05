import { useState } from "react";
import axios from "axios";
import './AddArgonauts.css'
 
const API_URL = "http://localhost:5005";
 
function AddArgonaut(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {                          
    e.preventDefault();
 
    const requestBody = { name };
    axios
      .post(`${API_URL}/api/list`, requestBody)
      .then((response) => {
        // Reset the state
        setName("");

        props.refreshArgonauts();
      })
      .catch((error) => console.log(error));
  };
 
 
  return (
    <div className="AddArgonaut">
      <h3>Ajouter un(e) Agonaute</h3>
 
      <form class="new-member-form"onSubmit={handleSubmit}>
        <label>Nom de l'Argonaute:</label>
        <input placeholder="Charalampos"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
 
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
 
export default AddArgonaut;