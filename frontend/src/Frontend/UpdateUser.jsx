import React from 'react'

const UpdateUser = () => {
  return (
    <>
    <div>UpdateUser</div>

    <form>
        <label for="email">Email</label>
        <input type="email" name="email" id ="email"></input><br/>
        <label for="name">Name</label>
        <input type="text" name="name" id ="name"></input><br/>
        <label for="address">Address</label>
        <input type="text" name="address" id ="address"></input><br/>

        <button>Update</button>

    </form>

    </>
  )
}

export default UpdateUser