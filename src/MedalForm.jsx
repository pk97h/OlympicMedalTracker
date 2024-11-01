const MedalForm = ({ country, setCountry, gold, setGold, silver, setSilver, bronze, setBronze, handleSubmit }) => {
    const inputStyle = { textAlign: "center", fontWeight: "bold", padding: "20px" };
    const inputBoxStyle = { height: "40px", width: "100%", borderRadius: "5px", marginTop: "10px", border: "2px solid rgba(60, 64, 73, 0.582)" };
    const buttonStyle = { backgroundColor: "orange", color: "white", fontWeight: "700", borderRadius: "55px", minWidth: "100px", height: "40px", border: "transparent" };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <label style={inputStyle}>
                국가명
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} style={inputBoxStyle} />
            </label>
            <label style={inputStyle}>
                금메달
                <input type="number" value={gold} onChange={(e) => setGold(Math.max(0, Number(e.target.value)))} style={inputBoxStyle} />
            </label>
            <label style={inputStyle}>
                은메달
                <input type="number" value={silver} onChange={(e) => setSilver(Math.max(0, Number(e.target.value)))} style={inputBoxStyle} />
            </label>
            <label style={inputStyle}>
                동메달
                <input type="number" value={bronze} onChange={(e) => setBronze(Math.max(0, Number(e.target.value)))} style={inputBoxStyle} />
            </label>
            <button type="submit" style={buttonStyle}>국가 추가</button>
            <button type="submit" style={buttonStyle}>업데이트</button>
        </form>
    );
};

export default MedalForm;
