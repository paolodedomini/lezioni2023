import { Toaster } from "react-hot-toast";

function ToasterCustom() {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                    background: '#691f44',
                    color: '#fff',
                    padding: '1rem',
                    fontFamily: 'Playfair display',
                    fontSize: '1.5rem',
                    borderRadius: '30px',
                    textAlign: 'center',

                },

                // Default options for specific types
                success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }}
        />)

}
export default ToasterCustom