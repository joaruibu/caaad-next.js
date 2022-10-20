import React, { useState } from "react";

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
    const [tags, setTags] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    // Exportando variables para ser usadas en otros componentes
    const values = {
        tags, setTags,
        search, setSearch,
        query, setQuery
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useApp = () => React.useContext(Context);

export { ContextProvider, useApp };
