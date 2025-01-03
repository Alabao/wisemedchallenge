import PatientCard from "./app/components/PatientCard/PatientCard.tsx";
import 'bulma/css/bulma.min.css';
import {useApp} from "./useApp.tsx";

function App() {
    const {handlerDetailsOnClick} = useApp();

    return (
        <div className="container">
            <h1 className="title">Listado de Pacientes</h1>
            <div className="columns">
                <div className="column">
                    <PatientCard name="Juan Perez" age={25} diagnostics="Fiebre"
                                 onButtonClick={handlerDetailsOnClick}/>
                </div>
                <div className="column">
                    <PatientCard name="Pedro Gomez" age={25}
                                 diagnostics="Malestar general"
                                 onButtonClick={handlerDetailsOnClick}/>
                </div>
            </div>


        </div>
    )
}

export default App
