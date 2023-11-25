import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,body,header,select,ul,li,img,figure,p,h1,h2,h3,h4,h5,h6,nav,div,a,section,input,button{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1rem;
    text-decoration: none;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Inter', sans-serif; 
    color: var(--grey-0);
}

body{
    background-color: var(--grey-4);
}

label{
    font-size: 0.8rem;
}

button {
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 1rem;
    transition: 0.3s;
}

a {
    background-color: var(--grey-2);
    border-radius: 0.25rem;
    padding: 1rem;
    width: 20rem;
    text-align: center;
    transition: 0.3s;
    &:hover {
      background-color: var(--grey-3);
    }
  }

h1 {
    font-size: 1.4rem;
    color: var(--color-primary);
}

:root{
    --color-primary: #FF577F;
    --color-primary-hover: #FF427F;
    --color-primary-Negative: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #D1D5DB;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --success: #3FE864;
    --negative: #E83F5B;
}
`;
