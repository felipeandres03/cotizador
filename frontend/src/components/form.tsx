import { type customer, createCustomer } from "../services/customers";

function form() {
  const handleInfo = async () => {
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const direccion = document.getElementById("calle") as HTMLInputElement;
    const barrio = document.getElementById("barrio") as HTMLInputElement;
    const ciudad = document.getElementById("ciudad") as HTMLInputElement;
    const identificacion = document.getElementById(
      "identificación",
    ) as HTMLInputElement;
    const number = document.getElementById(
      "numero de celular",
    ) as HTMLInputElement;
    const nit = document.getElementById("nit") as HTMLInputElement;
    const numeroDeVerificacion = document.getElementById(
      "numero de verificacion",
    ) as HTMLInputElement;

    const customer: customer = {
      name: nombre.value,
      email: email.value,
      identification: identificacion.value,
      phoneNumber: {
        countryCode: "+57",
        number: number.value,
      },
      address: {
        street: direccion.value,
        city: ciudad.value,
        neighborhood: barrio.value,
      },
      nit:
        nit.value && numeroDeVerificacion.value
          ? {
              digits: nit.value,
              verificationDigit: numeroDeVerificacion.value,
            }
          : undefined,
    };

    const respuesta = await createCustomer(customer);

    if (!respuesta) {
      console.log("error al crear usuario");
    }
    {
      console.log(respuesta);
    }
  };

  return (
    <>
      <form id="infoCustomer">
        <div id="form-fields">
          <h1>Crear cliente</h1>
          <p className="subtitle">
            Completa tus datos para registrar un cliente
          </p>

          <div className="field">
            <label>Nombre completo</label>
            <input type="text" id="nombre" name="nombre" autoComplete="name" />
            <div className="error-msg" id="error-nombre"></div>
          </div>

          <div className="field">
            <label>Correo electrónico</label>
            <input type="email" id="email" name="email" autoComplete="email" />
            <div className="error-msg" id="error-email2"></div>
          </div>

          <div className="field">
            <label>direccion</label>
            <input type="text" id="calle" name="nombre" autoComplete="name" />
            <div className="error-msg" id="error-nombre3"></div>
          </div>
          <div className="field">
            <label>barrio</label>
            <input type="text" id="barrio" name="nombre" autoComplete="name" />
            <div className="error-msg" id="error-nombre4"></div>
          </div>
          <div className="field">
            <label>ciudad</label>
            <input type="text" id="ciudad" name="nombre" autoComplete="name" />
            <div className="error-msg" id="error-nombre5"></div>
          </div>
          <div className="field">
            <label>identificacion</label>
            <input
              type="text"
              id="identificación"
              name="nombre"
              autoComplete="name"
            />
            <div className="error-msg" id="error-nombre6"></div>
          </div>
          <div className="field">
            <label>numero de celular</label>
            <input
              type="text"
              id="numero de celular"
              name="numero"
              autoComplete="number"
            />
            <div className="error-msg" id="error-nombre7"></div>
          </div>
          <div className="field">
            <label>nit</label>
            <input type="text" id="nit" name="nit" autoComplete="name" />
            <div className="error-msg" id="error-nit"></div>
          </div>
          <div className="field">
            <label>numero de verificacion</label>
            <input
              type="text"
              id="numero de verificacion"
              name="numero de verificacion"
              autoComplete="name"
            />
            <div className="error-msg" id="error-numero de verificacion"></div>
          </div>

          <button
            onClick={() => {
              handleInfo();
            }}
            type="button"
          >
            Registrarme
          </button>
        </div>
      </form>

      <div id="success-msg">
        <strong>¡Listo!</strong>
        Tu registro se completó correctamente.
      </div>
    </>
  );
}

export default form;
