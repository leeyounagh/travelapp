import React from 'react';

const LandingBottom = () => {
    // class CardFlipOnScroll {
    //     constructor(wrapper, sticky) {
    //       this.wrapper = wrapper
    //       this.sticky = sticky
    //       this.cards = sticky.querySelector('.card')
    //       this.length = this.cards.length
  
    //       this.start = 0
    //       this.end = 0
    //       this.step = 0
    //     }
  
    //     init() {
    //       this.start = this.wrapper.offsetTop - 100
    //       this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - window.innerHeight * 1.2
    //       this.step = (this.end - this.start) / (this.length * 2)
    //     }
  
    //     animate() {
    //       this.cards.forEach((card, i) => {
    //         const s = this.start + this.step * i
    //         const e = s + this.step * (this.length + 1)
  
    //         if (window.scrollY <= s) {
    //           card.style.transform = `
    //             perspective(100vw)
    //             translateX(100vw) 
    //             rotateY(180deg)
    //           `
    //         } else if (window.scrollY > s && window.scrollY <= e - this.step) {
    //           card.style.transform = `
    //             perspective(100vw)
    //             translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
    //             rotateY(180deg)
    //           `
    //         } else if (window.scrollY > e - this.step && window.scrollY <= e) {
    //           card.style.transform = `
    //             perspective(100vw)
    //             translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
    //             rotateY(${180 + -(window.scrollY - (e - this.step)) / this.step * 180}deg)
    //           `
    //         } else if (window.scrollY > e) {
    //           card.style.transform = `
    //             perspective(100vw)
    //             translateX(0vw) 
    //             rotateY(0deg)
    //           `
    //         }
    //       })
    //     }
    //   }


    // const mainContent1 = document.querySelector('.main-content-1')
    // const sticky = document.querySelector('.sticky')
    // const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
    // cardFlipOnScroll.init()

    // window.addEventListener('scroll', () => {
    //   cardFlipOnScroll.animate()
    // })

    // window.addEventListener('resize', () => {
    //   cardFlipOnScroll.init()
    // })
    return (
        <div className='main-content-1'>
            {/* <div class='sticky'>
                <div className='card-frame'>
                <div class='card'>
                    <div className='front'                  >
                      chicken
                    </div>
                    <div className='back'>
                     피자
                    </div>
                </div>
                <div className='card'>
                    <div className='front'                  >
                      떡볶이
                    </div>
                    <div className='back'>
                     피자
                    </div>
                </div>
                <div className='card'>
                    <div className='front'                  >
                      튀김
                    </div>
                    <div className='back'>
                     피자
                    </div>
                </div>
                <div className='card'>
                    <div className='front'                  >
                      홍콩와플
                    </div>
                    <div className='back'>
                     피자
                    </div>
                </div>
                </div>
     
            </div> */}
           
        </div>
    );
};

export default LandingBottom;