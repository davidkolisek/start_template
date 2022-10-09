export function createObject(obj) {
  // helpers
  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }
  function valuePxChecker(val) {
    if (isNumber(val) === true) {
      return val + "px";
    } else {
      return val;
    }
  }
  if (obj) {
    obj.forEach(function (section, index) {
      let secId = section.imgWrapperId + "Scene";
  
      let html = `
            <div id="${secId}" class="mouse-parallax-scene" style="z-index:${
        section.zIndex
      };top:${valuePxChecker(section.posTop)};right:${valuePxChecker(
        section.posRight
      )};left:${valuePxChecker(section.posLeft)};bottom:${valuePxChecker(
        section.bottom
      )};">
              <div class="layer" data-depth="${
                section.dataDepth
              }" style="width:${valuePxChecker(
        section.w
      )};height:${valuePxChecker(section.h)}">
                  <div data-title="no.1" style="background-image:url(${
                    section.imageUrl
                  });width:inherit;height:inherit;background-size:contain;background-repeat:no-repeat;"></div>
              </div>
            </div>
            `;
      document.querySelector(`.${section.elClass}`).innerHTML += html;
      let secIdSelector = document.getElementById(secId);
      if (document.body.contains(secIdSelector)) {
        new Parallax(secIdSelector);
      }
    });
  }
}
