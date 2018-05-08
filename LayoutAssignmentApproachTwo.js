import React from "react";
import { StyleSheet, View } from "react-native";

export default class LayoutAssignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={[styles.emptyContainerItem, { backgroundColor: 'red' }]} />
                <View style={[styles.emptyContainerItem, { backgroundColor: 'green' }]} />

                <View style={styles.gridContainer}>
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                    <View style={styles.gridChildItem} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "column",
    },
    emptyContainerItem: {
        flex:1,
        flexGrow: 1,
        flexDirection: "row"
    },
    gridContainer: {
        flexGrow: 2,
        flex:2,
        flexDirection: "row",
        backgroundColor: 'white',
        flexWrap: "wrap",
        alignContent:"stretch"
    },
    gridChildItem: {
        flexGrow: 1,
        backgroundColor: 'blue',
        alignSelf:"stretch",    
        margin: 1,
        flexBasis: 100,
        minHeight:100,
        minWidth:100
    },

});
