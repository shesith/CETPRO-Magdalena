import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Form() {
  // const dataToSend = {
  //   dni: "1888",
  //   apellido_alumno: "jaramillo",
  //   nombre_alumno: "luis adrian",
  //   distrito: "japon",
  //   telefono: "4343434",
  //   correo: "correodeluisadrian@gmail.com",
  //   edad: "22",
  //   fecha_nac: "1999-12-26",
  // };

  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    distrito: "",
    telefono: "",
    correo: "",
    edad: "",
    fechaNacimiento: "",
    // curso: "",
    // horario: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const errorData = await response.json();
      console.error("Error en la solicitud:", errorData);

      if (!response.ok) {
        setFormData({
          ...formData,
          dni: "",
          nombre: "",
          apellido: "",
          distrito: "",
          telefono: "",
          correo: "",
          edad: "",
          fechaNacimiento: "",
        });
        throw {
          err: true,
          status: response.status,
          statusText: !response.statusText
            ? "Ocurrió un error inesperado"
            : response.statusText,
        };
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      setError({ err });
    }
  };

  // Valor del select
  /*   const [selectedCareer, setSelectedCareer] = useState("");

  const handleChange = (event) => {
    setSelectedCareer(event.target.value);
  };

  console.log("Carrera seleccionada:", selectedCareer); */

  return (
    <>
      <article className="content-form">
        <form onSubmit={handleSubmit}>
          <div>
            {/* NOMBRE */}
            <label htmlFor="nombre"> Nombres </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Escribe tus nombres"
              required
              maxLength="50"
              value={formData.nombre}
              onChange={handleChange}
            />
            {/* APELLIDO */}
            <label htmlFor="apellido"> Apellido Paterno </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Escribe tu apellido"
              required
              value={formData.apellido}
              onChange={handleChange}
              maxLength="50"
            />
            {/*   <label htmlFor="secondlastname"> Apellido Materno </label>
            <input
              type="text"
              name="secondlastname"
              id="secondlastname"
              placeholder="Escribe tu apellido materno"
              required
              value={formData.}
              onChange={handleChange}
              maxLength="50"
            /> */}
            {/* DISTRITO */}
            <label htmlFor="distrito"> Distrito</label>
            <input
              type="text"
              name="distrito"
              id="dstrito"
              placeholder="Escribe tu distrito"
              required
              value={formData.distrito}
              onChange={handleChange}
              maxLength="50"
            />
            {/* TELEFONO */}
            <label htmlFor="telefono"> Teléfono </label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Escribe tu teléfono"
              required
              value={formData.telefono}
              onChange={handleChange}
              maxLength="15"
            />
            {/* CORREO */}
            <label htmlFor="correo"> Correo Electrónico </label>
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Escribe tu correo"
              value={formData.correo}
              onChange={handleChange}
              required
              maxLength="50"
            />
            {/* EDAD */}
            <label htmlFor="edad">Edad</label>
            <input
              type="text"
              name="edad"
              id="edad"
              placeholder="Escribe tu edad"
              value={formData.edad}
              onChange={handleChange}
              required
              maxLength="3"
            />
            <div>
              {/* <label htmlFor="documents"> Selecciona una opción</label>
          <select name="documents" required>
            <option value="dni"> DNI </option>
            <option value="passport">Pasaporte</option>
            <option value="carnet">Carnet de Extranjería</option>
          </select> */}
              {/* DNI */}
              <label htmlFor="dni"> N° Documento</label>
              <input
                type="text"
                name="dni"
                id="dni"
                placeholder="Escribe tu número de documento"
                required
                value={formData.dni}
                onChange={handleChange}
                maxLength="20"
              />
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <input
                type="date"
                name="fechaNacimiento"
                id="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </div>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </article>
    </>
  );
}
