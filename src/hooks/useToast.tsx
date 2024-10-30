import { toast } from 'react-toastify';

const useToastClient = () => {
    const notify = (palabra: string) => toast.error(palabra,
        {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    return (
        {
            notify
        }
    )
}

export default useToastClient