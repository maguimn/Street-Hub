import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.css';
import Header from '../../header/Header';
import MeuCarrossel from '../../Carousel/Carousel';
import ExcluisveSquare from '../../exclusive-square/exclusive-square';
import Release from '../../Release/release';
import Footer from '../../footer/Footer';

function Home() {

    const releases = [
        { title: 'Air Force 1 Travis Scoot', image: '/images/af1-travis.png', brand: 'Nike' },
        { title: 'Bapesta', image: '/images/bapesta.png', brand: 'Bape' },
        { title: 'Nike dunk low', image: '/images/dunk.png', brand: 'Nike' },

    ];

    return (
        <div>
            <>
                <Header />
                <MeuCarrossel />

                <div className="release">
                
                    <div className="card-container">
                        {releases.map((release, index) => (
                            <Release
                                key={index}
                                title={release.title}
                                image={release.image}
                                brand={release.brand}
                            />
                        ))}
                    </div>
                </div>

                <div className="exclusive">
                    <ExcluisveSquare />
                </div>

                <Footer />

                
            </>
        </div>
    );
}

export default Home;
