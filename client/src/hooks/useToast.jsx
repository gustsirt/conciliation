
import { redirect } from '@tanstack/react-router';
import { toast } from 'react-toastify';

const useToast = ( time = 2000) => {
  const toastSucess = (message, to = null) => {
    toast.success(message)
    to && setTimeout( () => { redirect({to}) }, time )
  }

  const toastError = (message, to = null) => {
    toast.error(message)
    to && setTimeout( () => { redirect({to})  }, time )
  }

  return { toastSucess, toastError }
}

export default useToast