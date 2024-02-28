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
    <h2>${phone.phone_name}</h2>
    <button class="bg-blue-600 px-5 py-2 text-white rounded-lg my-4">Show Details</button>
    `;
    display.appendChild(div);
  });
};

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
  // console.log('btn clicked');
  const searchBox = document.getElementById('searchBox');
  const searchValue = searchBox.value;
  console.log(searchValue);
  const display = document.getElementById('phone-container');
  display.innerHTML = '';
  showAllPhone(searchValue);
});

// showAllPhone('iphone');

const anotherAPI = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089'
  );
  const data =await res.json();
  console.log(data);
};
anotherAPI();