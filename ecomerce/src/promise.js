
const productArray = [
    {
        id:1,
        name:"producto1",
        img:"#",
        description:"lorem",
        price:"50",
    },
    {
        id:2,
        name:"producto2",
        img:"#",
        description:"lorem",
        price:"50",
    },
    {
        id:3,
        name:"producto3",
        img:"#",
        description:"lorem",
        price:"50",
    }
]
const productsApi = new Promise((resolve, reject) => {
    if(productArray !== []){
        setTimeout(() => {
            resolve(productArray)
        },2000)
    }else{
        reject("error 404")
    }
})


export default productsApi