import PatientCard from "./app/components/PatientCard/PatientCard.tsx";
import 'bulma/css/bulma.min.css';
import {useApp} from "./useApp.tsx";

function App() {
    const {handlerDetailsOnClick} = useApp();

    return (
        <div className="container">
            <h1 className="title">Listado de Pacientes</h1>
            <PatientCard name="Juan Perez" age={25} diagnostics="Fiebre"
                         onButtonClick={handlerDetailsOnClick}/>
            <PatientCard name="Pedro Gomez" age={25}
                         diagnostics="Malestar general"
                         onButtonClick={handlerDetailsOnClick}/>
        </div>
    )
}

export default App
