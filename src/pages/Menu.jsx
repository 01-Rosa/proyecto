
export default function Menu() {
    return (

        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* primera tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://www.estaentumundo.com/wp-content/imagenes/2021/05/risotto-777x488.jpg" alt="Risotto" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Risotto</h5>
                        <p className="text-gray-600 text-base">El risotto, con una textura cremosa debido a una cocción con caldo de ave o de verduras, en la que se mueve para que suelte el almidón.</p>
                    </div>
                </div>

                {/* Segunda tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://ginos.com.mx/wp-content/uploads/2020/11/thumbnail-7.jpeg" alt="Pollo a la parmegiana" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Pollo a la parmegiana</h5>
                        <p className="text-gray-600 text-base">Pechuga de pollo empanizada, salsa de tomate, queso mozzarella y en algunas ocasiones se acompaña con tocino.</p>
                    </div>
                </div>

                {/* Tercera tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://ginos.com.mx/wp-content/uploads/2020/11/thumbnail-3.jpeg" alt="Lasagna" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Lasagna</h5>
                        <p className="text-gray-600 text-base">La lasagna es un plato italiano tradicional que se compone de capas de pasta, carne, salsa de tomate y queso.</p>
                    </div>

                    {/* cuarta tarjeta */}
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://licoreriasunidas.pe/cdn/shop/articles/tipos-de-vinos.jpg?v=1693249338" alt=" Vino Tinto" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2"> Vino Tinto</h5>
                        <p className="text-gray-600 text-base">   El vino tinto es un tipo de vino procedente mayormente de mostos de uvas tintas, se destaca por su caracter único.</p>
                    </div>
                </div>
                {/* quinta tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://www.blasbermejo.com/wp-content/uploads/2023/06/tipos-vino-blanco.webp" alt="Vino Blanco" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2"> Vino Blanco</h5>
                        <p className="text-gray-600 text-base"> El vino blanco se elabora principalmente a partir de uvas blancas, de color verde o amarillo, como Chardonnay, Sauvignon Blanc y Riesling.</p>
                    </div>
                </div>

                {/* sexta tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://enovinos.com/blog/wp-content/uploads/2023/08/pink-wine-2022-11-15-21-09-47-utc.jpg" alt="Risotto" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Vino Rosado</h5>
                        <p className="text-gray-600 text-base">Es un vino intenso, de aromas frescos, con algunas notas cítricas y minerales perfectamente equilibradas con toques de frutos rojos, frambuesas y grosellas.</p>
                    </div>
                </div>

                {/* septima tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://www.paulinacocina.net/wp-content/uploads/2020/01/receta-de-tiramisu-facil-y-economico-1740483918-1200x900.jpg" alt="Tiramisú" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Tiramisú</h5>
                        <p className="text-gray-600 text-base">Este postre clásico italiano consiste en capas de bizcochos de soletilla empapados en café, queso mascarpone, cacao en polvo y un toque de licor.</p>
                    </div>
                </div>


                {/* octava tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://imagenes.elpais.com/resizer/v2/USIIVDYW2RL6XP4DYSXNDQTX3U.jpg?auth=2feb8b3ecf28443aba6553ac1bb916b647e0cda4998e20bf3f5b9ad286107931&width=1960&height=1103&smart=true" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Cannoli</h5>
                        <p className="text-gray-600 text-base"> Son las conchas de hojaldre fritas se rellenan con un relleno dulce de ricotta y se cubren con trocitos de chocolate o nueces picadas.</p>
                    </div>
                </div>

                {/*novena tarjeta */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src="https://marisasitaliankitchen.com/wp-content/uploads/2020/03/Zeppole-Di-San-Giuseppe-9-of-12-500x500.jpg" alt="Zeppole" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">Zeppole</h5>
                        <p className="text-gray-600 text-base"> Esta fritura la masa en forma de rosquilla suele rellenarse con natillas o gelatina y cubrirse con azúcar en polvo.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}