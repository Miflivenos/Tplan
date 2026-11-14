import { useMemo } from "react";
import useForm from "./useForm";

interface Props<T>{
    criterioBusqueda: keyof T;
    arrayBusqueda: T[];
}

const useSearchBar = <T extends object>({criterioBusqueda, arrayBusqueda}: Props<T>) => {

    const { valores, handleOnChange } = useForm({"criterio": ""});

    const array = useMemo(() => {
        const criterio = valores.criterio.trim().toLowerCase();
        if(!criterio) return arrayBusqueda;
        return arrayBusqueda.filter(e => String(e[criterioBusqueda]).toLowerCase().includes(criterio));
    }, [arrayBusqueda, criterioBusqueda, valores.criterio]);

    const renderBarra = () => (
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <label htmlFor="criterio">Buscar</label>
            <input id="criterio" type="text" name="criterio" placeholder="Buscar por título..." value={valores.criterio} onChange={handleOnChange} />
        </div>
    )

    return { array, renderBarra };

};

export default useSearchBar;