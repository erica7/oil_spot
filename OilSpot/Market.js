import React from 'react';
import { ActivityIndicator, View, Text, StatusBar, FlatList } from 'react-native';
const styles = require('./Style.js');
const config = require('./config.js');

export class Market extends React.Component {
  constructor(props) {
    super(props); // extends the context (`this`) of the parent constructor 

    this.state = {
      isLoadingBrent: true,
      isLoadingWti: true,
      apiWti: null,
      apiBrent: null,
    }
    
    // Catch parameters sent through stackNavigator
    const { params } = this.props.navigation.state;

    // Set up API variables 
    this.hostUrl = "https://www.quandl.com/api/v3/datasets/";
    this.database_code = "";
    this.dataset_code = "";
    this.return_format = ".json";
    this.apiKey = config.QUANDL_KEY;
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state; 
    const navTitle = params ? params.navTitle : 'MARKET';
    return {
      title: navTitle,
    }
  };

  componentDidMount = () => {
    this.getPriceOfBrent();
    this.getPriceOfWti();
  }

  getPriceOfWti = () => {
    return this.getPrice("PET_RWTC_D");  
  }

  getPriceOfBrent = () => {
    return this.getPrice("PET_RBRTE_D");
  }

  getPrice = (dataset_code) => {
    this.database_code = "EIA/";
    this.dataset_code = dataset_code ;
    let type = "";
    if (this.dataset_code == "PET_RBRTE_D") {
      type = "BRENT";
    } else if (this.dataset_code == "PET_RWTC_D") {
      type = "WTI"
    }
    let myurl = this.hostUrl + this.database_code + this.dataset_code + this.return_format + "?api_key="+ this.apiKey + "&limit=1";

    return this.apiCall(myurl, type);
  }

  apiCall = (url, type) => {
    return fetch(url)
    .then(this.responseError)
    .then(res => res.json())
    .then(resJson => {
      if (type == "BRENT") {
        this.setState({
          isLoadingBrent: false,
          apiBrent: resJson.dataset.data,
        });
      } else if (type == "WTI") {
        this.setState({
          isLoadingWti: false,
          apiWti: resJson.dataset.data,
        });
      }
    })
    .catch(e => this.requestError(e))
  }
  
  responseError = (res) => {
    if (!res.ok) {
      this.setState({
        isLoading: false,
        dataSource: res.statusText
      });
    }
    return res;
  }

  requestError = (e) => {
    this.setState({
      isLoading: false,
      dataSource: e,
    });
  }
  
  render = () => {
    if(this.state.isLoadingBrent || this.state.isLoadingWti){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={[styles.container, styles.color_background_primary]}>
        <View style={[styles.content]}>
          <Text style={[styles.font, styles.color_font_primary, styles.parameterName]}>BRENT</Text>
          <Text style={[styles.font, styles.color_font_primary]}>${this.state.apiBrent[0][1]} on {this.state.apiBrent[0][0]}</Text>
          <Text style={[styles.font, styles.color_font_primary, styles.parameterName]}>WTI</Text>
          <Text style={[styles.font, styles.color_font_primary]}>${this.state.apiWti[0][1]} on {this.state.apiWti[0][0]}</Text>
        </View>
      </View>
    );
  }
}

module.exports = Market;