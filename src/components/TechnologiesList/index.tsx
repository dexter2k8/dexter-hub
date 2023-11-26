import { FaTrashAlt } from "react-icons/fa";
import Styles from "./styles";
import { useState } from "react";
import Button from "../Button";
import ModalAddTechnology from "./ModalAddTechnology";

const mock = [
  {
    id: "1",
    title: "HTML",
    status: "Iniciante",
  },
  {
    id: "2",
    title: "CSS",
    status: "Intermediário",
  },
  {
    id: "3",
    title: "JavaScript",
    status: "Avançado",
  },
];

async function delTechnology(key: string) {
  console.log(key);
}

function TechnologiesList() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <Styles.Container>
      <Styles.AddTechnology>
        <h2>Tecnologias</h2>
        <Button variant="small" onClick={handleOpen}>
          +
        </Button>
      </Styles.AddTechnology>
      <Styles.TechnologyList>
        {mock.map((technology) => (
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
