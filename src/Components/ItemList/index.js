import { Container, ContainerIcon } from "./styles";

const ItemList = ({ IconEye, IconRemo, repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <Container>
      <h1>{repo.name}</h1>
      <p>{repo.full_name}</p>
      <ContainerIcon>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <IconEye />
        </a>
        <a href="#" onClick={handleRemove}>
          <IconRemo />
        </a>
      </ContainerIcon>
      <hr />
    </Container>
  );
};

export default ItemList;
