import React, { useState } from 'react'
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootStackScreenProps } from '../types'

export default function FriendsScreen({ navigation }: RootStackScreenProps<'Friends'>) {
    return (
        <View>
            <View>
                <Text>친구</Text>
                <View style={ styles.box }>
                    <View style={ styles.userImg } />
                    <Text style={ styles.userId }>그저 웃지요</Text>
                </View>
                <View style={ styles.box }>
                    <View style={ styles.userImg } />
                    <Text style={ styles.userId }>오금순</Text>
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderBottomColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '5%'
    },
    userImg: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'pink',
        marginRight: '5%'
    },
    userId: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})
