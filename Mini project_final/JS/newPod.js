let url1 = "http://localhost:3000/podcasts";
let response1;
let getPods = async () => {
    response1 = await fetch(url1)
        .then((response) => response.json())
        .then((data) => {
            let rows = '<h1 style="text-align:center; margin:2rem;">PodCasts</h1>';
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
            document.getElementById('podcasts1').innerHTML = rows;
        })
        .catch((error) => {
            console.log(error);
        })
}
getPods();

