import React from "react";

const toppers = [
    {
        year: "AIR 1 - 2025",
        name: "Yash Vardhan*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/76244691_1-Yash-Vardhan.webp",
    },
    {
        year: "AIR 1 - 2024",
        name: "Jai Bohra",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/38121611_Jai-Bohara.jpg",
    },
    {
        year: "AIR 1 - 2024",
        name: "Devtej Singh*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/11895711_DEVTEJ-SINGH-1.webp",
    },
    {
        year: "AIR 1 - 2023",
        name: "Ganankit*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/74296361_01-Gnanankith-SC.webp",
    },
    {
        year: "AIR 1 - 2022",
        name: "Rishabh Shivani",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/57466931_Rishab-Shivani-.jpg",
    },
    {
        year: "AIR 1 - 2019",
        name: "Saumya",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/70114611_Saumya-1.jpg",
    },
    {
        year: "AIR 1 - 2017",
        name: "Rajat Maloo",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/19500621_Rajat-Maloo.jpg",
    },
    {
        year: "AIR 2 - 2025",
        name: "Chaitanya Ghosh",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/19734151_2-Chaitanya-Ghosh.webp",
    },
    {
        year: "AIR 2 - 2023",
        name: "Shruti Bhukar*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/66423641_2-Shruti_Bhukar.webp",
    },
    {
        year: "AIR 1 - 2025",
        name: "Sahil",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/35105641_2-Sahil-1.webp",
    },
    {
        year: "AIR 3 - 2025",
        name: "Simone Tatipudi*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/900441_03SC-Simone_Tatipudi.jpg",
    },
    {
        year: "AIR 3 - 2023",
        name: "KV Sai*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/60989451_3-KV-Sai-Eshwar-new-EWS.webp",
    },
    {
        year: "AIR 4 - 2025",
        name: "Tushit Trijal*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/58992461_4-Tushit-Trijal.webp",
    },
    {
        year: "AIR 4 - 2025",
        name: "Dinesh Dewasi*",
        image: "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/12378321_dinesh-dewasi-4-Catogary-MBC.webp",
    },
];

const Toppers = () => {
    return (
        <section className="py-5 bg-white">
            <div className="container">

                {/* Heading */}

                <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">

                    <h2 className="toppers-heading mb-0 font-bold">
                        Toppers Who Trusted Us
                    </h2>

                    <button type="button" className="btn toppers-btn">
                        Law Entrance
                    </button>

                </div>

                {/* Cards */}

                {/* Cards */}

                <div className="toppers-grid">

                    {toppers.map((item, index) => (

                        <div className="text-center topper-card" key={index}>

                            <div className="topper-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="topper-image"
                                />
                            </div>

                            <div className="rank-badge">
                                {item.year}
                            </div>

                            <h5 className="topper-name">
                                {item.name}
                            </h5>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Toppers;