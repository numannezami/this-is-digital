var tl=gsap.timeline();
tl.from("#page1 h1",{
      opacity: 0,
})
tl.from("#img1",{
      opacity:0,
      y:  100,
      duration:0.8,
})

tl.from("#img2",{
      opacity:0,
      x:  100,
      duration:0.8,
},"-=0.8")
tl.from("#img3",{
      opacity:0,
      y:  -100,
      duration:0.8,
},"-=0.8");
    



var arr=[
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/ryman-logo.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626958233&s=c3b18a33ca9b123ca06c2048a73d0220"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/brittany-logo.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626958235&s=f206a342824e1472533408006a36fc4a"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/footasylum-logo.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626958236&s=884b0134b8f0a5bf871d3f77baa50de5"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/harley-med.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626961103&s=c3842aeb963d3db29f993e4b0e6ae9fa"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0"},
      { paragraph:"they have beentranformational,suffice to say, i can't recommend them highlyenough",h5:"head of retail",h6:"lecister city football club",img:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0"}
]
var clutter="";
arr.forEach(function(val){
      clutter+=`<div class="scrolling">
              <img src="${val.img}"alt="">
              <p>${val.paragraph}</p>
              <h5>${val.h5}</h5>
              <h6>${val.h6}</h6>
         </div>`
})
document.querySelector("#page6  #scroll-div").innerHTML=clutter;