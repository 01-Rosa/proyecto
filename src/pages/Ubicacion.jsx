export default function Ubicacion() {
    return (
        <div className="flex flex-col md:flex-row h-screen"> {/* Usa flexbox para el layout */}
            <div className="w-full md:w-2/2 relative"> {/* Mapa ocupa la mitad del ancho en pantallas grandes */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.255285673294!2d-98.2650343!3d19.008469299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc70760606683%3A0xbdfba3b099d88dc0!2sFENOTTI!5e0!3m2!1ses-419!2smx!4v1744935792119!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className="bg-white p-8 shadow-md rounded-lg md:w-1/2 "> {/* Fondo blanco, padding, sombra, esquinas redondeadas */}
                <h1 className="text-3xl font-bold text-blue-800 mb-4 font-serif">DÍAS DISPONIBLES</h1>
                <div className="overflow-x-auto"> {/* Scroll horizontal si es necesario */}
                    <table className="w-full border-collapse table-auto"> {/* Tabla responsive */}
                        <thead>
                            <tr className="bg-gray-200"> {/* Fondo gris claro para el encabezado */}
                                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b border-gray-300">Día</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b border-gray-300">Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-blue-200 hover:bg-blue-100">
                                <td className="px-4 py-2">Martes</td>
                                <td className="px-4 py-2">1:00 pm - 11:00 pm</td>
                            </tr>
                            <tr className="border-b border-blue-200 hover:bg-blue-100">
                                <td className="px-4 py-2">Miercoles</td>
                                <td className="px-4 py-2">1:00 pm - 11:00 pm</td>
                            </tr>
                            <tr className="border-b border-blue-200 hover:bg-blue-100">
                                <td className="px-4 py-2">Jueves</td>
                                <td className="px-4 py-2">1:00 pm - 11:00 pm</td>
                            </tr>
                            <tr className="border-b border-blue-200 hover:bg-blue-100">
                                <td className="px-4 py-2">Viernes</td>
                                <td className="px-4 py-2">1:00 pm - 11:00 pm</td>
                            </tr>
                            <tr className="border-b border-blue-200 hover:bg-blue-100">
                                <td className="px-4 py-2">Sabado</td>
                                <td className="px-4 py-2">1:00 pm - 11:00 pm</td>
                            </tr>
                            <tr className="border-b border-blue-200 hover:bg-blue-100">
                                <td className="px-4 py-2">Domingo</td>
                                <td className="px-4 py-2">1:00 pm - 11:00 pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-700 italic">Dirección</h1>
                <p className="text-center text-gray-700">Atlixcáyotl 5415, 72820 San Bernardino Tlaxcalancingo, Pue., Mexico</p>
                <h1 className="text-2xl font-bold text-center mt-8 mb-4 text-blue-700 italic">Contacto</h1>
                <p className="text-center text-gray-700">+52 222 241 9200</p>
            </div>
        </div>

    );
}