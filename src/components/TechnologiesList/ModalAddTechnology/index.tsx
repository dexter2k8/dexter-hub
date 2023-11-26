import Styles from "./styles";
import Modal from "../../Modal";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validators/validateTechnology";
import Select from "../../Select";
import Button from "../../Button";
import axios from "axios";
import { toast } from "react-toastify";
import { IDataPost, IDataUser } from "../../../interfaces";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface IModalAddTechnologyProps {
  openModal: boolean;
  handleClose: () => void;
}
function ModalAddTechnology({ openModal, handleClose }: IModalAddTechnologyProps) {
  const { setUserData } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  async function handleTechnology(data: object) {
    try {
      // TODO: testar se passar o data na chamada já é suficiente
      await axios.post<IDataPost>("/api/users/techs", data); // chamada do miragejs
      // await api.post<iDataPost>("/users/techs", techData); // chamada do backend
      handleClose();
    } catch (error) {
      console.error("error", error);
      toast.error("Ops! Algo deu errado");
    } finally {
      const { data } = await axios.get<IDataUser>("/api/profile"); // chamada do miragejs
      // const { data } = await api.get<iDataUser>("/profile"); // chamada do backend
      // TODO: testar se setUserData funciona para atualizar os dados
      setUserData(data);
    }
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
