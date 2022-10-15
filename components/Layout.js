import Navbar from "./Navbar";

export default function Layout(props){
    return(
        <>
            <Navbar/>
            <h2>Layout Component</h2>
            {props.children}
            <footer>Footer</footer>
        </>
    )
} 