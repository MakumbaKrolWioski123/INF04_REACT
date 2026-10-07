function Zamowienia() {


    function zamow()
    {
        const zamowienia = [
            { produkt: "Klawiatura", cena: 129, ilosc: 2 },
            { produkt: "Monitor", cena: 899, ilosc: 1 },
            { produkt: "Myszka", cena: 79, ilosc: 3 },
        ];
        const tablica = zamowienia.map(({produkt, cena,ilosc}) => ({ produkt,wartosc:cena*ilosc }));
        return tablica;
    }

    function zlicz() {
        const zliczone = zamow();
        return zliczone.reduce(
            (suma, { wartosc }) => suma + wartosc,
            0
        );
    }

    function znajdz()
    {
        const tablica = zamow();
        const znalezione = tablica.find(p=>p.produkt === "Monitor");
        return znalezione.wartosc;
    }

    return (
        <div>
            <h4>Zamowienie</h4>
            {zamow().map(({ produkt, wartosc }) => (
                <p key={produkt}>
                    {produkt}: {wartosc} zł
                </p>
            ))}
            <p>Zliczone wartosci {zlicz()} zł</p>
            <p>Wyszukany monitor {znajdz()} zł</p>
        </div>
    );
}

export default Zamowienia;
