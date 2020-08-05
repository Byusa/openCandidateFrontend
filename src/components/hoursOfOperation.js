import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const Hours = (props) => {

    return (
        <View style={styles.container}>
           <View style={{ flexDirection: 'row', marginLeft: width/5+30, marginTop: 10}}>
                <View style={{ flex: 4}}>
                    <Text >{props.daysOfTheWeek}</Text>     
                 </View>  
                 <View style={{ flex: 6}}>  
                       <Text>{props.hours}</Text>
                       <View style={{ flexDirection: 'column'}}>
                            <Text>{props.hours2}</Text>
                       </View>
                  </View>  
           </View>   
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default Hours;