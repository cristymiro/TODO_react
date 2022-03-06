import About from "./About"


export function Navigation() {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    )
}

export function Header(){
    return (
        <>
             <Navigation />
            <About />
            <div>Header</div>
        </>
    )
}
