import Styles from "./styles";
import Modal from "../../Modal";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validators/validateTechnology";
import Select from "../../Select";
import Button from "../../Button";

interface IModalAddTechnologyProps {
  openModal: boolean;
  handleClose: () => void;
}
function ModalAddTechnology({ openModal, handleClose }: IModalAddTechnologyProps) {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  async function handleTechnology(data: object) {
    console.log(data);
  }

  return (
    <Modal open={openModal} onClose={handleClose} title="Cadastrar Tecnologia">
      <Styles.Form onSubmit={handleSubmit(handleTechnology)}>
        <Input
          label="Nome"
          name="title"
          control={control}
          placeholder="Digite o nome da tecnologia"
        />
        <Select
          control={control}
          name="status"
          label="Status"
          options={[
            { value: "Iniciante", label: "Iniciante" },
            { value: "Intermediário", label: "Intermediário" },
            { value: "Avançado", label: "Avançado" },
          ]}
        />
        <Button type="submit">Cadastrar tecnologia</Button>
      </Styles.Form>
    </Modal>
  );
}

export default ModalAddTechnology;
