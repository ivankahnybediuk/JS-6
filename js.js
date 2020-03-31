// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
let shoppingList= [
    {productName:"milk" , quantity:2 , bought:"yes"},
    {productName: "chokolate bar" , quantity: 3, bought:"no"},
    {productName: "cheese", quantity: 1, bought:"yes"},
    {productName: "biscuits", quantity: 2, bought:"yes"},
    {productName: "juice", quantity: 3, bought:"no"}
];

document.write("<br> Task 1 <br>");

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
let showingShopingList=function(){
let notPurchased=shoppingList.filter(shoppingList=>shoppingList.bought=="no");
let purchased=shoppingList.filter(shoppingList=>shoppingList.bought=="yes");
let assortedShopingList = notPurchased.concat(purchased);
assortedShopingList.forEach(function (product, index){
    document.write (index+1+". "+product.productName+" - "+product.quantity+" pcs, "+"bought: "+product.bought + "<br>")
})
};
showingShopingList();
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
let newProduct={productName: "cheese", quantity: 2, bought:"no"};
let addingNewProduct=function(){
    let sameProduct;
    for(let i=0; i<=shoppingList.length-1; i++){
        if(shoppingList[i]['productName']===newProduct['productName']){
            shoppingList[i]['quantity']+=newProduct.quantity;
            shoppingList[i]['bought']=newProduct['bought']
             sameProduct=true
        }
    }
    if (sameProduct!==true){
        shoppingList.push(newProduct)
    }
    showingShopingList()
};
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
let buyProduct=function(name){
    for(i=0; i<=shoppingList.length-1; i++){
        if (shoppingList[i]['productName']===name){
            shoppingList[i]['bought']="yes"
        }
    }
    showingShopingList();
};

document.write("<br> Task 2 <br>");

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
let invoice= [
    {productName:"milk" , quantity:2 , price:2},
    {productName: "chokolate bar" , quantity: 3, price:4},
    {productName: "cheese", quantity: 1, price:7},
    {productName: "biscuits", quantity: 2, price:4},
    {productName: "juice", quantity: 3, price:6}
];

// Распечатка чека на экран;
let showInvoice = function(){
    invoice.forEach(function (product, index){
    document.write (index+1+". "+product.productName+" ---- "+product.quantity+" pcs "+"----- "+"$"+product.price + " for a unit "+"-----"+"$"+product.price*product.quantity+"<br>")
}
    )
};
showInvoice();

// Подсчет общей суммы покупки;
let purchaseAmountCalculation = function(){
    let total=0;
    for(i=0; i<=invoice.length-1; i++){
      total+=invoice[i]['price']*invoice[i]['quantity']
    }
    document.write("<br> Total purchase amount: $"+total)
};
purchaseAmountCalculation();

// Получение самой дорогой покупки в чеке;
let mostExpensivePurchase=function(){
let max = invoice.reduce((prev, cur) => {
  if (prev.price > cur.price) {
    return prev
  }
  return cur
})
document.write("<br> The most expensive purchase is "+max.productName+" price is $"+max.price)
};
mostExpensivePurchase();

// Подсчет средней стоимости одного товара в чеке.
let averageCost=function(){
    let s=0;
    for(let i=0; i<=invoice.length-1; i++){
        s+=invoice[i]['price']
    }
    let average=s/invoice.length;
    document.write("<br> The average cost is  $"+average+"<br>")
}
averageCost();

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
document.write("<br> Task 3 <br>");

let styles = [
    {color:"red", "text-decoration":"underline"},
    {"font-size": "24px", "text-align": "center"}
];
let showingStyles=function(){
    let style=`
    <p style = "color: ${styles[0]['color']}; text-decoration: ${styles[0]['text-decoration']}; font-size: ${styles[1]['font-size']}; text-align: ${styles[1]['text-align']}">
    color: ${styles[0]['color']};<br>
    text-decoration: ${styles[0]['text-decoration']}; <br>
    font-size: ${styles[1]['font-size']}; <br>
    text-align: ${styles[1]['text-align']};
    </p>
    `;
    document.write(style)
    }
showingStyles();

// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
let lectureHalls =[
    {name:"first", places:5 , faculty:"economy" },
    {name:"second", places:20 , faculty:"financial" },
    {name:"third" , places: 25, faculty: "accounting"},
    {name:"forth", places:30 , faculty: "economy"},
    {name:"fifth", places: 10, faculty: "financial"}
];
// Вывод на экран всех аудиторий;
document.write("<br> Task 4 <br>");
let showLectureHalls = function(){
    lectureHalls.forEach(function (val, index){
    document.write (index+1+". "+val.name+ " lecture hall,"+" number of seats - "+val.places+", belongs to the "+val.faculty+" faculty <br>")
}
    )
};
showLectureHalls();
// Вывод на экран аудиторий для указанного факультета;
let showLectureHallOfFaculty=function(faculty_n){
    document.write("<br> To lecture halls of "+faculty_n+" faculty belongs: <br>");
    for(i=0; i<=lectureHalls.length-1; i++){
        if (lectureHalls[i]['faculty']===faculty_n){
           document.write( lectureHalls[i]['name']+ " lecture hall,"+" number of seats - "+lectureHalls[i]['places']+", belongs to the "+lectureHalls[i]['faculty']+" faculty <br>") 
        }
    }
};
showLectureHallOfFaculty('economy');

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
let studentsGroup = {
    name: 'group_1',
    numberOfStudents: 24,
    groupFaculty: "economy"
};
let showHallForGroup  = function(){
    document.write("<br>For group "+studentsGroup.name+" are suitable this Lecture Halls: <br>");
    let availability = 0;
    for(i=0; i<=lectureHalls.length-1; i++){
        if(studentsGroup.numberOfStudents<=lectureHalls[i]['places'] &&
        studentsGroup.groupFaculty===lectureHalls[i]['faculty']){
            document.write("<br>"+lectureHalls[i]['name']+ " lecture hall,"+" number of seats - "+lectureHalls[i]['places']+", belongs to the "+lectureHalls[i]['faculty']+" faculty <br>");
            availability=true
        }
    }
    if(availability!=true){
        document.write("<br> None of Lecture Halls is not suitable for this group of students <br>")
    }
};
showHallForGroup();

// Функция сортировки аудиторий по количеству мест;
let sortByPlaces=function () {
    lectureHalls.sort(function (a, b) {
        if (a.places > b.places) {
          return 1;
        }
        if (a.places < b.places) {
          return -1;
        }
        return 0;
      });
  };

//   Функция сортировки аудиторий по названию (по алфавиту).
  let sortByName=function () {
    lectureHalls.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
  }
  
