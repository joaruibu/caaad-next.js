import { useRouter } from "next/router";
import React, { useState } from "react";

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
    const { locale } = useRouter()

    const [tags, setTags] = useState([])
    const [filters, setFilters] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [cookiesAccepted, setCookiesAccepted] = useState(false)

    // Exportando variables para ser usadas en otros componentes
    const values = {
        tags, setTags,
        filters, setFilters,
        search, setSearch,
        query, setQuery,
        cookiesAccepted, setCookiesAccepted,
        locale
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useApp = () => React.useContext(Context);

export { ContextProvider, useApp };
