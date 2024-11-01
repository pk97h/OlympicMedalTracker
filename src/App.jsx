import { useState } from "react";
import MedalForm from "./MedalForm";
import CountryList from "./CountryList";

const App = () => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countrys, setCountrys] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!country) {
      alert("국가명을 입력해주세요.");
      return;
    }

    const newCountry = { country, gold, silver, bronze };
    const existingCountryIndex = countrys.findIndex((item) => item.country === country);
    const submitterText = event.nativeEvent.submitter.innerText;

    if (submitterText === "국가 추가") {
      if (existingCountryIndex !== -1) {
        alert("이미 등록된 국가입니다.");
        return;
      }
      setCountrys([...countrys, newCountry]);
    } else {
      if (existingCountryIndex !== -1) {
        const updatedCountrys = countrys.map((item, index) => {
          if (index === existingCountryIndex) {
            return {
              ...item,
              gold: item.gold + gold,
              silver: item.silver + silver,
              bronze: item.bronze + bronze,
            };
          }
          return item;
        });
        setCountrys(updatedCountrys);
      } else {
        alert("등록된 국가가 아닙니다.");
      }
    }

    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const deleteContry = (indexToRemove) => {
    setCountrys(countrys.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px", backgroundColor: "white", borderRadius: "20px", margin: "auto", marginTop: "100px", maxWidth: "1200px", minWidth: "800px", }}>
      <h1 style={{ color: "rgb(27, 126, 233)", fontSize: "50px" }}>2024 파리 올림픽</h1>
      <MedalForm
        country={country}
        setCountry={setCountry}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        handleSubmit={handleSubmit}
      />
      <CountryList countrys={countrys} deleteContry={deleteContry} />
    </div>
  );
};

export default App;