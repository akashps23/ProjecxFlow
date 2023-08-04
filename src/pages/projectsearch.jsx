import React, { useState, useEffect } from "react";
import "../styles/projectsearch.css";
import { useLocation } from "react-router-dom";
import CardComponent from "./cardcomponent";

export default function ProjectSearch() {
  const txt = useLocation().state?.txt;
  console.log(txt);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/user/search`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ searchQuery: txt }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.results); 
        return (
          <div className="projectsearch_s">
              <div className="search_rect_s">
              <img className="searchimg_s"></img>
              <p className="title_s">Similar projects like " {txt} "</p>
              </div>
              <div className="searchResults_s">
              {searchResults.map((result) => (
                <CardComponent key={result.id} 
                title={result.title}
                type={result.type}
                year={result.year} />
              ))}        
              </div>
          </div>
        )
              }
        else
        {
          return (
            <div className="projectsearch_s">
                <div className="search_rect_s">
                <img className="searchimg_s"></img>
                <p className="title_s">Oops! No result found</p>
                </div>
            </div>
          );
        }
} catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [txt]);

}

