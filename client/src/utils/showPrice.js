function showPrice(product) {

    return '$' + (product?.price?.toString().includes('.') ? product.price : product.price + ".00");

}

export default showPrice;