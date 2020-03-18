import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// below i will be import connect and the actions from actions.index file
import {connect} from 'react-redux';
import {addFeature, removeFeature, addTotal} from './actions/index';


// I am now going to import props instead of the () into my app funciton so it gets
// the props im going to connect to it. 
// I am also going to move the my initial state to my reducer I am going to create!

const App = props => {

  const removeFeature = item => {
    // dispatching actions below to remove a feature
    props.removeFeature(item)
    props.addTotal(-item.price)
  };

  const buyItem = item => {
    // dipsatching actions below to buy and item
    props.addFeature(item)
    props.addTotal(item.price)
  };
// in the return now that I have set up my store and passe the data that was held here in as props
// I so i will be chaning all the state calls to props as the app is now recieving it as props. 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures car={props.car} addFeature={props.addFeature} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem= {buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// now I am going to map state to props so that i have the correct props for the above functions
function mapStateToProps(state) {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

// now instaead of exporting app normally. I will be exporting it with connet map state to props
// and the actions I have brought in so that all the data is in a way synced together

export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  addTotal
})(App);
