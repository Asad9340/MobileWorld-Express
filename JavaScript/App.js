const showAllPhone = async phoneName => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneName}`
  );
  const data = await res.json();
  const phones = data.data;
  const showAllBtn = document.getElementById('showAllBtn');
  if (phones.length > 6) {
    const lessPhone = phones.slice(0, 6);
    showAllBtn.classList.remove('hidden');
    showAllBtn.addEventListener('click', () => {
      const display = document.getElementById('phone-container');
      display.innerHTML = '';
      displayPhone(phones);
      showAllBtn.classList.add('hidden');
    });
    displayPhone(lessPhone);
    // displayPhone(phones);
  } else {
    showAllBtn.classList.add('hidden');
    displayPhone(phones);
  }
};

const displayPhone = phones => {
  const display = document.getElementById('phone-container');
  spinner(false);
  phones.forEach(phone => {
    const div = document.createElement('div');
    div.classList.add(
      'border',
      'border-gray-400',
      'flex',
      'flex-col',
      'items-center',
      'mb-6',
      'ml-6',
      'p-4',
      'rounded-lg',
      'justify-center'
    );
    div.innerHTML = `
    <div class="bg-[#0D6EFD0D]"> <img src="${phone.image}" alt=""></div>
    <h2 class="my-3 text-2xl font-semibold">${phone.phone_name}</h2>
    <p>"Stay connected with the latest smartphones at unbeatable prices. Explore our wide selection of top-notch mobile devices today!"</p>
    <h2 class="text-2xl my-2 font-semibold">$999</h2>
    <button onclick="anotherAPI('${phone.slug}')"
    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Details</button>
    `;
    display.appendChild(div);
  });
};

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
  // console.log('btn clicked');
  const searchBox = document.getElementById('searchBox');
  const searchValue = searchBox.value;
  // console.log(searchValue);
  const display = document.getElementById('phone-container');
  display.innerHTML = '';
  spinner(true);
  showAllPhone(searchValue);
});

const spinner = value => {
  const spinnerBtn = document.getElementById('spinner');
  if (!!value) {
    spinnerBtn.classList.remove('hidden');
  } else {
    spinnerBtn.classList.add('hidden');
  }
};

showAllPhone('iphone');
showAllPhone('samsung');
showAllPhone('oppo');