var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementById("zoom");
      function setTransform() {
        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }
      zoom.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }
      zoom.onmouseup = function (e) {
        panning = false;
      }
      zoom.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }
      zoom.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;
        setTransform();
      }


  fetch(`GPS/Lokacje.json`)
    .then(response => response.json())
    .then(data => {

      const Blip = data.Blip
      const Tytuł = data.Tytuł
      const GPS = data.GPS
      const x = data.x
      const y = data.y
      const Png = data.Png
      const Opis = data.Opis
      const Produkt = data.Produkt
      const Cena = data.Cena
      const Craft_1 = data.Craft_1
      const Craft_2 = data.Craft_2
      const Craft_3 = data.Craft_3
      const Craft_4 = data.Craft_4

      createButton(Blip, Tytuł, GPS, x, y, Png, Opis, Produkt, Cena, Craft_1, Craft_2, Craft_3, Craft_4)
    })


  function createButton(Blip, Tytuł, GPS, x, y, Png, Opis, Produkt, Cena, Craft_1, Craft_2, Craft_3, Craft_4) {

    const htm =
      `<div class="punkt" style="position: relative; left: 1285px; bottom: 1252px">
      <img class="punkt" width="5" height="5" src="img/Kropka.png" alt="...">
      <div class="visible">
    <div>Sell Domki</div>
    <img width="150" height="75" src="${Png}">
    <div class="produkt">
      <img class="ramka" src="img/Kodeina.png" width="30" height="30">
      <div class="cena">  -300$</Div>
    </div>
      </div>`;

    const blip = document.getElementById("blip");

    blip.insertAdjacentHTML("beforeend", htm);

  }