import { FaTrashAlt } from "react-icons/fa";
import Styles from "./styles";

const mock = [
  {
    id: 1,
    title: "HTML",
    status: "Iniciante",
  },
  {
    id: 2,
    title: "CSS",
    status: "Intermediário",
  },
  {
    id: 3,
    title: "JavaScript",
    status: "Avançado",
  },
];

function TechnologiesList() {
  return (
    <Styles.Container>
      <Styles.AddTechnology>
        <h2>Tecnologias</h2>
        <button>+</button>
      </Styles.AddTechnology>
      <Styles.TechnologyList>
        {mock.map((technology) => (
          <li key={technology.id}>
            <p>{technology.title}</p>
            <Styles.Status>
              <small>{technology.status}</small>
              <span>
                <FaTrashAlt />
              </span>
            </Styles.Status>
          </li>
        ))}
      </Styles.TechnologyList>
    </Styles.Container>
  );
}

export default TechnologiesList;
