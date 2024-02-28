const anotherAPI = async id => {
  my_modal_5.showModal();
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const description = data.data;
  // console.log(description);
  modalDisplay(description);
};

const modalDisplay = description => {
  const useModal = document.getElementById('useModal');
  useModal.innerHTML = '';
  const childDiv = document.createElement('div');
  childDiv.classList.add(
    'p-4',
    'md:p-5',
    'space-y-4',
    'flex',
    'flex-col',
    'items-center',
    'justify-center'
  );
  childDiv.innerHTML = `
            <img src="${description.image}" alt="" />
            <h2 class="text-2xl font-semibold">Mobile Name: <span>${description.name}</span></h2>
            <div class="text-base font-semibold">
              <p>Storage:<span class="font-normal">${description.mainFeatures.storage}</span></p>
              <p>Display Size:<span class="font-normal">${description.mainFeatures.displaySize} </span></p>
              <p>Chipset:<span class="font-normal">${description.mainFeatures.chipSet}</span></p>
              <p>Slug:<span class="font-normal">${description.slug}</span></p>
              <p>Release Date:<span class="font-normal">${description.releaseDate}</span></p>
              <p>Brand:<span class="font-normal">${description.brand}</span></p>
              <p>GPS:<span class="font-normal">${description.others.GPS}</span></p>
            </div>
  `;
  useModal.appendChild(childDiv);
};
