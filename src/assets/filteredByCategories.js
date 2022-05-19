import { productList } from "../productAPI";

console.log('productList',productList)

    productList.map ((product)=>{//itera automaticamente , es un funcion el comac
        for (let index = 0; index < productList.length; index++) {
            let product
            product=productList(index)
            if(product.category==='sports'){
                sportsList.push(product)
            }else{
                electronicsList.push(product)
            }
            
        }
    
    })

    
    export {sportsList,electronicsList}