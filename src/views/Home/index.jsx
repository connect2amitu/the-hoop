import React, { useState } from 'react'
import CategoryBar from '../../components/CategoryBar';

const Home = () => {

  const [value, setValue] = useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
export default Home;