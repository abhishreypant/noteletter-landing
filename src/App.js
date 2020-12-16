import React from 'react';
import hero from './hero.png'
import ss1 from './ss1.jpg'
import ss2 from './ss2.jpg'
import ss3 from './ss3.jpg'
import reminder from './reminder.png'
import logo from './logo.png'
import beta from './beta.png'

function App() {
  return (
    <section>
      <section class='min-h-screen h-auto bg-brand-100'>
        <nav>
          <div class='w-10/12 md:w-8/12 mx-auto py-5 flex items-center justify-between '>
            <h1 class='text-brand-600 text-2xl md:text-3xl font-extrabold tracking-tight'>noteletter</h1>
            <ul class='
              md:flex 
              absolute
              items-center
              min-h-full
              top-20 left-0
              flex-col p-8
              text-center
              bg-brand-300
              min-w-full
              md:static
              md:text-left 
              md:min-w-0 
              md:bg-transparent 
              md:min-h-0 
              md:flex-row
              md:p-0
              hidden'
              >
              <li class='px-6 py-2.5 text-brand-600 rounded-full m-1.5 cursor-pointer hover:opacity-90'><a href='https://noteletter.vercel.app/'>Roadmap</a></li>
              <li class='px-6 py-2.5 text-brand-600 rounded-full m-1.5 cursor-pointer hover:opacity-90'><a href='https://noteletter.vercel.app/'>Product</a></li>
              <li class='px-6 py-2.5 text-brand-600 rounded-full m-1.5 cursor-pointer hover:opacity-90'><a href='https://noteletter.vercel.app/'>Log In</a></li>
              <li class='px-6 py-2.5 bg-brand-500 text-white rounded-full m-1.5 cursor-pointer hover:opacity-90'><a href='https://noteletter.vercel.app/'>Create A Free Account</a></li>
            </ul>

            <div class='p-2 md:hidden'>
              <i class="lni lni-menu text-2xl" onClick={(e)=>{console.log(e.target.className='lni lni-close text-2xl')}}></i>
            </div>
          </div>
        </nav>
        <section class='hero-heading w-10/12 flex-1 pt-8 md:w-8/12 md:pt-24 mx-auto flex-col flex md:flex-row md:justify-between md:items-center'>
          <div class='text order-2 md:order-1'>
            <h1 class='text-6xl text-center leading-none font-light text-brand-600 tracking-tighter md:text-7xl md:text-left md:leading-none md:font-medium font-playfair'>Build a tribe <br/>which loves your <br/> bookmarks.</h1>

            <p class='my-6 md:my-12 text-lg md:text-xl tracking-tight text-brand-600 font-medium text-center md:text-left'>
              <span class='md:block'>Pack Your Bookmarks Into A Powerful & Value Packed E-Mail</span>
              <span class='md:block'>Newsletter, Serve Them To Your Followers And Build A Tribe That</span> 
              <span class='md:block'>Loves Your Bookmarks Too.</span>
            </p>

            <a class='px-6 py-2.5  w-full  text-center bg-brand-500 text-white rounded-sm my-1 scale-50 cursor-pointer inline-block hover:opacity-90 md:w-auto md:mr-2 md:scale-150' href='https://noteletter.vercel.app/'>Create A Free Account <span role='img' aria-label='emoji' >😀</span></a>

            {/* <a class='px-6 py-2.5 bg-transparent text-brand-500  w-full  text-center border-brand-500 border-2 rounded-sm my-1 scale-50 cursor-pointer inline-block hover:opacity-90 md:w-auto md:mr-2' href='https://noteletter.vercel.app/'>Download Extension <span role='img' aria-label='emoji' >📁</span></a> */}
          </div>
          <div class='image flex justify-center flex-1 h-full order-1 items-start md:justify-end md:order-2'>
            <img src={hero} class='w-full md:w-11/12'/>
          </div>
        </section>

        <div class='w-10/12 mx-auto md:w-8/12 md:py-0 flex items-center justify-around text-center md:text-left py-12 md:my-24 md:justify-start'>
          <div class='mr-2 md:mr-10'>
            <h2 class='text-4xl md:text-6xl tracking-tighter font-playfair font-thin text-brand-600'>100x+</h2>
            <h4 class='text-md mt-2 md:mt-4 font-playfair tracking-tighter text-brand-600 text-base'>Signups Every Week</h4>
          </div>

          <div class='mr-2 md:mr-10'>
            <h2 class='text-4xl md:text-6xl tracking-tighter font-playfair font-thin text-brand-600'>65+</h2>
            <h4 class='text-md mt-2 md:mt-4 font-playfair tracking-tighter text-brand-600 text-base'>Premium Members</h4>
          </div>
        </div>
      </section>

      <section class='min-h-screen bg-gray-900 py-28'>
        <div class='w-10/12 md:w-8/12 mx-auto'>
          <h2 class='font-playfair text-xl md:text-3xl mb-4 text-white tracking-tighter md:tracking-tight text-center font-medium md:leading-tight'>How It Works?</h2>
          <h2 class='font-playfair text-4xl md:text-5xl text-brand-100 tracking-tighter md:tracking-tight text-center font-medium md:leading-tight'>Send your followers your favourite <span class='md:block'>bookmarks of the week</span></h2>

          <div class='w-11/12 my-6 text-center md:text-left mx-auto md:bg-gray-800 md:mt-16 md:p-16 text-white flex flex-col justify-start items-center md:flex-row md:justify-between md:py-16 md:px-24'>
            <div>
               <h4 class='text-lg md:text-2xl capitalize'>
                  <i class="lni lni-layers text-4xl my-4"></i><br/>
                  <span class='md:block'>collect your </span>
                  <span class='md:block'>valuable bookmarks </span>
                  <span class='md:block'>into the noteletter </span>
                  <span class='md:block'>dashboard. </span>
                </h4>
            </div>
            <img src={ss1} class='md:w-2/4 shadow-xl md:my-0 block origin-right w-full my-6'/>
          </div>

          <div class='w-11/12 my-6 text-center md:text-left mx-auto md:bg-gray-800 md:mt-16 md:p-16 text-white flex flex-col justify-start items-center md:flex-row md:justify-between md:py-16 md:px-24'>
            <div class='flex-1'>
                <h4 class='text-lg md:text-2xl capitalize'>
                  <i class="lni lni-checkmark-circle text-4xl my-4"></i><br/>
                  <span class='md:block'>Select Your   </span>
                  <span class='md:block'>respective week’s  </span>
                  <span class='md:block'>bookmarks you want </span>
                  <span class='md:block'>to send to your</span>
                  <span class='md:block'> subscirbers</span>
                </h4>
            </div>
            <img src={ss2} class='md:w-2/4 shadow-xl md:my-0 block origin-right w-full my-6 scale-300'/>
          </div>

          <div class='w-11/12 my-6 text-center md:text-left mx-auto md:bg-gray-800 md:mt-16 md:p-16 text-white flex flex-col justify-start items-center md:flex-row md:justify-between md:py-16 md:px-24'>
            <div class='flex-1'>
                <h4 class='text-lg md:text-2xl capitalize'>
                  <i class="lni lni-chevron-right-circle text-4xl my-4"></i><br/>
                  <span class='md:block'>Curate An </span>
                  <span class='md:block'>Awesome Email, </span>
                  <span class='md:block'>send it to your followers, </span>
                  <span class='md:block'>Watch Your Followers</span>
                  <span class='md:block'>Grow !</span>
                </h4>
            </div>
            <img src={ss3} class='md:w-2/4 shadow-xl md:my-0 block origin-right w-full my-6'/>
          </div>
        </div>
      </section>

      <section class='bg-brand-300 relative flex justify-center items-center'>
        <div class='bg-white py-8 px-10 md:px-12 rounded-sm  w-10/12 md:w-5/12 mx-auto absolute opacity-0 shadow-2xl'>
          <div class='flex justify-end'>
            <i class="lni lni-cross-circle w-12 flex items-center justify-center h-12 text-brand-600 rounded-full text-2xl md:text-3xl md:mb-0 mb-6"></i>
          </div>
          <h1 class='font-playfair text-4xl md:text-5xl text-brand-600 tracking-tighter md:tracking-tight text-center font-medium md:leading-tight'>You are 119 of 400 in <span class='md:block'>the line. 🎉</span></h1>
          <form class='flex flex-col md:flex-row justify-center items-center my-6 md:my-12'>
            <input type='text' disabled value='https://www.noteletter.io/referall?=48' class='w-full md:w-8/12 p-4 bg-gray-100'/>
            <input type='text' disabled value='Copy Code' class='w-full md:w-4/12 p-4 bg-brand-500 text-white text-center'/>
          </form>
        </div>

        <div class='py-14 md:py-32 w-10/12 md:w-6/12 mx-auto'>
          <h1 class='font-playfair text-4xl md:text-5xl text-brand-600 tracking-tighter md:tracking-tight text-center font-medium md:leading-tight'>Join the exclusive tribe of beta <span class='md:block'>testers of noteletter.</span></h1>
          <img src={beta} class='my-8 md:my-24 block mx-auto w-10/12 md:w-5/12'></img>
          <form class='flex flex-col md:flex-row items-center mx-auto justify-center'>
            <input class='w-full md:w-8/12 px-6 py-3 md:py-6 md:px-12 bg-white rounded-sm m-1.5 cursor-pointer hover:opacity-90' type='text' placeholder='example@gmail.com'></input>
            <input class='w-full md:w-4/12 px-6 py-3 md:py-6 md:px-12 bg-brand-500 text-white rounded-sm m-1.5 cursor-pointer hover:opacity-90' value='Join the Tribe' type='submit'></input>
          </form>
        </div>
      </section>

      <section class='bg-brand-100'>
        <div class='py-14 md:py-32 w-10/12 md:w-6/12 mx-auto flex flex-col md:flex-row items-center'>
          <div class='flex-2 md:w-3/4'>
            <h4 class='font-playfair text-4xl md:text-5xl text-brand-600 tracking-tighter md:tracking-tight text-center font-medium md:leading-tight md:text-left'>Don't want to start a <br/> newsletter? </h4>
            <h6 class='text-lg md:text-xl text-center font-regular text-brand-600 md:mt-6 tracking-normal md:text-left md:mb-0 mt-4 mb-4'>Don't worry. Use noteletter like <br/> thousands of others to save <br/> bookmarks for later</h6>
          </div>
          <div class='flex-1 md:w-1/4 flex justify-center md:justify-end'>
            <img src={reminder}/>
          </div>
        </div>
      </section>

      
      <section class='bg-brand-300 relative border-b-8 border-brand-500 flex justify-center'>
        <div class=' absolute bg-white p-8 rounded-full transform -translate-y-1/2 shadow-2xl scale-50 md:scale-100'>
          <img src={logo}/>
        </div>
        <div class='py-14 md:py-24 w-10/12 md:w-8/12 mx-auto'>
            <h4 class='font-playfair text-4xl md:text-5xl text-brand-600 tracking-tighter md:tracking-tight text-center font-medium md:leading-tight'>Get started with <br/> Noteletter for free now</h4>
            <form class='flex flex-col md:flex-row md:justify-center my-12'>
              <input type='text' placeholder='example@gmail.com' class='md:mx-1 text-center px-6 py-2.5 bg-white text-brand-600 cursor-pointer hover:opacity-90'></input>
              <input type='submit' value='Create A free Acount Now' class='md:mx-1 px-6 py-2.5 bg-brand-500 text-white cursor-pointer hover:opacity-90'></input>
            </form>
            <div class='w-9/12 mx-auto md:bg-brand-400 flex flex-col md:flex-row md:items-center md:justify-center md:py-6'>
              <a href='https://www.noteletter.vercel.app' class='font-semibold tracking-tight md:px-16  text-brand-600 text-lg block md:inline-block text-center'>Privacy Policy</a>
              <a href='https://www.noteletter.vercel.app' class='md:border-l  tracking-tight md:px-16 border-brand-600 font-semibold text-brand-600 text-lg block md:inline-block text-center'>Terms & Conditions</a>
              <a href='https://www.noteletter.vercel.app' class='md:border-l  tracking-tight md:px-16 border-brand-600 font-semibold text-brand-600 text-lg block md:inline-block text-center'>Roadmap</a>
            </div>
            <span class='text-brand-600 capitalize block text-center mt-14 tracking-tight font-semibold text-xl'>all Rights Reserved 2020 ©</span>
        </div>
      </section>
    </section>
  );
}
export default App;
