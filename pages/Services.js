
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
        <section class="py-12 sm:py-16 bg-white">
            <div class="max-w-7xl px-10 mx-auto sm:text-center">
                <p class="text-pink-500 font-medium uppercase">Our Integrations</p>
                <h2 class="font-bold  text-3xl sm:text-4xl lg:text-5xl mt-3">Our Major <span className="text-pink-400 ">Services</span>.</h2>
                <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-1xl">Although we are not limited with these we always strive to increase.<br class="lg:hidden hidden sm:block" />For now Check'em out below 👇</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16 ">

                    {data.map((item, i) => (
                        <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 hover:bg-pink-50 hover:scale-110 transition-all ease-in" key={i}>
                            <img className="w-28" src={item.img} alt="" />
                            <p class="font-bold text-pink-400 mt-4"> {item.name}</p>
                            <p class="mt-2 px-8 text-sm text-gray-500">{item.info}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    </div>;
}

export default Services;
