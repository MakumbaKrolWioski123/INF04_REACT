function Temperatura() {

    const przelicz = (celsjusz) =>{
        let farenheit = celsjusz*9/5+32;
        return farenheit;
    };

    const opiszPogoda = (temperatura) => {
        var pogoda;
        if(temperatura<0)
        {pogoda = "Mróz"}
        else if(temperatura<16&&temperatura>-1)
        {pogoda="Chłodno"}
        else if(temperatura>15&&temperatura<26)
        {pogoda="Ciepło"}
        else if(temperatura>25)
        {pogoda="Upał"}

        return pogoda;
    }


    return (
        <div>
            <h2>Temperatura na Farenheit z 20 celsjusza:</h2>
            {przelicz(20)}
            <h2>Pogoda gdy 20 stopni:</h2>
            {opiszPogoda(20)}
        </div>
    );
}

export default Temperatura;
