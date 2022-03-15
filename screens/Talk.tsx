import React, { useState } from 'react'
import { StyleSheet, FlatList, TextInput } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootStackScreenProps } from '../types'

export default function TalkScreen({ navigation }: RootStackScreenProps<'Talk'>) {
    return (
        <View>
            <Text style={ styles.my }>나의 메세지가 들리시나요?</Text>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    my: {
        backgroundColor: 'pink',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '5%',
        paddingRight: '5%'
    }
})
