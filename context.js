import React, { useState } from "react";

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
    const [tags, setTags] = useState([])
    const [filters, setFilters] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [isCookies, setIsCookies] = useState()
    // Exportando variables para ser usadas en otros componentes
    const values = {
        tags, setTags,
        filters, setFilters,
        search, setSearch,
        query, setQuery,
        isCookies, setIsCookies
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useApp = () => React.useContext(Context);

export { ContextProvider, useApp };
