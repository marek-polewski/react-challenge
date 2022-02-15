declare module "creditcardutils"

const validateCardNumber = (cardNum) => {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
    const masterRegex =
        /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
    return cardNum.value.match(visaRegex) || cardNum.value.match(masterRegex)
}

const validateCardExpiry = (cardExpiry) => {
    const expiryMonth = parseInt(cardExpiry.split("/")[0])
    const expiryYear = parseInt(cardExpiry.split("/")[1])
    const now = new Date()
    const currentMonth = now.getMonth() //  starts from 0 ==> Jan, 11 ==> Dec
    const currentYear = now.getFullYear()
    return (
        expiryYear > currentYear ||
        (expiryYear === currentYear && currentMonth <= expiryMonth - 1)
    )
}
