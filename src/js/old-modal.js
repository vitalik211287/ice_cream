(() => {
  const refs = {
    openModalHeaderBtn: document.querySelector('[data-modal-header-open]'),
    openModalMobMenuBtn: document.querySelector('[data-modal-mobmenu-open]'),
    closeModalHeaderBtn: document.querySelector('[data-modal-header-close]'),
    closeModalMobMenuBtn: document.querySelector('[data-modal-mobmenu-close]'),
    modalHeader: document.querySelector('[data-modal-header]'),
    mobMenuHeader: document.querySelector('[data-mobmenu-header]'),

    openModalFranchiseBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalFranchiseBtn: document.querySelector('[data-modal-franchise-close]'),
    modalFranchise: document.querySelector('[data-modal-franchise]'),

    openModalAboutBtn: document.querySelector('[data-modal-about-open]'),
    closeModalAboutBtn: document.querySelector('[data-modal-about-close]'),
    modalAbout: document.querySelector('[data-modal-about]'),
    modalAboutOpenBuyBtn: document.querySelector('[data-modal-about-buy-open]'),
    closeModalAboutBuyBtn: document.querySelector('[data-modal-about-buy-close]'),

    // openModalLocationBtn: document.querySelector('[data-modal-location-open]'),
    // closeModalLocationBtn: document.querySelector('[data-modal-location-close]'),
    // modalLocation: document.querySelector('[data-modal-location]'),
  };

  refs.openModalHeaderBtn.addEventListener('click', toggleModalHeader);
  refs.openModalMobMenuBtn.addEventListener('click', toggleModalHeader);
  refs.closeModalHeaderBtn.addEventListener('click', toggleModalHeader);
  refs.closeModalMobMenuBtn.addEventListener('click', toggleMenuHeader);

  refs.openModalFranchiseBtn.addEventListener('click', toggleModalFranchise);
  refs.closeModalFranchiseBtn.addEventListener('click', toggleModalFranchise);

  refs.openModalAboutBtn.addEventListener('click', toggleModalAbout);
  refs.closeModalAboutBtn.addEventListener('click', toggleModalAbout);
  refs.modalAboutOpenBuyBtn.addEventListener('click', toggleModalHeader);
  refs.closeModalAboutBuyBtn.addEventListener('click', toggleModalAbout);

  // refs.openModalLocationBtn.addEventListener('click', toggleModalLocation);
  // refs.closeModalLocationBtn.addEventListener('click', toggleModalLocation);

  function toggleModalHeader() {
    document.body.classList.toggle('modal-open');
    refs.modalHeader.classList.toggle('is-hidden');
  }

  function toggleMenuHeader() {
    refs.mobMenuHeader.classList.toggle('is-open');
  }

  function toggleModalFranchise() {
    document.body.classList.toggle('modal-open');
    refs.modalFranchise.classList.toggle('is-hidden');
  }

  function toggleModalAbout() {
    document.body.classList.toggle('modal-open');
    refs.modalAbout.classList.toggle('is-hidden');
  }

  //  function toggleModalLocation() {
  //    document.body.classList.toggle('modal-open');
  //    refs.modalLocation.classList.toggle('is-hidden');
  //  }
})();
