import { FaTrashAlt } from "react-icons/fa";
import Styles from "./styles";
import { useContext, useState } from "react";
import Button from "../Button";
import ModalAddTechnology from "./ModalAddTechnology";
import axios from "axios";
import { IDataUser } from "../../interfaces";
import { AuthContext } from "../../contexts/AuthContext";

function TechnologiesList() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { userData, setUserData } = useContext(AuthContext);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  async function delTechnology(key: string) {
    try {
      await axios.delete(`/api/users/techs/${key}`); // chamada do miragejs
      // await api.delete(`/users/techs/${key}`); // chamada do backend
    } catch (error) {
      console.error("error", error);
    } finally {
      // TODO: testar se setUserData funciona para atualizar os dados
      const { data } = await axios.get<IDataUser>("/api/profile"); // chamada do miragejs
      // const { data } = await api.get<iDataUser>("/profile"); // chamada do backend
      setUserData(data);
    }
  }

  return (
    <Styles.Container>
      <Styles.AddTechnology>
        <h2>Tecnologias</h2>
        <Button variant="small" onClick={handleOpen}>
          +
        </Button>
      </Styles.AddTechnology>
      <Styles.TechnologyList>
        {userData?.techs.map((technology) => (
          <li key={technology.id}>
            <p>{technology.title}</p>
            <Styles.Status>
              <small>{technology.status}</small>
              <span onClick={() => delTechnology(technology.id)}>
                <FaTrashAlt />
              </span>
            </Styles.Status>
          </li>
        ))}
      </Styles.TechnologyList>
      <ModalAddTechnology openModal={openModal} handleClose={handleClose} />
    </Styles.Container>
  );
}

export default TechnologiesList;
