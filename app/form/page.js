import React from 'react'
import { submitAction } from '@/actions/form'

const form = () => {

   
  return (
    <div>
      <form action={submitAction}>
  <label htmlFor="fname">First name:</label>
  <input type="text" id="fname" name="fname"/><br/>
  <label htmlFor="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname"/>
  <button>Submit</button>
</form>
    </div>
  )
}

export default form
