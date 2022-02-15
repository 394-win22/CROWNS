import React from "react";


const ResultsPage = ({hairType}) => {
    console.log("navigated to results page");
    return (
        <div className="ResultsPage">
        {hairType.shortDescription} 
        </div>
    );
  }
  
  export default ResultsPage;