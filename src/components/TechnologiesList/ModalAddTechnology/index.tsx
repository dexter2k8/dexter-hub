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
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface IModalAddTechnologyProps {
  openModal: boolean;
  handleClose: () => void;
}
function ModalAddTechnology({ openModal, handleClose }: IModalAddTechnologyProps) {
  const { setUserData } = useContext(AuthContext);
  const { setValue, control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  async function handleTechnology(data: object) {
    try {
      await axios.post<IDataPost>("/api/users/techs", data); // chamada do miragejs
      // await api.post<iDataPost>("/users/techs", data); // chamada do backend
      handleClose();
    } catch (error) {
      console.error("error", error);
      toast.error("Ops! Algo deu errado");
    } finally {
      const { data } = await axios.get<IDataUser>("/api/profile"); // chamada do miragejs
      // const { data } = await api.get<iDataUser>("/profile"); // chamada do backend
      setUserData(data);
    }
  }

  useEffect(() => {
    setValue("title", "");
    setValue("status", "Iniciante");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

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
