

document.addEventListener("DOMContentLoaded", function () {

    let sections = [
        {
          sectionClass: ".sec1",
          w: 50 + "px",
          h: 50 + "px",
          posTop: 50,
          posLeft: 50,
          posBottom: "unset",
          posRight: "unset",
          imgWrapperId: this.sectionClass + "-float-img-wrapper",
          imageUrl: "/images/circle.png",
        },
        // {
        //   sectionClass: ".sec1",
        //   w: 50 + "px",
        //   h: 50 + "px",
        //   posTop: 150,
        //   posLeft: 150,
        //   posBottom: "unset",
        //   posRight: "unset",
        //   imgWrapper: this.sectionClass + "-float-img-wrapper",
        //   imageUrl: "/images/man.png",
        // },
        // {
        //   sectionClass: ".sec2",
        //   w: 50 + "px",
        //   h: 50 + "px",
        //   posTop: 50,
        //   posLeft: 50,
        //   posBottom: "unset",
        //   posRight: "unset",
        //   imgWrapper: "." + this.sectionClass + "-float-img-wrapper",
        //   imageUrl: "/images/triangle.png",
        // },
      ];
      
      sections.forEach(function (section, index) {
        console.log(section);
        let html = `<div id="${section.imgWrapperId}">
        <div data-depth="0.85" style="background-image:url(${section.imageUrl});width:${section.w};height:${section.h};background-size:contain;background-repeat:no-repeat;">
        
             </div>
        </div>`;

        document.querySelector(section.sectionClass).innerHTML += html;

      });

      setTimeout(() => {
        if (document.body.contains(document.getElementById('undefined-float-img-wrapper'))) {
            var scene1 = document.getElementById('undefined-float-img-wrapper');
          let parallax = new Parallax(scene1);
        }
        //   console.log(document.querySelector(section.imgWrapper));
        }, 1000)

});


{/* <img src="${section.imageUrl}"
             alt="${section.imageUrl}"
             style="width:${section.w};height:${section.h}" /> */}