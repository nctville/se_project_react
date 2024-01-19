import React from "react";

const currentTempUnitContext = React.createContext({
    currentTempUnit: "",
    handleToggleSwitchChange: ()=>{}

})

export {currentTempUnitContext};