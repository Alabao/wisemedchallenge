import {FC} from "react";
import {PatientCardType} from "./types.ts";

const PatientCard: FC<PatientCardType> = ({name,age,diagnostics,onButtonClick}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="title is-4">{name}</h2>
                <p className="subtitle is-6">Edad: {age}</p>
                <p><strong>Diagnóstico:</strong> {diagnostics}</p>
            </div>
            <footer className="card-footer">
                <button className="button is-link card-footer-item" onClick={onButtonClick}>
                    Más detalles
                </button>
            </footer>
        </div>

    );
};

export default PatientCard;