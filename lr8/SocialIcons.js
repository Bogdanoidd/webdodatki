import React from "react";
import { social } from "./data"; 

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      {social.map((socialIcon) => {
        const { id, url, icon } = socialIcon; 
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
