import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   
   body {
      font-family: 'Stick', sans-serif;
   }
   h1,h2,h3,h4,h5,h6 {
      margin: 0;
      padding: 0;
   }
   a { 
      color: inherit;
      text-decoration: none;
   }
`;

export default GlobalStyles;

// font-family: 'Caladea', serif;
// font-family: 'Freckle Face', cursive;
// font-family: 'Moo Lah Lah', cursive;
// font-family: 'Nosifer', cursive;
// font-family: 'Pirata One', cursive;
// font-family: 'Stick', sans-serif;
// font-family: 'Zilla Slab Highlight', cursive;
