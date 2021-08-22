import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

export class IceCreamContainer extends Component {
    render() {
        return (
            <div>
                <h1>Ice Cream Count :{this.props.numberOfIceCream}</h1>
                <button onClick={this.props.buyIceCream} > Sell  IceCreame </button> 
            </div>
        )
    }
}

const mapStateToProps = (state) =>  {
    return { numberOfIceCream:state.iceCream.numberOfIceCream}
}


const mapDispatchToProps = dispatch => {
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
