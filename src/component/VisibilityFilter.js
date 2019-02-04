//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const VisibilityFilter = ({visibilityAll, visibilityActive, visibilityComleted}) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => visibilityAll('All')}>
                    <Text style={styles.text}>
                        All
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => visibilityActive('Active')}>
                    <Text style={styles.text}>
                        Active
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => visibilityComleted('Comleted')}>
                    <Text style={styles.text}>
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: '#eaeaea',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        // marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
        color: '#000'
    }
});

//make this component available to the app
export default VisibilityFilter;
