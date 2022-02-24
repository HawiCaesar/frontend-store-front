import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const showAlert = (
  type = 'success',
  message = '',
  options = defaultOptions
) => {
  if (type === 'success') {
    return toast.success(message, options);
  }

  if (type === 'error') {
    return toast.error(message, options);
  }
};
