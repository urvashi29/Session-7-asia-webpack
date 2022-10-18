import React from "react";
import data from './data';

const App = () => {
    console.log(data.recipe);
    const filteredData = data.recipe.filter(info => {
        return info.idCategory == 1;
    });
    console.log(filteredData);


    const dataList = data.recipe.map(r => {
        return (
            <div key={r.idCategory} style={{ color: "orange", textAlign: "center" }}>
                <h4>{r.strCategory}</h4>
                <img src={r.strCategoryThumb} alt="image" />
                <p>{r.strCategoryDescription}</p>
            </div>
        )
    });

    return (
        <React.Fragment>
            <h2>Recipe Data</h2>
            {dataList}
        </React.Fragment>
    )
}


export default App;


//html
//tags (type of tags), attributes, semantic elements & non-semantic element, linking(a), forms, video, image

//css
//style text, font, margin, padding, border, box-model.
//Navigation bar, dropdown, z-index, background
//Responsive website: media query, Bootstrap [(3-column structure, 4 column structure) and hamburger button]
