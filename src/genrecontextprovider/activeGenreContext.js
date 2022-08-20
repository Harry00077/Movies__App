import React from "react";

const CreateActiveGenreStateContext = React.useState(undefined);
const CreateActiveGenreDispatchContext = React.useState(undefined);

function ActiveGenreContextProvider({children}) {
    const [activeGenre , setActiveGenre] = React.useState();

    const handleGenreChange = (activeGenre) =>{
    setActiveGenre(activeGenre);
    }

    return(

        <CreateActiveGenreStateContext.Provider>
            <CreateActiveGenreDispatchContext.Provider>
                {children}
            </CreateActiveGenreDispatchContext.Provider>
        </CreateActiveGenreStateContext.Provider>
    )
}

const useActiveGenreStateContext = () =>{
    const context = React.usecontext(CreateActiveGenreStateContext);

    if( context === undefined){
        throw Error("You Must Wrapp the app in the GenreContextProvider")
    }
    return context;
}


const useActiveGenreDispatchContext = () =>{
    const context = React.usecontext(CreateActiveGenreDispatchContext);

    if( context === undefined){
        throw Error("You Must Wrapp the app in the GenreContextProvider")
    }
    return context;
}

const useGenreContext = () => {
    return [ useActiveGenreStateContext(), useActiveGenreDispatchContext()]
}

export { ActiveGenreContextProvider, useGenreContext }


















