export const getWomenClothing = () => {
    return fetch('https://fakestoreapi.com/products/category/women%27s%20clothing');
};

export const getJewelery = ()=>{
    return fetch('https://fakestoreapi.com/products/category/jewelery');
}

export const getBags = ()=>{
    return fetch('http://localhost:8080/bags');
}
