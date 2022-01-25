import {newContextComponents} from "@drizzle/react-components";

import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";


import EvaluacionesSinComponentes from "./EvaluacionesSinComponentes";

const {ContractData,ContractForm} = newContextComponents;

const Evaluaciones = (props) => (
    <section className="AppEvaluaciones">
        <h2>Evaluaciones</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"evaluacionesLength"}
            render={el => (
                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody drizzle={props.drizzle}
                                      drizzleState={props.drizzleState}
                                      evaluacionesLength={el}/>
                </table>
            )}
        />

        <EvaluacionesSinComponentes drizzle={props.drizzle} drizzleState={props.drizzleState} />

        <ContractData drizzle={props.drizzle} drizzleState={props.drizzleState} 
                      contract={"Asignatura"} method={"profesor"}
                      render={ addr => {
                            if (addr === props.drizzleState.accounts[0]) {
                                return <NuevaEvaluacion drizzle={props.drizzle} drizzleState={props.drizzleState} />
                            }

                            return <></>

                        }
                      }
        />

    </section>
);

const NuevaEvaluacion = ({drizzle,drizzleState}) => <article className="Matricula">
        <h2>Crear Evaluacion</h2>
        <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                      contract={"Asignatura"} method={"creaEvaluacion"}
                      labels={["Nombre","Fecha","Puntos"]}
        />
    </article>
export default Evaluaciones;
