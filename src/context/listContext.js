import { createContext, useCallback, useState } from "react";

import { LIST_TYPE_LIST } from "../helpers/constants";

export const ListContext = createContext();

const ListProvider = ({ children }) => {
    const [type, setType] = useState(LIST_TYPE_LIST);

    const handleChangeType = useCallback((newType) => {
        setType(newType)
    }, []);

    return (
        <ListContext.Provider value={{ type, handleChangeType }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListProvider;