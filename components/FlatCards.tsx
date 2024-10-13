import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Scrollable FlatCards</Text>
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardFour]}>
                        <Text>limeGreen</Text>
                    </View>
                    <View style={[styles.card, styles.cardFive]}>
                        <Text>Pink</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 4
    },
    cardOne: {
        backgroundColor: "#EF5354",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
    cardFour: {
        backgroundColor: '#32cd32'
    },
    cardFive: {
        backgroundColor: '#ffc0cb'
    }
})