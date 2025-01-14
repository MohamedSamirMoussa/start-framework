import { useState } from 'react'
import Nav from '../Nav/Nav'

const Contact = () => {
  const [show , setShow] = useState({
    userName:false ,
    userEmail:false ,
    userAge:false ,
    userPass:false ,
  })

  let onChange = (e) => {
      const {id , value} = e.target
      setShow((x)=>({...x , [id]:value !== ""}))
  }
  const form = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Nav />
      <section className='py-5' id='contact'>
        <div className="container py-5">
          <form className='py-5' onSubmit={form}>
            <div className="gruop">
            <div className='overflow-hidden'>
            <label htmlFor="userName" className={show.userName ? 'color show' : 'color hidden'}>User Name</label>
            </div>
            <input type="text" className='form-control my-3 shadow-sm border-0' placeholder='userName' id='userName' name='user_name' onChange={onChange} />
            </div>
            <div className="group">
            <div className='overflow-hidden'>
            <label htmlFor="userEmail" className={show.userEmail ? 'color show' : 'color hidden'}>User Email </label>
            </div>
            <input type="text" className='form-control my-3 shadow-sm border-0' placeholder='userEmail' id='userEmail' name='user_email' onChange={onChange}/>
            </div>
            <div className="group">
            <div className='overflow-hidden'>
            <label htmlFor="userAge" className={show.userAge ? 'color show' : 'color hidden'}>User Age </label>
            </div>
            <input type="text" className='form-control my-3 shadow-sm border-0' placeholder='userAge' id='userAge' name='user_Age' onChange={onChange}/>
            </div>
            <div className="group">
            <div className='overflow-hidden'>
            <label htmlFor="userPass" className={show.userPass ? 'color show' : 'color hidden'}>User Pass </label>
            </div>
            <input type="text" className='form-control my-3 shadow-sm border-0' placeholder='userPass' id='userPass' name='user_Pass' onChange={onChange}/>
            </div>
            <button className='btn bg text-white'>Send Massage</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
