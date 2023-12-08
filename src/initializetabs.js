// utilities.js
export const initializeTabs = () => {
  const tabsBox = document.querySelector(".tabs-box");
  const allTabs = tabsBox.querySelectorAll(".tab");
  const arrowIcons = document.querySelectorAll(".icons i");

  let isDragging = false;

  const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display =
      maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
  };

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
      let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -340 : 340);
      handleIcons(scrollWidth);
    });
  });

  allTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabsBox.querySelector(".active").classList.remove("active");
      tab.classList.toggle("active");
    });
  });

  const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.toggle("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft);
  };

  const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
  };

  tabsBox.addEventListener("mousedown", () => (isDragging = true));
  tabsBox.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);

  let suggestions = [
      "Channel",
      "CodingLab",
      "CodingNepal",
      "YouTube",
      "YouTuber",
      "YouTube Channel",
      "Blogger",
      "Bollywood",
      "Vlogger",
      "Vechiles",
      "Facebook",
      "Freelancer",
      "Facebook Page",
      "Designer",
      "Developer",
      "Web Designer",
      "Web Developer",
      "Login Form in HTML & CSS",
      "How to learn HTML & CSS",
      "How to learn JavaScript",
      "How to became Freelancer",
      "How to became Web Designer",
      "How to start Gaming Channel",
      "How to start YouTube Channel",
      "What does HTML stands for?",
      "What does CSS stands for?",
  ];

  const searchWrapper = document.querySelector(".search-input");
  const inputBox = searchWrapper.querySelector("input");
  const suggBox = searchWrapper.querySelector(".autocom-box");
  const icon = searchWrapper.querySelector(".icon");
  let linkTag = searchWrapper.querySelector("a");
  let webLink;

  // if user press any key and release
  inputBox.onkeyup = (e)=>{
      let userData = e.target.value; //user enetered data
      let emptyArray = [];
      if(userData){
          icon.onclick = ()=>{
              webLink = `http://192.168.1.3:3000/?q=${userData}`;
              linkTag.setAttribute("href", webLink);
              linkTag.click();
          }
          emptyArray = suggestions.filter((data)=>{
              //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
              return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
          });
          emptyArray = emptyArray.map((data)=>{
              // passing return data inside li tag
              return data = `<li>${data} <span class="search-get-icon"><i class='bx bx-search'></i></span></li>`;
          });
          searchWrapper.classList.add("active"); //show autocomplete box
          showSuggestions(emptyArray);
          let allList = suggBox.querySelectorAll("li");
          for (let i = 0; i < allList.length; i++) {
              //adding onclick attribute in all li tag
              allList[i].setAttribute("onclick", "select(this)");
          }
      }else{
          searchWrapper.classList.remove("active"); //hide autocomplete box
      }
  }

  window.select = (element) => {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
      webLink = `http://192.168.1.3:3000/?q=${selectData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };
    searchWrapper.classList.remove("active");
  };

  function showSuggestions(list){
      let listData;
      if(!list.length){
          let userValue = inputBox.value;
          listData = `<li>${userValue}</li>`;
      }else{
        listData = list.join('');
      }
      suggBox.innerHTML = listData;
  }

  window.onclick = function (event) {
      searchWrapper.classList.remove("active");
  }

  

  // function toggleDropdown() {
  //     var dropdown = document.getElementById("myDropdown");
  //     dropdown.classList.toggle("show");
  // }

  // function selectOption(option, imagePath) {
  //     var dropdownButton = document.querySelector('.dropdown-btn');
  //     dropdownButton.innerHTML = `<img src="${imagePath}" class="selected_languageIcon" alt="${option}">${option}`;
  //     toggleDropdown(); // Close the dropdown after selecting an option
  // }

  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function (event) {
  //     if (!event.target.matches('.dropdown-btn')) {
  //         var dropdowns = document.getElementsByClassName("dropdown-content");
  //         for (var i = 0; i < dropdowns.length; i++) {
  //             var openDropdown = dropdowns[i];
  //             if (openDropdown.classList.contains('show')) {
  //                 openDropdown.classList.remove('show');
  //             }
  //         }
  //     }
  // }
};
