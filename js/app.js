function begin() {
  var imagesContainer = document.getElementById('images-container');
  var selectPromo = document.getElementById('select-promo');  
  var subImagesContainer = null;

  // constantes de dir promo
  var CHILE4PRO = '4-chile';
  var LIMA5PRO = '5-lima';
  var LIMA6PRO = '6-lima';

  // arrays de las promociones: alumnas
  var chile4Promo = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
  var lima5Promo = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
  var lima6Promo = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

  selectPromo.addEventListener('change', selectionPromo);
  imagesContainer.addEventListener('click', showImage);

  showAll();

  function selectionPromo(event) {
    switch (true) {
      case event.target.value === '':
        showAll();
        break;
      case event.target.value === '4chile':
        addImages(chile4Promo, CHILE4PRO);
        break;
      case event.target.value === '5lima':
        addImages(lima5Promo, LIMA5PRO);
        break;
      case event.target.value === '6lima':
        addImages(lima6Promo, LIMA6PRO);
        break;
    }
  }

  // agrega imagenes de la promo
  function addImages(arrayPromo, sede) {
    if (subImagesContainer)
      imagesContainer.removeChild(subImagesContainer);

    subImagesContainer = document.createElement('div');
    imagesContainer.appendChild(subImagesContainer);

    for (var i = 0; i < arrayPromo.length; i++)
      createImage(arrayPromo[i], sede);
  }

  // agrega imagenes de las promos
  function addAllImages(arrayPromo, sede) {
    for (var i = 0; i < arrayPromo.length; i++)
      createImage(arrayPromo[i], sede);
  }

  // crea una imagen de la alumna
  function createImage(name, promo) {
    var image = document.createElement('img');

    image.setAttribute('src', 'assets/images/' + promo + '/' + name + '.jpg');
    image.setAttribute('alt', name);

    subImagesContainer.appendChild(image);
  }

  function showAll() {
    if (subImagesContainer)
      imagesContainer.removeChild(subImagesContainer);

    subImagesContainer = document.createElement('div');
    imagesContainer.appendChild(subImagesContainer);

    addAllImages(chile4Promo, CHILE4PRO);
    addAllImages(lima5Promo, LIMA5PRO);
    addAllImages(lima6Promo, LIMA6PRO);
  }

  function showImage(event) {
    modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.top = '0';
    modal.style.right = '0';
    modal.style.bottom = '0';
    modal.style.left = '0';
    /* modal.style.opacity = '0.9'; */

    imagesContainer.style.position = 'absolute';
    document.body.appendChild(modal);
    modal.addEventListener('click', closeModal);
    
    var img = event.target;

    img.style.margin = (window.innerWidth / 4) + 'px' + ' auto';
    img.style.display = 'block';

    modal.appendChild(img);
  }

  function closeModal() {
    this.parentElement.removeChild(this);
  }
};

window.onload = begin;