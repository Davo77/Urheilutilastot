import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, StatusBar } from 'react-native';

//
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {live_score: [], country_name: '', match_date: '', match_time: '', match_hometeam_name: '', match_hometeam_score: '', match_awayteam_name: '', match_awayteam_score: '', match_live: '1'};
  }

  getLive_score = () => {
    const url = 'https://apifootball.com/api/?action=get_H2H&firstTeam=Chelsea&secondTeam=Arsenal&APIkey=ed96295659e2e5cf66df1306f844b7bb4a4018ae2baa153ba892cb17a8579001' + this.state.country_name + '&match_date=' + this.state.match_date + '&match_time=' + this.state.match_time + '&match_hometeam_name=' + this.state.match_hometeam_name + '&match_hometeam_score=' +  this.state.match_hometeam_score
    + '&match_awayteam_name=' + this.state.match_awayteam_name + '&match_awayteam_score=' + this.state.match_awayteam_score + 'match_live=' + this.state.match_live;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => { 
     this.setState({Livescore: responseJson});

      
      })
      .catch((error) => { 
        Alert.alert(error); 
      });    
  }



  listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <FlatList 
          style={{marginLeft : "5%"}}
          keyExtractor={match => match.id} 
          renderItem={({match}) => <Text style={{fontSize: 18}}>{match.country_name}</Text>} data={this.state.live_score} 
          ItemSeparatorComponent={this.listSeparator} /> 
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Country name' onChangeText={(country_name) => this.setState({country_name})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Match date' onChangeText={(match_date) => this.setState({match_date})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Match time' onChangeText={(match_time) => this.setState({match_time})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Hometeam name' onChangeText={(match_hometeam_name) => this.setState({match_hometeam_name})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Hometeam score' onChangeText={(match_hometeam_score) => this.setState({match_hometeam_score})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Awayteam name' onChangeText={(match_awayteam_name) => this.setState({match_awayteam_name})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Awayteam score' onChangeText={(match_awayteam_score) => this.setState({match_awayteam_score})} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='Live score' onChangeText={(match_live) => this.setState({match_live})} />
        <Button title="Hae ottelu tulokset" onPress={this.getLive_score} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//DATA from API
  /*	{
	"firstTeam_VS_secondTeam": [{
		"match_id": "248036",
		"country_id": "169",
		"country_name": "England",
		"league_id": "70",
		"league_name": "Capital One Cup",
		"match_date": "2018-01-24",
		"match_status": "FT",
		"match_time": "21:00",
		"match_hometeam_name": "Arsenal",
		"match_hometeam_score": "2",
		"match_awayteam_name": "Chelsea",
		"match_awayteam_score": "1",
		"match_hometeam_halftime_score": "1",
		"match_awayteam_halftime_score": "1",
		"match_live": "1"
	}, */