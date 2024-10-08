import { useForm } from "react-hook-form";
import "./useraccess.scss"
import useToast from "../../hooks/useToast.jsx";

const LogIn = () => {
  // const { postData } = useFetchService()
  // const { setToken } = useContext(ContextUser)
  // const { toastSucess, toastError } = useToast()
  
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: 'prueba@gmail.com',
      password: '12345'
    },
  });
  
  const onSubmit = async data => {
  //   try {
  //     const resp = await postData("api/users/login", data)
  //     console.log(resp);
  //     if(resp?.isError === false) {
  //       const token = resp.data.token;
  //       setToken(`Bearer ${token}`)
  //       toastSucess("Te has logueado con exito!", "/table01/")
  //     } else {
  //       toastError("Acceso no autorizado")
  //     }
  //   } catch (error) {
  //     toastError("Acceso no autorizado por un error en el sistema")
  //   }
  };

  return (
    <div  className="page-container">
      <h1 className="title">Inicio de Sesión</h1>
      <form className="form-container-vert" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">   Email</label>
        <input type="email" {...register("email",    { required: true})} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" {...register("password", { required: true})} />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>Hacer el un config dinamico para nav + rutas</p>
    </div>
  )
}

export default LogIn