import FooterForm from "../components/FooterForm";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Register() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = () => {
    if (dataForm.email === "" && dataForm.password === "") {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios",
        icon: "warning",
        confirmButtonColor: "#486C9C",
      });
      return;
    }

    // logica de la peticion
  };

  return (
    <>
      <section>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Ingresa tus credenciales
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={dataForm.email}
                  onChange={(e) => handleChange(e)}
                  required
                  placeholder="Ingrese su correo electrónico"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  value={dataForm.password}
                  onChange={(e) => handleChange(e)}
                  required
                  placeholder="Ingrese su contraseña"
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <br />
            <div>
              <button
                onClick={iniciarSesion}
                className="flex w-full justify-center rounded-md bg-[#557EB4] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs cursor-pointer hover:bg-[#486c9c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterForm />
    </>
  );
}
