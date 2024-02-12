


function rupiahFormat(price) {
 const result = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
}).format(+price)
return result
}

export default rupiahFormat
