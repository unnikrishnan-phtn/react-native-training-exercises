import React from "react";
import { StyleSheet, View } from "react-native";

export default class LayoutAssignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={[styles.emptyContainerItem, {backgroundColor: 'red'}]} />
                <View style={[styles.emptyContainerItem, {backgroundColor: 'green'}]} />

                <View style={styles.gridContainer}>

                    <View style={styles.gridChildColumn}>
                        <View style={styles.gridChildItem} />
                        <View style={styles.gridChildItem} />
                        <View style={styles.gridChildItem} />
                    </View>

                    <View style={styles.gridChildColumn}>
                        <View style={styles.gridChildItem} />
                        <View style={styles.gridChildItem} />
                        <View style={styles.gridChildItem} />
                    </View>

                    <View style={styles.gridChildColumn}>
                        <View style={styles.gridChildItem} />
                        <View style={styles.gridChildItem} />
                        <View style={styles.gridChildItem} />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    emptyContainerItem: {
        flexGrow: 1,
        flexDirection: "row"
    },
    gridContainer: {
        flexGrow: 2,
        flexDirection: "column",
        backgroundColor: 'white'
    },
    gridChildColumn: {
        flexGrow: 1,
        flexDirection: "row",
        backgroundColor: 'white'
    },
    gridChildItem: {
        flexGrow: 1,
        backgroundColor: 'blue',
        margin: 0.5
    },

});