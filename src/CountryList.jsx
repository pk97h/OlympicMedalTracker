const CountryList = ({ countrys, deleteContry }) => {
    const tdStyle = { borderBottom: "1px solid #ddd", padding: "10px", };
    const sortedCountries = [...countrys].sort((a, b) => b.gold - a.gold);

    return (
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", backgroundColor: "rgba(100, 163, 230, 0.185)", fontWeight: "bold", borderRadius: "10px", overflow: "hidden" }}>
            <thead style={{ backgroundColor: "rgba(100, 163, 230, 0.585)", color: "white", }}>
                <tr>
                    <th>국가명</th>
                    <th>금메달</th>
                    <th>은메달</th>
                    <th>동메달</th>
                    <th>액션</th>
                </tr>
            </thead>
            <tbody>
                {sortedCountries.map(({ country, gold, silver, bronze }, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{country}</td>
                        <td style={tdStyle}>{gold}</td>
                        <td style={tdStyle}>{silver}</td>
                        <td style={tdStyle}>{bronze}</td>
                        <td style={tdStyle}>
                            <button
                                onClick={() => deleteContry(index)}
                                style={{ backgroundColor: "red", color: "white", borderRadius: "5px", width: "70px", height: "40px", fontWeight: "bold", border: "transparent" }}
                            >
                                삭제
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CountryList;
