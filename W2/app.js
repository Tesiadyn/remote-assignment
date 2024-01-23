// let ctaButton = document.querySelector(".cta");
// let toggleCard = document.querySelectorAll(".intro-cards")[1];
// ctaButton.addEventListener("click", () => {
//   if (toggleCard.classList.contains("hidden")) {
//     toggleCard.classList.remove("hidden");
//   } else {
//     toggleCard.classList.add("hidden");
//   }
// });

/* ------------------------------- hidden card ------------------------------ */
let ctaButton = document.querySelector(".cta");
let toggleCard = document.querySelectorAll(".intro-cards")[1];
ctaButton.addEventListener("click", () => {
  toggleCard.classList.toggle("hidden");
});
// 用toggle比較簡單

/* ------------------------------- max number ------------------------------- */
function max(numbers) {
  let maxNum = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

console.log(max([5, 1, 77, 189]));

/* -------------------------------- calculate ------------------------------- */

function calculate(args) {
  switch (args.op) {
    case "+":
      return args.n1 + args.n2;
      break;
    case "-":
      return args.n1 - args.n2;
      break;
    case "*":
      return args.n1 * args.n2;
      break;
    case "/":
      return args.n1 / args.n2;
      break;
    default:
      return "Not supported";
      break;
  }
}
// 如在default沒有return任何值會造成回傳一個undefined
console.log(
  calculate({
    n1: 2,
    n2: 3,
    op: "+",
  })
);
console.log(
  calculate({
    n1: 1,
    n2: 6,
    op: "x",
  })
);
// 不能使用this.op因為會指向undefined

/* ------------------------------ calculateData ----------------------------- */
function calculatePrice(data) {
  let totalDiscounts = 0;
  let allDiscountedItem = [];

  for (let i = 0; i < data.products.length; i++) {
    let product = data.products[i];
    let productName = data.products[i].name;
    let price = data.products[i].price;
    let discount = data.discount;
    let discountedPrice;

    discountedPrice = price * (1 - discount);
    totalDiscounts += price * discount;

    let discountedItem = [
      {
        name: productName,
        priceAfterDiscounted: discountedPrice,
      },
    ];
    allDiscountedItem.push(discountedItem);
  }
  return allDiscountedItem;
  return totalDiscounts;
}
const discountedPrice = calculatePrice({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
  // 可用，但太複雜，需找更佳解
});

console.log(discountedPrice);

/* --------------------------------- twoSum --------------------------------- */
function twoSum(nums, target){

  let answer = [];

  for ( i = 0 ; i < nums.length ; i++){
    for ( j = i + 1 ; j < nums.length ; j++){
      if ( nums[i] + nums[j] == target){
        answer.push(nums[i],nums[j]);
      }
    }
  }
  return answer;
}
console.log(twoSum([2, 7, 90, 11],101));
// 可用，但效率不好，須找其他更佳的解法

