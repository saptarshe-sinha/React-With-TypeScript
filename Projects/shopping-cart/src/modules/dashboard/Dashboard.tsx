import { useContext } from 'react'
import { DataContext } from '../../context/DataContextProvider'
import { FoodItems } from '../../appInterface'
import './Dashboard.css'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
  
  const {topRated, allCategories, dishesNearYou} = useContext(DataContext)

  const navigate = useNavigate();

  const foodDetails = (item: FoodItems) => {
    navigate("/food-details", {state: item})
  }

  return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <div className="container mb-5">
            <h4 className='my-4 fw-600 d-blue'>Top Rated</h4>
            <div className="row">
            
            {

              topRated.map((item: FoodItems, index: number) => {        
                return(
                  <div key={index} className="col-md-4 pointer" onClick={() => foodDetails(item)}>
                    <img 
                    src={item.url}
                    width="300px"
                    height="300px"
                    style={{borderRadius : 15}}
                    alt={item.name} 
                    />
                    <h5 className='fw-600 black'>{item.name}</h5>
                  </div>
                )
                })
            }
            </div>

            <h4 className='my-4 fw-600 d-blue'>All Categories</h4>
            <div className="row">
              {
                allCategories.map((item: FoodItems, index: number) => (
                  <div key={index} className="col-md-4 pointer" onClick={() => foodDetails(item)}>
                    <img 
                    src={item.url}
                    width="300px"
                    height="300px"
                    style={{borderRadius : 15}}
                    alt={item.name} 
                    />
                    <h5 className='fw-600 black'>{item.name}</h5>
                  </div>
                ))
              }
            </div>

            <h4 className='my-4 fw-600 d-blue'>Dishes Near You</h4>
            <div className="row">
              {
                dishesNearYou.map((item: FoodItems, index: number) => (
                  <div key={index} className="col-md-4 pointer" onClick={() => foodDetails(item)}>
                    <img 
                    src={item.url}
                    width="300px"
                    height="300px"
                    style={{borderRadius : 15}}
                    alt={item.name} 
                    />
                    <h5 className='fw-600 black'>{item.name}</h5>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Dashboard;
