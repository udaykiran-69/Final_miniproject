let url = "http://localhost:3000/audio";
let response;
let getDetails = async () => {
    response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let rows = '<h1 style="text-align:center; margin:2rem;">Audio Books</h1>';
            const columnsPerRow = 4; // Adjust this value as needed
            for (let i = 0; i < data.length; i += columnsPerRow) {
                let row = '<div style="display:flex;">';
                for (let j = 0; j < columnsPerRow && i + j < data.length; j++) {
                    const values = data[i + j];
                    row += `
<div style="margin: 10px;">
<img src="${values.img}" width="200px" height="200px"/>
<audio controls style="margin-top: 5px; width: 200px;"> <source src="${values.aud}  "/></audio>
</div>`;
                }
                row += '</div>';
                rows += row;
            }

            // document.write(rows);

            document.getElementById('audiobooks1').innerHTML = rows;
        })
        .catch((error) => {
            console.log(error);
        })
}
getDetails();