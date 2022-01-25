import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const NotaFinalRow = (props) => {
    const {drizzle, drizzleState, alumnoIndex, alumnoAddr} = props;
    
    let cells = [];

    cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"notaFinal"}
                methodArgs={[alumnoAddr]}
                render={nota => <td key={"nf-" + alumnoIndex}>
                        {nota/1000}
                    </td>
                }
                />);
   

    return (
        <tr key={"d-" + alumnoIndex}>
            <td>
            <ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"Asignatura"}
                              method={"datosAlumno"}
                              methodArgs={[alumnoAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            />
            </td>

            {cells}
        </tr>
    );
};

export default NotaFinalRow;


