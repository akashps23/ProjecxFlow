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
          "https://server-bfex.onrender.com/api/v1/user/search",
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
        } else {
          console.error("Error fetching search results:", response.status);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [txt]);

  return (
    <div>
      <div className="projectsearch">
        <div className="search_rect"></div>
        <img className="searchimg"></img>
        <p className="title">Similar projects like " {txt} "</p>
        <div className="bgrect"></div>
      </div>
      <div className="searchResults">
        {searchResults.map((result) => (
          <CardComponent key={result.id} title={result.title} />
        ))}
      </div>
    </div>
  );
}
