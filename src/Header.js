import { useState } from "react";
const Header = () => {   
    const [theme,setTheme] = useState('light');
    document.documentElement.className = localStorage.getItem("themeStorage") ? localStorage.getItem("themeStorage"):theme;
    document.body.classList.remove("light")
    const handleSwitcher = () => {
        if(theme==="light"){
         setTheme("dark")
         document.documentElement.className = theme     
        }else{
         setTheme("light")
         document.documentElement.className = theme
        }
        localStorage.setItem("themeStorage",theme);
    }
    return ( 
        <div className="header">
            <div className="container">
                <h1>Where in the world?</h1>
                <span onClick={handleSwitcher}><i className="fas fa-moon"></i>dark mode</span>
            </div>
        </div>
     );
}
 
export default Header;