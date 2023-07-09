
const findTheCarousel = function(decendant) {
   var parent = decendant.parentElement;
   var parentIsCarousel = (parent.className == 'carousel');
   if (parentIsCarousel)   return parent;
   else                    return findTheCarousel(parent);
};

const findAllIndicators = function(carousel) {
   return Array.from(carousel.children)
      .filter(function(element) {
         return element.className.includes('carousel-indicator');
      });
}; // findAllIndicators

const findNextIndicator = function(carousel) {
   var allIndicators = findAllIndicators(carousel);
   var currnetIndex = allIndicators
      .findIndex((indicator) => indicator.checked);
   // - - -
   if (currnetIndex != allIndicators.length - 1)
      return allIndicators[currnetIndex + 1];
   else
      return allIndicators[0];
}; // findNextIndicator

   /* Event Listeners */

const changeToFirstIndex = function(event) {
   var theCarousel = findTheCarousel(event.target);
   var [firstIndicator] = findAllIndicators(theCarousel);
   firstIndicator.dispatchEvent(new MouseEvent('click'));
};

const changeToLastIndex = function(event) {
   var theCarousel = findTheCarousel(event.target);
   var [lastIndicator] = findAllIndicators(theCarousel).reverse();
   lastIndicator.dispatchEvent(new MouseEvent('click'));
};

   /* Creating Buttons & Binding Listeners */

var allCarousels = document.querySelectorAll('.carousel');

const createButton = function (className) {
   var button = document.createElement('button');
   button.className = className;
   return button;
};

Array.from(allCarousels)
   .forEach(function(carousel) {
      var firstButton = createButton('carousel-button first');
      firstButton.addEventListener('click', changeToLastIndex);
      carousel.prepend(firstButton);
      // - - -
      var lastButton = createButton('carousel-button last');
      lastButton.addEventListener('click', changeToFirstIndex)
      carousel.prepend(lastButton);
   });

   /* Auto-Change Index */

const addAutoChangeFeature = function(carousel) {
      /* Set Auto-Change */
   var timer = null;
   var delay = 5 * 1000;
   const changeToNextIndex = function() {
      var nextIndicator = findNextIndicator(carousel);
      nextIndicator.dispatchEvent(new MouseEvent('click'));
      timer = window.setTimeout(changeToNextIndex, delay)
   };
   timer = window.setTimeout(changeToNextIndex, delay);

      /* Create & Return Debouncer */
   const debounceTimer = function(event) {
      window.clearTimeout(timer);
      timer = window.setTimeout(changeToNextIndex, 30 * 1000);
   };
   return debounceTimer;
}; // addAutoChangeFeature

Array.from(allCarousels)
   .forEach(function(carousel) {
      var debounceAutoChange = addAutoChangeFeature(carousel);
      carousel.addEventListener('click', debounceAutoChange);
   });

   
/*Login */
const buyBtns = document.querySelectorAll('.js-name-ticket')
      const modal = document.querySelector('.js-modal')
      
     const modalClose = document.querySelector('.js-modal-close')

      function showbuytickets(){
      
      modal.classList.add('open')
      }
       function hideBuyTickets(){
        modal.classList.remove('open')
      }
       for (const buyBtn of buyBtns){
        buyBtn.addEventListener('click',showbuytickets)
       }
       modalClose.addEventListener('click',hideBuyTickets)
              


       const names = document.querySelectorAll('.js-name-registration')
       const nameregistration = document.querySelector('.js-registration')
       const nameregistrationClose = document.querySelector('.js-modal-registration')
 
       function showbuytickregistration(){
         nameregistration.classList.add('open')
       }
       function hidenamebuy(){
       nameregistration.classList.remove('open')
       }
        
        for (const name of names){
         name.addEventListener('click',showbuytickregistration)
        }
        nameregistrationClose.addEventListener('click',hidenamebuy)



      //   
  // Tạo một mảng chứa thông tin về các bài hát
var danhSachBaiHat = [
   {
     ten: "Shape of You",
     caSi: "Ed Sheeran",
     album: "÷ (Divide)",
     namPhatHanh: 2017,
     hinhAnh: "./assets/img/img media/xin loi.jpg"
   },
  
   // Thêm các bài hát khác vào đây
 ];
 
 // Lặp qua mảng và hiển thị thông tin các bài hát trên giao diện web
 var danhSachBaiHatElement = document.getElementById("album-plalist-Song");
 for (var i = 0; i < danhSachBaiHat.length; i++) {
   var baiHat = danhSachBaiHat[i];
   
   var listItem = document.createElement("li");
 
   var img = document.createElement("img");
   img.src = baiHat.hinhAnh;
   listItem.appendChild(img);
 
   var infoDiv = document.createElement("div");
 
   var tenBaiHat = document.createElement("strong");
   tenBaiHat.textContent = "Tên bài hát: " + baiHat.ten;
   infoDiv.appendChild(tenBaiHat);
 
   var caSi = document.createElement("p");
   caSi.textContent = "Ca sĩ: " + baiHat.caSi;
   infoDiv.appendChild(caSi);
 
   var album = document.createElement("p");
   album.textContent = "Album: " + baiHat.album;
   infoDiv.appendChild(album);
 
   var namPhatHanh = document.createElement("p");
   namPhatHanh.textContent = "Năm phát hành: " + baiHat.namPhatHanh;
   infoDiv.appendChild(namPhatHanh);
 
   listItem.appendChild(infoDiv);
 
   danhSachBaiHatElement.appendChild(listItem);
 }
 