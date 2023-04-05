

function App() {

  function formSubmit(event) {
    event.preventDefault();
    let tags = document.forms["form"].getElementsByTagName("input");
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].value == '') {
        tags[i].style.border = "2px solid red";
      }else{
        tags[i].style.border = "";
      }
    }
    if(document.getElementById('desc').value==""){
      document.getElementById('desc').style.border = "2px solid red";
    }else{
      document.getElementById('desc').style.border = "";
      }
  }
  return (
    <div className="bg-black">
      {/* top section */}
      <div className='w-full p-6 flex justify-end'>
        <div className='flex'>
          <img src="imgs/bell.png" alt="" className='w-7 mr-12 h-8 my-auto' />
          <img src="imgs/user.jpg" alt="" className='w-12 rounded-full' />
          <img src="imgs/drop.svg" alt="" className='w-8' />
        </div>
      </div>

      {/* middle section */}
      <div className='w-full py-2 px-6 mb-2 mt-5'>
        <div>
          <span className='text-white text-3xl font-bold'>Profile</span>
          <div className='float-right flex'>
            <button className='flex justify-center align-middle bg-slate-500 rounded-3xl px-5 py-1 font-bold'>
              <img src="imgs/edit2.png" alt="" className='w-4 h-4 my-auto mr-1' /> Edit
            </button>
            <button className='flex justify-center align-middle bg-orange-400 rounded-3xl px-5 py-1 font-bold ml-3'>Save</button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className='relative'>
            <img src="imgs/user.jpg" alt="" className='rounded-full w-32 md:w-44' />
            <img src="imgs/edit.jpg" alt="" className='rounded-full w-8 h-8 absolute bottom-1 right-1 md:w-12 md:h-12' />
          </div>
        </div>
      </div>

      {/* form section */}
      <div className="mt-5 pb-20">
        <form className="w-full" id='form' onSubmit={(event) => formSubmit(event)}>

          <div className="flex flex-wrap mx-3 md:mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="first-name" type="text" />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="last-name" type="text" />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 md:mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="email" type="email" />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="num">
                Contact No
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="num" type="text" />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 md:mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="city">
                City
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="city" type="text" />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="star">
                star
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="star" type="text" />
            </div>
          </div>


          <div className="flex flex-wrap mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="add1">
                Address Line 1st
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="add1" type="text" />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="add2">
                Address Line 2nd
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="add2" type="text" />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 md:mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="role">
                Role
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="role" type="text" value={"Manager"} />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="pass">
                Password
              </label>
              <input className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-white" id="pass" type="password" />
            </div>
          </div>


          <div className="flex flex-wrap mx-3 md:mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="desc">
                Description
              </label>
              <textarea className="appearance-none block w-full bg-transparent border border-white text-white rounded py-3 px-4 h-40 mb-3 leading-tight focus:outline-white" id="desc" name="desc" rows="4" cols="50">
              </textarea>
            </div>
            <button type="submit" className="bg-orange-400 rounded-3xl px-5 py-1 font-bold mx-auto">Submit</button>
          </div>
        </form >
      </div >
    </div>
  );
}

export default App;
