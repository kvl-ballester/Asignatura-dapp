import {newContextComponents} from "@drizzle/react-components";

import NotaFinalHead from "./NotaFinalHead";
import NotaFinalBody from "./NotaFinalBody";

const {ContractData} = newContextComponents;

const NotaFinal = (props) => (
	<section className="AppNotaFinal">
        <h2>Notas finales</h2>

        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"matriculasLength"}
                      render={ml => <table>
                              <NotaFinalHead />
                              <NotaFinalBody drizzle={props.drizzle}
                                                  drizzleState={props.drizzleState}
                                                  matriculasLength={ml} />
                          </table>}
                      />
        


    </section>

);

export default NotaFinal;
