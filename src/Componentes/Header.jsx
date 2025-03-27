import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-800 p-4 text-white">
            <nav className="flex flex-col md:flex-row justify-around">
                <h1 className="text-xl font-bold mb-4 md:mb-0">Restaurante</h1>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <Link to='/' className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-white'}>
                            Nosotros
                        </Link>
                    </li>
                </ul>

                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <Link to='/Menu' className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-white'}>
                            Menu
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <Link to='/Ubicacion' className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-white'}>
                        Ubicacion
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}