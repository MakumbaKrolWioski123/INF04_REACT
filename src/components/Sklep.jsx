function Sklep() {
    return (
        <div>
            <style jsx>{`
                #naglowek {
                    background-color: #34495e;
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    padding: 0 20px; 
                }
                header {
                    font-size: 24px;
                    color: white;
                }
                .linki {
                    display: flex;
                }
                a {
                    text-decoration: none;
                    padding: 20px;
                    color:white ;
                }
                a:hover 
                {
                    color: #1abc9c;
                }
                img
                {
                    height: 50px;
                   
                }
            `}</style>

            <div id="naglowek">
                <img src={"src/assets/zdjecie.png"}/>
                <header>Sklep</header>

                <div className="linki">
                    <a href="">Start</a>
                    <a href="">Oferta</a>
                    <a href="">Kontakt</a>
                </div>
            </div>
        </div>
    );
}

export default Sklep;
