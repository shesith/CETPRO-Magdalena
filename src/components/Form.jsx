import { useState } from "react";
import Loader from "./Loader";
import axios from "axios";

export default function Form() {
  const [error, setError] = useState("");
  const [errorToast, setErrorToast] = useState(false);
  const [message, setMessage] = useState(false);
  const [load, setLoad] = useState(false);

  const [formData, setFormData] = useState({
    dni: "",
    nombre_alumno: "",
    apellido_alumno: "",
    distrito: "",
    telefono: "",
    correo: "",
    edad: "",
    fecha_nac: "",
    curso: "",
    horario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // FUNCION PARA HACER LA PETICION A LA API ESTE BOTON SE MANDA A LLAMAR EN EL FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    // Se manejan exepciones en caso de un error con el try catch
    try {
      // Consumiento la api mediante axios con el metodo post
      const response = await axios.post(
        "http://127.0.0.1:8000/api/students",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("MENSAJE", message);
      // console.log("respuesta", response);

      // Validacion de respuesta exitoso 201 (Creacion con exito)
      if (response.status === 201) {
        setLoad(false);
        setFormData({
          ...formData,
          dni: "",
          nombre_alumno: "",
          apellido_alumno: "",
          distrito: "",
          telefono: "",
          correo: "",
          edad: "",
          fecha_nac: "",
          curso: "",
          horario: "",
        });
        await setMessage(true);
        await setTimeout(() => {
          setMessage(false);
        }, 5000);
      }
    } catch (err) {
      setLoad(false);
      const { response } = err;
      // console.log(response);

      // Validacion en caso de error 422 (Algun dato ya existe en la BD)
      if (response.status === 422) {
        setError(response.data.message.split(". ")[0]);
        setErrorToast(true);
        setFormData({
          ...formData,
          dni: "",
          nombre_alumno: "",
          apellido_alumno: "",
          distrito: "",
          telefono: "",
          correo: "",
          edad: "",
          fecha_nac: "",
          curso: "",
          horario: "",
        });
        await setTimeout(() => {
          setErrorToast(false);
        }, 5000);
      }

      // Validacion error 500 (error interno del servidor)
      if (response.status === 500) {
        alert(response.data.message);
        setFormData({
          ...formData,
          dni: "",
          nombre_alumno: "",
          apellido_alumno: "",
          distrito: "",
          telefono: "",
          correo: "",
          edad: "",
          fecha_nac: "",
          curso: "",
          horario: "",
        });
      }
      /*   console.error("Error en la solicitud:", err);
      setError({ err });
      alert(message.message); */
    }
  };

  return (
    <>
      {/* Mostrar loader cuando se envien los datos al momento de dar clic al boton enviar */}
      {load ? <Loader /> : null}
      <article>
        {/* AQUI SE MANDA A LLAMAR LA FUNCION DE LA PETICION Y ESTA SE EJECUTARA CUANDO SE LE DE AL BOTON ENVIAR */}
        <form onSubmit={handleSubmit} className="md:flex w-full gap-4 block">
          <div className="w-full">
            {/* NOMBRE */}
            <label htmlFor="nombre_alumno"> Nombres </label>
            <input
              type="text"
              name="nombre_alumno"
              id="nombre_alumno"
              placeholder="Escribe tus nombres"
              required
              maxLength="50"
              value={formData.nombre_alumno}
              onChange={handleChange}
            />

            {/* APELLIDO */}
            <label htmlFor="apellido_alumno"> Apellidos </label>
            <input
              type="text"
              name="apellido_alumno"
              id="apellido_alumno"
              placeholder="Escribe tu apellido"
              required
              value={formData.apellido_alumno}
              onChange={handleChange}
              maxLength="50"
            />

            {/* DISTRITO */}
            <label htmlFor="distrito"> Distrito</label>
            <input
              type="text"
              name="distrito"
              id="distrito"
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
              maxLength="10"
              pattern="\d*"
              title="Por favor, ingresa solo números."
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
          </div>
          <div className="w-full">
            {/* EDAD */}
            <label htmlFor="edad">Edad</label>
            <input
              type="number"
              min="18"
              max="60"
              name="edad"
              id="edad"
              placeholder="Selecciona tu edad"
              value={formData.edad}
              onChange={handleChange}
              required
              maxLength="3"
              pattern="^[0-9]+$"
            />

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
              maxLength="10"
              pattern="\d*"
              title="Por favor, ingresa solo números."
            />

            {/* Fecha de nacimiento */}
            <label htmlFor="fecha_nac">Fecha de Nacimiento</label>
            <input
              type="date"
              name="fecha_nac"
              id="fecha_nac"
              value={formData.fecha_nac}
              onChange={handleChange}
              max="2010-01-01"
            />

            {/* CURSO */}
            <label htmlFor="curso"> Selecciona una carrera</label>
            <select
              name="curso"
              id="curso"
              required
              onChange={handleChange}
              value={formData.curso}
            >
              <option value="">Selecciona una carrera</option>
              <option value="Artesanía y Manualidades">
                Artesanía y Manualidades
              </option>
              <option value="Estética Personal">Estética Personal</option>
              <option value="Hostelería y Turismo">Hostelería y Turismo</option>
              <option value="Computación e Infórmatica">
                Computación e Infórmatica
              </option>
            </select>

            {/* HORARIO */}
            <label htmlFor="horario">Selecciona un horario:</label>
            <select
              id="horario"
              name="horario"
              onChange={handleChange}
              value={formData.horario}
              required
            >
              <option value="">Selecciona un horario</option>
              <option value="mañana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
            <button
              className="cursor-pointer block w-full rounded-lg p-3 mt-5 bg-[#608dc4] font-bold text-white text-center active:opacity-75"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </article>

      {/* Mensaje de respuesta en caso de ser el registro exitoso */}
      {message ? (
        <div className="absolute bottom-4 right-4 border-[#608DC4] border-2 text-[#608DC4] shadow-xl rounded-md text-center text-2xl font-bold p-4 flex justify-center items-center gap-4 animate-appear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-check-filled"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
          <p>¡Te has matriculado exitosamente!</p>
        </div>
      ) : null}

      {/* Mensaje de respuesta en caso de que haya un error */}
      {errorToast ? (
        <div className="absolute bottom-4 right-4 border-red-500 border-2 text-red-500 shadow-xl rounded-md text-center text-2xl font-bold pt-4 p-4 flex justify-center items-center gap-4 animate-appear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-exclamation-circle"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#EF4444"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 9v4" />
            <path d="M12 16v.01" />
          </svg>
          <p>Error: {error}</p>
        </div>
      ) : null}
    </>
  );
}
