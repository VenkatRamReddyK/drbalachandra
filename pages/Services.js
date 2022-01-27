
function Services() {

    const data = [{ name: "Crowns and Bridges  ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/Crownsandbridges.png" },
    { name: " Veneers ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/Veneers.png" },
    { name: " Root Canals ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/root-canal.png" },
    { name: "  Tooth Colored Fillings ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/ToothColoredFilling.png" },
    { name: "Wisdom Teeth Extraction", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/WisdomTeeth.png" },
    { name: "   Panoramic X-Rays ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/Panoramicx-rays.png" },
    { name: "   Periodontal and Gum Disease Treatment ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/PeriodontalandGumdisease.png" },
    { name: "  Teeth Whitening Using Zoom", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/TeethWhiteningUsingzoom.png" },
    { name: "  Night Guards ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/NightGuard.png" },
    { name: "  Teeth Straightening Using Invisalign", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/TeethStraightening.png" },
    { name: " Sealants  ", info: " This is the Text, and some information regarding the Data  ", img: "/ServicesIcons/Sealants.png" },
    ]

    return <div className="pt-20 bg-black ">
        <section className="py-12 bg-white sm:py-16">
            <div className="px-10 mx-auto max-w-7xl sm:text-center">
                <p className="font-medium text-pink-500 uppercase">Our Integrations</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Our Major <span className="text-pink-400 ">Services</span>.</h2>
                <p className="mt-4 text-base text-gray-500 sm:text-xl lg:text-1xl">Although we are not limited with these we always strive to increase.<br className="hidden lg:hidden sm:block" />For now Check'em out below 👇</p>
                <div className="grid grid-cols-1 gap-10 my-12 sm:grid-cols-2 lg:grid-cols-4 sm:my-16 ">

                    {data.map((item, i) => (
                        <div className="flex flex-col items-center justify-center py-10 transition-all ease-in border border-gray-100 rounded-lg shadow-lg hover:bg-pink-50 hover:scale-110" key={i}>
                            <img className="w-28" src={item.img} alt="" />
                            <p className="mt-4 font-bold text-pink-400"> {item.name}</p>
                            <p className="px-8 mt-2 text-sm text-gray-500">{item.info}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    </div>;
}

export default Services;
