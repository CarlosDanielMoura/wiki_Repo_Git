import { Container, Wrapper, SearchRepos } from "./styles";
import logo from "../../assets/github.png";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import ItemList from "../../Components/ItemList";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { api } from "../../Services/api";

function App() {
  const [currentRepo, setCurrentRepos] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`/repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repos) => repos.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepos("");
        return;
      }
    }
    alert("Repositorio nao encontrado");
  };

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter((repo) => repo.id !== id);
    setRepos(newRepos);
  };

  return (
    <Container className="App">
      <Wrapper className="App-header">
        <img src={logo} alt="Logo Github" height={150} width={150} />
        <SearchRepos>
          <Input
            type="text"
            placeholder="@usuario"
            value={currentRepo}
            onChange={(e) => setCurrentRepos(e.target.value)}
          />
          <Button label="Buscar" onClick={handleSearchRepo} />
        </SearchRepos>
        <hr />

        {repos.map((repo) => (
          <ItemList
            IconEye={AiOutlineEye}
            IconRemo={MdDeleteOutline}
            repo={repo}
            handleRemoveRepo={handleRemoveRepo}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default App;
