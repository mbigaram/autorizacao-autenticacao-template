import axios from "axios";
import { useEffect } from "react";
import Header from "../components/Header";
import { navigateToHome } from "../routes/coordinator";

function AdminPage() {


  // const token = localStorage.getItem("token")
  // const navigate = useNavigate()

  // useEffect(()=> {

  //   if(!token){
  //     navigateToHome(navigate)
  //   }
  // })

  

  useEffect(()=>{
    const aluno = "darvas"
    const id = "3bUbdB1gvPzWrThpazVC"
    const header = {headers: {
      auth: localStorage.getItem("token")
    }}

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`,header)
    .then((resp)=>{
      console.log("resposta do admin", resp.data.trip)
    })
    .catch((erro)=>{
      console.log(erro)
    })
  },[])
  return (
    <main>
      <Header />
      <h1>Página de Admin</h1>
    </main>
  );
}

export default AdminPage;
