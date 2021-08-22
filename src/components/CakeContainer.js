import React from 'react'
import { connect } from 'react-redux'
import { buyCake} from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>No of Cakes : {props.numberOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// State from store is mapped to component props
const mapStateToProps = state =>{
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}

// map an action creater to a prop of our components
const mapDispatchToProps = dispatch =>{
    return {
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)


// to access redux state of a componenent in your app : use mapStateToProps   => using props.variable
// to map action creater to props in App we           : use mapDispatchToProps => using props.action creator
// to connect a App component to redux store          : use connect to link component to s



// useSelector : mapStateToProps for function component
// const numOfCakes = useSelector(state=>state.numberOfComponents)


// useDispatch : mapDispatchToProps for function components
// const dispatch = useDispatch()


// () => dispatch(buyCake())



