import {newContextComponents} from "@drizzle/react-components";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";

const {ContractData,ContractForm} = newContextComponents;

const Alumnos = ({drizzle , drizzleState}) => (
    <section className="AppAlumnos">
        <h2>Alumnos</h2>

        <ContractData drizzle={drizzle} drizzleState={drizzleState}
                      contract={"Asignatura"} method={"matriculasLength"}
                      render={ml => (
                          <table>
                              <AlumnosHead/>
                              <AlumnosBody drizzle={drizzle}
                                           drizzleState={drizzleState}
                                           matriculasLength={ml}/>
                          </table>
                      )}
        />

        <ContractData drizzle={drizzle} drizzleState={drizzleState} 
                      contract={"Asignatura"} method={"profesor"}
                      render={ addr => {
                            if (addr !== drizzleState.accounts[0]) {
                                return <Matricularse drizzle={drizzle} drizzleState={drizzleState} />
                            }
                            return <></>
                        }
                      }
        />

        
    </section>
);

const Matricularse = ({drizzle , drizzleState}) => <article className="Matricula">
        <h2>Matricularse</h2>
        <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                      contract={"Asignatura"} method={"automatricula"}
                      labels={["Nombre","E-mail"]}
        />
    </article>

export default Alumnos;
